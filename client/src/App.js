import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { LoadingOutlined } from "@ant-design/icons";
import LayoutComponent from "./Components/UI/Layout";
import ProfileLayout from "./Components/UI/ProfileLayout";
import AddCustomer from "./Components/AddCustomer";
import TableOfCustomers from "./Components/TableOfCustomers";

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
            <Redirect to="/profile" />
          ) : (
            <LayoutComponent />
          )}
        </Route>

        <Route exact path="/" component={LayoutComponent} />
        <Route path="/profile" component={ProfileLayout} />
        <Route path="/profile/add" component={AddCustomer} />
        <Route path="/profile/my-customers" component={TableOfCustomers} />

      </Switch>
    </Router>
  );
}
