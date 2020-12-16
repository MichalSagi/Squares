import React, { useContext, createContext } from "react";
import axios from "axios";

const ItemsContext = createContext();

export function useItems() {
  return useContext(ItemsContext);
}

export function ItemsProvider({ children }) {
  const skirtsList = getSkirtsFromDB();
  // const [hairs, setHairs] = getHairsFromDB();
  // const [blouses, setBlouses] = getBlousesFromDB();
  // const [fullDolls, setFullDolls] = getFullDollsFromDB();

  const getSkirtsFromDB = async () => {
    let result = await axios.get("http://localhost:3001/item/skirts");
    console.log(result.data)
  };
  // const getHairsFromDB = async () => {
  //   let result = await axios.get("http://localhost:3001/item/hairs");
  //   console.log(result.data)
  // };
  // const getBlousesFromDB = async () => {
  //   let result = await axios.get("http://localhost:3001/item/blousess");
  //   console.log(result.data)
  // };
  // const getFullDollsFromDB = async () => {
  //   let result = await axios.get("http://localhost:3001/item/fullbodies");
  //   console.log(result.data)
  // };

  return <ItemsContext.Provider value={{ skirtsList,  }}>{children}</ItemsContext.Provider>;
}
