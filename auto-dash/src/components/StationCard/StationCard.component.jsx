import React from "react";
import { useState } from "react";

import "./StationCard.styles.scss";

function StationCard({ cardProps }) {
  const [cardData, setCardData] = useState(cardProps);
  const handleclick = () => {
    let newData = { ...cardData };
    newData.booked
      ? (newData.booked = !newData.booked)
      : newData.current
      ? (newData.current = !newData.current)
      : (newData.booked = true);
    setCardData(newData);
  };
  return (
    <div
      onClick={handleclick}
      className={`station-card-container ${
        cardData.booked ? "booked" : cardData.current ? "current" : ""
      }`}
    >
      {cardData.name}
    </div>
  );
}

export default StationCard;
