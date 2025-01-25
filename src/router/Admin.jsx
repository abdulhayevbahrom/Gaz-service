import React from "react";
import "./Admin.css";
import Sidebar from "../components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import Workers from "../components/workers/Workers";
import Register from "../components/register/Register";
import CreateProduct from "../components/createProduct/CreateProduct";
import Statistic from "../components/statistic/Statistic";
import Products from "../components/products/Products";

function Admin() {
  return (
    <div className="admin">
      <Sidebar />
      <div className="admin_content">
        {
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/workers" element={<Workers />} />
            <Route path="/register-workers" element={<Register />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/statistic" element={<Statistic />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        }
      </div>
    </div>
  );
}

export default Admin;
