import React from "react";

import "./NavBar.styles.scss";
import { ReactComponent as LensIcon } from "../../Assets/LensIcon.svg";
import { ReactComponent as NotificationOn } from "../../Assets/NotificationOn.svg";
import { ReactComponent as NotificationOff } from "../../Assets/NotificationOff.svg";

const NavBar = ({ notf, imageUrl }) => {
  return (
    <div className="nav-bar-container">
      <div className="input-field">
        <LensIcon />
        <input type="text" placeholder="Search or type" />
      </div>
      <div className="prof-notif-container">
        {notf ? <NotificationOn /> : <NotificationOff />}
        <img src={`${imageUrl}`} alt="" />
      </div>
    </div>
  );
};

export default NavBar;
