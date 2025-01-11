import React from "react";
import "./Statistic.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

function Statistic() {
  const data = [
    {
      name: "Yanvar",
      uv: 4000,
      pv: 100,
      amt: 2400,
    },
    {
      name: "Fevral",
      uv: 3000,
      pv: 200,
      amt: 2210,
    },
    {
      name: "Mart",
      uv: 2000,
      pv: 150,
      amt: 2290,
    },
    {
      name: "Aprel",
      uv: 2780,
      pv: 400,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 800,
      amt: 2181,
    },
    {
      name: "Iyun",
      uv: 2390,
      pv: 100,
      amt: 2500,
    },
    {
      name: "Iyul",
      uv: 3490,
      pv: 500,
      amt: 2100,
    },
    {
      name: "Avgust",
      uv: 3490,
      pv: 50,
      amt: 2100,
    },
    {
      name: "Sentyabr",
      uv: 3490,
      pv: 900,
      amt: 2100,
    },
    {
      name: "Oktyabr",
      uv: 3490,
      pv: 300,
      amt: 2100,
    },
    {
      name: "Noyabr",
      uv: 3490,
      pv: 700,
      amt: 2100,
    },
    {
      name: "Dekabr",
      uv: 3490,
      pv: 400,
      amt: 2100,
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
