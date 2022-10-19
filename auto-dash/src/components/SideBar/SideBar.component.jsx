import React from "react";

import "./SideBar.styles.scss";

import Brand from "../Brand/Brand.component";
import SideBarLinks from "../SideBarLinks/SideBarLinks.component";
import SideBarFooter from "../SideBarFooter/SideBarFooter.component";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <Brand />
      <SideBarLinks />

      <SideBarFooter />
    </div>
  );
};

export default SideBar;
