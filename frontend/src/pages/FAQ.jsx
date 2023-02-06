import React from "react";
import styles from "../styles/FAQ.module.css";
import BackgroundChanger from "../components/BackgroundChanger";

function FAQ() {
  return (
    <div className={styles["accordion-arrows"]}>
      <BackgroundChanger />
      <div className={styles["Header-box"]}>
        <label htmlFor="acc-close">FAQ Page</label>
      </div>
      <input type="radio" name="accordion" id="cb1" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb1">
          Can I meet my future travel buddies before leaving?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          Obviously ! It's super simple, especially if you have already joined
          the Facebook group "To many is better! Getaways, Explore the cosmos
          beyond the imaginable!".
          <br /> You can contact them directly. In this group, you will be
          informed of new destinations, upcoming departures, useful information
          about our trips... and above all, you will be able to find your future
          travel buddies (for more information on this subject, you will see a
          post about it on our group). <br />
          In any case, 30 days before departure, your trip coordinator will
          create a WhatsApp group with all the participants... just to get the
          trip off to a good start!
        </div>
      </section>
      <input type="radio" name="accordion" id="cb2" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb2">
          What is included?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          Each trip is different and includes different services. <br />
          In general, the price includes: accommodation, internal transport (in
          some planets there can be up to 4 flights!), a trip coordinator
          available 24/7, in some routes, full board with breakfast lunch is
          included as well as various excursions! You will find details of
          everything that is included (and excluded). <br />
          For your information, medical insurance is not included and must be
          taken out separately - to simplify your task, we have pre-selected
          some for you!
        </div>
      </section>
      <input type="radio" name="accordion" id="cb3" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb3">
          Who is the trip coordinator and what is their role?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          Our travel coordinators are the ideal travel buddies, who love to
          travel and already have a lot of experience across space. Which means
          that in terms of logistics (meetings, times, tickets for transfers,
          reservations, etc.), you are in good hands and all you have to do is
          enjoy! 30 days before departure, your trip coordinator will create a
          WhatsApp group and it will be the perfect place to ask all logistical
          questions before departure and above all to get to know the group.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb4" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb4">
          What are the selection criteria for space travelers?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          Good physical and mental health: Space travelers will need to be in
          good health to be able to withstand the rigors of space, such as
          pressure changes, microgravity, and radiation.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb5" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb5">
          How is the training and preparation of passengers carried out before a
          space flight?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          Emergency survival training, to know how to react in case of a
          critical situation during the flight and also training in the behavior
          to adopt during the flight to feel comfortable and safe, manage the
          stress related to the flight.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb6" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb6">
          How do I modify/cancel my reservation?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          For any modification or cancellation, please contact the place where
          you made your reservation. For a reservation made online or a quote
          made at the call center, contact our travel agents on 0 666 666 666
          (free call). <br />
          For a reservation made in an agency, please contact the selected
          selected agency when sending your quote.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb7" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb7">
          Who is the trip coordinator and what is their role?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          Our travel coordinators are the ideal travel buddies, who love to
          travel and already have a lot of experience across space. Which means
          that in terms of logistics (meetings, times, tickets for transfers,
          reservations, etc.), you are in good hands and all you have to do is
          enjoy! 30 days before departure, your trip coordinator will create a
          WhatsApp group and it will be the perfect place to ask all logistical
          questions before departure and above all to get to know the group.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb8" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb8">
          How long is my quote valid for?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          A quote has no particular validity period with our travel agents
          except that the amount of your trip may change. This is only a
          proposal subject to modification (taxes, exchange, price, etc.).
        </div>
      </section>

      <input type="radio" name="accordion" id="acc-close" />
    </div>
  );
}

export default FAQ;
