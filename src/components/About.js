// pages/profile.js

import React from "react";
import { Row, Col } from "react-materialize";

// about component exports the component
const About = () => {
  return (
    <>
      <div>
        <div className="row">
          <br />
          <p className="education-title">
            {" "}
            Hi, My name is Leon. Im a Full Stack Web Developer living in Cape
            Town{" "}
          </p>
        </div>
        <div className="row">
          <br />
          <p className="education-title">
            {" "}
            Full Stack Web Developer(MERN), HTML - CSS - JS - REACT - Express -
            Node - Python - Django{" "}
          </p>
        </div>
        <Row>
          <Col>
            <p className="about-parr">
              Full Stack web developer with extensive experience in supply chain
              and manufacturing. Taking the years of experience in meeting
              deadlines, finding solutions, solving problems and just plain
              getting things done. And taking the same drive and passion into an
              exciting new Tech career.{" "}
            </p>
          </Col>
        </Row>

        <div>
          <h2 className="education-title">
            Full Stack Web Developer Bootcamp - HyperionDev 2020
          </h2>
          <h3 className="about-parr">
            {" "}
            Field of study: Full Stack web Development with the M.E.R.N. stack{" "}
          </h3>
          <div className="about-parr">
            <p className="about-parr">
              Specialization - Web Page, Digital/Multimedia and Information
              Resources Design
            </p>
          </div>
        </div>

        <div>
          <h3 className="education-title">
            Programme in Purchasing and Supply Management - UNISA 2015
          </h3>
          <h3 className="about-parr">
            Field of study: Purchasing, Procurement/Acquisitions and Contracts
            Management{" "}
          </h3>
          <div className="about-parr">
            <p className="about-parr">
              Specialization - Procurement and Stock Control
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
