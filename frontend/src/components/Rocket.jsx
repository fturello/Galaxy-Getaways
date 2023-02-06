import React from "react";
import PropTypes from "prop-types";
import useModal from "./useModal";
import Modal from "./Modal";
import styles from "../styles/Rockets.module.css";

function Rocket({ rocket }) {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <div className={styles["Rockets-1"]}>
        <h2 className={styles["Rockets-1-name"]}>{rocket.rocket_name}</h2>
        <img
          className={styles["Rockets-1-img"]}
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/rockets/${
            rocket.image
          }`}
          alt={rocket.image}
        />
        <button type="button" className="modal-toggle" onClick={toggle}>
          Show more
        </button>
        <Modal isShowing={isShowing} hide={toggle} rocket={rocket} />
      </div>

      <style>{`
        button.modal-toggle {
          font-family: "Orbitron", sans-serif;
          font-size: large;
          letter-spacing: 0.15rem;
          color: rgb(3, 151, 145);
          font-weight: 450;
          background-color: transparent;
          cursor: pointer;
          padding: 1rem 2rem;
          text-transform: uppercase;
          border: none;
        }

        button.modal-toggle:hover {
          background: rgb(3, 151, 145);
          color: rgba(255, 255, 255, 0.816);
          border-radius: 5px;
          box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
            0 0 100px #03e9f4;
        }
      `}</style>
    </>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    image: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Rocket;
