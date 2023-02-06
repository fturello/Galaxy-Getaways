import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

import styles from "../styles/PlanetDetail.module.css";

import Haumea from "../components/planets/Haumea";
import Eris from "../components/planets/Eris";
import Venus from "../components/planets/Venus";
import Moon from "../components/planets/Moon";
import Xantheus from "../components/planets/Xantheus";
import Jupiter from "../components/planets/Jupiter";
import Icy from "../components/planets/Icy";
import BlackHole from "../components/planets/BlackHole";

function PlanetDetail() {
  const [matchingPlanet, setMatchingPlanet] = useState([]);

  const [planetGetParams] = useSearchParams();
  const planetName = planetGetParams.get("planetName");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/planets`)
      .then((res) => res.data)
      .then((data) => {
        setMatchingPlanet(
          data.find((planet) => planet.planet_name === planetName)
        );
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles["planet-name"]}>{planetName}</h1>
        <p className={styles["planet-details"]}>{matchingPlanet.description}</p>
      </div>
      <div className={styles.planet}>
        {matchingPlanet.planet_name === "Haumea" && (
          <Haumea isPlanetDetail isPlanetName />
        )}
        {matchingPlanet.planet_name === "Eris" && (
          <Eris isPlanetDetail isPlanetName />
        )}
        {matchingPlanet.planet_name === "Venus" && (
          <Venus isPlanetDetail isPlanetName />
        )}
        {matchingPlanet.planet_name === "Moon" && (
          <Moon isPlanetDetail isPlanetName />
        )}
        {matchingPlanet.planet_name === "Xantheus" && (
          <Xantheus isPlanetDetail isPlanetName />
        )}
        {matchingPlanet.planet_name === "Jupiter" && (
          <Jupiter isPlanetDetail isPlanetName />
        )}
        {matchingPlanet.planet_name === "Icy" && (
          <Icy isPlanetDetail isPlanetName />
        )}
        {matchingPlanet.planet_name === "Black Hole" && (
          <BlackHole isPlanetDetail isPlanetName />
        )}
      </div>
      <div className={styles["small-cards"]}>
        <p className={styles["planet-type"]}>{matchingPlanet.type}</p>
        <p className={styles["planet-climate"]}>{matchingPlanet.climate}</p>
        <p className={styles["planet-diameter"]}>
          diameter <br />
          {matchingPlanet.diameter} km
        </p>
        <p className={styles["planet-time"]}>
          {matchingPlanet.earth_distance} km
        </p>
        <p className={styles["planet-composition"]}>
          {matchingPlanet.composition}
        </p>
      </div>
      <div className={styles["reservation-button"]}>
        <Link to="/reservation">
          <span />
          <span />
          <span />
          <span />
          Book your journey to {matchingPlanet.planet_name}
        </Link>
      </div>
      {matchingPlanet.planet_name === "Black Hole" ? (
        ""
      ) : (
        <>
          <h1 className={styles["planet-hotel-title"]}>Hotel</h1>
          <img
            src={`${
              import.meta.env.VITE_BACKEND_URL
            }/assets/images/planetsHotels/${matchingPlanet.hotel_image}`}
            alt="biking"
            className={styles.hotel}
          />
        </>
      )}
      <h1 className={styles["planet-activities-title"]}>
        {matchingPlanet.planet_name === "Black Hole"
          ? "Activity"
          : "Activities"}
      </h1>
      <img
        src={`${
          import.meta.env.VITE_BACKEND_URL
        }/assets/images/planetsActivities/${matchingPlanet.activity1_image}`}
        alt="biking"
        className={styles.activity}
      />
      <img
        src={`${
          import.meta.env.VITE_BACKEND_URL
        }/assets/images/planetsActivities/${matchingPlanet.activity2_image}`}
        alt="biking"
        className={styles.activity}
      />
    </div>
  );
}

export default PlanetDetail;
