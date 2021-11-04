import React, { useEffect, useState } from "react";
import { Table, Tag, Space, Modal, Button } from "antd";

import Total from "./Total";

const ReachableContext = React.createContext();
const UnreachableContext = React.createContext();

const config = {
  title: "Use Hook!",
  content: (
    <>
      <ReachableContext.Consumer>
        {(name) => `Reachable: ${name}!`}
      </ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>
        {(name) => `Unreachable: ${name}!`}
      </UnreachableContext.Consumer>
    </>
  ),
};

const TableOfCustomers = () => {
  const [modal, contextHolder] = Modal.useModal();
  const [customers, setCustomers] = useState();
  const [color, setColor] = useState("green");
  const [status, setStatus] = useState("פעיל");
  const [loading, setLoading] = useState(true);
  const [userDeatilsName, setUserDeatilsName] = useState("shay");

  useEffect(() => {
    console.log("customers: ", customers);
  }, [customers]);

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:5000/api/customers")
        .then((res) => res.json())
        .then((data) => setCustomers(data));
    }
    fetchData();
  }, []);

  const openModalWithCustomerContactInfo = (name, record) => {
    console.log("name: ", name, "record: ", record);
    const customerInfo = customers.filter(
      (customer) => customer.customerName === name
    );

    console.log("customerInfo.customerName: ", customerInfo.customerName);

    return Modal.info({
      title: `${name}'s contact info`,
      content: (
        <div>
          <p>{`Phone number: ${record.phoneNumber}`}</p>
          <p>{`Email: ${record.emailAdress}`}</p>
        </div>
      ),
      onOk() {},
    });
  };

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      render: (name, record) => (
        <>
          <Button
            onClick={() => {
              openModalWithCustomerContactInfo(name, record);
            }}
          >
            {name}
          </Button>
        </>
      ),
    },
    {
      title: "Product description",
      dataIndex: "productDescription",
      key: "productDescription",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity) => (
        <div style={{ marginLeft: "25px" }}>{quantity}</div>
      ),
    },
    {
      title: "Product price",
      dataIndex: "productPrice",
      key: "productPrice",
    },
    {
      title: "Transaction date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Deal Status",
      key: "status",
      dataIndex: "status",
      render: () => (
        <>
          <Tag color={color}>{status}</Tag>
        </>
      ),
    },
    {
      title: "",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={() => handleDeleteCustomer(record._id)}>Delete</a>
        </Space>
      ),
    },
  ];

  !loading ? (
    customers
      .map((item, key) => [
        {
          id: 2,
          customerName: item.customerName,
          productDescription: item.productDescription,
          productPrice: item.productPrice,
          quantity: item.quantity,
          date: item.date,
          status: status,
        },
      ])
      .sort((a, b) => b.date - a.date)
  ) : (
    <h1>no content</h1>
  );

  useEffect(() => {
    handleDeleteCustomer();
  });

  const handleDeleteCustomer = async (customerID) => {
    console.log("cust id: ", customerID);
    try {
      await fetch(`http://localhost:5000/api/customers/delete/${customerID}`, {
        method: "DELETE",
      });
      console.log(
        `the Customer with customerID of: ${customerID}, was deleted!`
      );
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Table
        style={{ width: "100%", overflow: "auto" }}
        columns={columns}
        dataSource={customers}
      />
      <h1>רווחים לפי חודשים</h1>
      <Total report={customers} />
      <div></div>
    </div>
  );
};

export default TableOfCustomers;
