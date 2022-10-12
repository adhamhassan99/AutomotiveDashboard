import React from "react";

import "./ProfileInput.styles.scss";

const ProfileInput = ({ labelfor, labelText, inputType, placeholder }) => {
  return (
    <div className="in-group">
      <label htmlFor={labelfor}>{labelText}</label>
      <input
        type={inputType}
        id={labelfor}
        name={labelfor}
        placeholder={placeholder}
      />
    </div>
  );
};

export default ProfileInput;
