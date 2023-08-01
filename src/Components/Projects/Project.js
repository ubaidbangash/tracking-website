import React from "react";
import styled from "styled-components";
import "./Projects.css";

const Project = (props) => {
  const { img, disc, name } = props.item;
  return (
    <>
      <Container className="project">
        <img src={img} alt="project" />

        <div className="disc">
          <h1>{props.disc}</h1>
        </div>
      </Container>
      <div className="ourteam_name">
        <p>{name}</p>
      </div>
    </>
  );
};

export default Project;

const Container = styled.div`
  margin-top: 3rem;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    margin-top: 3rem;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;

    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;
      color: yellow;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }
  :hover > img {
    transform: scale(1.3);
    padding-top: 1rem;
  }
  :hover > .disc {
    bottom: 0;
    padding: 1rem;
  }
  p {
    color: blue;
  }
`;
