import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Contact.module.css";
import BackgroundChanger from "../components/BackgroundChanger";

function Contact() {
  return (
    <div className={styles["container-all"]}>
      <BackgroundChanger />
      <h1 className={styles["h1-contact"]}>Contact us !</h1>

      <form className={styles["contact-form"]}>
        <div className={styles["form-content"]}>
          <label htmlFor="name" className={styles["label-contact"]}>
            Name and Last name :
          </label>
          <input
            className={styles["input-contact"]}
            type="text"
            id="name"
            name="name"
            placeholder="Name and Last name here"
          />

          <label htmlFor="email" className={styles["label-contact"]}>
            E-mail :
          </label>
          <input
            className={styles["input-contact"]}
            type="email"
            id="email"
            name="email"
            placeholder="exemple@gmail.com"
          />

          <label htmlFor="phone" className={styles["label-contact"]}>
            Phone number:
          </label>
          <input
            className={styles["input-contact"]}
            type="text"
            id="phone"
            name="phone"
            placeholder="+12345678"
          />

          <label htmlFor="Sujet" className={["label-contact"]}>
            Subject:
          </label>
          <select className={["select-contact"]} name="Subject">
            <option selected>Select the object of your request</option>
            <option value="devis">Personalized Estimates</option>
            <option value="questions">Questions</option>
            <option value="Autre">Others</option>
          </select>

          <label htmlFor="message" className={["label-contact"]}>
            {" "}
            Message :
          </label>
          <textarea
            className={["message-contact"]}
            placeholder="Please fill in your questions or comments =) !"
            id="message"
            cols="20"
            rows="10"
            name="message"
          />

          <label className={styles["label-contact"]}>
            <input type="checkbox" /> By checking this box, I agree to receive
            receive information on the different offers available.
          </label>
          <Link to="/aftercontact">
            <div className={styles["button-contact"]}>
              <span />
              <span />
              <span />
              <span />
              Send
            </div>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Contact;
