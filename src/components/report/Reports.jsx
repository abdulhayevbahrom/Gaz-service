import React, { useEffect, useState } from "react";
import { Table, Modal, message } from "antd";
import axios from "../../api";
import moment from "moment";
import { FaEye } from "react-icons/fa";
import { formatCarNumber } from "../../utils/carNumberFormat";

function Reports() {
  const [data, setData] = useState([]);
  const [openModal, setopenModal] = useState(false);

  useEffect(() => {
    axios
      .get("/report/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data.innerData);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    {
      title: "Sana",
      dataIndex: "createdAt",
      render: (value) => moment(value).format("DD-MM-YYYY HH:mm"),
    },
    {
      title: "Avto raqam",
      dataIndex: "avto_number",
      render: (value) => formatCarNumber(value.split(" ").join("")),
    },
    {
      title: "Narx",
      dataIndex: "price",
    },
    {
      title: "Balon type",
      dataIndex: "balon",
      render: (item) => item.name + " [" + item.category + "]",
    },
    {
      title: "Zapchastlar",
      dataIndex: "zapchast",
      render: (value) => value?.map((item) => item.name).join(", "),
    },
    {
      title: "Batafsil",
      dataIndex: "actions",
      render: (_, reposrtsData) => (
        <FaEye
          className="eye"
          style={{ cursor: "pointer", color: "dodgerblue" }}
          onClick={() => setopenModal(reposrtsData)}
        />
      ),
    },
  ];
  return (
    <div className="reports">
      <Table
        pagination={false}
        rowKey="_id"
        columns={columns}
        dataSource={data}
      />
      <Modal
        title="Hisobot Tafsilotlari"
        open={openModal}
        onCancel={() => setopenModal(false)}
        footer={null}
      >
        <div>
          <p>
            <strong>Sana:</strong>{" "}
            {moment(openModal.createdAt).format("DD-MM-YYYY HH:mm")}
          </p>
          <p>
            <strong>Avto raqam:</strong>{" "}
            {formatCarNumber(openModal.avto_number?.split(" ").join(""))}
          </p>
          <p>
            <strong>Narx:</strong> {openModal?.price}
          </p>
          <p>
            <strong>Balon turi:</strong> {openModal.balon?.name} [
            {openModal.balon?.category}]
          </p>
          <p>
            <strong>Zapchastlar:</strong>{" "}
            {openModal.zapchast?.map((item) => item?.name)?.join(", ")}
          </p>
        </div>
      </Modal>
    </div>
  );
}

export default Reports;
