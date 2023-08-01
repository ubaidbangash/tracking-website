import { Col, Row } from "antd";
import React from "react";
import "./lugg.css";
import lugg1 from "../../Images/lugg1.png";
import lugg2 from "../../Images/lugg2.png";
import lugg3 from "../../Images/lugg3.png";
import lugg4 from "../../Images/lugg4.png";
import { useNavigate } from "react-router-dom";
const luggData = [
  {
    img: lugg1,
  },
  {
    img: lugg2,
  },
  {
    img: lugg3,
  },
  {
    img: lugg4,
  },
];
const Luggs = () => {
  return (
    <div className="lugg-section">
      <Row gutter={[0, 24]}>
        {luggData.map((item) => {
          return (
            <Col xxl={24} xl={24} lg={24} md={24} sm={12} xs={12}>
              <img src={item.img} alt="" />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default Luggs;
