import React from "react";
import "./ExploreGallery.css";
import { Col, Row } from "antd";
import trakingImg1 from "../../Images/android4.png";
import trakingImg2 from "../../Images/android5.png";
import track1 from "../../Images/track1.png";
import track2 from "../../Images/track2.png";
import track3 from "../../Images/track3.png";
import track4 from "../../Images/track4.png";
const trackArr = [
  {
    img: track1,
  },
  {
    img: track2,
  },
  {
    img: track3,
  },
  {
    img: track4,
  },
  
];
const ExploreGallery = () => {
  return (
    <div className="traking-img">
      <Row gutter={[0, 24]}>
        {trackArr.map((item) => {
          return (
            <>
              <Col xxl={24} xl={24} lg={24} md={24} sm={12} xs={12}>
                <img src={item.img} width="100%" alt="img" />
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};
export default ExploreGallery;
