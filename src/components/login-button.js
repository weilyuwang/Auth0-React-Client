import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  // Executing loginWithRedirect() redirects your users to the Auth0 Universal Login Page,
  // where Auth0 can authenticate them. Upon successful authentication,
  // Auth0 will redirect your users back to your application.
  return (
    <Button
      onClick={() => loginWithRedirect()}
      id="qsLoginBtn"
      variant="primary"
      className="btn-margin"
    >
      Log In
    </Button>
  );
};

export default LoginButton;
