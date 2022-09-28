import React from "react";

import "./HomePage.styles.scss";

import { Link } from "react-router-dom";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../Utils/Firebase/Firebase.utils";

import SignInForm from "../../components/SignInForm/SignInForm.component";
import CustomButton from "../../components/CustomButton/CustomButton.component";

const HomePage = () => {
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="homepage-container">
      <div className="form-container">
        <h1 className="title">Get Started</h1>
        <span>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
        <div className="buttons-container">
          <CustomButton signInProvider="google" onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>

        <SignInForm />
      </div>
    </div>
  );
};
export default HomePage;
