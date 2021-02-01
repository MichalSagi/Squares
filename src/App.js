import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CategoryItems from "./components/CategoryItems";
import { ItemsProvider } from "./contexts/ItemsProvider";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import { Divider, Layout } from "antd";

function App() {
  const { Header, Content } = Layout;

  return (
    <div className="App">
      <ItemsProvider>
        <Router>
          <Layout>
            <Header className="App" style={{ position: "fixed", zIndex: 1, width: "100%" }}>
              <Navbar />
            </Header>
            <Content className="App" style={{ padding: "0 50px", marginTop: 64 }}>
              <Route path="/home" exact render={() => <HomePage />} />
              <Route path="/" exact render={() => <HomePage />} />
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
