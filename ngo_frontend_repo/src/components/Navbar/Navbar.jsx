import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <h2 className="logo">Rudr-Veer.</h2>
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("About")}
          className={menu === "About" ? "active" : ""}
        >
          About
        </li>
        <li
          onClick={() => setMenu("Event")}
          className={menu === "Event" ? "active" : ""}
        >
          Event
        </li>
        <li
          onClick={() => setMenu("Blog")}
          className={menu === "Blog" ? "active" : ""}
        >
          Blog
        </li>
        <li
          onClick={() => setMenu("Contact us")}
          className={menu === "Contact us" ? "active" : ""}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar-right">
        <button type="button">Donate Now</button>
      </div>
    </div>
  );
};

export default Navbar;
