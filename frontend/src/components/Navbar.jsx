import React, { useState, useLayoutEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "../styles/Navbar.module.css";

import logoImg from "../assets/logo0.png";
import burgerImg from "../assets/menu-btn.png";
import closeBurgerImg from "../assets/close-menu-btn.png";

function Navbar() {
  const [showLinks, setShowLinks] = useState(window.innerWidth < 900);

  const activeStyle = ({ isActive }) => {
    if (isActive) return { color: "#fff" };
    return undefined;
  };

  const onPressBurger = () => {
    if (window.innerWidth < 900) {
      setShowLinks(!showLinks);
    }
  };

  useLayoutEffect(() => {
    if (window.innerWidth < 900) {
      if (showLinks) {
        document.getElementById("root").classList.remove("no-scroll");
      } else document.getElementById("root").classList.add("no-scroll");
    }
  });

  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" className={styles["navbar-brand"]}>
          <img src={logoImg} alt="logo" className={styles.logo} />
        </Link>
        <button
          type="button"
          onClick={onPressBurger}
          className={styles["burger-menu"]}
        >
          <img
            src={showLinks ? burgerImg : closeBurgerImg}
            alt="burger menu"
            className={styles["burger-img"]}
          />
        </button>
        <div
          className={`${styles["nav-links"]} ${
            showLinks ? styles["mobile-menu"] : ""
          }`}
          onClick={onPressBurger}
          onKeyDown={onPressBurger}
          role="button"
          tabIndex="0"
        >
          <ul>
            <li className={styles.active}>
              <NavLink to="/" style={activeStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/planets" style={activeStyle}>
                Planets
              </NavLink>
            </li>
            <li>
              <NavLink to="/rockets" style={activeStyle}>
                Rockets
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
