// import React from 'react'
// import { Link } from 'react-router-dom';
// import './Navbar.css'
// // import logo from '../Images/logo.png'

// const Navbar = () => {
//   return (
//     <div className='menu'>

//    <div className='col-12'>
//    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
//    <a href="" className='navbar-brand '><h1>  GPS TRACK </h1></a>

//    <button className="navbar-toggler" data-toggle="collapse" data-target="#my-navbar">
//         <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="my-navbar">
//    <ul className='navbar nav mx-auto'>
//    <li className='nav-item'>
//    <Link  to="/" className='nav-link active'>Home</Link>

//    </li>
//    <li className='nav-item'>
//    <Link to="/project" className='nav-link ' >Projects</Link>

//    </li>
//    <li className='nav-item'>
//    <Link to="/portfolio"   className='nav-link '>PortFolio</Link>

//    </li>
//    <li className='nav-item'>

//    <Link to="/contact" className='nav-link'>Contact Us</Link>

//    </li>

//    </ul>

//    </div>

//    </nav>

//    </div>

// </div>
//   )
// }

// export default Navbar

// import React from 'react'
// import './Navbar.css'
// import { Link } from 'react-router-dom';

// const MyNavbar = () => {
//   return (
//     <div className='container-fluid'>
//       <div className='row'>
//         <div className='col'>
//           <nav className='navbar navbar-expand-sm navbar-light  '>
//             <a href='' className='navbar-brand'><h2>GPS TRACK</h2></a>
//             <button className='navbar-toggler' data-toggle="collapse" data-target="#mynavbar">
//               <span className='navbar-toggler-icon'></span>
//             </button>
//             <div className='collapse navbar-collapse' id="mynavbar">
//               <ul className='navbar-nav ml-auto'>

//                 <li className='nav-item'>
//                   <Link to="/" className='nav-link '>Home</Link>
//                 </li>

//                 <li className='nav-item'>
//                   <Link to="/project" className='nav-link ' >Projects</Link>
//                 </li>

//                 <li className='nav-item'>
//                   <Link to="/portfolio" className='nav-link '>PortFolio</Link>
//                 </li>

//                 <li className='nav-item'>
//                   <Link to="/contact" className='nav-link'>Contact Us</Link>
//                 </li>

//               </ul>
//             </div>
//           </nav>

//         </div>

//       </div>
//     </div>
//   )
// }

// export default MyNavbar

import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";

const MyNavbar = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar expand="sm">
            <Container>
              <Navbar.Brand>GPS TRACKING</Navbar.Brand>
              <Navbar.Toggle aria-controls="my-nav" />
              <Navbar.Collapse id="my-nav">
                <Nav className="mx-auto nav-items">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/project">Project</Nav.Link>
                  <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};
export default MyNavbar;
