import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} from "./keys"
require("dotenv").config();

ReactDOM.render(
  <Auth0Provider
    domain={REACT_APP_DOMAIN}
    clientId={REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
