import React from "react";
import "./CreateProduct.css";
import { Tabs } from "antd";
import Gas from "./Gas";
import SpareParts from "./SpareParts";

function CreateProduct() {
  return (
    <div className="createProduct">
      <Tabs>
        <Tabs.TabPane tab="Gas balon" key="1">
          <Gas />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ehtiyot qismlar" key="2">
          <SpareParts />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default CreateProduct;
