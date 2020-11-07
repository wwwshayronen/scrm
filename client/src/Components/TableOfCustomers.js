import React, { useEffect, useState } from "react";
import { Table, Tag, Space } from "antd";

import Total from "./Total";

const TableOfCustomers = () => {
  const columns = [
    { title: "מספר לקוח", dataIndex: "_id", key: "_id" },
    {
      title: "שם",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "תעודת זהות",
      dataIndex: "customerID",
      key: "customerID",
    },
    {
      title: "תאריך עסקה",
      dataIndex: "date",
      key: "date",
    },
    { title: "מספר קווים", dataIndex: "numberOfLines", key: "numberOfLines" },
    { title: "חבילה", dataIndex: "packageType", key: "packageType" },
    { title: "רווח (עמלת מכירה)", dataIndex: "revenue", key: "revenue" },
    {
      title: "סטטוס",
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
          <a
            style={{ color: "#1877f2" }}
            onClick={() => handleDeleteCustomer(record._id)}
          >
            Delete {record.name}
          </a>
        </Space>
      ),
    },
  ];

  const [customers, setCustomers] = useState();
  const [color, setColor] = useState("green");
  const [status, setStatus] = useState("פעיל");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:5000/api/customers")
        .then((res) => res.json())
        .then((data) => setCustomers(data));
    }
    fetchData();
  }, []);

  !loading ? (
    customers
      .map((item, key) => [
        {
          id: 2,
          name: item.name,
          customerID: item.customerID,
          numberOfLines: item.numberOfLines,
          packageType: item.packageType,
          revenue: item.revenue,
          date: item.date,
          status: status,
        },
      ])
      .sort((a, b) => b.date - a.date)
  ) : (
    <h1>no content</h1>
  );

  const handleDeleteCustomer = async (customerID) => {
    console.log("cust id: ", customerID);
    try {
      await fetch(`http://localhost:5000/api/customers/delete/${customerID}`, {
        method: "DELETE",
      });
    } catch (error) {
    }

    deleteCustomerFromDOM(customerID);
  };

  const deleteCustomerFromDOM = (id) => {
    const filteredCustomers = customers.filter(
      (customer) => customer._id !== id
    );
    setCustomers(filteredCustomers);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={customers}
        style={{ marginTop: "3rem" }}
      />
      <h1>רווחים לפי חודשים</h1>
      <Total report={customers} />
      <div></div>
    </>
  );
};

export default TableOfCustomers;
