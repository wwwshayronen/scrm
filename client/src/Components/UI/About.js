import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <AboutContianer>
      <h2 style={{ color: "#caf0f8" }}>About</h2>
      <p style={{ fontSize: "1.1rem", width: "90%" }}>
        SCRM is built with passion to help salespersons to grow their business
        by tracking and analyzing their recent sales. There always a way to get
        better, so you always welcome to contact us and give suggestions to new
        features that give you more value.
      </p>
    </AboutContianer>
  );
}

const AboutContianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  border: white 1px solid;
  border-radius: 0 20px 0 20px;
  padding: 1.5rem;
  width: 50%;
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
  }
`;
