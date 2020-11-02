import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";

import OrganizeWoman from './OrganizeWoman'

const HomePage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div style={{display: "flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
      <h1>SCRM - Simple crm</h1>
      <p style={{fontSize:"1.1rem", fontWeight:"500"}}>Super easy-to-use CRM</p>
      <Button
        style={{
            width:"270px",
          fontWeight: "bold",
          fontSize:"0.9rem"
        }}
        onClick={() => loginWithRedirect()}
      >
        !Login/sign up here, its free
      </Button>
      <OrganizeWoman />
    </div>
  );
};

export default HomePage;
