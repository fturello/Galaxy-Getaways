import axios from "axios";
import React, { useState, useEffect } from "react";
import Rocket from "../components/Rocket";
import styles from "../styles/Rockets.module.css";

function Rockets() {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/rockets`).then((res) => {
      setRockets(res.data);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles["Rockets-header"]}>
        <h1 className={styles["Rockets-title"]}> Rockets</h1>
        <p className={styles["Rockets-desc"]}>
          What could be better than being able to choose the rocket that will
          take you to your destination? At Galaxy Getaways, we offer our
          travelers the opportunity to choose the mode of transportation that
          best suits their needs. On this page you will find the selection made
          by our team to bring you the best of comfort and safety in your
          journey to the holiday of your dreams.
        </p>
      </div>
      <ul className={styles["Rockets-list"]}>
        {rockets.length &&
          rockets.map((rocket) => (
            <li key={rocket.id}>
              <Rocket rocket={rocket} />
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Rockets;
