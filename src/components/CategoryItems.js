import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Space } from "antd";
import { ShoppingOutlined, ShoppingFilled, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { ItemsContext } from "../contexts/ItemsProvider";
import useLocalStorage from "../hooks/useLocalStorage";

export default function CategoryItems() {
  const location = useLocation();
  const page = location.pathname.split("/")[2];
  const [dullsList] = useContext(ItemsContext);
  const [items, setItems] = useState([]);
  const { Meta } = Card;
  const [favoritesList, setFavoritesList] = useLocalStorage("favorites", []);
  const [favorites, setFavorites] = useState([]);
  const [shoppingList, setShoppingList] = useLocalStorage("shopping", []);
  const [shoppingItems, setShoppingItems] = useState([]);

  useEffect(() => {
    if (favoritesList !== 0) {
      setFavorites(favoritesList);
    }
  }, [favoritesList]);

  useEffect(() => {
    if (shoppingList !== 0) {
      setShoppingItems(shoppingList);
    }
  }, []);

  useEffect(() => {
    switch (page) {
      case "skirts":
        setItems(dullsList.filter((item) => item.type === "skirt"));
        break;
      case "hairs":
        setItems(dullsList.filter((item) => item.type === "hair"));
        break;
      case "blouses":
        setItems(dullsList.filter((item) => item.type === "blouse"));
        break;
      case "full dolls":
        setItems(dullsList.filter((item) => item.type === "fullBody"));
        break;
      default:
        console.log("no items");
    }
  }, [dullsList]);

  const addToFavorites = ({ currentTarget }) => {
    const lovedItemID = currentTarget.getAttribute("value");
    const choosenItem = items.find((item) => item._id === lovedItemID);
    let addArray = true;
    favorites.map((item, i) => {
      if (item._id === choosenItem._id) {
        favorites.splice(i, 1);
        addArray = false;
      }
    });
    if (addArray) {
      favorites.unshift(choosenItem);
    }
    setFavorites([...favorites]);
    setFavoritesList(favorites);
  };

  const addToShoppingCart = ({ currentTarget }) => {
    const shoppedItem = currentTarget.getAttribute("value");
    const choosenItem = items.find((item) => item._id === shoppedItem);
    let addArray = true;
    shoppingItems.map((item, i) => {
      if (item._id === choosenItem._id) {
        shoppingItems.splice(i, 1);
        addArray = false;
      }
    });
    if (addArray) {
      shoppingItems.unshift({ ...choosenItem, quantity: 1 });
    }
    setShoppingItems([...shoppingItems]);
    setShoppingList(shoppingItems);
  };

  return (
    <div>
      {items.map((item, i) => (
        <Space key={i}>
          <Card
            id={item.id}
            style={{ width: 300, margin: "20px" }}
            cover={<img alt={item.color} src={item.src} />}
            actions={[
              favorites.some((f) => f._id === item._id) ? (
                <HeartFilled key="loved" value={item._id} onClick={addToFavorites} style={{ color: "#c41d7f" }} />
              ) : (
                <HeartOutlined key="loved" value={item._id} onClick={addToFavorites} style={{ color: "#c41d7f" }} />
              ),
              shoppingItems.some((s) => s._id === item._id) ? (
                <ShoppingFilled key="shopping list" value={item._id} onClick={addToShoppingCart} style={{ color: "#722ed1" }} />
              ) : (
                <ShoppingOutlined key="shopping list" value={item._id} onClick={addToShoppingCart} style={{ color: "#722ed1" }} />
              ),
            ]}
            hoverable
          >
            <Meta title={`${item.style}, ${item.color}`} />
          </Card>
        </Space>
      ))}
    </div>
  );
}
