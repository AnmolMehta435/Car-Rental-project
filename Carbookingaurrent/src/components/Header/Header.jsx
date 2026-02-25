import React, { useEffect, useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInitial, setUserInitial] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef();

  // Check login status
  useEffect(() => {
    const checkLogin = () => {
      const loginStatus = localStorage.getItem("isLogin");
      const userEmail = localStorage.getItem("userEmail");

      if (loginStatus === "true" && userEmail) {
        setIsLogin(true);
        setUserInitial(userEmail[0].toUpperCase());
      } else {
        setIsLogin(false);
        setUserInitial("");
      }
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userEmail");
    setIsLogin(false);
    setDropdownOpen(false);
    navigate("/Login");
  };

  return (
    <header className="header">
      <nav className="nav-a">
        <div className="logo">
          <NavLink to="/">
          <img src={"/assets/car rental3.png"} alt="Logo"/>
          </NavLink>
        </div>
        <div className="nav-actions">
          {isLogin ? (
            <div className="profile-container" ref={dropdownRef}>
              <div
                className="profile-circle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {userInitial}
              </div>
              {dropdownOpen && (
                <div className="dropdown">
                  <button onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/Login" className="btn">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}