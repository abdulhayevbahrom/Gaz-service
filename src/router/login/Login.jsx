import React from "react";
import "./Login.css";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const signin = (values) => {
    if (values.username === "admin" && values.password === "12345678") {
      localStorage.setItem("token", "token12345678admin");
      navigate("/dashboard");
      return;
    } else {
      message.error("username yoki parol xato!");
    }
  };

  return (
    <div className="login">
      <div className="login_left">
        <h1>Rahmatullo</h1>
        <h1>Gas</h1>
        <h1>Service</h1>
      </div>
      <div className="login_right">
        <Form onFinish={signin}>
          <h2>Kirish</h2>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Iltimos, username kiriting!" }]}
          >
            <Input type="text" placeholder="username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Iltimos, parolni kiriting!" }]}
          >
            <Input type="password" placeholder="parol" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Kirish</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
