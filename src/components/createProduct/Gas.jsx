import React from "react";
import { Button, Form, Input, message, Select } from "antd";
import axios from "../../api";

function Gas() {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const selectData = [
    {
      value: 30,
      label: 30,
    },
    {
      value: 40,
      label: 40,
    },
    {
      value: 50,
      label: 50,
    },
    {
      value: 60,
      label: 60,
    },
    {
      value: 65,
      label: 65,
    },
    {
      value: 75,
      label: 75,
    },
    {
      value: 80,
      label: 80,
    },
    {
      value: 90,
      label: 90,
    },
    {
      value: 100,
      label: 100,
    },
    {
      value: 110,
      label: 110,
    },
    {
      value: 120,
      label: 120,
    },
    {
      value: 130,
      label: 130,
    },
    {
      value: 140,
      label: 140,
    },
    {
      value: 150,
      label: 150,
    },
    {
      value: 200,
      label: 200,
    },
  ];

  const saveToDataBase = async () => {
    try {
      let data = form.getFieldsValue();
      form.submit();
      data.quantity = Number(data.quantity);
      data.price = +data.price;
      data.selling_price = +data.selling_price;
      data.name = "Gaz ballon (Metan)";
      data.category = String(data.category);

      const response = await axios.post("/product/create", data);
      if (response.data.success) {
        message.success(response.data.message);
        form.resetFields();
      }
    } catch (err) {
      console.log(err);
      message.error(err.response.data.message);
    }
  };
  const saveToDataBasePropan = async () => {
    try {
      let data = form2.getFieldsValue();
      form2.submit();
      data.quantity = Number(data.quantity);
      data.price = +data.price;
      data.selling_price = +data.selling_price;
      data.name = "Gaz ballon (Propan)";
      data.category = String(data.category);

      const response = await axios.post("/product/create", data);
      if (response.data.success) {
        message.success(response.data.message);
        form2.resetFields();
      }
      console.log(data);
    } catch (err) {
      console.log(err);
      message.error(err.response.data.message);
    }
  };
  return (
    <div className="create-gas">
      <div className="metan">
        <h2>Metan</h2>
        <Form form={form} layout="vertical">
          <Form.Item
            rules={[
              { required: true, message: "mahsulot miqdori kiritilmadi" },
            ]}
            required
            label="Miqdori"
            name="quantity"
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "mahsulot narxi kiritilmadi" }]}
            name="price"
            required
            label="Narxi"
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: "mahsulot sotish narxi kiritilmadi" },
            ]}
            name="selling_price"
            required
            label="Sotish narxi"
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "turi kiritilmadi" }]}
            required
            name="category"
            label="Turi"
          >
            <Select options={selectData} />
          </Form.Item>
          <Button onClick={() => saveToDataBase()}>Saqlash</Button>
        </Form>
      </div>

      <div className="propan">
        <h2>Propan</h2>
        <Form form={form2} layout="vertical">
          <Form.Item
            rules={[
              { required: true, message: "mahsulot miqdori kiritilmadi" },
            ]}
            required
            label="Miqdori"
            name="quantity"
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            rules={[{ required: true, message: "mahsulot narxi kiritilmadi" }]}
            name="price"
            required
            label="Narxi"
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            rules={[
              { required: true, message: "mahsulot sotish narxi kiritilmadi" },
            ]}
            name="selling_price"
            required
            label="Sotish narxi"
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "turi kiritilmadi" }]}
            required
            name="category"
            label="Turi"
          >
            <Select options={selectData} />
          </Form.Item>
          <Button onClick={() => saveToDataBasePropan()}>Saqlash</Button>
        </Form>
      </div>
    </div>
  );
}

export default Gas;
