import React from "react";
import "../css/Singleproject.css";
import Share from "@material-ui/icons/ShareOutlined";
import Github from "@material-ui/icons/GitHub";

function Singleproject({ name, tech, githubLink, hostedLink, image }) {
  return (
    <div
      className="singleProject"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="singleProjectDesc">
        <div className="singleProject_title">
          <h3>{name}</h3>
        </div>
        <div className="tech_list">
          <ul>
            <li>{tech}</li>
          </ul>
        </div>
        <div className="link">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <Github />
            </a>
          )}
          {hostedLink && (
            <a href={hostedLink} target="_blank" rel="noreferrer">
              <Share />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Singleproject;
