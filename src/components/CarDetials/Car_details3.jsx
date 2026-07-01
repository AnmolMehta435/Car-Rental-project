import React, { useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import cars from "../Home/carsdata4.jsx";
import "./car.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const hours = location.state?.hours || 1;
  const car = cars.find((c) => c.id === Number(id));
  const [current, setCurrent] = useState(0);
  const [showMore, setShowMore] = useState(false);
  if (!car) {
    return <h2 style={{ textAlign: "center" }}>Car Not Found</h2>;
  }

  const prevSlide = () => setCurrent(current === 0 ? car.images.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === car.images.length - 1 ? 0 : current + 1);

  const features = [
    "Spare Tyre",
    "Toolkit",
    "Reverse Camera",
    "Child seat",
    "Pet Friendly",
    "Electric ORVM",
    "Anti-lock Braking System (ABS)",
    "Traction control",
    "2 Front Airbags",
    "2 Side Airbags",
    "Power Windows",
  ];


  const isLogin = localStorage.getItem("isLogin") === "true";
  return (
    <div className="container">
      <div className="left">
        <div className="slider">
          <img src={car.images[current]} alt="car" className="main-img" />
          <button className="nav left-btn" onClick={prevSlide}><FaChevronLeft /></button>
          <button className="nav right-btn" onClick={nextSlide}><FaChevronRight /></button>
        </div>

        <div className="car-info">
          <h1>{car.name}</h1>
          <p>Automatic • Petrol • {car.seats} Seats</p>
          <div className="rating-box"><FaStar /> {car.rating}</div>
        </div>

        <div className="section">
          <div className="section-header">
            <h3>Features</h3>
            <span className="view-more" onClick={() => setShowMore(!showMore)}>
              {showMore ? "View Less" : "View More"}
            </span>
          </div>
          <div className="feature-list">
            {(showMore ? features : features.slice(0, 6)).map((item, index) => (
              <div key={index} className="feature-pill">
                <FaCheckCircle className="green" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h3>Inclusion/Exclusions</h3>
          <div className="info-row"><FaCheckCircle className="green" /> Security deposit (if applied) will automatically be refunded within 2-3 days after the trip completion.</div>
          <div className="info-row"><FaTimesCircle className="red" /> Fuel not included. Guest should return the car with the same fuel level as at start.</div>
          <div className="info-row"><FaTimesCircle className="red" /> Toll/Fastag charges not included. Check with host for Fastag recharge.</div>
          <div className="info-row"><FaTimesCircle className="red" /> Trip Protection excludes: Off-road use, driving under influence, over-speeding, illegal use, restricted zones.</div>
        </div>
      </div>

      <div className="box_">
        <div className="right">
          <div className="card-box">
            <div className="row">
              <h4>Travel with confidence</h4>
              <span>₹129</span>
            </div>
            <p>Your trip is secured against accidental damage</p>
          </div>
          <div className="card-box">
            <div className="row">
              <h4>Refundable Deposit</h4>
              <span>₹1,000</span>
            </div>

            <div className="radio-group">
              <label>
                <input type="radio" name="deposit" />
                Pay Now
              </label>

              <label>
                <input type="radio" name="deposit" defaultChecked />
                Pay Later
              </label>
            </div>

            <p className="small-text">
              You'll get a full refund within 2-3 days after booking completion.
            </p>
          </div>
          <div className="total">
            <h3>Total Price</h3>
            <h2>₹{car.price * hours}</h2>
            <p>({hours} {hours > 1 ? "hours" : "hour"} * ₹{car.price}/hr)</p>
            <button
              className="butto"
              onClick={() => {
                if (!isLogin) {
                  navigate("/login", { state: { from: location } });
                } else {
                  navigate("/Confirm_booking", {
                    state: {
                      carPrice: car.price,
                      carName: car.name,
                      totalPrice: car.price * hours,
                      ...location.state,
                    },
                  });
                }
              }}
            >
              {isLogin ? "CONFIRM BOOKING" : "LOGIN TO CONTINUE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}