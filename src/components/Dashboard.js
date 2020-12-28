import React from "react";
import MainCategoryCard from "./MainCategoryCard";
import { Image } from "antd";
import squareDispaly from "../assets/Squares (2).jpg";

export default function Dashboard() {
  return (
    <div style={{position: 'relative'}}>
      <MainCategoryCard />
      <div id='dashboardContainer'>
        <Image src={squareDispaly} alt="Squares display" />
      </div>
    </div>
  );
}
