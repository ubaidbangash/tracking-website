import React from "react";
import "./Projects.css";
import styled from "styled-components";
import SliderComp from "./Slider";
import { Zoom } from "react-awesome-reveal";

const proData = [
  {
    title: "OUR TEAM",
    text: "It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Projects = () => {
  return (
    <Container id="project">
      {proData.map((item) => {
        return (
          <>
            <Zoom>
            <div class="site-heading text-center">
            <p style={{fontSize:'1.9rem', fontWeight:'700'}}>OUR<span > TEAM </span></p>
              
            
            <h4>With Over 5 years combined experience,we've got a well seasoned team at the helm</h4>
            
          </div>
              
            </Zoom>
            <Slide>
              <SliderComp />
            </Slide>
          </>
        );
      })}
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h2 {
    font-size: 1.9rem;
    color: #ba3030;
    font-size:1.9rem;
    font-weight:700;
  }
  span{
    color:#ba3030;
    font-size:1.9rem;
    font-weight:700;
  }
  h4{
    color:black;
    font-weight: 500;
    font-size: 14px;
  }
  .site-heading h4::before {
    background: #ba3030;
    bottom: 0;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -25px;
    position: absolute;
    width: 50px;
  }
   {
    
    margin: 0 auto;
    padding: 1rem 0;
    font-size: 0.9rem;
    color: black;
    @media (max-width: 500px) {
      width: 90%;
    }
  }
`;
const Slide = styled.div``;
