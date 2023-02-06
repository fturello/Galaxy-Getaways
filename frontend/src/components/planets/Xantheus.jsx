import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../../styles/planets/Xantheus.module.css";

function Xantheus({ isPlanetDetail, isPlanetName }) {
  const navigate = useNavigate();
  const planetName = "Xantheus";
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
        Xantheus
      </button>
    </>
  );
}

Xantheus.propTypes = {
  isPlanetDetail: PropTypes.bool,
  isPlanetName: PropTypes.bool,
};

Xantheus.defaultProps = {
  isPlanetDetail: false,
  isPlanetName: false,
};

export default Xantheus;
