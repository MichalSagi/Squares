import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ItemsContext = createContext();

export function ItemsProvider({ children }) {
  const [skirtsList, setSkirtsList] = useState([]);
  const [hairsList, setHairsList] = useState([]);
  const [blousesList, setBlousesList] = useState([]);
  const [fullDollsList, setFullDollsList] = useState([]);

  useEffect(() => {
    getSkirtsFromDB();
    getHairsFromDB();
    getBlousesFromDB();
    getFullDollsFromDB();
  }, []);

  const getSkirtsFromDB = async () => {
    let result = await axios.get(`http://localhost:8080/item/skirts`);
    setSkirtsList(result.data);
  };
  const getHairsFromDB = async () => {
    let result = await axios.get(`http://localhost:8080/item/hairs`);
    setHairsList(result.data);
  };
  const getBlousesFromDB = async () => {
    let result = await axios.get(`http://localhost:8080/item/blouses`);
    setBlousesList(result.data);
  };
  const getFullDollsFromDB = async () => {
    let result = await axios.get(`http://localhost:8080/item/fullbodies`);
    setFullDollsList(result.data);
  };

  const values = [skirtsList, hairsList, blousesList, fullDollsList];

  return <ItemsContext.Provider value={values}>{children}</ItemsContext.Provider>;
}
