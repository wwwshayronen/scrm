import React, { useState } from "react";

import SendDataToTheServer from "./SendDataToTheServer";
import { Input, Button } from "antd";

const dateObj = Date.now();

const AddCustomer = () => {
  const [list, setList] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(dateObj);
  const [phoneNumber, setPhoneNumber] = useState("")
  const [emailAdress, setEmailAdress] = useState("")

  
  function resetForm() {
    setCustomerName("");
    setProductDescription("");
    setPhoneNumber("")
    setEmailAdress("")
    setProductPrice();
    setQuantity();
    setDate(dateObj);
    setList([]);
    setShow(false);
  }

  // TODO: replace id impementation with uid func
  function handleSubmitEvent(e) {
    e.preventDefault();
    setList([
      {
        ...list,
        id: list.length + 1,
        customerName: customerName,
        productDescription: productDescription,
        productPrice: productPrice,
        quantity: quantity,
        emailAdress: emailAdress,
        phoneNumber: phoneNumber,
        date: date,
      },
    ]);
    setShow(true);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #f0f0f0",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <form
          onSubmit={handleSubmitEvent}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "1rem",
          }}
        >
          <label htmlFor="name">Customer name:</label>
          <Input
            style={{ width: "250px", fontSize: "1rem", marginBottom: "0.7rem" }}
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
          <label htmlFor="name">Customer phone number:</label>
          <Input
            style={{ width: "250px", fontSize: "1rem", marginBottom: "0.7rem" }}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
           <label htmlFor="name">Customer email adress:</label>
          <Input
            style={{ width: "250px", fontSize: "1rem", marginBottom: "0.7rem" }}
            value={emailAdress}
            onChange={(e) => setEmailAdress(e.target.value)}
            required
          />
          <label htmlFor="name">Product description/name:</label>
          <Input
            style={{ width: "250px", fontSize: "1rem", marginBottom: "0.7rem" }}
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
          <label htmlFor="name">Product price:</label>
          <Input
            type="number"
            style={{
              width: "250px",
              fontSize: "1rem",
              marginBottom: "0.7rem",
              textAlign: "center",
            }}
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
          <label htmlFor="name">Quantity:</label>
          <Input
            type="number"
            style={{ width: "250px", fontSize: "1rem", textAlign: "center" }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
          <label htmlFor="name">Date:</label>
          <Input
            type="datetime-local"
            style={{ width: "250px", fontSize: "1rem" }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Input
            style={{
              width: "250px",
              fontWeight: "bold",
              backgroundColor: "#4CB944",
              color: "white",
              marginTop: "1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            type="submit"
            value="Add"
          />
          <Button
            style={{
              alignSelf: "start",
              backgroundColor: "#c91d12",
              color: "white",
              marginTop: "3rem",
            }}
            onClick={resetForm}
          >
            Reset form
          </Button>
        </form>
      </div>
      <>{show && <SendDataToTheServer customer={list} />}</>
    </>
  );
};

export default AddCustomer;
