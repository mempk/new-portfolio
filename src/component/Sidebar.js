import React from "react";
import { Link } from "react-router-dom";
import Account from "@material-ui/icons/AccountCircle";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import Report from "@material-ui/icons/AccountTree";
import brandLogo from "../images/brandLogo.svg";
import Contact from "@material-ui/icons/Send";
import Description from "@material-ui/icons/Description";
import SidebarRow from "./SidebarRow";
import "../css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_div">
        <Link to="/">
          <div className="header_logo">
            <img
              className="header_logo_image"
              src={brandLogo}
              alt="MK brand"
              href="/"
            />
          </div>
        </Link>
        <Link to="/me">
          {" "}
          <SidebarRow Icon={Account} name="About" pathName="/me" />
        </Link>
        <Link to="/work">
          {" "}
          <SidebarRow Icon={WorkOutlineIcon} name="Work" pathName="/work" />
        </Link>
        <Link to="/project">
          {" "}
          <SidebarRow Icon={Report} name="Project" pathName="/project" />
        </Link>
        <Link to="/contact">
          {" "}
          <SidebarRow Icon={Contact} name="Contact" pathName="/contact" />
        </Link>
        <a
          href="https://drive.google.com/file/d/1Dd5QRcWTB2MThLXbhR23I3-2Ckb_4zYL/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <SidebarRow Icon={Description} />
        </a>
      </div>
    </div>
  );
}
export default Sidebar;
