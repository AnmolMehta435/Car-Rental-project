import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };
  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleLogin = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; 
    }

    localStorage.setItem("isLogin", "true");
    localStorage.setItem("userEmail", formData.email);

    navigate("/Mohali");
  };

  return (
    <div className="img">
      <div className="login">
        <h2 className="log">Personal account login</h2>

        <label className="text">
          Your Email
          <input
            className={errors.email ? "box error-input" : "box"}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </label>

        <label className="text">
          Password
          <input
            type="password"
            className={errors.password ? "box error-input" : "box"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error-msg">{errors.password}</p>}
        </label>
        <button type="button" className="btn-sub" onClick={handleLogin}>
          Log in
        </button>
        <Link to="/create">
          <button type="button" className="sub">
            Create account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Login;    