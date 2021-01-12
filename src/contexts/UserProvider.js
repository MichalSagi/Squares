import React, { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext();
// export const isLoggedIn = createContext({
//   isLoggedIn: false,
//   isLoggedIn: () => {},
// });

export function UserProvider({ children }) {
  const [user, setUser] = useState({});

    const getUser = async (id) => {
    let result = await axios.get(`http://localhost:3000/user/login/:${id}`);
    setUser(result.data);
  };

  const checkUser = async (user) => {
    // console.log(user)
    const result = await axios.post(`http://localhost:3000/auth/login`, user);
    const id = result.data[0]._Id;
    getUser(id);
  };

  const saveUser = async (user) => {
    const result = await axios.post("http://localhost:3000/auth/register", user);
    const id = result.data[0]._id;
    getUser(id)
  };

  const saveFavorites = async (id) => {
    await axios.post(`/user/favorites`, {
      userId: this.userId,
    });
    this.getUser(this.userId);
  };

  const deleteFavorite = async (id) => {
    await axios({
      url: `/user/favorites`,
      method: "DELETE",
      data: { creatorId: id, userId: this.userId },
    }).then((res) => {
      this.favorites = this.favorites.filter((favorite) => favorite._id !== id);
    });
  };

  const values = [getUser, checkUser, saveUser, saveFavorites, deleteFavorite, user];
  
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}
