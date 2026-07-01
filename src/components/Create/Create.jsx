import React, { useState } from "react";
import "./Create.css";

function Create() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };

  const handleSubmit = () => {
    const newErrors = {};

    // Validation
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // stop submission
    }

    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Data Stored Successfully ✅");

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      password: "",
    });
  };

  return (
    <div className="create-img">
      <div className="create">
        <h2 className="create-inf">Personal Information</h2>

        <label className="name">
          First Name
          <input
            type="text"
            className={errors.firstName ? "text-add error-input" : "text-add"}
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error-msg">{errors.firstName}</span>}
        </label>

        <label className="name">
          Last Name
          <input
            type="text"
            className={errors.lastName ? "text-add error-input" : "text-add"}
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error-msg">{errors.lastName}</span>}
        </label>

        <label className="name">
          Email
          <input
            type="email"
            className={errors.email ? "text-add error-input" : "text-add"}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </label>

        <label className="name">
          Phone Number
          <input
            type="text"
            className={errors.phone ? "text-add error-input" : "text-add"}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error-msg">{errors.phone}</span>}
        </label>

        <label className="name">
          City
          <input
            type="text"
            className={errors.city ? "text-add error-input" : "text-add"}
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <span className="error-msg">{errors.city}</span>}
        </label>

        <label className="name">
          Password
          <input
            type="password"
            className={errors.password ? "text-add error-input" : "text-add"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error-msg">{errors.password}</span>}
        </label>

        <button className="Create" onClick={handleSubmit}>
          Create
        </button>
      </div>
    </div>
  );
}

export default Create;