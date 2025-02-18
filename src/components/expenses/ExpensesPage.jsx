import React, { useEffect, useState } from "react";
import { Empty, message, Table, Pagination } from "antd";
import axios from "../../api";
import moment from "moment";

function ExpensesPage() {
  const [groupedData, setGroupedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("/expenses/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.success) {
          const grouped = groupDataByDate(res.data.innerData);
          setGroupedData(grouped);
          setCurrentPage(1);
        }
      })
      .catch((err) => message.error(err.response.data.message));
  }, []);

  const groupDataByDate = (data) => {
    const groups = {};
    data.forEach((item) => {
      const date = moment(item.createdAt).format("DD-MM-YYYY");
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(item);
    });
    const groupedArray = Object.keys(groups).map((date) => ({
      date,
      items: groups[date],
    }));
    groupedArray.sort(
      (a, b) => moment(b.date, "DD-MM-YYYY") - moment(a.date, "DD-MM-YYYY")
    );
    return groupedArray;
  };

  const columns = [
    {
      title: "Turi",
      dataIndex: "category",
      key: "category",
      render: (value) =>
        value === "dinner"
          ? "Oziq-ovqat"
          : value === "network"
          ? "Internet to'lovlari"
          : value === "electr"
          ? "Elektr to'lovlari"
          : "Boshqa",
    },
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
      title: "Sana va vaqt",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value, item) => (
        <div>
          <p>{moment(item.createdAt).format("DD-MM-YYYY")}</p>
          <b>{moment(item.createdAt).format("HH:mm:ss")}</b>
        </div>
      ),
    },
  ];

  const currentData =
    groupedData.length > 0 && groupedData[currentPage - 1]
      ? groupedData[currentPage - 1].items
      : [];

  return (
    <div className="expensesPage">
      <Table
        rowKey="_id"
        columns={columns}
        dataSource={currentData}
        locale={{ emptyText: <Empty description="Ma'lumot yo'q" /> }}
        title={() => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>
              {groupedData[currentPage - 1]
                ? `Sana: ${groupedData[currentPage - 1].date}`
                : ""}
            </h3>
            <Pagination
              current={currentPage}
              pageSize={1}
              total={groupedData.length}
              onChange={(page) => setCurrentPage(page)}
              size="small"
              showSizeChanger={false}
            />
          </div>
        )}
        pagination={false}
      />
    </div>
  );
}

export default ExpensesPage;
