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
    let result = await axios.get(`http://localhost:3000/item/skirts`);
    setSkirtsList(result.data);
  };
  const getHairsFromDB = async () => {
    let result = await axios.get(`http://localhost:3000/item/hairs`);
    setHairsList(result.data);
  };
  const getBlousesFromDB = async () => {
    let result = await axios.get(`http://localhost:3000/item/blouses`);
    setBlousesList(result.data);
  };
  const getFullDollsFromDB = async () => {
    let result = await axios.get(`http://localhost:3000/item/fullbodies`);
    setFullDollsList(result.data);
  };

    const updateSkirt = async (skirt) => {
    const skirtToUpdate = skirtsList.find(s => s._id === skirt._id)
    await axios.put(`http://localhost:3000/item/skirts/:${skirtToUpdate._id}`, skirtToUpdate);
    this.getSkirtsFromDB();
  };

  const values = [skirtsList, hairsList, blousesList, fullDollsList, updateSkirt];

  return <ItemsContext.Provider value={values}>{children}</ItemsContext.Provider>;
}
