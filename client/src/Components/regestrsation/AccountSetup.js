import { Layout, Carousel } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import { FlexContainer } from "../landingPage/HomePage";
import VisitorHeader from "../UI/VisitorHeader";

export default function AccountSetup() {
  function onChange(a, b, c) {
    return false;
  }

  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    minHeight: "250px",
    heigth: "70%",
    width: "50%",
    margin: "0 auto",
    marginTop: "1rem"
  };

  return (
    <FlexContainer style={{width: "auto"}}>
      <Layout>
      <VisitorHeader></VisitorHeader>
      <Layout.Content>
      <Carousel afterChange={onChange}  >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
       
      </Carousel></Layout.Content>
      </Layout>
    </FlexContainer>
  );
}
