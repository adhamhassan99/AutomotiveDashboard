import React from "react";
import GetStarted from "../../components/GetStarted/GetStarted.component";
import SignUpForm from "../../components/SignUpForm/SignUpForm.component";

import "./SignUp.styles.scss";

export default function SignUp() {
  return (
    <div className="sign-up-page-container">
      <GetStarted linkUrl="auth/signin" linkText="Sign in" />
      <SignUpForm />
    </div>
  );
}
