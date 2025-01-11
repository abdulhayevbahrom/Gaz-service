import React from "react";
import "./Register.css";
import { Form, Input, Button } from "antd";
import { DatePicker } from "antd";

function Register() {
  return (
    <div className="register">
      <Form layout="vertical">
        <h2>Ro'yhatga olish</h2>
        <Form.Item label="Ismi">
          <Input />
        </Form.Item>
        <Form.Item label="Familiya">
          <Input />
        </Form.Item>
        <Form.Item label="Telefon raqami">
          <Input />
        </Form.Item>
        <Form.Item label="Manzil">
          <Input />
        </Form.Item>
        <Form.Item label="Tug'ulgan sana">
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Royhatga olish</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
