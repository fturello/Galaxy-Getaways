import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../../styles/planets/BlackHole.module.css";

function BlackHole({ isPlanetName }) {
  const navigate = useNavigate();
  const planetName = "Black Hole";
  const onPressBlackHole = () => {
    const path = `/planetDetail?planetName=${planetName}`;
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  return (
    <>
      <b className={styles.b} />
      <button
        type="button"
        onClick={onPressBlackHole}
        onKeyDown={onPressBlackHole}
        className={`${styles["black-hole-name"]} ${
          isPlanetName ? styles["no-planet-name"] : ""
        }`}
      >
        Black Hole
      </button>
    </>
  );
}

BlackHole.propTypes = {
  isPlanetName: PropTypes.bool,
};

BlackHole.defaultProps = {
  isPlanetName: false,
};

export default BlackHole;
