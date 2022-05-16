import React from "react";
import styled from "styled-components";
import { CheckOutlined } from "@ant-design/icons";

export default function Card({ svg, svgAlt, cardContent }) {
  if (!svg || !svgAlt || !cardContent) {
    return null;
  }

  return (
    <ItemBox>
      <Image alt={svgAlt} src={svg} />
      <ListItem>
        <CheckOutlined style={{ marginRight: "5px" }} />
        {cardContent}
      </ListItem>
    </ItemBox>
  );
}

const ListItem = styled.li`
  margin: 0 auto;
  font-size: 1.2rem;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border: 0.1px solid rgb(108, 99, 255);
  border-radius: 10px;
  background-color: white;
  color: rgb(63, 61, 86);
  font-weight: 700;
  font-size: 2.4rem;
  width: 400px;
  padding: 1rem;
  margin: 0 auto 1rem;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    img {
      width: 260px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
  }
`;
