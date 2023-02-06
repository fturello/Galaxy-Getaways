import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../../styles/planets/Jupiter.module.css";

function Jupiter({ isPlanetDetail, isPlanetName }) {
  const navigate = useNavigate();
  const planetName = "Jupiter";
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
        Jupiter
      </button>
    </>
  );
}

Jupiter.propTypes = {
  isPlanetDetail: PropTypes.bool,
  isPlanetName: PropTypes.bool,
};

Jupiter.defaultProps = {
  isPlanetDetail: false,
  isPlanetName: false,
};

export default Jupiter;
