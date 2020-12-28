import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Space } from "antd";
import { ShoppingOutlined, HeartOutlined } from "@ant-design/icons";
import { ItemsContext } from "../contexts/ItemsProvider";


export default function CategoryItems() {
  const location = useLocation();
  const page = location.pathname.split("/")[2];
  const [skirtsList, hairsList, blousesList, fullBodyList] = useContext(ItemsContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    switch (page) {
      case "skirts":
        setItems(skirtsList);
        break;
      case "hairs":
        setItems(hairsList);
        break;
      case "blouses":
        setItems(blousesList);
        break;
      case "full dolls":
        setItems(fullBodyList);
        break;
      default:
        console.log("no items");
    }
  }, [page, skirtsList, hairsList, blousesList, fullBodyList]);

  return (
    <div>
      {items.map((item, i) => (
        <Space key={i}>
          <Card
            style={{ width: 300, margin: "20px" }}
            cover={<img alt={item.color} src={item.img} />}
            actions={[<HeartOutlined key="loved" />, <ShoppingOutlined key="shopping list" />]}
          >
          </Card>
        </Space>
      ))}
    </div>
  );
}
