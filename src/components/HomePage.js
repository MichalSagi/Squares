import React from "react";
import MainCategoryCard from "./MainCategoryCard";
import { Image, Row } from "antd";
import squareDisplay from "../assets/Squares (2).jpg";

export default function HomePage() {
  return (
    <div style={{position: 'relative'}}>
      <MainCategoryCard />
      <div id='homePageContainer'>
        <Row>
        <Image src={squareDisplay} alt="Squares display" /></Row>
      </div>
    </div>
  );
}
