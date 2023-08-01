import React from "react";
import "./Test.css";
import project from "../Images/project.png";
import { Col, Row } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const Test = () => {
  return (
    <div className="test-main">
      <div className="career-card">
        <Row items="center">
          <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <div>
              <div className="career-card-title">CAREERS</div>
              <div className="disc">Interested in Working with Us?</div>
              <div className="para">
                We are always looking for amazing talent. Be a part of a team
                you can be proud of. Explore some exciting new positions at Mk
                Smart Technologies.
              </div>
            </div>
          </Col>

          <Col
            className="col-two"
            justify="end"
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            sm={24}
            xs={24}
          >
            <div className="career-side">
              <div>
                <CheckCircleOutlined
                  style={{
                    fontSize: "20px",
                    color: "blue",
                    paddingRight: "0.5rem",
                  }}
                />
              </div>
              <div>
                <div className="num">100+</div>
                <div className="projects-complete">projects complete</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Test;
