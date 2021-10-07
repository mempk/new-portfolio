import React from "react";
import Singleproject from "./Singleproject";
import "../css/Singleproject.css";
import icn from "../images/icn.png";
import cnrb from "../images/cnrb.png";
import cnss from "../images/cnss.png";
import goodeats from "../images/goodeats.png";
import outrech from "../images/outreach.png";

function Project() {
  return (
    <div className="work_main">
      <div className="Component_header">
        <div>Things I have Built</div>
      </div>
      <div className="projects_div">
        <Singleproject
          name="GoodEats - Food Delivery App"
          tech="JavaScript(React & Redux), Python, HTML, CSS "
          githubLink="https://github.com/mempk/GoodEats9"
          hostedLink="bitly.com/goodeats9"
          image={goodeats}
        />
        <Singleproject
          name="Recruitment App"
          tech="JavaScript(React), MongoDB, Firestore, HTML, CSS "
          githubLink="https://github.com/mempk/recruitment-app"
          image={outrech}
        />
        <Singleproject
          name="Institute of Child Nutrition"
          tech="JavaScript, PHP, WordPress, HTML, CSS "
          hostedLink="http://theicn.org/"
          image={icn}
        />
        <Singleproject
          name="Child Nutrition Sharing Site"
          tech="JavaScript, PHP, WordPress, HTML, CSS "
          hostedLink="http://theicn.org/cnss"
          image={cnss}
        />
        <Singleproject
          name="Child Nutrition Recipe Box"
          tech="JavaScript, PHP, WordPress, HTML, CSS "
          hostedLink="http://theicn.org/cnrb"
          image={cnrb}
        />
      </div>
    </div>
  );
}

export default Project;
