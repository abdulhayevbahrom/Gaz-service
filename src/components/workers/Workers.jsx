import React, { useEffect, useState } from "react";
import { Table, message, Modal, Empty, Form, Input, DatePicker } from "antd";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./Workers.css";
import axios from "../../api";
import moment from "moment";

const { confirm } = Modal;

function Workers() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    setLoading(true);
    axios
      .get("/workers/all")
      .then((res) => setWorkers(res.data.innerData))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const deleteWorker = (id) => {
    confirm({
      title: "Xodimni o'chirish",
      content: "Siz rostdan ham ushbu xodimni o'chirmoqchimisiz?",
      onOk() {
        axios
          .delete(`/workers/delete/${id}`)
          .then((res) => {
            if (res.data.success) {
              message.success(res.data.message);
            }
            setWorkers(workers.filter((worker) => worker._id !== id));
          })
          .catch((err) => console.log(err));
      },
      onCancel() {},
    });
  };

  const updateWorker = () => {
    let new_data = form.getFieldsValue();
    new_data.birthdate = moment(new_data.birthdate).format("YYYY-MM-DD");
    axios
      .put("/workers/update/" + edit._id, new_data)
      .then((res) => {
        if (res.data.success) {
          message.success(res.data.message);
          setWorkers(
            workers.map((worker) =>
              worker._id === edit._id ? { ...worker, ...new_data } : worker
            )
          );
          setEdit(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      title: "Ism",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Familiya",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Manzil",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tug'ulgan sana",
      dataIndex: "birthdate",
      key: "birthdate",
    },
    {
      title: "Telefon raqami",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "",
      render: (text, item) => (
        <div className="workers_actions">
          <button
            onClick={() => {
              setEdit(item);
              form.setFieldsValue({
                firstname: item.firstname,
                lastname: item.lastname,
                phone: item.phone,
                address: item.address,
                birthdate: moment(item.birthdate),
              });
            }}
            className="btn btn-primary"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => deleteWorker(item._id)}
            className="btn btn-danger"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="workers">
      <Table
        rowKey={"_id"}
        loading={loading}
        dataSource={workers}
        pagination={false}
        columns={columns}
        locale={{
          emptyText: <Empty description="Ma'lumot yo'q" />,
        }}
      />

      {/* edit antd modal */}
      <Modal
        title="Xodimni tahrirlash"
        open={edit}
        onOk={() => updateWorker()}
        onCancel={() => setEdit(false)}
      >
        <Form layout="vertical" form={form}>
          <Form.Item name={"firstname"} label="Ismi">
            <Input />
          </Form.Item>
          <Form.Item name={"lastname"} label="Familiya">
            <Input />
          </Form.Item>
          <Form.Item name={"phone"} label="Telefon raqami">
            <Input />
          </Form.Item>
          <Form.Item name={"address"} label="Manzil">
            <Input />
          </Form.Item>
          <Form.Item name={"birthdate"} label="Tug'ulgan sana">
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Workers;
