import React from "react";

import { ReactComponent as PersonIcon } from "../../Assets/PersonIcon.svg";
import { ReactComponent as TransIcon } from "../../Assets/TransIcon.svg";
import { ReactComponent as FavIcon } from "../../Assets/FavIcon.svg";
import { ReactComponent as FavIconOn } from "../../Assets/FavIconOn.svg";
import "./BookCarCard.styles.scss";

const BookCarCard = ({ name, fav, type, carImg, price, onClick }) => {
  return (
    <div className="book-car-card-container">
      <div className="card-header">
        <h1 className="car-name">{name}</h1>
        <button
          onClick={onClick}
          className={`fav-status ${fav ? "fav-on" : "fav-off"}`}
        >
          {fav ? <FavIconOn className="fav-icon" /> : <FavIcon />}
        </button>
      </div>
      <div className="subtitle">
        <span>{type}</span>
      </div>
      <img className="car-card-img" src={carImg} alt="" />
      <div className="card-footer">
        <div className="features">
          <span>
            <PersonIcon className="footer-icon" /> 4
          </span>
          <span>
            <TransIcon /> Manual
          </span>
        </div>
        <span className="price">
          <strong>${price}</strong>/d
        </span>
      </div>
    </div>
  );
};
export default BookCarCard;
