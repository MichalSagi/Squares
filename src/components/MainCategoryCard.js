import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Card, Space } from "antd";
import HairPic from "../assets/Squares (16).jpg";
import BlousePic from "../assets/Squares (18).jpg";
import SkirtPic from "../assets/Squares (17).jpg";
import squareDispaly from "../assets/Squares (3).jpg";

export default function MainCategoryCard() {
  const { Meta } = Card;
  const [page, setPage] = useState();
  const history = useHistory();
  const cardsCategory = [
    { src: squareDispaly, title: "Full Doll" },
    { src: HairPic, title: "Hair" },
    { src: BlousePic, title: "Blouse" },
    { src: SkirtPic, title: "Skirt" }
  ];

  const handleOnClick = useCallback(() => history.push(`/item/${page.toLowerCase()}s`), [history, page]);

  return (
    <div className="space-align-container" id="dashboard">
      {cardsCategory.map((category, i) => (
        <Space key={i}>
          <Card
            data-id={category.title}
            style={{ width: "330px", margin: '20px', alignItems: 'center' }}
            hoverable
            cover={<img alt={category.title} src={category.src} />}
            onMouseEnter={() => setPage(category.title)}
            onClick={handleOnClick}
          >
            <Meta title={`Choose Your ${category.title} Style`} />
          </Card>
        </Space>
      ))}
    </div>
  );
}
