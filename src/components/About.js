// pages/profile.js

import React from "react";
import { Container, Row, Col } from "react-materialize";

// about component exports the component
const About = () => {
  return (
    <>
      <div>
        <div className="row">
          <p className="main-title">
            {" "}
            Hi, My name is Leon. I'm a Full Stack Web Developer.{" "}
          </p>
        </div>
        <img
          className="cup-image"
          src="https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204_960_720.png"
          alt="image of a coffee cup with the text 'Talk <code /> to me' "
        ></img>
        <Container>
          <Row>
            <Col className="blue light-4 white-text" s={3}>
              {" "}
              <p className="education-title">
                {" "}
                Full Stack Web Developer (MERN), HTML - CSS - JS - REACT -
                Express - Node - Python - Django{" "}
              </p>
            </Col>

            <Col s={9}>
              <p className="about-parr">
                Full Stack web developer with extensive experience in supply
                chain and manufacturing. Taking the years of experience in
                meeting deadlines, finding solutions, solving problems and just
                plain getting things done, taking that same drive and passion
                into an exciting new Tech career.{" "}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="blue light-4 white-text" s={3}>
              <h2 className="education-title">
                Full Stack Web Developer Bootcamp - HyperionDev 2020
              </h2>
            </Col>
            <Col s={9}>
              <h3 className="about-parr">
                {" "}
                Field of study: Full Stack web Development with the M.E.R.N.
                stack{" "}
              </h3>
              <div className="about-parr">
                <p className="about-parr">
                  Specialization - Web Page, Digital/Multimedia and Information
                  Resources Design
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {" "}
            <Col className="blue light-4 white-text" s={3}>
              <h3 className="education-title">
                Programme in Purchasing and Supply Management - UNISA 2015
              </h3>
            </Col>
            <Col s={9}>
              <h3 className="about-parr">
                Field of study: Purchasing, Procurement/Acquisitions and
                Contracts Management{" "}
              </h3>
              <div className="about-parr">
                <p className="about-parr">
                  Specialization - Procurement and Stock Control
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
