import React, { useEffect, useState } from "react";
import { Table, Tabs, Modal, message, Form, Input } from "antd";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./Products.css";
import axios from "../../api";

const { confirm } = Modal;

function Products() {
  const [products, setProducts] = useState([]);
  const gasBallons = products.filter(
    (i) =>
      i.name.includes("Gaz ballon (Propan)") ||
      i.name.includes("Gaz ballon (Metan)")
  );
  const spareParts = products.filter((i) => !i.name.includes("Gaz ballon"));

  const [edit, setEdit] = useState(null);
  const [form] = Form.useForm();
  const [loading, setloading] = useState(false);

  useEffect(() => {
    axios
      .get("/product/all", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProducts(res.data.innerData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [loading]);

  const deleteProduct = (id) => {
    setloading(true);
    confirm({
      title: "Mahasulotni o'chirish",
      content: "Siz rostdan ham ushbu mahasulotni o'chirmoqchimisiz?",
      onOk() {
        axios
          .delete(`/product/delete/${id}`)
          .then((res) => {
            if (res.data.success) {
              message.success(res.data.message);
              setProducts(products.filter((product) => product.id !== id));
            }
          })
          .catch((err) => console.log(err))
          .finally(() => setloading(false));
      },
      onCancel() {},
    });
  };

  const updateProduct = () => {
    let new_data = form.getFieldsValue();
    console.log(new_data);
    new_data.quantity = Number(new_data.quantity);
    new_data.price = Number(new_data.price);
    new_data.selling_price = Number(new_data.selling_price);

    axios
      .put(`/product/update/` + edit._id, new_data)
      .then((res) => {
        if (res.data.success) {
          message.success(res.data.message);
          setProducts(
            products.map((product) =>
              product._id === edit._id ? { ...product, ...new_data } : product
            )
          );
          setEdit(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const columns = [
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
      title: "Sotish Narxi",
      dataIndex: "selling_price",
      key: "selling_price",
    },
    {
      title: "Turi",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Miqdori",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "",
      render: (text, item) => (
        <div className="products_actions">
          <button
            onClick={() => {
              setEdit(item);
              form.setFieldsValue({
                name: item.name,
                price: item.price,
                selling_price: item.selling_price,
                category: item.category,
                quantity: item.quantity,
              });
            }}
            className="btn btn-primary"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => deleteProduct(item._id)}
            className="btn btn-danger"
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="products">
      <Tabs>
        <Tabs.TabPane tab="Gaz balonlari" key="1">
          <Table
            rowClassName={(record) =>
              record.quantity <= 5 ? "low-quantity" : ""
            }
            pagination={false}
            dataSource={gasBallons}
            columns={columns}
          />
          <Modal
            title="Mahsulot tahrirlash"
            open={edit}
            onOk={updateProduct}
            onCancel={() => setEdit(null)}
          >
            <Form layout="vertical" form={form}>
              <Form.Item name="name" label="nomi">
                <Input />
              </Form.Item>
              <Form.Item name="price" label="narhi">
                <Input />
              </Form.Item>
              <Form.Item name="selling_price" label="sotish narhi">
                <Input />
              </Form.Item>
              <Form.Item name="category" label="mahsulot turi">
                <Input />
              </Form.Item>
              <Form.Item name="quantity" label="miqdori">
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Ehtiyot qismlar" key="2">
          <Table
            rowClassName={(record) =>
              record.quantity <= 5 ? "low-quantity" : ""
            }
            pagination={false}
            dataSource={spareParts}
            columns={columns}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Products;
