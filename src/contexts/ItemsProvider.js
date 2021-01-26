import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const [dullsList, setDullsList] = useState([])
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getAllItemsFromDB()
  }, [])

  const getAllItemsFromDB = async () => {
    let result = await axios.get(`http://localhost:3000/item/items`)
    setDullsList(result.data)
  }

    const updateItem = async (item) => {
    const itemToUpdate = dullsList.find(dull => dull._id === item._id)
    await axios.put(`http://localhost:3000/item/items/:${itemToUpdate._id}`, itemToUpdate);
    this.getAllItemsFromDB();
  };

  const getAllOrdersFromDB = async () => {
    let result = await axios.get(`http://localhost:3000/item/shopping`)
    setOrders(result.data)
  }

  const createOrder = async (order, client) => {
    const ordered = {"items": order}
    const user = {"user": client}
    await axios.post(`http://localhost:3000/item/shopping`, ordered, user)
  }

  const values = [dullsList, getAllItemsFromDB, updateItem, createOrder]

  return <ItemsContext.Provider value={values}>{children}</ItemsContext.Provider>;
}
