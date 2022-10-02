import React from "react";

import "./SideBarLinks.styles.scss";
import CustomLink from "../CustomLink/CustomLink.component";

const SideBarLinks = () => {
  return (
    <div className="side-bar-links-container">
      <CustomLink to="/dashboard" icon="dash">
        Dashboard
      </CustomLink>
      <CustomLink to="/assets" icon="assets">
        Assets
      </CustomLink>
      <CustomLink to="/booking" icon="book">
        Booking
      </CustomLink>
      <CustomLink to="/sellcars" icon="sell">
        Sell Cars
      </CustomLink>

      <CustomLink to="/buycars" icon="buy">
        Buy Cars
      </CustomLink>

      <CustomLink to="/services" icon="services">
        Services
      </CustomLink>

      <CustomLink to="/calendar" icon="calendar">
        Calendar
      </CustomLink>

      <CustomLink to="/Messages" icon="msg">
        Messages
      </CustomLink>
    </div>
  );
};
export default SideBarLinks;
