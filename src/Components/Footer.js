// // import React from "react";
// // import "./Footer.css";
// // import { FcBullish } from "react-icons/fc";
// // import facebook from "../Images/facebook.png";
// // import twitter from "../Images/twitter.png";
// // import icon1 from "../Images/icon1.png";
// // import icon2 from "../Images/icon2.png";
// // import icon3 from "../Images/icon3.png";
// // import icon4 from "../Images/icon4.png";

// // const Footer = () => {
// //   return (
// //     <div className="footer">
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-md-4 col-sm-12">
// //             <div className="foot-head">
// //               <h3>Our Services</h3>
// //               <div className="foot-paragraph">
// //                 <p>IT Consulting</p>
// //                 <p>Web Development</p>
// //                 <p>QA & Software Test</p>
// //                 <p>UX & Software Testing</p>
// //                 <p>Mobile App Development</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-md-4 col-sm-12">
// //             <div className="foot-head">
// //               <h3>Contact Info</h3>
// //               <div className="foot-paragraph">
// //                 <p>FAQ</p>
// //                 <p>How it Works</p>
// //                 <p>Features</p>
// //                 <p>Contact</p>
// //                 <p>Reporting</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="col-md-4 col-sm-12">
// //             <div className="foot-head">
// //               <h3>We are Social</h3>
// //               <div className="icon">
// //                 <div className="card-icon-footer">
// //                   <img src={icon1} alt="" style={{ margin: "8px" , width:'30px'}} />
// //                   <img src={icon2} alt="" style={{ margin: "8px", width:'30px' }} />
// //                   <img src={icon3} alt="" style={{ margin: "8px",width:'30px' }} />
// //                   <img src={icon4} alt="" style={{ margin: "8px",width:'30px' }} />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Footer;

import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>

<div className="footer">
  <div className="container">
    <div className="row">
      <div className="col-footer col-md-4 col-sm-6 col-xs-12 text-center">
        <h3 >Our Services</h3>
        <ul>
          <li className='mt-2'><a href="">IT Consulting</a></li>
          <li className='mt-2'><a href="">Web Development</a></li>
          <li className='mt-2'><a href="">QA & Software Test</a></li>
          <li className='mt-2'><a href="">UX & Software Testing</a></li>
          <li className='mt-2'><a href="">Mobile App Development</a></li>
        </ul>
      </div>
      <div className="col-footer col-md-4 col-sm-6 col-xs-12 text-center">
        <h3>Contact Info</h3>
        <ul>
          <li className='mt-2'><a href="">FAQ</a></li>
          <li className='mt-2'><a href="">Contact</a></li>
          <li className='mt-2'><a href="">Features</a></li>
          <li className='mt-2'><a href="">Reporting</a></li>
          <li className='mt-2'><a href="">How it Works</a></li>
        </ul>
      </div>
      <div className="col-footer col-md-4 col-sm-6 col-xs-12 text-center">
        <h3 className='text-black'>We are Social</h3>
        <ul class="social-icons d-flex pl-5">
        <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
        <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
        <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
      </ul>
		    		</div>

    </div>
  </div>
    </div>
    </div>
  );
}

export default Footer;


