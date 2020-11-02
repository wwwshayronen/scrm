import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AddCustomer from "./AddCustomer";
import { Redirect } from "react-router-dom";
import TableOfCustomers from "./TableOfCustomers";
import { Button } from "antd";

const Profile = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const [displayTable, setDisplayTable] = useState(false);
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  function handelDisplayForm() {
    if (!displayForm) {
      setDisplayTable(false);
      setDisplayForm(true);
    } else {
      setDisplayForm(false);
    }
  }

  function handelDisplayTable() {
    if (!displayTable) {
      setDisplayForm(false);
      setDisplayTable(true);
    } else {
      setDisplayTable(false);
    }
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <Button
          style={{ color: "red" }}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </Button>

        {displayForm ? (
          <AddCustomer />
        ) : (
          <Button
            onClick={handelDisplayForm}
            style={{position:"absolute", top:"25px", left:"0", right: "170px", width: "120px"  }}
          >
            הוסף לקוח
          </Button>
        )}

        {displayTable ? (
          <TableOfCustomers />
        ) : (
          <Button
            onClick={handelDisplayTable}
            style={{position:"absolute", top:"55px", left:"0", right: "170px",width: "120px"  }}
          >
            הלקוחות שלי
          </Button>
        )}
      </div>
    )
  );
};

export default Profile;
