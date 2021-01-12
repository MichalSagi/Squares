import React, { useContext } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CategoryItems from "./components/CategoryItems";
import Login from "./components/Login";
import { ItemsProvider } from "./contexts/ItemsProvider";
// import { UserProvider } from "./contexts/UserProvider";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  // const [ isLoggedIn, setIsLoggedIn ] = useContext(IsLoggedInContext);
  // console.log(isLoggedIn)

  return (
    <div className="App">
      {/* <UserProvider> */}
        <ItemsProvider>
          <Router>
            <Navbar />
            {/* <Route path="/" render={() => (isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/auth/login" />)} /> */}
            {/* <Route path="/" render={() => <Redirect to="/dashboard" /> } /> */}
            <Route path="/auth/login" exact render={() => <Login />} />
            <Route path="/auth/register" exact render={() => <Login />} />
            <Route path="/dashboard" render={() => <Dashboard />} />
            <Route path="/item" render={() => <CategoryItems />} />
            <Route path="/shopping" render={() => <ShoppingCart />} />
          </Router>
        </ItemsProvider>
      {/* </UserProvider> */}
    </div>
  );
}
 
export default App;
