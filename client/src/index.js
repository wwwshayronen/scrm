import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'antd/dist/antd.css'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-4yd2ovr5.auth0.com"
    clientId="gFppPPBkmXOlpoUk1jIXN51GnX7cM2DR"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);