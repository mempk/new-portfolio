import React, { useState } from "react";
import "../css/Work.css";
function Work() {
  const [tabName, settabName] = useState("Foxconn");

  const changetab = (e, name) => {
    e.preventDefault();
    settabName(name);
    document.querySelectorAll(".work_title_div a").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  };
  return (
    <div className="work_main parentDiv">
      <div className="Component_header">
        <div>Place I Have Worked</div>
      </div>
      <div className="work">
        <div className="work_title">
          <div className="work_title_div">
            <a
              className="active"
              onClick={(e) => {
                changetab(e, "Foxconn");
              }}
            >
              Foxconn
            </a>
            <a
              onClick={(e) => {
                changetab(e, "childNutrition");
              }}
            >
              ICN
            </a>
            <a
              onClick={(e) => {
                changetab(e, "Outreach");
              }}
            >
              Outreach
            </a>
            <a
              onClick={(e) => {
                changetab(e, "Olemiss");
              }}
            >
              Ole Miss
            </a>
          </div>
        </div>
        <div className="work_desc_container">
          {tabName === "Foxconn" && (
            <div className="work_description">
              <div className="work_description_title">Software Engineer</div>
              <div className="work_description_data">
                Sept 2020 - Present | Mt. Pleasant, Wisconsin
              </div>
              <div className="work_description_list">
                <ul>
                  <li>
                    Design and develop IOT device services which includes web
                    services for facility monitoring systems, surveillance
                    systems and smart industry 4.0 solutions.
                  </li>
                  <li>
                    Develop both custom Content Management System & Client user
                    interface for IOT device market place.
                  </li>
                  <li>
                    Practice Agile Scrum methodology to meet the product
                    requirement and deadline.
                  </li>
                  <li>
                    Maintain detailed functional and technical software
                    specification documents for scalable applications.
                  </li>
                </ul>
              </div>
            </div>
          )}
          {tabName === "childNutrition" && (
            <div className="work_description">
              <div className="work_description_title">Web Developer</div>
              <div className="work_description_data">
                May 2019 - May 2020 | Oxford, MS
              </div>
              <div className="work_description_list">
                <ul>
                  <li>Designed, deployed and launched two sites for ICN.</li>
                  <li>
                    Customized different themes and plugins to formulate
                    effective and responsive design as governed by USDA.
                  </li>
                  <li>
                    Attended a weekly meeting with a team to meet the standards
                    and deadlines set by USDA.
                  </li>
                  <li>
                    Coordinated with marketing and administration for content
                    and resources for websites.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {tabName === "Outreach" && (
            <div className="work_description">
              <div className="work_description_title">Full Stack Developer</div>
              <div className="work_description_data">
                Jan 2020 - May 2020 | Oxford, MS
              </div>
              <div className="work_description_list">
                <ul>
                  <li>
                    Created a web application for recruitment to accelerate the
                    hiring process.
                  </li>
                  <li>
                    Utilized agile development methodology and worked with
                    product owners and various cross functional teams at
                    Outreach throughout the development cycle.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {tabName === "Olemiss" && (
            <div className="work_description">
              <div className="work_description_title">
                IT Media Student Consultant
              </div>
              <div className="work_description_data">
                Jan 2019 - May 2019 | Oxford, MS
              </div>
              <div className="work_description_list">
                <ul>
                  <li>
                    Orchestrated delivery and setup of multimedia and computer
                    equipment reserved by the instructor.
                  </li>
                  <li>
                    Ensured uninterrupted media environment for class and
                    provide immediate IT support when needed.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
