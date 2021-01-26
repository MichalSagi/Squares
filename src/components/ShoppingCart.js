import React, { useState, useContext  } from "react";
import { ItemsContext } from "../contexts/ItemsProvider";
import { Table, Typography, Button, notification,  Modal } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function ShoppingCart() {
  const items = JSON.parse(localStorage.getItem("squares-shopping") || "[]");
  const { Text } = Typography;
  const [order, setOrder] = useState(items.map((item) => ({ ...item, displayPrice: item.price * item.quantity })));
  const itemContext = useContext(ItemsContext);
  const history = useHistory()

  const addItem = (record) => {
    let copyOrder = [...order];
    const itemIndex = copyOrder.indexOf(record);
    copyOrder[itemIndex].quantity = record.quantity + 1;
    copyOrder[itemIndex].displayPrice = record.price * record.quantity;
    setOrder(copyOrder);
    localStorage.setItem("squares-shopping", JSON.stringify(order));
  };

  const subItem = (record) => {
    let copyOrder = [...order];
    const itemIndex = copyOrder.indexOf(record);
    if (record.quantity > 1) {
      copyOrder[itemIndex].quantity = record.quantity - 1;
      copyOrder[itemIndex].displayPrice = record.price * record.quantity;
      setOrder(copyOrder);
      localStorage.setItem("squares-shopping", JSON.stringify(order));
    } else {
      const openNotificationWithIcon = (type) => {
        const btn = (
          <Button
            type="primary"
            style={{ backgroundColor: "#722ed1", border: "none", borderRadius: 0 }}
            size="small"
            onClick={() => deleteItem(copyOrder[itemIndex]._id)}
            onClose={() => close()}
          >
            Delete Item
          </Button>
        );
        notification[type]({
          description: "Are you sure you want to delete this item?",
          btn,
          key: "remove",
          duration: 2,
        });
      };
      openNotificationWithIcon("warning");
    }
  };

  const close = () => {
    notification.close();
  };

  const deleteItem = (e) => {
    const fiteredOrder = order.filter((item) => item._id !== e);
    setOrder(fiteredOrder);
    localStorage.setItem("squares-shopping", JSON.stringify(fiteredOrder.filter((item) => item._id !== e)));
  };

  const ordering = () => {
    itemContext[3](order);
    localStorage.setItem("squares-shopping", "[]");
    setOrder(() => []);
    successOrder()
  };

  function successOrder() {
    Modal.success({
      content: 'Your order is on the way! Enjoy your Squares',
    });
  }

  const columns = [
    {
      title: "Square",
      dataIndex: "type",
      key: "1",
    },
    {
      dataIndex: "src",
      render: (theImageURL) => <img alt={theImageURL} src={theImageURL} style={{ height: "3%", width: "auto" }} />,
      key: "2",
    },
    {
      title: "Price",
      dataIndex: "displayPrice",
      key: "3",
    },
    {
      title: "Quantity",
      render: (record) => (
        <>
          <Button onClick={() => subItem(record)} type="text" style={{ margin: 2 }}>
            -
          </Button>
          <Typography.Text style={{ margin: 2 }}>{record.quantity}</Typography.Text>
          <Button onClick={() => addItem(record)} type="text" style={{ margin: 2 }}>
            +
          </Button>
        </>
      ),
      key: "4",
    },
    {
      dataIndex: "_id",
      render: (record) => (
        <>
          <Button onClick={(e) => deleteItem(record)} type="text" data-id="record">
            <DeleteTwoTone twoToneColor="#722ed1" />
          </Button>
        </>
      ),
      kay: "5",
    },
  ];

  return (
    <div>
      {order.length ? (
        <>
          <Table
            columns={columns}
            dataSource={order}
            rowKey={order._id}
            bordered
            pagination={{
              total: order.length,
              pageSize: order.length,
              hideOnSinglePage: true,
            }}
            style={{ display: "flex", justifyContent: "center", bordercollapse: "separate", borderSpacing: "1em" }}
            summary={() => {
              let totalPrice = 0;
              order.forEach((item) => {
                totalPrice += item.displayPrice;
              });
              return (
                <>
                  <Table.Summary.Row>
                    <Table.Summary.Cell>Total</Table.Summary.Cell>
                    <Table.Summary.Cell></Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text style={{ color: "#722ed1", fontWeight: 600 }}>{totalPrice} </Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
          />
          <Button
            key="orderBtn"
            type="primary"
            style={{ backgroundColor: "#722ed1", border: "none", borderRadius: 0, margin: "20px", width: "200px" }}
            onClick={ordering}
          >
            Order
          </Button>
        </>
      ) : (
        <>
          <h3>No Square Selected</h3>
          <Button
            key="back"
            type="primary"
            style={{ backgroundColor: "#722ed1", border: "none", borderRadius: 0, margin: "20px", width: "200px" }}
            onClick={() => history.goBack()}
          >
            Go Back
          </Button>
        </>
      )}
    </div>
  );
}
