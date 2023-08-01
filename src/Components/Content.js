// import React from 'react'
// import './Content.css'
// import { Carousel, Col, Container, Row } from 'react-bootstrap'
// import mobile from '../Images/mobile.png'
// import store from '../Images/store.png'
// import explore from '../Images/explore.svg'
// import android from '../Images/android.png'
// import android1 from '../Images/android1.png'
// import android2 from '../Images/android2.png'
// import android3 from '../Images/android3.png'
// import android4 from '../Images/android4.png'
// import android5 from '../Images/android5.png'
// import { useNavigate } from 'react-router-dom'

// const Content = () => {
//   const navigate = useNavigate()

//   return (
//     <div className='content'>

//       <div className='top-text'>
//         <h4 >OUR TRACKING PROJECTS</h4>
//       </div>
//       <div className='carousel-slide'>
//         <Container>
//           <Row>
//             <Col>
//               <Carousel fade>
//                 <Carousel.Item interval={2000}>
//                   <div className='android-pic'>
//                     <img src={android5} alt="" />
//                   </div>
//                 </Carousel.Item >

//                 <Carousel.Item interval={2000}>
//                   <div className='android-pic'>
//                     <img src={android1} alt="" />
//                   </div>
//                 </Carousel.Item>
//                 <Carousel.Item interval={2000}>
//                   <div className='android-pic'>
//                     <img src={android2} alt="" />
//                   </div>
//                 </Carousel.Item >
//                 <Carousel.Item interval={2000}>
//                   <div className='android-pic'>
//                     <img src={android3} alt="" />
//                   </div>
//                 </Carousel.Item >
//                 <Carousel.Item interval={2000}>
//                   <div className='android-pic'>
//                     <img src={android4} alt="" />
//                   </div>
//                 </Carousel.Item >

//               </Carousel >

//               <div className='explore-pic'>
//                 <img onClick={() => navigate("/project")} src={explore} alt="" />
//               </div>

//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </div>

//   )
// }

// export default Content

import React from "react";
import "./Content.css";
import mobile from "../Images/mobile.png";
import store from "../Images/store.png";
import explore from "../Images/explore.svg";
import android from "../Images/android.png";
import android1 from "../Images/android1.png";
import android2 from "../Images/android2.png";
import android3 from "../Images/android3.png";
import android4 from "../Images/android4.png";
import android5 from "../Images/android5.png";

const Test = () => {
  return (
    <section className="slideshow ">
      <p>OUR TRACKING PROJECTS</p>
      <div className="entire-content">
        <div className="content-carrousel">
          <figure className="shadow">
            <img src={android1} />
          </figure>
          <figure className="shadow">
            <img src={android2} />
          </figure>
          <figure className="shadow">
            <img src={android3} />
          </figure>
          <figure className="shadow">
            <img src={android4} />
          </figure>
          <figure className="shadow">
            <img src={android5} />
          </figure>
          <figure className="shadow">
            <img src={android1} />
          </figure>
          <figure className="shadow">
            <img src={android2} />
          </figure>
          <figure className="shadow">
            <img src={android3} />
          </figure>
          <figure className="shadow">
            <img src={android4} />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Test;
