import React from "react";
import "./formcontainer.css";

export default function FormContainer({ title, children }) {
  return (
    <div className="form-container">
      <h1>{title}</h1>
      {children}
    </div>
  );
}
