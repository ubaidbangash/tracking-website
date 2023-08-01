import React from 'react'
import { FcCallTransfer } from "react-icons/fc";
// import {useEffect,useRef} from 'react'

import './Main.css'
import services from '../Images/services.png'
import { Link, useNavigate } from 'react-router-dom';
//  import Anim from '../Fast.json';
//  import Lottie from "lottie-react"


import ReactWhatsapp from 'react-whatsapp';
import social from '../Images/social.png';
import whatsapp from '../Images/whatsapp.png';
import contact from '../Images/contact.svg'
import { Col, Row } from 'antd';



const Main = () => {
  const navigate = useNavigate()

  return (
    <Row className="main-head">
      <Col xxl={24} xl={24} md={24} sm={24} sx={24}>
        <div className='main'>
          <div className='main-text'>
            <h5>Let's build up your<br />GPS Tracking Mobile App</h5>
          </div>
        </div>
      </Col>
      <Col xxl={24} xl={24} md={24} sm={24} sx={24} >
        <div>
          <ReactWhatsapp className="contact-part" number="+923339688088" message="Hello World!!!"  > <img onClick={() => navigate("/contact")} src={contact} /> </ReactWhatsapp>
        </div></Col>

    </Row>

  )
}

export default Main