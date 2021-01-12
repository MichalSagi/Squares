import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Space } from "antd";
import { ShoppingOutlined, ShoppingFilled, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { ItemsContext } from "../contexts/ItemsProvider";
import { UserContext } from "../contexts/UserProvider";
import useLocalStorage from "../hooks/useLocalStorage";

export default function CategoryItems() {
  const location = useLocation();
  const page = location.pathname.split("/")[2];
  const [skirtsList, hairsList, blousesList, fullBodyList] = useContext(ItemsContext);
  const [items, setItems] = useState([]);
  const { Meta } = Card;
  const [favoritesList, setFavoritesList] = useLocalStorage("favorites", 0);
  const [favorites, setFavorites] = useState([]);
  const [shoppingList, setShoppingList] = useLocalStorage("shopping", 0);
  const [shoppingItems, setShoppingItems] = useState([]);

  // const [user] = useContext(UserContext);
  // console.log(user)

  useEffect(() => {
    if (favoritesList !== 0) {
      setFavorites(favoritesList);
    }
  }, [page]);

  useEffect(() => {
    if (shoppingList !== 0) {
      setShoppingItems(shoppingList);
    }
  }, [page]);

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

  const addToFavorites = ({ currentTarget }) => {
    const lovedItemID = currentTarget.getAttribute("value");
    const choosenItem = items.find((item) => item._id === lovedItemID);
    let arrayOfFavorites = favorites;
    let addArray = true;
    arrayOfFavorites.map((item, i) => {
      if (item._id === choosenItem._id) {
        arrayOfFavorites.splice(i, 1);
        addArray = false;
      }
    });
    if (addArray) {
      arrayOfFavorites.unshift(choosenItem);
    }
    setFavorites([...arrayOfFavorites]);
    setFavoritesList(favorites);
  };

  const addToShoppingCart = ({ currentTarget }) => {
    const shoppedItem = currentTarget.getAttribute("value");
    const choosenItem = items.find((item) => item._id === shoppedItem);
    let shoppingArray = shoppingItems;
    let addArray = true;
    shoppingArray.map((item, i) => {
      if (item._id === choosenItem._id) {
        shoppingArray.splice(i, 1);
        addArray = false;
      }
    });
    if (addArray) {
      shoppingArray.unshift(choosenItem);
    }
    setShoppingItems([...shoppingArray]);
    setShoppingList(shoppingItems);
  };

  return (
    <div>
      {items.map((item, i) => (
        <Space key={i}>
          <Card
            id={item.id}
            style={{ width: 300, margin: "20px" }}
            cover={<img alt={item.color} src={item.img} />}
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
