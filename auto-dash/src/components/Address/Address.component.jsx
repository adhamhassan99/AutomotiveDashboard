import React from "react";
import "./Address.styles.scss";

const Address = () => {
  return (
    <div className="address-info">
      <div className="row">
        <div className="in-group">
          <label htmlFor="country">Live In</label>
          <input type="text" id="country" name="country" />
        </div>
        <div className="in-group">
          <label htmlFor="street">Street Address</label>
          <input type="text" id="street" name="street" />
        </div>
      </div>
      <div className="row">
        <div className="in-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" />
        </div>
      </div>
      <div className="row">
        <div className="in-group">
          <label htmlFor="birthdate">Date of Birth</label>
          <input type="text" id="birthdate" name="birthdate" />
        </div>
        <div className="in-group">
          <label htmlFor="country">Gender</label>
          <input type="text" id="country" name="country" />
        </div>
      </div>
    </div>
  );
};
export default Address;
