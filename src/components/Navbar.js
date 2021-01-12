import React from "react";
import { PageHeader, Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../assets/Squares-logo.jpg";

const menu = (
  <Menu>
    <Menu.Item>
      <a key='dashboard' href="/dashboard" >
        Choose Square
      </a>
    </Menu.Item>
    <Menu.Item>
      <a key='shopping' href="/shopping">
        Shopping Cart
      </a>
    </Menu.Item>
    <Menu.Item>
      <a key='login' href="/auth/login">
        Login
      </a>
    </Menu.Item>
  </Menu>
);

export default function Navbar() {
  return (
    <div>
      <PageHeader
        title="SQUARES"
        subTitle="Design by: Idan Gafni"
        avatar={{ src: logo, size: 64, shape: "square", objectfit: "contain" }}
        extra={[
          <Dropdown overlay={menu}>
            <MenuOutlined />
          </Dropdown>,
        ]}
        // style={{ position: 'fixed', zIndex: 1, width: '100%' }}
      ></PageHeader>
    </div>
  );
}
