import React from "react";
import { Button, Form, Input, Select, message } from "antd";
import axios from "../../api";

const { Option } = Select;

function SpareParts() {
  const [form] = Form.useForm();

  const createProduct = () => {
    let data = form.getFieldsValue();
    data.quantity = Number(data.quantity);
    data.price = Number(data.price);
    data.selling_price = Number(data.selling_price);

    axios
      .post("/product/create", data)
      .then((res) => {
        if (res.data.success) {
          message.success(res.data.message);
        }
      })
      .catch((err) => message.error(err.response.data.message));
  };

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
      <Form form={form} layout="vertical">
        <h2>Ehtiyot qismlar</h2>
        <Form.Item required name="category" label="Turi">
          <Select>
            {options.map((option) => (
              <Option key={option.id} value={option.value}>
                {option.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item required name="name" label="Nomi">
          <Input />
        </Form.Item>
        <Form.Item required name="price" label="Narxi">
          <Input type="number" />
        </Form.Item>
        <Form.Item required name="selling_price" label="Sotish narxi">
          <Input type="number" />
        </Form.Item>
        <Form.Item required name="quantity" label="Miqdori">
          <Input type="number" />
        </Form.Item>
        <Button onClick={() => createProduct()}>Saqlash</Button>
      </Form>
    </div>
  );
}

export default SpareParts;
