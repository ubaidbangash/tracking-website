import React from "react";
import "./premium.css";
import { Col, Row } from "antd";
import premium1 from "../../Images/premium1.png";
import premium2 from "../../Images/premium2.png";
import premium3 from "../../Images/premium3.png";
import premium4 from "../../Images/premium4.png";
import premium5 from "../../Images/premium5.png";
import { Container } from "react-bootstrap";

const premiumData = [
  {
    img: premium1,
  },
  {
    img: premium2,
  },
  {
    img: premium3,
  },
  {
    img: premium4,
  },
];

const Premium = () => {
  return (
    <Container>
      <div className="premium-section">
        <Row gutter={[0, 24]}>
          {premiumData.map((item) => {
            return (
              <Col>
                <img src={item.img} />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default Premium;
