import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import FormContainer from "../components/FormContainer";

export default function LoginPage() {
  return (
    <FormContainer title="Welcome Back!">
      <form action="/api/auth/login" method="POST" className="login-form">
        <InputField type="email" name="email" placeholder="Email address" required />
        <InputField type="password" name="password" placeholder="Password" required />
        <Button type="submit" variant="primary">Log in</Button>
      </form>
      <p className="signup-link">Don't have an account? <a href="/register">Sign Up</a></p>
    </FormContainer>
  );
}
