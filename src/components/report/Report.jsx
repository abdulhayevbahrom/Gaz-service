import React, { useEffect, useState } from "react";
import "./Report.css";
import axios from "../../api";
import { Form, Input, Button, Select, Checkbox, message, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import Reports from "./Reports";

function Report() {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [zapchast, setZapchast] = useState([]);

  useEffect(() => {
    axios
      .get("/product/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const filteredZapchast = res.data?.innerData
          .filter((i) => !i.name.includes("Gaz ballon"))
          .map((item) => ({ label: item.name, value: item._id })); // Format to'g'ri qilish

        setZapchast(filteredZapchast);

        setData(
          res.data?.innerData.filter((i) => i.name.includes("Gaz ballon"))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const selectData = data.map(
    (item) =>
      item && { value: item._id, label: item.name + " (" + item.category + ")" }
  );

  const saveToDataBase = (e) => {
    axios
      .post("/report/create", e, {
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
      .catch((err) => message.error(err.response.data.message));
  };

  return (
    <div className="report">
      <Tabs>
        <TabPane tab="Xisobot qo'shish" key="1">
          <Form form={form} onFinish={saveToDataBase} layout="vertical">
            <h1>Xisobot</h1>
            <Form.Item name="balon" label="Ballon turi">
              <Select options={selectData} />
            </Form.Item>

            <Form.Item name="zapchast" label="Zapchast">
              <Checkbox.Group options={zapchast} />
            </Form.Item>

            <Form.Item name="avto_number" label="Avto raqami">
              <Input
                placeholder="XX X XXX XX"
                maxLength={12}
                onChange={(e) => {
                  let value = e.target.value
                    .toUpperCase()
                    .replace(/[^A-Z0-9]/g, "");

                  if (value.length > 2) {
                    value = value.slice(0, 2) + " " + value.slice(2);
                  }

                  form.setFieldsValue({ avto_number: value.trim() });
                }}
              />
            </Form.Item>

            <Form.Item name="price" label="Narxi">
              <Input />
            </Form.Item>
            <Button htmlType="submit">Saqlash</Button>
          </Form>
        </TabPane>
        <TabPane tab="Xisobotlar" key="2">
          <Reports />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Report;
