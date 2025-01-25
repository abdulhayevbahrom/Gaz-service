import React from "react";
import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FiGrid } from "react-icons/fi";
import { FaUsers, FaRegChartBar } from "react-icons/fa";
import { FaPlus, FaUserPlus } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { Modal } from "antd";
const { confirm } = Modal;

function Sidebar() {
  const navigate = useNavigate();

  const logOut = () => {
    confirm({
      title: "Tizimdan chiqmoqchimisiz",
      content: "Hisobingizdan chiqib ketishga rozimisiz?",
      okText: "Ha",
      okType: "danger",
      cancelText: "Yo'q",
      onOk() {
        localStorage.removeItem("token");
        navigate("/login");
      },
      onCancel() {},
    });
  };
  const sidebar_links = [
    {
      id: 1,
      text: "Dashboard",
      link: "/",
      icon: <FiGrid />,
    },
    {
      id: 2,
      text: "Hom ashyolar",
      link: "/products",
      icon: <BsTools />,
    },
    {
      id: 3,
      text: "Tovar qo'shish",
      link: "/create-product",
      icon: <FaPlus />,
    },
    {
      id: 4,
      text: "Ishchilar",
      link: "/workers",
      icon: <FaUsers />,
    },
    {
      id: 5,
      text: "Royhatga olish",
      link: "/register-workers",
      icon: <FaUserPlus />,
    },
    {
      id: 6,
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
      <button onClick={() => logOut()} className="logout">
        Tizimdan chiqish <MdLogout />
      </button>
    </div>
  );
}

export default Sidebar;
