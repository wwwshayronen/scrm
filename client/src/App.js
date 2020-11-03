import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingOutlined } from "@ant-design/icons";

import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";

export default function App() {
  const { isLoading, isAuthenticated } = useAuth0();
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {" "}
          {isLoading ? (
            <LoadingOutlined
              style={{
                fontSize: "5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20%",
                textAlign: "center",
              }}
            />
          ) : isAuthenticated ? (
            <Redirect to="/#profile" />
          ) : (
            <HomePage />
          )}
        </Route>

        <Route exact path="/" component={HomePage} />
        <Route path="/#profile" component={Profile} />
      </Switch>
    </Router>
  );
}
