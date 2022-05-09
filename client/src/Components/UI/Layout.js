import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout, Button } from "antd";
import { FolderOutlined } from "@ant-design/icons";
import HomePage from "../landingPage/HomePage";
import GithubStarButton from "../UI/GithubStarButton";
import FooterUI from "./FooterUI";
import VisitorHeader from "./VisitorHeader";

const { Header, Content } = Layout;

const LayoutComponent = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <VisitorHeader
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
              borderRadius: "20px"
            }}
            onClick={() => loginWithRedirect()}
          >
            Login
          </Button>
        </div>
      </VisitorHeader>
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <HomePage />
        </div>
      </Content>
      <FooterUI />
    </Layout>
  );
};

export default LayoutComponent;
