import React from "react";
import { Button, Form, Input, Select } from "antd";

function Gas() {
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
      value: 70,
      label: 70,
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
      value: 150,
      label: 150,
    },
    {
      value: 200,
      label: 200,
    },
    {
      value: 250,
      label: 250,
    },
  ];
  return (
    <div className="create-gas">
      <div className="metan">
        <h2>Metan</h2>
        <Form layout="vertical">
          <Form.Item label="Miqdori">
            <Input />
          </Form.Item>
          <Form.Item label="Narxi">
            <Input />
          </Form.Item>
          <Form.Item label="Turi">
            <Select options={selectData} />
          </Form.Item>
          <Button>Saqlash</Button>
        </Form>
      </div>

      <div className="propan">
        <h2>Propan</h2>
        <Form layout="vertical">
          <Form.Item label="Miqdori">
            <Input />
          </Form.Item>
          <Form.Item label="Narxi">
            <Input />
          </Form.Item>
          <Form.Item label="Turi">
            <Select options={selectData} />
          </Form.Item>
          <Button>Saqlash</Button>
        </Form>
      </div>
    </div>
  );
}

export default Gas;
