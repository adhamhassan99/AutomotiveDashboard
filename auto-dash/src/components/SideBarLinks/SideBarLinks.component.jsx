import React from "react";

import "./SideBarLinks.styles.scss";
import CustomLink from "../CustomLink/CustomLink.component";

const SideBarLinks = () => {
  return (
    <div className="side-bar-links-container">
      <CustomLink to="/home/dashboard" icon="dash">
        Dashboard
      </CustomLink>
      <CustomLink to="/home/assets" icon="assets">
        Assets
      </CustomLink>
      <CustomLink to="/home/booking" icon="book">
        Booking
      </CustomLink>
      <CustomLink to="/home/sellcars" icon="sell">
        Sell Cars
      </CustomLink>

      <CustomLink to="/home/buycars" icon="buy">
        Buy Cars
      </CustomLink>

      <CustomLink to="/home/services" icon="services">
        Services
      </CustomLink>

      <CustomLink to="/home/calendar" icon="calendar">
        Calendar
      </CustomLink>

      <CustomLink to="/home/Messages" icon="msg">
        Messages
      </CustomLink>
    </div>
  );
};
export default SideBarLinks;
