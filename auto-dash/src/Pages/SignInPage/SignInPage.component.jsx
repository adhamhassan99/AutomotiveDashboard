import React from "react";

import "./SignInPage.styles.scss";

import GetStarted from "../../components/GetStarted/GetStarted.component";

import SignInForm from "../../components/SignInForm/SignInForm.component";

const SignInPage = () => {
  return (
    <div className="homepage-container">
      <GetStarted linkUrl="auth/signup" linkText="Sign up" />
      <SignInForm />
    </div>
  );
};
export default SignInPage;
