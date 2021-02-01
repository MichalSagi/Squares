import React from "react";
import { Link } from "react-router-dom";
import { PageHeader, Tooltip } from "antd";
import {  HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import logo from "../assets/Squares-logo.jpg";

export default function Navbar() {

  return (
    <div key="a">
      <PageHeader
        title="SQUARES"
        subTitle="Designed by a 10 years old."
        avatar={{ src: logo, size: 64, shape: "square", objectfit: "contain" }}
        extra={[
          <Link to="/home" key="homeIcon" alt="">
            <Tooltip title="Go to Home" color={'#c41d7f'} key={'#c41d7f'}>
              <HomeOutlined className="manuIcon" />
            </Tooltip>
          </Link>,
          <Link to="/shopping" key="shoppingIcon">
             <Tooltip title="Go to Shopping Cart" color={'#c41d7f'} key={'#c41d7f'}>
            <ShoppingCartOutlined className="manuIcon" /></Tooltip>
          </Link>,
        ]}
        key={"navbar"}
      />
    </div>
  );
}
