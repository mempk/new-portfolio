import React from "react";
import { useLocation } from "react-router-dom";

function SidebarRow(props) {
  const history = useLocation();
  const hideSidebar = (e) => {
    if (document.documentElement.clientWidth <= 600) {
      let sideBar = document.querySelector(".sidebar");
      sideBar.style.display = "none";
    }
  };

  return (
    <div
      className={`sidebarRow ${
        props.pathName === history.pathname ? "active" : ""
      }`}
      onClick={(e) => hideSidebar(e)}
    >
      <props.Icon className="sidebarRow_icon" />
      <span className="sidebarRow_title">{props.name}</span>
    </div>
  );
}

export default SidebarRow;
