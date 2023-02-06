import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Reserve.module.css";

import BackgroundChanger from "../components/BackgroundChanger";

function Reserve() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [departure, setDeparture] = useState("");
  const [returne, setReturne] = useState("");
  const [price, setPrice] = useState(0);

  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleDeparture = (e) => {
    setDeparture(e.target.value);
  };
  const handleReturne = (e) => {
    setReturne(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/trips`, {
        firstName,
        lastName,
        mail,
        phone,
        departure,
        returne,
        price,
      })
      .then(() => {
        navigate("/recap");
      })
      .catch((err) => console.error(err));
  };

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    if (name === "Crew Dragon") {
      setCheckbox1(!checkbox1);
      setCheckbox2(false);
      setCheckbox3(false);
      setPrice(0);
    }
    if (name === "Speeder3000") {
      setCheckbox1(false);
      setCheckbox2(!checkbox2);
      setCheckbox3(false);
      setPrice(1000);
    }
    if (name === "USS Enterprise") {
      setCheckbox1(false);
      setCheckbox2(false);
      setCheckbox3(!checkbox3);
      setPrice(3000);
    }
  };

  return (
    <div className={styles.Container}>
      <BackgroundChanger />
      <div className={styles["Reserv-box"]}>
        <h2>Reservation</h2>
        <form>
          <div className={styles["user-box"]}>
            <input
              onChange={handleFirstName}
              value={firstName}
              type="text"
              name="firstName"
              required=""
              id="firstName"
            />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              onChange={handleLastName}
              value={lastName}
              type="text"
              name="lastName"
              required=""
              id="lastName"
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              onChange={handleMail}
              value={mail}
              type="text"
              name="mail"
              required=""
              id="mail"
            />
            <label htmlFor="mail">Mail</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              onChange={handlePhone}
              value={phone}
              type="number"
              name="phone"
              required=""
              id="phone"
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              onChange={handleDeparture}
              value={departure}
              type="date"
              name="departure"
              required=""
              id="departure"
            />
            <label htmlFor="depart">Departure</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              onChange={handleReturne}
              value={returne}
              type="date"
              name="returne"
              required=""
              id="returne"
            />
            <label htmlFor="retour">Return</label>
          </div>
          <div className={styles.ChoiceRock}>
            <label>
              <input
                type="checkbox"
                name="Crew Dragon"
                checked={checkbox1}
                onChange={handleCheckboxChange}
              />
              Navette Crew Dragon*
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Speeder3000"
                checked={checkbox2}
                onChange={handleCheckboxChange}
              />
              Speeder3000*
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="USS Enterprise"
                checked={checkbox3}
                onChange={handleCheckboxChange}
              />
              Uss Enterprise*
            </label>
          </div>
          <Link to="/rockets">
            <i>*Find out more about means of transport</i>
          </Link>
          <p>Supplement Rocket: {price} GAX</p>
          <div className={styles.BtnRocket}>
            <button
              type="button"
              className={styles.reserv}
              onClick={handleSubmit}
            >
              <span />
              <span />
              <span />
              <span />
              Reservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reserve;
