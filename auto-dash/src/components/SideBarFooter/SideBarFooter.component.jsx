import React from "react";
import CustomLink from "../CustomLink/CustomLink.component";

import "./SideBarFooter.styles.scss";
import { useDispatch } from "react-redux";
import { setUID, setisLoggedIn } from "../../features/user/userSlice";
import { Navigate } from "react-router-dom";

const SideBarFooter = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(setUID(""));
    dispatch(setisLoggedIn(false));
    return <Navigate to="/auth/signin" replace />;
  };

  return (
    <div className="side-bar-footer-container">
      <CustomLink to="/settings" icon="set">
        Settings
      </CustomLink>
      <CustomLink to="/auth/signin" onClick={handleLogOut} icon="logout">
        Log out
      </CustomLink>
    </div>
  );
};

export default SideBarFooter;
