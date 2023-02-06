import React from "react";
import styles from "../styles/About.module.css";
import CosmonautImg from "../assets/imagesAbout/Cosmonaut.png";
import Linkedin from "../assets/logos/linkedin.png";
import gitHubImg from "../assets/logos/github.png";
import email from "../assets/logos/email.png";
import BackgroundChanger from "../components/BackgroundChanger";

function About() {
  return (
    <section className={styles["section-white"]}>
      <BackgroundChanger />
      <div className={styles.title}>
        <h2 className={styles["section-title"]}>The Team Orbital Code</h2>
        <p className={styles.paragraph}>
          Get ready to launch! The Orbital Code team, the most innovative team
          of young developers in the galaxy, they are in charge of building the
          "Galaxy Gateways" website, a place where you can navigate the space
          ease and style. <br />
          Our crew of talented youngsters is working at full speed to create an
          out-of-this-world user experience, so stay tuned for our developments
          and get ready to travel through the galaxy portals with "Galaxy
          Gateways"! <br />
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles["container-1"]}>
          <div className={styles["team-item"]}>
            <img
              src={CosmonautImg}
              className={styles["team-img"]}
              alt="cosmonaut"
            />
            <h3>FRANCESCO TURELLO</h3>
            <div className={styles["team-info"]}>
              <p>Web developer</p>
            </div>
            <p>
              Francesco is a talented web developer and cosmonaut who excels in
              both both areas. He uses his skills in web development to create
              solutions for space missions, and his passion for space
              exploration has leads to becoming an experienced cosmonaut. He is
              able to combine his two passions to create advanced technologies.
            </p>

            <ul className={styles["team-icon"]}>
              <a href="https://github.com/fturello">
                <img
                  src={gitHubImg}
                  alt="github"
                  width="50"
                  className={styles.github}
                />
              </a>
              <a href="https://www.linkedin.com/in/francescoturello/">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  width="50"
                  className={styles.linkedin}
                />
              </a>
              <a href="https://github.com/">
                <img
                  src={email}
                  alt="email"
                  width="50"
                  className={styles.email}
                />
              </a>
            </ul>
          </div>
        </div>
        <div className={styles["container-2"]}>
          <div className={styles["team-item"]}>
            <img
              src={CosmonautImg}
              className={styles["team-img"]}
              alt="cosmonaut"
            />
            <h3>CLAUDIA GUERRERO</h3>
            <div className={styles["team-info"]}>
              <p>Web developer</p>
            </div>
            <p>
              Claudia is a passionate cosmonaut and web developer talented. She
              has great expertise in space technologies, having spent many years
              work on space missions with a space agency international. She is
              also skilled in web development, using her skills to create sites
              and applications innovative for users, she is able to combine
              passions.
            </p>
            <ul className={styles["team-icon"]}>
              <a href="https://github.com/Clauga">
                <img
                  src={gitHubImg}
                  alt="github"
                  width="50"
                  className={styles.github}
                />
              </a>
              <a href="https://www.linkedin.com/in/claudia-guerrero-dev/">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  width="50"
                  className={styles.linkedin}
                />
              </a>
              <a href="https://github.com/">
                <img
                  src={email}
                  alt="email"
                  width="50"
                  className={styles.email}
                />
              </a>
            </ul>
          </div>
        </div>
        <div className="container-3">
          <div className={styles["team-item"]}>
            <img src={CosmonautImg} className={styles["team-img"]} alt="pic" />
            <h3>EMELINE LEFEBVRE</h3>
            <div className={styles["team-info"]}>
              <p>Web developer</p>
            </div>
            <p>
              Emeline is a passionate cosmonaut and web developer talented. She
              has great expertise in space technologies, having spent many years
              work on space missions with a space agency international. She is
              also skilled in web development, using her skills to create sites
              and applications innovative for users, she is able to combine
              passions.
            </p>
            <ul className={styles["team-icon"]}>
              <a href="https://github.com/EmiLef08">
                <img
                  src={gitHubImg}
                  alt="github"
                  width="50"
                  className={styles.github}
                />
              </a>
              <a href="https://www.linkedin.com/in/emeline-lefebvre-9147b0167/">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  width="50"
                  className={styles.linkedin}
                />
              </a>
              <a href="https://github.com/">
                <img
                  src={email}
                  alt="email"
                  width="50"
                  className={styles.email}
                />
              </a>
            </ul>
          </div>
        </div>
        <div className="container-4">
          <div className={styles["team-item"]}>
            <img
              src={CosmonautImg}
              className={styles["team-img"]}
              alt="cosmonaut"
            />
            <h3>KADIR YILMAZ</h3>
            <div className={styles["team-info"]}>
              <p>Web developer</p>
            </div>
            <p>
              Kadir is a talented web developer and cosmonaut who excels in both
              areas. He uses his skills in web development to create innovative
              solutions for space missions, and his passion for space
              exploration has leads to becoming an experienced cosmonaut. He is
              able to combine his two passions to create advanced technologies.
            </p>
            <ul className={styles["team-icon"]}>
              <a href="https://github.com/MrRobo1">
                <img
                  src={gitHubImg}
                  alt="github"
                  width="50"
                  className={styles.github}
                />
              </a>
              <a href="https://www.linkedin.com/in/kadiryilmaz22/">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  width="50"
                  className={styles.linkedin}
                />
              </a>
              <a href="https://github.com/">
                <img
                  src={email}
                  alt="email"
                  width="50"
                  className={styles.email}
                />
              </a>
            </ul>
          </div>
        </div>
        <div className={styles["container-5"]}>
          <div className={styles["team-item"]}>
            <img
              src={CosmonautImg}
              className={styles["team-img"]}
              alt="cosmonaut"
            />
            <h3>PIERRE SAINT-AUBIN</h3>
            <div className={styles["team-info"]}>
              <p>Web developer</p>
            </div>
            <p>
              Pierre is an experienced web developer and cosmonaut who excels in
              both areas. He uses his skills in web development to create
              innovative solutions for space missions, and his passion for space
              exploration has leads to becoming an experienced cosmonaut. He is
              able to combine his two passions to create advanced technologies.
            </p>
            <ul className={styles["team-icon"]}>
              <a href="https://github.com/PierreStA">
                <img
                  src={gitHubImg}
                  alt="github"
                  width="50"
                  className={styles.github}
                />
              </a>
              <a href="https://www.linkedin.com/in/p-saintaubin/">
                <img
                  src={Linkedin}
                  alt="linkedin"
                  width="50"
                  className={styles.linkedin}
                />
              </a>
              <a href="https://github.com/">
                <img
                  src={email}
                  alt="email"
                  width="50"
                  className={styles.email}
                />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
