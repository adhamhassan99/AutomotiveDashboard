import React from "react";
import NavBar from "../NavBar/NavBar.component";
import SideBar from "../SideBar/SideBar.component";
import "./NavSearch.styles.scss";
import { useSelector } from "react-redux";
import { getUserStatus } from "../../features/user/userSlice";

import { Outlet, Navigate } from "react-router-dom";

const NavSearch = () => {
  const userImg = useSelector((state) => state.user.userImg);
  const userLoggedIn = useSelector(getUserStatus);

  if (userLoggedIn) {
    return (
      <div className="page-container">
        <SideBar />
        <div className="main-section">
          <NavBar imageUrl={userImg} />
          <Outlet />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/auth/signin" replace />;
  }
};

export default NavSearch;
