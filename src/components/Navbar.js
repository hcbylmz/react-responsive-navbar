import React, { useState } from "react";
import magnifier from "../img/loupe.png";
import sun from "../img/sun_120349.png";
import "./Navbar.css";

export function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="navbar-container">
      <button class="hamburger" onClick={() => setVisible(!visible)}>
        ≡{" "}
      </button>
      <nav className={visible ? " " : "invisible"}>
        <ul>
          <li>
            <button class="home-button">Home</button>
          </li>
          <li>
            <a href="#">Five Columns</a>
          </li>
          <li>
            <a href="#">Listing Page</a>
          </li>
          <li>
            <a href="#">Templates</a>
          </li>
          <li>
            <a href="#">Other Pages</a>
          </li>
          <li>
            <img src={magnifier} />
          </li>
          <li>
            <img src={sun} />
          </li>
          <li class="purple">
            <button class="signup-button">Sign Up</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
