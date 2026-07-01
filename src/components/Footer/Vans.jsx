import React, { useState } from "react";
import "./Cars.css";

export default function CarsPage() {
  const [distance, setDistance] = useState(1000);
  const [minPrice] = useState(80);
  const [maxPrice, setMaxPrice] = useState(1000);

  const Vans = [
    {
      id: 1,
      name: "Mahindra Bolero Camper ",
      image: "/assets/Mahindra Bolero Camper.jpg",
      price: 100,
      distance: 103.1,
      rating:"⭐5.0",
      seats:"5",
    },
    {
      id: 2,
      name: "Isuzu D-Max ",
      image: "/assets/Isuzu D-Max.jpg",
      price: 180,
      distance: 245.4,
      rating:"⭐5.0", 
      seats:"4",

    },
    {
      id: 3,
      name: "Tata Yodha Pickup Truck",
      image: "/assets/Tata Yodha Pickup Truck.jpg",
      price: 216,
      distance: 196.3,
      rating:"⭐4.5",
      seats:"2",
    },
     {
      id: 4,
      name: "Isuzu D-Max",
      image: "/assets/Isuzu D-Max.jpg",
      price: 250,
      distance: 196.3,
      rating:"⭐4.5",
      seats:"4",
    },
    {
      id: 5,
      name: "Mahindra Bolero Pik-Up ",
      image: "/assets/Mahindra Bolero Pik-Up.jpg",
      price: 100,
      distance: 103.1,
      rating:"⭐5.0",
      seats:"2",
    },
    {
      id: 6,
      name: "Isuzu Hi-Lande ",
      image: "/assets/Isuzu Hi-Lande.jpg",
      price: 100,
      distance: 143.1,
      rating:"⭐4.0",
      seats:"4",
    },
  
    {
      id: 7,
      name: "Toyota Hilux",
      image: "/assets/Toyota Hilux.jpg",
      price: 100,
      distance: 103.1,
      rating:"⭐5.0",
      seats:"4",
    },
    {
      id:8,
      name:"Isuzu V-Cross.jpg ",
      image :"/assets/Isuzu V-Cross.jpg",
      price:80,
      distance:"200",
      rating:"⭐5.0",
      seats:"4",
    },
   
  ];

  const filteredCars = Vans.filter(
    (Vans) =>
     Vans.price >= minPrice &&
      Vans.price <= maxPrice &&
      Vans.distance <= distance
  );

  return (
    <div className="main-container">
      <div className="sidebar">
        <h2>Filters</h2>

        <div className="filter-section">
          <h4>Distance</h4>
          <input
            type="range"
            min="0"
            max="2000"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
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
            onChange={(e) => setMaxPrice(e.target.value)}
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
          {filteredCars.map((Vans) => (
            <div className="car-card" key={Vans.id}>
              <img src={Vans.image} alt={Vans.name} />
              <div className="car-info">
                <h3>{Vans.name}</h3>
                <p>{Vans.distance} km away</p>
                <div className="price-row">
                  <span>₹{Vans.price}/hr</span>
                </div>
                <p>{Vans.rating}/5</p>
                <p>{Vans.seats} seats</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
