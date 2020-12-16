import React from "react";
import MainCategoryCard from "./MainCategoryCard";
import { Image } from "antd";
import squareDispaly from "../assets/Squares (2).jpg";

export default function Dashboard() {
  return (
    <div>
      <MainCategoryCard />
      <div style={{ hight: 400 }}>
        <Image src={squareDispaly} alt="Squares display" style={{ margin: "50px", height: "300px", width: "auto" }} />
      </div>
    </div>
  );
}
