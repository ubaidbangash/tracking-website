// import { Col, Row } from 'antd'
// import React from 'react'
// import './Project.css';
// import Anim3 from '../Anim3.json';
// //  import Fast from  './Fast.json';
// import Anim from '../Anim.json'
// import Anim2 from '../Anim2.json'
// import Lottie from "lottie-react";

// import img1 from '../Images/android1.png'
// import logistic from '../Images/logistic.png'
// import luggs from '../Images/luggs.png'
// import premium from '../Images/premium.png'
// import yilomi from '../Images/yilomi.png'
// import Footer from './Footer';
// import MyNavbar from './MyNavbar';
// import { useNavigate } from 'react-router-dom';

// const Project = () => {
//   const navigate = useNavigate()
//   return (
//     <div>
//       <div style={{ height: '100px' }}>
//         <Lottie style={{ height: "auto" }} animationData={Anim2} />
//       </div>
//       <MyNavbar />
//       <div className='project-section'>
//         <Row gutter={[0, 0]}>
//           <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
//             <p className='head-section'>PROJECTS</p>
//             <p className='sub-head-section'>We Build Commercially <br />Creative Websites And Apps </p>
//             <p>There are many variations of passages of Lorem Ipsum available,
//               but the majority have suffered alteration in some form, <br />
//               by injected humour, or randomised words which don't
//               look even slightly believable.</p>
//           </Col>
//           <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
//             <img onClick={() => navigate("/traking")} src={logistic} alt='img' style={{ width: "625px" }} />
//           </Col>

//           <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
//             <img onClick={() => navigate("/luggs")} src={premium} alt='img' style={{ width: "625px" }} />
//           </Col>

//           <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
//             <img onClick={() => navigate("")} src={yilomi} alt='img' style={{ width: "625px" }} />
//           </Col>

//           <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
//             <img onClick={() => navigate("")} src={luggs} alt='img' style={{ width: "625px" }} />
//           </Col>

//         </Row>
//         <Footer />

//       </div>
//     </div>
//   )
// }

// export default Project

import { Col, Row } from "antd";
import React from "react";
import "./Project.css";
import Anim3 from "../Anim3.json";
//  import Fast from  './Fast.json';
import Anim from "../Anim.json";
import Anim2 from "../Anim2.json";
import Lottie from "lottie-react";

import img1 from "../Images/android1.png";
import logistic from "../Images/logistic.png";
import luggs from "../Images/luggs.png";
import premium from "../Images/premium.png";
import yilomi from "../Images/yilomi.png";
import Footer from "./Footer";
import MyNavbar from "./MyNavbar";
import { useNavigate } from "react-router-dom";

const projectArr = [
  {
    id: 1,
    img: logistic,
    path: "/traking",
  },
  {
    id: 2,
    img: premium,
    path: "/premium",
  },
  {
    id: 3,
    img: yilomi,
    path: "/yilomi",
  },
  {
    id: 4,
    img: luggs,
    path: "/luggs",
  },
];

const Project = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ height: "100px" }}>
        <Lottie style={{ height: "auto" }} animationData={Anim2} />
      </div>
      <MyNavbar />
      <div className="project-section">
        <Row gutter={[0, 0]}>
          <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
            <p className="head-section">PROJECTS</p>
            <p className="sub-head-section">
              We Build Commercially <br />
              Creative Websites And Apps{" "}
            </p>
            <p className="head-para">
              Our team of experts gives clients the confidence they need in four
              performance areas:
              <br />
              IT consulting ang optimizations,Web Design & Development,Mobile
              App Development and Software Testing
            </p>
          </Col>

          {projectArr.map((item) => {
            return (
              <>
                <Col
                  key={item.id}
                  xxl={12}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={24}
                  xs={24}
                >
                  <img
                    onClick={() => navigate(item.path)}
                    src={item.img}
                    alt="img"
                    style={{ width: "410px" }}
                  />
                </Col>
              </>
            );
          })}
        </Row>
        <Footer />
      </div>
    </div>
  );
};

export default Project;
