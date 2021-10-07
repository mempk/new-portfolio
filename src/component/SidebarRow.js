import React from "react";
import { useLocation } from "react-router-dom";

function SidebarRow(props) {
  const history = useLocation();

  return (
    <div
      className={`sidebarRow ${
        props.pathName === history.pathname ? "active" : ""
      }`}
    >
      <props.Icon className="sidebarRow_icon" />
      <span className="sidebarRow_title">{props.name}</span>
    </div>
  );
}

export default SidebarRow;
