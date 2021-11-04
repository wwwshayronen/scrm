import React from "react";
import styled from "styled-components";

import spaceShipSvg from "../../assets/undraw_To_the_stars_qhyy.svg";
import analyzeSvg from "../../assets/analytics.svg";
import goalsSvg from "../../assets/goals.svg";
import Card from "../UI/Card";

export default function ProductFeatures() {
  return (
    <ProductFeaturesList dir="ltr">
      <Title>Why you should go for SCRM? 🤔</Title>
      <Card
        svg={spaceShipSvg}
        svgAlt={`space-ship`}
        cardContent={`Add sales fast!`}
      />
      <Card
        svg={analyzeSvg}
        svgAlt={`man-analyze`}
        cardContent={`Analyze sales`}
      />
      <Card
        svg={goalsSvg}
        svgAlt={`goals`}
        cardContent={`Set future sales goals`}
      />
    </ProductFeaturesList>
  );
}

const ProductFeaturesList = styled.ul`
  text-align: left;
  width: 50%;
  list-style: none;
  margin-top: 80px;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    padding: 0;
    margin-top: 40px;
    width: 100%;
  }
`;

const Title = styled.h1`
  color: #4169e1;
  text-align: center;
  font-weight: 650;
  margin-bottom: 25px;
`;
