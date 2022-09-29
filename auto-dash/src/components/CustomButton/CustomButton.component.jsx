import React from "react";
import "./CustomButton.styles.scss";

const signInTypes = {
  google: "Google",
  facebook: "Facebook",
  primary: "Primary",
};

export default function CustomButton({
  children,
  signInProvider,
  ...otherProps
}) {
  return (
    <button {...otherProps} className={`${signInTypes[signInProvider]} button`}>
      {children}
    </button>
  );
}
