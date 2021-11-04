import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import styled from "styled-components";

import ProductFeatures from "./ProductFeatures";
import OrganizeWoman from "../OrganizeWoman";

const HomePage = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%"
      }}
    >
      <ProductIntro>
        {" "}
        <ProductDesription dir="ltr">
          SCRM is the easiest solution to track and analyze your sales. Add
          sales on seconds, set feature goals and more.
          <Button
            style={{
              backgroundColor: "#4169e1",
              color: "white",
              fontWeight: "bold",
              letterSpacing: "1.2px",
              borderRadius: "10px",
              marginTop: "10px",
              width: '80%',
              height: '37px'
            }}
            onClick={() => loginWithRedirect()}
          >
            SignUp - it's free!
          </Button>
        </ProductDesription>
        <OrganizeWoman />
      </ProductIntro>
      <ProductFeatures />
    </div>
  );
};

export default HomePage;

const ProductIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ProductDesription = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: "left";
  width: 50%;
  margin-top: 10%;
  color: rgb(63, 61, 86);
  margin-left: 20px;
  @media (max-width: 768px) {
    padding-right: 10px;
    padding-left: 24px;
    margin-left: 0;
    font-size: 19px;
    width: 100%;
    height: 70px;
  }
`;

const Contact = styled.div``;
