import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const [dullsList, setDullsList] = useState([])

  useEffect(() => {
    getAllItemsFromDB()
  }, [])

  const getAllItemsFromDB = async () => {
    let result = await axios.get(`http://localhost:3000/item/items`)
    setDullsList(result.data)
  }

  const createOrder = async (order) => {
    const ordered = {"items": order}
    await axios.post(`http://localhost:3000/item/order`, ordered)
  }

  const values = [dullsList, getAllItemsFromDB, createOrder]

  return <ItemsContext.Provider value={values}>{children}</ItemsContext.Provider>;
}
