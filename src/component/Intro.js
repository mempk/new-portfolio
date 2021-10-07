import React from "react";
import "../css/Aboutme.css";
import profilePic from "../images/portfolio.jpg";
function Intro() {
  return (
    <div className="aboutMe">
      <div className="Component_body">
        <div className="Component_body_description">
          <div className="Component_header">
            <div> Get To Know Me</div>
          </div>
          <p>
            Hello! My name is Madhav and I enjoy web development. I’ve had the
            privilege of working at the only federally funded{" "}
            <a href="https://theicn.org/" target="_blank" rel="noreferrer">
              national center
            </a>{" "}
            and a{" "}
            <a href="https://fii-usa.com/" target="_blank" rel="noreferrer">
              huge corporation
            </a>
            . These days I am focusing on building accessible and inclusive
            products to digitalize traditional manufacturing at Foxconn
            Industrial Internet.
          </p>
          <p>Here are a few technologies I’ve been working with:</p>
          <div className="work_description_list">
            <ul className="skill_list">
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Rest API</li>
              <li>Grafana</li>
              <li>Node.js</li>
              <li>Java</li>
              <li>Spring MVC</li>
              <li>Hibernate</li>
              <li>MySQL/SQL</li>
              <li>Git</li>
              <li>Docker</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
        <div className="profile_pic">
          <img className="profile_image" src={profilePic} alt="profile pic" />
        </div>
      </div>
    </div>
  );
}

export default Intro;
