import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.REACT_APP_AUTHO_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  // For backend API
  const audience = process.env.REACT_APP_AUTH0_SPRING_AUDIENCE;

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  // Need to add scope read:messages if the backend API is using read:messages permissions
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
      scope="openid profile read:messages"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
