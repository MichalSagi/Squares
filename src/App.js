import React, { useContext, useState, createElement } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CategoryItems from "./components/CategoryItems";
import Login from "./components/Login";
import { ItemsProvider } from "./contexts/ItemsProvider";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import { Layout } from "antd";

function App() {
  const { Header, Content } = Layout;

  return (
    <div className="App">
      <ItemsProvider>
        <Router>
          <Layout>
            <Header className="App" style={{ padding: 0 }}>
              <Navbar />
            </Header>
          </Layout>
          <Layout>
            <Content className="App" style={{ position: "inherit" }}>
              <Route path="/auth/login" exact render={() => <Login />} />
              <Route path="/auth/register" exact render={() => <Login />} />
              <Route path="/dashboard" exact render={() => <Dashboard />} />
              <Route path="/" exact render={() => <Dashboard />} />
              <Route path="/item" render={() => <CategoryItems />} />
              <Route path="/shopping" render={() => <ShoppingCart />} />
            </Content>
          </Layout>
        </Router>
      </ItemsProvider>
    </div>
  );
}

export default App;
