import React from "react";

import "./CustomLink.styles.scss";

import { Link, NavLink } from "react-router-dom";

import { ReactComponent as DashboardLogo } from "../../Assets/DashboardIcon.svg";
import { ReactComponent as AssestsLogo } from "../../Assets/AssetsIcon.svg";
import { ReactComponent as BookingLogo } from "../../Assets/BookingIcon.svg";
import { ReactComponent as SellCarsLogo } from "../../Assets/SellCarsIcon.svg";
import { ReactComponent as BuyCarsLogo } from "../../Assets/BuyCarsIcon.svg";
import { ReactComponent as ServicesLogo } from "../../Assets/ServicesIcon.svg";
import { ReactComponent as CalendarLogo } from "../../Assets/CalendarIcon.svg";
import { ReactComponent as MessagesLogo } from "../../Assets/MessagesIcon.svg";
import { ReactComponent as SettingsLogo } from "../../Assets/SettingsIcon.svg";
import { ReactComponent as LogoutLogo } from "../../Assets/LogoutIcon.svg";

const iconMap = {
  dash: <DashboardLogo />,
  assets: <AssestsLogo />,
  book: <BookingLogo />,
  sell: <SellCarsLogo />,
  buy: <BuyCarsLogo />,
  services: <ServicesLogo />,
  calendar: <CalendarLogo />,
  msg: <MessagesLogo />,
  set: <SettingsLogo />,
  logout: <LogoutLogo />,
};

const CustomLink = ({ children, to, icon, onClick }) => {
  return (
    <div className="custom-link-container">
      <NavLink onClick={onClick} className="option" to={`${to}`}>
        {iconMap[icon]}
        {children}
      </NavLink>
    </div>
  );
};
export default CustomLink;
