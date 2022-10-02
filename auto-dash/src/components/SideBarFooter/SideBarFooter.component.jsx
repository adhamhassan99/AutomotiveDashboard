import React from "react";
import CustomLink from "../CustomLink/CustomLink.component";

import "./SideBarFooter.styles.scss";

const SideBarFooter = () => {
  return (
    <div className="side-bar-footer-container">
      <CustomLink to="/settings" icon="set">
        Settings
      </CustomLink>
      <CustomLink to="/auth/signin" icon="logout">
        Log out
      </CustomLink>
    </div>
  );
};

export default SideBarFooter;
