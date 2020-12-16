import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { Card, Col, Row, Space } from "antd";
import HairPic from "../assets/Squares (16).jpg";
import BlousePic from "../assets/Squares (18).jpg";
import SkirtPic from "../assets/Squares (17).jpg";
import squareDispaly from "../assets/Squares (3).jpg";

export default function MainCategoryCard() {
  const { Meta } = Card;
  const [page, setPage] = useState("");
  const history = useHistory();

  const cardsCategory = [
    { src: HairPic, title: "Hair" },
    { src: BlousePic, title: "Blouse" },
    { src: SkirtPic, title: "Skirt" },
    { src: squareDispaly, title: "Full Doll" },
  ];

  const handleOnClick = useCallback(() => history.push(`/items/${page.toLowerCase()}s`), [history, page]);

  return (
    <div className="space-align-container" id="dashboard" style={{ alignitems: "center", justifyitems: "center" }}>
      <Space align="center" justifycontent="space-evenly">
        <Row>
          {cardsCategory.map((category, i) => (
            <Col span={6} key={i}>
              <Card
                data-id={category.title}
                style={{ width: 'auto' }}
                hoverable
                cover={<img alt={category.title} src={category.src} />}
                onMouseEnter={() => setPage(category.title)}
                onClick={handleOnClick}
              >
                <Meta title={`Choose Your ${category.title} Style`} />
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
}
