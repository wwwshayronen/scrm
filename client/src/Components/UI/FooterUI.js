import React from "react";
import { Layout } from "antd";
import { ContactUs } from "./ContactUs";
import About from "./About";
import styled from "styled-components";

const { Footer } = Layout;

export default function FooterUI() {
  return (
    <FooterContainer dir="ltr">
      {" "}
      <About />
      <ContactUs />
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#2B58DE",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Footer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2B58DE;
  padding: 1rem;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
