import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const [vehicleType, setVehicleType] = useState("cars");
  const [pickupLocation, setPickupLocation] = useState("");
  const [returnLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [returnTime, setReturnTime] = useState("");
  const [age, setAge] = useState("26+");
  const [country, setCountry] = useState("India");

  const [errorMsg, setErrorMsg] = useState("");

  const today = new Date();
  const todayStr = today.toISOString().split("T")[0];

  const maxPickupDate = new Date();
  maxPickupDate.setDate(today.getDate() + 4);
  const maxPickupStr = maxPickupDate.toISOString().split("T")[0];

  const maxReturnDate = new Date(pickupDate ? new Date(pickupDate) : today);
  maxReturnDate.setDate(maxReturnDate.getDate() + 4);
  const maxReturnStr = maxReturnDate.toISOString().split("T")[0];

  const handleSearch = () => {
    if (!pickupLocation || !pickupDate || !pickupTime || !returnDate || !returnTime) {
      setErrorMsg("Please fill all required fields!");
      return;
    }
    setErrorMsg(""); 

    navigate(`/${pickupLocation}`, {
      state: {
        vehicleType,
        pickupLocation,
        returnLocation,
        pickupDate,
        pickupTime,
        returnDate,
        returnTime,
        age,
        country,
      },
    });
  };

  return (
    <div className="background-img">
      <div className="car-search">
        <h3 className="section-title">What type of vehicle?</h3>

        <div className="vehicle-type">
          <button
            className={`vehicle-btn ${vehicleType === "cars" ? "active" : ""}`}
            onClick={() => setVehicleType("cars")}
          >
            🚗 Cars
          </button>
        </div>

        <div className="form-row">
          <div className="form-section">
            <label className="heading">Pickup and return location</label>
            <div className="input-wrapper">
              <span className="icon">📌</span>
              <select
                className="Location-select"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              >
                <option value="">City, address, point of interest</option>
                <option value="Mohali">Mohali</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Kharar">Kharar</option>
                <option value="Delhi">Delhi</option>
              </select>
            </div>
          </div>

          <div className="form-section">
            <label className="heading">Pickup date and time</label>
            <div className="input-group">
              <input
                type="date"
                value={pickupDate}
                min={todayStr}
                max={maxPickupStr}
                onChange={(e) => setPickupDate(e.target.value)}
              />
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
              />
            </div>
          </div>

          <div className="form-section">
            <label className="heading">Return date and time</label>
            <div className="input-group">
              <input
                type="date"
                value={returnDate}
                min={pickupDate || todayStr}
                max={maxReturnStr}
                onChange={(e) => setReturnDate(e.target.value)}
              />
              <input
                type="time"
                value={returnTime}
                onChange={(e) => setReturnTime(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Error message display */}
        {errorMsg && <p className="error-msg">{errorMsg}</p>}

        <div className="footer-row">
          <select value={age} onChange={(e) => setAge(e.target.value)}>
            <option>19</option>
            <option>21+</option>
            <option>26+</option>
            <option>30+</option>
          </select>

          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option>India</option>
            <option>Mohali</option>
            <option>Chandigarh</option>
            <option>Kharar</option>
            <option>Delhi</option>
          </select>

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}