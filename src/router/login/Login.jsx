import React from "react";
import "./Login.css";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "../../api";

function Login() {
  const navigate = useNavigate();
  const signin = (values) => {
    axios
      .post("/admin/login", values)
      .then((res) => {
        if (res.data.success) {
          localStorage.setItem("token", res.data.innerData.token);
          navigate("/");
        }
      })
      .catch((err) => {
        message.error(err?.response?.data?.message);
      });
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
            name="login"
            rules={[{ required: true, message: "Iltimos, login kiriting!" }]}
          >
            <Input type="text" placeholder="login" />
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
