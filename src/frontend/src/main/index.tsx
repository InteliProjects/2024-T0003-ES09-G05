import "../presentation/styles/global.scss";
import { createRoot } from "react-dom/client";

import Router from "./routes/router";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById("main");

if (container) {
  const root = createRoot(container);
  console.log(import.meta.env.VITE_DOMAIN)
  root.render(
    <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN}
      clientId={import.meta.env.VITE_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Router />
    </Auth0Provider>
  );
}
