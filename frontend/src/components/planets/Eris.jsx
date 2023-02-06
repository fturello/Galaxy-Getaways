import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../../styles/planets/Eris.module.css";

function Eris({ isPlanetDetail, isPlanetName }) {
  const navigate = useNavigate();
  const planetName = "Eris";
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
        Eris
      </button>
    </>
  );
}

Eris.propTypes = {
  isPlanetDetail: PropTypes.bool,
  isPlanetName: PropTypes.bool,
};

Eris.defaultProps = {
  isPlanetDetail: false,
  isPlanetName: false,
};

export default Eris;
