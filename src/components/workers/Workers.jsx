import React from "react";
import { Table } from "antd";
import "./Workers.css";

function Workers() {
  const dataSource = [
    {
      key: "1",
      firstname: "Mike",
      lastname: "anvar",
      phone: "+998939119572",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      firstname: "John",
      lastname: "anvar",
      phone: "+998939119572",
      age: 42,
      address: "10 Downing Street",
    },
    {
      key: "3",
      firstname: "Tom",
      lastname: "anvar",
      phone: "+998939119572",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "4",
      firstname: "Mike",
      lastname: "anvar",
      phone: "+998939119572",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "5",
      firstname: "Mike",
      lastname: "anvar",
      phone: "+998939119572",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "6",
      firstname: "Mike",
      lastname: "anvar",
      phone: "+998939119572",
      age: 32,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Ism",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Familiya",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Manzil",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Yosh",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Telefon raqami",
      dataIndex: "phone",
      key: "phone",
    },
  ];

  return (
    <div className="workers">
      <Table dataSource={dataSource} pagination={false} columns={columns} />
    </div>
  );
}

export default Workers;
