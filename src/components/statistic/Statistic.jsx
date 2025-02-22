import React, { useEffect, useState } from "react";
import "./Statistic.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import axios from "../../api";

function Statistic() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    axios
      .get("/expenses/all", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => setExpenses(res?.data?.innerData))
      .catch((err) => console.log(err.response.data.message));
  }, []);

  const filterData = (startData, endDate) => {
    let start = new Date(startData);
    let end = new Date(endDate);
    let filtered = expenses.filter((expense) => {
      let date = new Date(expense.createdAt);
      return date >= start && date <= end;
    });
    return filtered.reduce((a, b) => a + b.price, 0);
  };

  const data = [
    {
      name: "1-hafta",
      uv: 4000,
      pv: filterData("2025-02-01", "2025-02-07"),
      amt: 2400,
    },
    {
      name: "2-hafta",
      uv: 3000,
      pv: filterData("2025-02-08", "2025-02-14"),
      amt: 2210,
    },
    {
      name: "3-hafta",
      uv: 2000,
      pv: filterData("2025-02-15", "2025-02-21"),
      amt: 2290,
    },
    {
      name: "4-hafta",
      uv: 2780,
      pv: filterData("2025-02-22", "2025-02-28"),
      amt: 2000,
    },
  ];
  return (
    <div className="statistic">
      <div className="statistic_chart">
        <h2>Statistika</h2>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart width={500} height={400} data={data} syncId="anyId">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              strokeWidth={1}
              stroke="red"
              fill="pink"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Statistic;
