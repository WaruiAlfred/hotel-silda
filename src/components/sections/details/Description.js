import React from "react";
import styles from "../../../styles/components/sections/details/Description.module.scss";
import user3 from "../../../assets/img/user-3.jpg";
import user4 from "../../../assets/img/user-4.jpg";
import user5 from "../../../assets/img/user-5.jpg";
import user6 from "../../../assets/img/user-6.jpg";
import UseSvg from "../../helper-components/UseSvg";

function Description() {
  return (
    <section className={styles.description}>
      <div className={styles.hotel}>
        <div className={styles["hotel-details"]}>
          <h5 className={styles["hotel__name"]}>Hotel Silda</h5>
          <div className={styles["hotel__rating"]}>
            {Array(5)
              .fill()
              .map((_) => (
                <UseSvg
                  key={Math.random()}
                  className={styles["hotel__star"]}
                  iconName="star"
                />
              ))}
          </div>
        </div>
        <div className={styles["hotel-location"]}>
          <UseSvg
            className={styles["hotel-location-icon"]}
            iconName="location-pin"
          />
          Mombasa,Kenya
        </div>
      </div>
      <p className={styles.paragraph}>
        <b>Hotel Silda</b> is the one hotel where visitors who come never want
        to leave.Even after leaving,they are always brought back by the memories
        of the good times they had here.
      </p>
      <p className={styles.paragraph}>
        We have been rated highly over the past few years that we've been in
        operation, and even received awards.
      </p>
      <ul className={styles.list}>
        <li className={styles["list__item"]}>Beach View</li>
        <li className={styles["list__item"]}>Breakfast included</li>
        <li className={styles["list__item"]}>Airport ride</li>
        <li className={styles["list__item"]}>Free wifi in all rroms</li>
        <li className={styles["list__item"]}>Air conditioning and heating</li>
        <li className={styles["list__item"]}>Pets allowed</li>
        <li className={styles["list__item"]}>
          The staff speaks almost all languages
        </li>
        <li className={styles["list__item"]}>
          Perfect for meetings and families
        </li>
      </ul>
      <div className={styles.recommend}>
        <p className={styles["recommend__count"]}>
          Alex and 2 others recommend this hotel
        </p>
        <div className={styles["recommend__friends"]}>
          <img
            src={user3}
            alt="Friend 1"
            className={styles["recommend__photo"]}
          />
          <img
            src={user4}
            alt="Friend 2"
            className={styles["recommend__photo"]}
          />
          <img
            src={user5}
            alt="Friend 3"
            className={styles["recommend__photo"]}
          />
          <img
            src={user6}
            alt="Friend 4"
            className={styles["recommend__photo"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Description;
