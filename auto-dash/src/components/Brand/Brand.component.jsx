import React from "react";
import "./Brand.styles.scss";

import { ReactComponent as MotivBrand } from "../../Assets/logoMotiv.svg";

const Brand = () => {
  return (
    <div className="brand-container">
      <MotivBrand className="logo" />
      <h1>Motiv.</h1>
    </div>
  );
};

export default Brand;
