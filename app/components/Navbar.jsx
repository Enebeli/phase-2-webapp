import React from "react";
import { usePathname } from "next/navigation";
import Button from "./Button";
import "./navbar.css";

function Navbar() {
  const pathname = usePathname();

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

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        PEN & PIXEL
      </a>

      <div className="links">
        <a href="/dashboard" className="link">
          Dashboard
        </a>

        {/* Show Archives on both Dashboard and Archives pages */}
        {(pathname === "/dashboard" || pathname === "/archives") && (
          <a href="/archives" className="link">
            Archives
          </a>
        )}

        {/* Show About link only on Dashboard and Archives */}
        {(pathname === "/dashboard" || pathname === "/archives") && (
          <a href="/about" className="link">
            About
          </a>
        )}

        {/* Show Logout button only on Dashboard and Archives */}
        {(pathname === "/dashboard" || pathname === "/archives") && (
          <Button onClick={handleLogout} variant="secondary">
            Logout
          </Button>
        )}

        {/* Show Login and Signup only when NOT on Dashboard or Archives */}
        {pathname !== "/dashboard" && pathname !== "/archives" && (
          <>
            <a href="/login" className="link">Login</a>
            <Button variant="secondary" onClick={() => (window.location.href = "/register")}>
              Sign Up
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
