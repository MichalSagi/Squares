import React from "react";
import { Card, Space } from "antd";
import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";


export default function CategoryItems() {

  const items = []

  return (
    <div>
      {items.map((item, i) => (
        <Space size={[8, 16]} wrap  key={i}>
          <Card
            style={{ width: 300, margin: "25px" }}
            cover={<img alt={item.style} src={require(item.src)} />}
            actions={[<HeartOutlined key="loved" />, <ShoppingOutlined key="shopping list" />]}
          ></Card>
        </Space>
      ))}
    </div>
  );
}
