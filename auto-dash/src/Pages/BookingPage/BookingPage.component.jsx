import React from "react";

import "./BookingPage.styles.scss";
import { useState } from "react";

import { ReactComponent as GridIcon } from "../../Assets/GridIcon.svg";
import { ReactComponent as FilterIcon } from "../../Assets/FilterIcon.svg";

import { carBrands, CarData } from "./CarsData";
import BookCarCard from "../../components/BookCarCard/BookCarCard.component";
import { render } from "react-dom";

const BookingPage = () => {
  const [usage, setUsage] = useState("Any");
  const [brand, setbrand] = useState("Any");

  const handlechange = (index) => {
    CarData[index - 1].fav = !CarData[index - 1].fav;
    console.log(CarData[index - 1].fav);
  };

  var carData = CarData.filter((car) => {
    if (brand === "Any" && usage === "Any") return car;
    if (brand !== "Any" && usage !== "Any")
      return car.brand === brand && car.usage === usage;
    else if (brand !== "Any" && usage === "Any") {
      return car.brand === brand;
    } else {
      return car.usage === usage;
    }
  });

  const handleCarChange = (e) => {
    setbrand(e.target.value);
  };

  const handleUseChange = (e) => {
    setUsage(e.target.value);
  };

  return (
    <div className="booking-page-container">
      <div className="title">
        <h1>Booking</h1>
      </div>
      <div className="filters-container">
        <div className="input-filters">
          <form action="#" className="form-container">
            <select name="usedOrNew" id="usedOrNew" onChange={handleUseChange}>
              <option value="Any">Any</option>
              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
            <select name="carBrand" id="carBrand" onChange={handleCarChange}>
              {carBrands.map((brand) => (
                <option value={brand}>{brand}</option>
              ))}
            </select>
          </form>
        </div>
        <div className="filter-toggles">
          <button>
            <GridIcon />
          </button>
          <button className="purp">
            <FilterIcon />
          </button>
        </div>
      </div>
      <div className="car-cards-container">
        {carData.map((car) => {
          return (
            <BookCarCard
              key={car.id}
              onClick={() => {
                handlechange(car.id);
              }}
              {...car}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookingPage;
