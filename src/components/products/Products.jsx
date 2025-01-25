import React, { useEffect, useState } from "react";
import { Table, Tabs } from "antd";
import "./Products.css";
import axios from "../../api";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/product/all")
      .then((res) => {
        setProducts(res.data.innerData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      dataIndex: "selling_price",
      key: "selling_price",
    },
    {
      title: "Turi",
      dataIndex: "category",
      key: "category",
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
            dataSource={products}
            columns={columns}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ehtiyot qismlar" key="2">
          <Table
            rowClassName={(record) =>
              record.quantity <= 5 ? "low-quantity" : ""
            }
            pagination={false}
            dataSource={products}
            columns={columns}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Products;
