import React, { useState } from "react";
import { Button, Form, Input, message, Select } from "antd";
import axios from "../../api";

function ExpensesCreate() {
  const [load, setLoad] = useState(false);
  const [form] = Form.useForm();
  const selectData = [
    {
      value: "dinner",
      label: "Oziq-ovqat",
    },
    {
      value: "electr",
      label: "Elektr to'lovlari",
    },
    {
      value: "network",
      label: "Internet to'lovlari",
    },
    {
      value: "other",
      label: "Boshqa",
    },
  ];

  const addExpenses = (e) => {
    setLoad(true);
    e.price = Number(e.price);
    axios
      .post("/expenses/create", e, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res?.data?.success) {
          message.success(res.data.message);
          form.resetFields();
        }
      })
      .catch((err) => message.error(err.response.data.message))
      .finally(() => setLoad(false));
  };
  return (
    <div className="expensesCreate">
      <Form form={form} onFinish={addExpenses} layout="vertical">
        <h2>Xarajat qo'shish </h2>
        <Form.Item name="name" label="Nima uchun">
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Narxi">
          <Input type="number" />
        </Form.Item>
        <Form.Item name="category" label="Turi">
          <Select options={selectData} />
        </Form.Item>
        <Button loading={load} htmlType="submit" className="btn btn-primary">
          Qo'shish
        </Button>
      </Form>
    </div>
  );
}

export default ExpensesCreate;
