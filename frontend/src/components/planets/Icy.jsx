import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../../styles/planets/Icy.module.css";

function Icy({ isPlanetDetail, isPlanetName }) {
  const navigate = useNavigate();
  const planetName = "Icy";
  const onPressPlanet = () => {
    const path = `/planetDetail?planetName=${planetName}`;
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  return (
    <>
      <div
        className={`${styles.Planet} ${
          isPlanetDetail ? styles["planet-detail"] : ""
        }`}
      />
      <button
        type="button"
        onClick={onPressPlanet}
        onKeyDown={onPressPlanet}
        className={`${styles["planet-name"]} ${
          isPlanetName ? styles["no-planet-name"] : ""
        }`}
      >
        Icy
      </button>
    </>
  );
}

Icy.propTypes = {
  isPlanetDetail: PropTypes.bool,
  isPlanetName: PropTypes.bool,
};

Icy.defaultProps = {
  isPlanetDetail: false,
  isPlanetName: false,
};

export default Icy;
