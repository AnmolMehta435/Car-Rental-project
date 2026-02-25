import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import cars from "./carsdata3";

export default function Chandigarh() {
  const [distance, setDistance] = useState(1000);
  const [minPrice] = useState(80);
  const [maxPrice, setMaxPrice] = useState(1000);
  const location =useLocation();
  const date =location.state;

  const navigate=useNavigate();
 const filteredCars = cars.filter(
    (car) =>
      car.price >= minPrice &&
     car.price <= maxPrice &&
      car.distance <= distance
  );

  return (
    <div className="main-container">
      <div className="city-dropdown">
      <select
        onChange={(e) => {
          const city = e.target.value;
          if (city) {
            navigate(`/${city.toLowerCase()}`, { state: date });
          }
        }}
        defaultValue="Delhi"
      >
        <option value="Mohali">Mohali</option>
        <option value="Chandigarh">Chandigarh</option>
        <option value="Kharar">Kharar</option>
        <option value="Delhi">Delhi</option>
      </select>
    </div>
      <div className="sidebar">
        <h2>Filters</h2>

        <div className="filter-section">
          <h4>Distance</h4>
          <input
            type="range"
            min="0"
            max="2000"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
          <div className="range-label">
            <span>Near</span>
            <span>{distance} km</span>
            <span>Far</span>
          </div>
        </div>


        <div className="filter-section">
          <h4>Total Price</h4>

          <div className="price-label">
            <span>Rs. {minPrice}</span>
            <span>Rs. {maxPrice}</span>
          </div>


          <input
            type="range"
            min="50"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="right-section">
        <div className="header-s">
          <h1>DAILY DRIVE</h1>
          <p>Book for 4hrs & more, Drive unlimited</p>
        </div>

    

        <p className="showing">
          Showing {filteredCars.length} cars
        </p>

    <div className="car-grid">
  {filteredCars.map((car) => (
    <div
      className="car-card"
      key={car.id}
      onClick={() =>
        navigate(`/Car_details2/${car.id}`)
      }
      style={{ cursor: "pointer" }}
    >
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-info">
        <h3>{car.name}</h3>
        <p>{car.distance} km away</p>

        <div className="price-row">
          <span>₹{car.price}/hr</span>
        </div>

        <p>{car.rating}</p>
        <p>{car.seats} seats</p>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
}
