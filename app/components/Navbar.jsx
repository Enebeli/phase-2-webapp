import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";
import "./navbar.css";
import PropTypes from "prop-types";

function NavLink({ href, label, isActive, onClick }) {
  return (
    <a
      href={href}
      className={`link ${isActive ? "active" : ""}`}
      onClick={() => onClick(href)}
    >
      {label}
    </a>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        window.location.href = "/login";
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleClick = (href) => {
    setActiveLink(href);
  };

  const mainLinks = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/archives", label: "Archives" },
    { href: "/about", label: "About" },
  ];

  const authLinks = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Sign Up" },
  ];

  const showMainLinks = ["/dashboard", "/archives", "/about"].includes(pathname);

  return (
    <nav className="navbar">
      <a href="/" className="logo" onClick={() => handleClick("/")}>
        PEN & PIXEL
      </a>

      <div className="links">
        <NavLink
          href="/dashboard"
          label="Dashboard"
          isActive={activeLink === "/dashboard"}
          onClick={handleClick}
        />

        {showMainLinks &&
          mainLinks.slice(1).map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={activeLink === link.href}
              onClick={handleClick}
            />
          ))}

        {showMainLinks && <Button onClick={handleLogout} variant="secondary">Logout</Button>}

        {!showMainLinks &&
          authLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              isActive={activeLink === link.href}
              onClick={link.href === "/register" ? () => {handleClick(link.href); window.location.href = link.href;} : handleClick}
            />
          ))}
      </div>
    </nav>
  );
}
export default Navbar;