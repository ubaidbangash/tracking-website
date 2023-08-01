import React from "react";
import "./style.css";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import Explore1 from "../../Images/android1.png";
import Explore2 from "../../Images/android2.png";

const exploreArr = [
  {
    id: "1",
    img: Explore1,
    path: "/traking",
  },
  {
    id: "2",
    img: Explore2,
    path: "/luggs",
  },
  {
    id: "3",
    img: Explore1,
    path: "",
  },
  {
    id: "4",
    img: Explore2,
    path: "",
  },
];

const ExploreImage = () => {
  const navigate = useNavigate();
  return (
    <div className="explore-images">
      <Row gutter={[24, 24]}>
        {exploreArr.map((item) => {
          return (
            <Col key={item.id} xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
              <img
                onClick={() => navigate(item.path)}
                className="explore-img1"
                src={item.img}
                alt="img"
                width="100%"
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ExploreImage;
