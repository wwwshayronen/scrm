import React from "react";

const SendDataToServer = (props) => {
    console.log(props.customer[props.customer.length - 1], "propsss")
  async function postData() {
    const url = "https://mern-stack-scrm.herokuapp.com/api/customers";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: props.customer[props.customer.length - 1].שם,
        packageType: props.customer[props.customer.length - 1].חבילה,
        numberOfLines: props.customer[props.customer.length - 1].numberOfLines,
        revenue: props.customer[props.customer.length - 1].revenue,
        customerID: props.customer[props.customer.length - 1].תז,
        userID: props.customer[props.customer.length - 1].id,
        date: props.customer[props.customer.length - 1].date,
      }),
    });
    // console.log("res:", response.json());
    return response.json();
  }

  postData();

  return (
    <div>
    </div>
  );
};

export default SendDataToServer;
