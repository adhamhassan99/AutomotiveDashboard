import React from "react";
import "./GetStarted.styles.scss";

import { batch, useDispatch } from "react-redux";
import { setUID, setisLoggedIn } from "../../features/user/userSlice";

import { ReactComponent as GoogleLogo } from "../../Assets/LogoGoogle.svg";
import { ReactComponent as FacebookLogo } from "../../Assets/Facebook.svg";

import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton.component";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../Utils/Firebase/Firebase.utils";

const GetStarted = ({ linkUrl, linkText }) => {
  const dispatch = useDispatch();
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
    console.log(user);
    batch(() => {
      dispatch(setUID(user.uid));
      dispatch(setisLoggedIn(true));
    });
  };

  return (
    <div className="get-started-container">
      <h1 className="title">Get Started.</h1>
      <span>
        Don't have an account? <Link to={`/${linkUrl}`}>{linkText}</Link>
      </span>
      <div className="buttons-container">
        <CustomButton signInProvider="google" onClick={signInWithGoogle}>
          <GoogleLogo className="button-logo" />
          Sign in with Google
        </CustomButton>
        <CustomButton signInProvider="facebook">
          <FacebookLogo className="button-logo" />
          Sign in with Facebook
        </CustomButton>
      </div>
      <div className="divider">
        {/* <hr />
        <span>or</span>
        <hr /> */}
        <span className="divider">Or</span>
      </div>
    </div>
  );
};

export default GetStarted;
