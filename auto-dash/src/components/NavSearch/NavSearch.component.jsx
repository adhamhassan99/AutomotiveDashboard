import React from "react";
import NavBar from "../NavBar/NavBar.component";
import SideBar from "../SideBar/SideBar.component";
import "./NavSearch.styles.scss";
import ProfilePic from "../../Assets/ProfilePic.png";
import { useSelector } from "react-redux";
import { getUserStatus } from "../../features/user/userSlice";

import { Outlet, Navigate } from "react-router-dom";

const NavSearch = () => {
  const userLoggedIn = useSelector(getUserStatus);

  if (userLoggedIn) {
    return (
      <div className="page-container">
        <SideBar />
        <div className="main-section">
          <NavBar imageUrl={ProfilePic} />
          <Outlet />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/auth/signin" replace />;
  }
};

export default NavSearch;
