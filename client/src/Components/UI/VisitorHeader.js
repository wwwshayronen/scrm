import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FolderOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
const { Header, Content } = Layout;

export default function VisitorHeader() {
  const { loginWithRedirect } = useAuth0();
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        color: "white",
        fontWeight: "bold",
        fontSize: "1.2rem",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "30%",
        backgroundColor: "#4169e1",
      }}
    >
      <div style={{ fontSize: "1.2rem", marginLeft: "30px" }}>
        <span style={{ color: "white" }}>SCRM </span>
        <FolderOutlined style={{ color: "white" }} />
      </div>
      <div style={{ marginLeft: "auto", marginRight: "30px" }}>
        <Button
          style={{
            //   width: "20%",
            fontWeight: "bold",
            fontSize: "0.9rem",
            color: "rgb(63, 61, 86)",
            border: "1px solid rgb(108, 99, 255)",
            boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
            borderRadius: "20px",
          }}
          onClick={() => loginWithRedirect()}
        >
          Login
        </Button>
      </div>
    </Header>
  );
}
