import React from "react";

const SendDataToServer = (props) => {
  console.log(props.customer[props.customer.length - 1], "propsss");
  async function postData() {
    const url = "http://localhost:5000/api/customers";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customerName: props.customer[props.customer.length - 1].customerName,
        phoneNumber: props.customer[props.customer.length - 1].phoneNumber,
        emailAdress: props.customer[props.customer.length - 1].emailAdress,
        productDescription:
          props.customer[props.customer.length - 1].productDescription,
        productPrice: props.customer[props.customer.length - 1].productPrice,
        quantity: props.customer[props.customer.length - 1].quantity,
        date: props.customer[props.customer.length - 1].date,
        userID: props.customer[props.customer.length - 1].id,
      }),
    });
    // console.log("res:", response.json());
    return response.json();
  }

  postData();

  return <div></div>;
};

export default SendDataToServer;
