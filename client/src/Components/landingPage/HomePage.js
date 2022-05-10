import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Card } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import ProductFeatures from "./ProductFeatures";
import OrganizeWoman from "../OrganizeWoman";

const HomePage = () => {
  const { loginWithRedirect } = useAuth0();
  let history = useHistory();

  const initAccountCustomazation = () => {
    history.push("/regestrsation");
  };

  return (
    <FlexContainer>
      <Card cover={<OrganizeWoman />}>
        <ProductIntro>
          {" "}
          <ProductDesription dir="ltr">
            <p>
              SCRM, the first buissness builder platform. Conversion landing
              page? marketing? leads mangment? We got you.
            </p>
            <Button
              style={{
                backgroundColor: "#4169e1",
                color: "white",
                fontWeight: "bold",
                letterSpacing: "1.2px",
                borderRadius: "20px",
                marginTop: "10px",
                width: "30%",
                height: "37px",
              }}
              onClick={() => initAccountCustomazation()}
            >
              Lets grow now!
            </Button>
          </ProductDesription>
        </ProductIntro>
      </Card>
      <Card style={{ border: " none" }} cover={<ProductFeatures />}></Card>
    </FlexContainer>
  );
};

export default HomePage;

const ProductIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ProductDesription = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  text-align: "left";
  color: rgb(63, 61, 86);
  width: 50%;
  @media (max-width: 768px) {
    padding-right: 10px;
    padding-left: 24px;
    margin-left: 0;
    font-size: 19px;
    width: 100%;
    height: 70px;
  }
`;

export const FlexContainer = styled.div`
  display: "flex";
  justify-content: "center";
  align-items: "center";
  flex-direction: "column";
  width: "100%";
`;
