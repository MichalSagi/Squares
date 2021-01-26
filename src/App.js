import React, { useContext, useState, createElement } from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CategoryItems from "./components/CategoryItems";
import Login from "./components/Login";
import { ItemsProvider } from "./contexts/ItemsProvider";
// import { UserProvider } from "./contexts/UserProvider";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import { Layout, Menu } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, ShoppingCartOutlined, HomeOutlined } from "@ant-design/icons";

function App() {
  // const [ isLoggedIn, setIsLoggedIn ] = useContext(IsLoggedInContext);
  // console.log(isLoggedIn)
  const { Header, Sider, Content, Footer } = Layout;
  const [collapsed, setCollapsed] = useState(true);

  const toggel = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <div className="App">
      {/* <UserProvider> */}
      <ItemsProvider>
        <Router>
          <Layout>
            <Header className="App" style={{ padding: 0 }}>
              <Navbar />
            </Header>
          </Layout>
          <Layout>
            <Content className="App" style={{ position: "inherit" }}>
              {/* <Route path="/" render={() => (isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/auth/login" />)} /> */}
              {/* <Route path="/" render={() => <Redirect to="/dashboard" /> } /> */}
              <Route path="/auth/login" exact render={() => <Login />} />
              <Route path="/auth/register" exact render={() => <Login />} />
              <Route path="/dashboard" exact render={() => <Dashboard />} />
              <Route path="/" exact render={() => <Dashboard />} />
              <Route path="/item" render={() => <CategoryItems />} />
              <Route path="/shopping" render={() => <ShoppingCart />} />
            </Content>
          </Layout>
          {/* <Layout>
            <Footer>Footer</Footer>
          </Layout> */}
        </Router>
      </ItemsProvider>
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
