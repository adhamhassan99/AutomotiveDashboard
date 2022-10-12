import React from "react";
import ProfileInput from "../ProfileInput/ProfileInput.component";
import "./Address.styles.scss";

const Address = () => {
  return (
    <div className="address-info">
      <div className="row">
        <ProfileInput labelText="Live In" labelfor="country" inputType="text" />
        <ProfileInput
          labelText="Street Address"
          labelfor="street"
          inputType="text"
        />
      </div>
      <div className="row">
        <ProfileInput
          labelText="Email Address"
          labelfor="email"
          inputType="email"
        />
      </div>
      <div className="row">
        <ProfileInput
          labelText="Date of Birth"
          labelfor="birthdate"
          inputType="text"
        />
        <ProfileInput labelText="Gender" labelfor="gender" inputType="text" />
      </div>
    </div>
  );
};
export default Address;
