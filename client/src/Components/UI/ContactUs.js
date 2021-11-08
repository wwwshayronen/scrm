import React, { useRef } from "react";
import { message, Input } from "antd";
import styled from "styled-components";
import emailjs from "emailjs-com";
require("dotenv").config();

export const ContactUs = () => {
  const form = useRef();

  const successMessage = () => {
    message.success(" Email sent, thanks");
  };

  const errorMessage = () => {
    message.error(`Error: email didn't sent, please try again.`);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        process.env.form.current,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          successMessage();
        },
        (error) => {
          errorMessage();
        }
      );
  };

  return (
    <Container>
      <h1 style={{ color: "#caf0f8", textDecoration: "underline" }}>
        Contact us
      </h1>
      <Form dir="ltr" ref={form} onSubmit={sendEmail}>
        <Label>Name:</Label>
        <Input
          type="text"
          name="firstname"
          style={{
            fontSize: "1.2rem",
            width: "75%",
            marginBottom: "0.7rem",
          }}
        />
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          style={{
            fontSize: "1.2rem",
            width: "75%",
            marginBottom: "0.7rem",
          }}
        />
        <Label>Message:</Label>
        <Message
          name="message"
          style={{
            fontSize: "1.2rem",
            width: "75%",
            height: "200px",
            marginBottom: "15px",
          }}
        />
        <Input
          type="submit"
          value="Send"
          style={{
            fontSize: "1.4rem",
            width: "75%",
            cursor: "pointer",
            color: "royalblue",
            fontWeight: "bold",
          }}
        />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid white;
  text-align: left;
  padding: 1rem;
  margin-left: 50px;
  border-radius: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    border: none;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  padding: 2rem;
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const Label = styled.label`
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  margin-bottom: 3px;
`;

const Message = styled.textarea`
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  color: black;
  &:focus,
  :hover {
    outline: none !important;
    border: 2px solid #c9ddff;
    box-shadow: 0 0 2px #c9ddff;
  }
`;
