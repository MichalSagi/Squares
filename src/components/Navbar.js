import React, { createElement, useState } from "react";
import { Link } from "react-router-dom";
import { PageHeader, Menu, Dropdown, Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, MenuOutlined, HomeOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../assets/Squares-logo.jpg";

export default function Navbar() {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  const toggel = () => {
    if (collapsed) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };

  const layout = (
    <Layout style={{ position: 'fixed', right: 0 }}>
      <Sider className="App" trigger={null} collapsible collapsed={collapsed} style={{width: 50}}>
        <div className="logo" />
        <Menu className="sider">
          <Menu.Item key="dashboard" icon={<HomeOutlined />}>
            <Link to="/dashboard">Choose Square</Link>
          </Menu.Item>
          <Menu.Item key="shopping" icon={<ShoppingCartOutlined />}>
            <Link to="/shopping">Shopping Cart</Link>
          </Menu.Item>
          <Menu.Item key="login" icon={<UserOutlined />}>
            <Link to="/auth/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );

  return (
    <div>
      <PageHeader
        title="SQUARES"
        subTitle="Design by: Idan Gafni"
        avatar={{ src: logo, size: 64, shape: "square", objectfit: "contain" }}
        extra={createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: "trigger",
          onClick: toggel,
        })}
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
        key={"navbar"}
      >{layout}</PageHeader>
    </div>
  );
}
