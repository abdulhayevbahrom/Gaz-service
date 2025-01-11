import React from "react";
import { Button, Form, Input, Select } from "antd";

function SpareParts() {
  let options = [
    {
      id: 1,
      name: "Reduktor",
      value: "reduktor",
    },
    {
      id: 2,
      name: "Injektor",
      value: "injektor",
    },
    {
      id: 3,
      name: "Filter",
      value: "filter",
    },
    {
      id: 4,
      name: "Zapravishni",
      value: "zapravishni",
    },
  ];
  return (
    <div className="spareParts">
      <Form layout="vertical">
        <h2>Ehtiyot qismlar</h2>
        <Form.Item label="Turi">
          <Select options={options} />
        </Form.Item>
        <Form.Item label="Nomi">
          <Input />
        </Form.Item>
        <Form.Item label="Narxi">
          <Input type="number" />
        </Form.Item>
        <Form.Item label="Sotish narxi">
          <Input type="number" />
        </Form.Item>
        <Button>Saqlash</Button>
      </Form>
    </div>
  );
}

export default SpareParts;
