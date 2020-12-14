# Easy User Authentication for React Apps

Reference: https://auth0.com/blog/complete-guide-to-react-user-authentication/

Worked as the front end client of https://github.com/weilyuwang/Auth0-SpringBoot-API

## Get Started

Install project dependencies:

```bash
yarn
```

Run the project:

```bash
yarn start
```

#### Front End React

- Create a SPA application (React) under `Applications` from Auth0

- Create .env file in the root directory (for React frontend)

```
REACT_APP_AUTHO_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
```

#### Node Backend

- Create an API under `APIs` from Auth0

- Create .env file under /server folder (for Node backend)

```
API_PORT=
AUTH0_AUDIENCE='https://spring.api'
AUTH0_ISSUER=
```

Also add the following to `.env` file in the root directory

```
REACT_APP_AUTH0_AUDIENCE='https://spring.api'
```

And update the React auth0 config file accordingly:

```
  ...

  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  ...

  return (
    <Auth0Provider
      ...
      audience={audience}
    >
      {children}
    </Auth0Provider>
  );
```
