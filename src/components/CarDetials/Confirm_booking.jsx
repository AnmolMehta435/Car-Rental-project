import React, { useState } from "react";
import "./booking.css";

export default function DriverForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Driverlicense: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.Driverlicense) newErrors.Driverlicense = "Driver license is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <h2>Driver Details</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label className="lable">
          First Name*
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            className={errors.firstName ? "error-input" : ""}
          />
          {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
        </label>

        <label className="lable">
          Last Name*
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            className= {errors.lastName ? "error-input" : ""}
          />
          {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
        </label>

        <label className="lable">
         Driver license
          <input
            type="text"
            name="Driverlicense"
            value={formData.Driverlicense}
            onChange={handleChange}
            placeholder=" Driver license"
            className={errors. Driverlicense ? "error-input" : ""}
          />
          {errors.Driverlicense && <span className="error-msg">{errors.Driverlicense}</span>}
        </label>

        <label className="lable">
          Email*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </label>

        <button type="submit" className="btn1">Confirm Booking</button>
      </form>

      {submitted && (
        <div className="confirmation">
          Thank you, {formData.firstName}! Your booking is confirmed ✅
        </div>
      )}
    </div>
  );
}