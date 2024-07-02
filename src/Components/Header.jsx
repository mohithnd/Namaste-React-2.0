import { CLOUDINARY_LOGO_PATH, CLOUDINARY_BASE_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={CLOUDINARY_BASE_URL + CLOUDINARY_LOGO_PATH}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className={btnName}
            onClick={() => {
              setBtnName((prev) => (prev == "Login" ? "Logout" : "Login"));
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
