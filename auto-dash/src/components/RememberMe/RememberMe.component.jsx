import React from "react";

import "./RememberMe.styles.scss";

const RememberMe = () => {
  return (
    <div className="remember-me-container">
      <div className="check-box-container">
        <input type="checkbox" id="rememberMe" name="rememberMe" />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <div className="forgot-pass-container">
        <a href="/">Forgot your password?</a>
      </div>
    </div>
  );
};

export default RememberMe;
