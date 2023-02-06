import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/Home.module.css";

import earthImg from "../assets/earth.png";
import launch from "../assets/launch.mp3";

function Home() {
  const [launchRocket, setLaunchRocket] = useState(false);
  const [hideThings, setHideThings] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  const redirectPath = () => {
    setHideThings(true);
    setLaunchRocket(!launchRocket);
    audioRef.current.play();
    const path = "/planets";
    setTimeout(() => {
      navigate(path);
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h1
        className={`${styles.title} ${hideThings ? styles["hide-things"] : ""}`}
      >
        Galaxy Getaways
      </h1>
      <h1
        className={`${styles.slogan}  ${
          hideThings ? styles["hide-things"] : ""
        }`}
      >
        Explore the <span className={styles.cosmos}>cosmos</span> beyond the
        imaginable !
      </h1>
      <div
        id="rocket"
        className={`${styles["rocket-wrapper"]} ${
          launchRocket ? styles["rocket-launched"] : ""
        }`}
      >
        <img
          className={styles.rocket}
          src="https://ig.solcode.net/src/rocket.svg"
          alt="rocket"
        />
        <div className={styles["flame-wrapper"]}>
          <div className={styles["flame-anim"]}>
            <div className={`${styles.flame} ${styles.red}`} />
            <div className={`${styles.flame} ${styles.orange}`} />
            <div className={`${styles.flame} ${styles.gold}`} />
            <div className={`${styles.flame} ${styles.white}`} />
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={redirectPath}
        className={`${styles["btn-redirect"]} ${
          hideThings ? styles["hide-things"] : ""
        }`}
      >
        <svg
          height="40"
          width="40"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
            fill="currentColor"
          />
        </svg>
        <span>Launch</span>
      </button>
      <audio ref={audioRef} src={launch}>
        <track kind="captions" />
      </audio>
      <img src={earthImg} alt="earth" className={styles.earth} />
    </div>
  );
}

export default Home;
