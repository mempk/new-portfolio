import React from "react";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Github from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import SidebarRow from "./SidebarRow";

import "../css/profile.css";
function Profile() {
  return (
    <div className="profile">
      <div className="profile_icon">
        <a
          href="https://www.linkedin.com/in/mkoirala/"
          target="_blank"
          rel="noreferrer"
        >
          <SidebarRow Icon={LinkedIn} />
        </a>
        <a href="https://github.com/mempk" target="_blank" rel="noreferrer">
          <SidebarRow Icon={Github} />
        </a>
        <a
          href="https://www.instagram.com/madhav_koiralaa/"
          target="_blank"
          rel="noreferrer"
        >
          <SidebarRow Icon={Instagram} />
        </a>
      </div>
    </div>
  );
}

export default Profile;
