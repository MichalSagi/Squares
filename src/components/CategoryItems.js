import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Space } from "antd";
import { ShoppingOutlined, ShoppingFilled, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { ItemsContext } from "../contexts/ItemsProvider";

export default function CategoryItems() {
  const location = useLocation();
  const page = location.pathname.split("/")[2];
  const [dullsList] = useContext(ItemsContext);
  const [items, setItems] = useState([]);
  const { Meta } = Card;
  const [favoritesList, setFavoritesList] = useState(JSON.parse(localStorage.getItem('squares-favorites') || '[]'));
  const [favorites, setFavorites] = useState([]);
  const [shoppingList, setShoppingList]= useState(JSON.parse(localStorage.getItem('squares-shopping') ||'[]'));
  const [shoppingItems, setShoppingItems] = useState([]);

  useEffect(() => {
    if (favoritesList) {
      setFavorites(favoritesList);
    }
  }, [favoritesList]);

  useEffect(() => {
    if (shoppingList) {
      setShoppingItems(shoppingList);
    }
  }, []);

  useEffect(() => {
    dullsList.filter(item => item.type === 'fullBody').map(i => i.type = 'full doll')
    setItems(dullsList.filter(item => item.type === page))
  }, [dullsList]);

  const addToFavorites = ({ currentTarget }) => {
    const lovedItemID = currentTarget.getAttribute("value");
    const chosenItem = items.find((item) => item._id === lovedItemID);
    let addArray = true;
    favorites.forEach((item, i) => {
      if (item._id === chosenItem._id) {
        favorites.splice(i, 1);
        addArray = false;
      }
    });
    if (addArray) {
      favorites.unshift(chosenItem);
    }
    setFavorites([...favorites]);
    localStorage.setItem('squares-favorites', JSON.stringify(favorites))
  };

  console.log(favoritesList)
  const addToShoppingCart = ({ currentTarget }) => {
    const shoppedItem = currentTarget.getAttribute("value");
    const chosenItem = items.find((item) => item._id === shoppedItem);
    let addArray = true;
    shoppingItems.forEach((item, i) => {
      if (item._id === chosenItem._id) {
        shoppingItems.splice(i, 1);
        addArray = false;
      }
    });
    if (addArray) {
      shoppingItems.unshift({ ...chosenItem, quantity: 1 });
    }
    setShoppingItems([...shoppingItems]);
    localStorage.setItem('squares-shopping', JSON.stringify(shoppingItems))
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
