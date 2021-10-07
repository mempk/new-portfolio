import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "@material-ui/icons/Menu";
import brandLogo from "../images/brandLogo.svg";

function MobileNav() {
  const showSideBar = (e) => {
    e.preventDefault();
    let sideBar = document.querySelector(".sidebar");
    if (sideBar.style.display === "block") {
      sideBar.style.display = "none";
    } else {
      sideBar.style.display = "block";
    }
  };

  useEffect(() => {
    function handleResize() {
      if (document.documentElement.clientWidth > "600") {
        let sideBar = document.querySelector(".sidebar");
        if (sideBar.style.display === "none") {
          sideBar.style.display = "block";
        }
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="body_component_header">
      <div className="body_component_header_main">
        <Menu onClick={(e) => showSideBar(e)} />
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
      </div>
    </div>
  );
}

export default MobileNav;
