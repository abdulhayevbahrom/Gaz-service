import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "../../api";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [profitAndLess, setProfitAndLess] = useState(0);
  let metanLength = products
    ?.filter((i) => i.name.includes("Gaz ballon (Metan)"))
    ?.reduce((a, b) => a + b.quantity, 0);

  let propanLength = products
    ?.filter((i) => i.name.includes("Gaz ballon (Propan)"))
    ?.reduce((a, b) => a + b.quantity, 0);

  useEffect(() => {
    axios
      .get("/product/all", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => setProducts(res.data?.innerData))
      .catch((err) => console.log(err));

    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    try {
      let res = await axios.get("/dashboard", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      });
      setProfitAndLess(res?.data?.innerData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard_item">
        <span className="dashboard_item_number">{propanLength}</span>
        <span className="dashboard_item_text">Propan</span>
      </div>
      <div className="dashboard_item">
        <span className="dashboard_item_number">{metanLength}</span>
        <span className="dashboard_item_text">Metan</span>
      </div>

      <div className="dashboard_item">
        <span className="dashboard_item_number">
          {profitAndLess?.result?.toLocaleString().replace(/,/g, " ")}
        </span>
        <span className="dashboard_item_text">Foyda</span>
      </div>
      <div className="dashboard_item">
        <span className="dashboard_item_number">
          {profitAndLess?.totalExpenses?.toLocaleString().replace(/,/g, " ")}
        </span>
        <span className="dashboard_item_text">Xarajat</span>
      </div>
    </div>
  );
}

export default Dashboard;
