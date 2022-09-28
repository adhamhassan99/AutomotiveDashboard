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
    <button className={`${signInTypes[signInProvider]} button-container`}>
      {children}
    </button>
  );
}
