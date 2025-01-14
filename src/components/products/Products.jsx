import React from "react";
import { Table, Tabs } from "antd";
import "./Products.css";

function Products() {
  const dataSource = [
    {
      key: "1",
      name: "1 kg Gaz Baloni",
      price: 50000,
      sellPrice: 55000,
      type: "Yoqilg'i",
      quantity: 20,
    },
    {
      key: "2",
      name: "5 kg Gaz Baloni",
      price: 250000,
      sellPrice: 270000,
      type: "Yoqilg'i",
      quantity: 15,
    },
    {
      key: "3",
      name: "10 kg Gaz Baloni",
      price: 500000,
      sellPrice: 550000,
      type: "Yoqilg'i",
      quantity: 10,
    },
    {
      key: "4",
      name: "20 kg Gaz Baloni",
      price: 1000000,
      sellPrice: 1100000,
      type: "Yoqilg'i",
      quantity: 8,
    },
    {
      key: "5",
      name: "30 kg Gaz Baloni",
      price: 1500000,
      sellPrice: 1650000,
      type: "Yoqilg'i",
      quantity: 5,
    },
    {
      key: "6",
      name: "40 kg Gaz Baloni",
      price: 2000000,
      sellPrice: 2200000,
      type: "Yoqilg'i",
      quantity: 3,
    },
    {
      key: "7",
      name: "50 kg Gaz Baloni",
      price: 2500000,
      sellPrice: 2750000,
      type: "Yoqilg'i",
      quantity: 2,
    },
    {
      key: "8",
      name: "75 kg Gaz Baloni",
      price: 3750000,
      sellPrice: 4100000,
      type: "Yoqilg'i",
      quantity: 1,
    },
    {
      key: "9",
      name: "100 kg Gaz Baloni",
      price: 5000000,
      sellPrice: 5500000,
      type: "Yoqilg'i",
      quantity: 1,
    },
    {
      key: "10",
      name: "12 kg Gaz Baloni",
      price: 600000,
      sellPrice: 660000,
      type: "Yoqilg'i",
      quantity: 7,
    },
  ];

  const columns = [
    {
      title: "Nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Narxi",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Sotish Narxi",
      dataIndex: "sellPrice",
      key: "sellPrice",
    },
    {
      title: "Turi",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Miqdori",
      dataIndex: "quantity",
      key: "quantity",
    },
  ];
  return (
    <div className="products">
      <Tabs>
        <Tabs.TabPane tab="Gas balonlar" key="1">
          <Table
            rowClassName={(record) =>
              record.quantity <= 5 ? "low-quantity" : ""
            }
            pagination={false}
            dataSource={dataSource}
            columns={columns}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ehtiyot qismlar" key="2">
          <Table
            rowClassName={(record) =>
              record.quantity <= 5 ? "low-quantity" : ""
            }
            pagination={false}
            dataSource={dataSource}
            columns={columns}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Products;
