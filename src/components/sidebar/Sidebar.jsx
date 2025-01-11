import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";

function Sidebar() {
  const sidebar_links = [
    {
      id: 1,
      text: "Dashboard",
      link: "/dashboard",
      icon: <FiGrid />,
    },
    {
      id: 2,
      text: "Ishchilar",
      link: "/workers",
      icon: <FaUsers />,
    },
    {
      id: 3,
      text: "Royhatga olish",
      link: "/register-workers",
      icon: <FaUserPlus />,
    },
    {
      id: 4,
      text: "Tovar qo'shish",
      link: "/create-product",
      icon: <FaPlus />,
    },
    {
      id: 5,
      text: "Statistika",
      link: "/statistic",
      icon: <FaRegChartBar />,
    },
  ];
  return (
    <div className="sidebar">
      <h2 className="sidebar_logo">
        <span>Gas</span> Service
      </h2>
      <div className="sidebar_links">
        {sidebar_links?.map((item, index) => (
          <NavLink className={"sidebar_link"} key={index} to={item.link}>
            <div className="sidebar_link_icon">{item.icon}</div>{" "}
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
