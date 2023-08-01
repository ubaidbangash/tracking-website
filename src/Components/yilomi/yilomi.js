import { Col, Row } from "antd";
import React from "react";
import "./yilomi.css";
import yilomi1 from "../../Images/yilomi1.png";
import yilomi2 from "../../Images/yilomi2.png";
import yilomi3 from "../../Images/yilomi3.png";
import yilomi4 from "../../Images/yilomi4.png";
import yilomi5 from "../../Images/yilomi5.png";
import { Container } from "react-bootstrap";
const yilomiData = [
  {
    img: yilomi1,
  },
  {
    img: yilomi2,
  },
  {
    img: yilomi3,
  },
  {
    img: yilomi4,
  },
];
const Yilomi = () => {
  return (
    <Container>
      <div className="yilomi-section">
        <Row gutter={[24, 24]}>
          {yilomiData.map((item) => {
            return (
              <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                <img src={item.img} />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};
export default Yilomi;
