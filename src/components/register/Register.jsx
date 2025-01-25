import React from "react";
import "./Register.css";
import { Form, Input, Button, message, DatePicker } from "antd";
import axios from "../../api";

function Register() {
  const [form] = Form.useForm();

  const createWorker = (e) => {
    let data = form.getFieldsValue();
    data.birthdate = data.birthdate.format("YYYY-MM-DD");

    axios
      .post("/workers/create", data)
      .then((res) => {
        if (res.data.success) {
          message.success(res.data.message);
        }
      })
      .catch((err) => message.error(err.response.data.message))
      .finally(() => form.resetFields());
  };
  return (
    <div className="register">
      <Form layout="vertical" form={form}>
        <h2>Ro'yhatga olish</h2>
        <Form.Item name={"firstname"} label="Ismi">
          <Input />
        </Form.Item>
        <Form.Item name={"lastname"} label="Familiya">
          <Input />
        </Form.Item>
        <Form.Item name={"phone"} label="Telefon raqami">
          <Input />
        </Form.Item>
        <Form.Item name={"address"} label="Manzil">
          <Input />
        </Form.Item>
        <Form.Item name={"birthdate"} label="Tug'ulgan sana">
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button onClick={createWorker} type="primary">
            Royhatga olish
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
