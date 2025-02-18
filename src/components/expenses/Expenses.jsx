import React from "react";
import "./Expenses.css";
import ExpensesPage from "./ExpensesPage";
import ExpensesCreate from "./ExpensesCreate";
import { Tabs } from "antd";

function Expenses() {
  return (
    <div className="expenses">
      <Tabs>
        <Tabs.TabPane tab="Xarajatlarni qo'shish" key="1">
          <ExpensesCreate />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Xarajatlar" key="2">
          <ExpensesPage />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Expenses;
