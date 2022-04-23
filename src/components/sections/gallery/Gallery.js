import React from "react";
import styles from "../../../styles/components/sections/gallery/Gallery.module.scss";
import pic1 from "../../../assets/img/hotel-1.jpg";
import pic2 from "../../../assets/img/hotel-2.jpg";
import pic3 from "../../../assets/img/hotel-3.jpg";
import pic4 from "../../../assets/img/hotel-4.jpg";
import pic5 from "../../../assets/img/hotel-5.jpg";
import pic6 from "../../../assets/img/hotel-6.jpg";
import pic7 from "../../../assets/img/hotel-7.jpg";
import pic8 from "../../../assets/img/hotel-8.jpg";

function Gallery() {

  return (
    <section className={styles.gallery}>
      <h3 className={styles["gallery__heading"]}>Some pictures of our hotel</h3>
      <div className={styles["gallery__image"]}>
        <div className={styles["gallery__image--1"]}>
          <img
            src={pic1}
            alt="Hotel Pic 1"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--2"]}>
          <img
            src={pic2}
            alt="Hotel Pic 2"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--3"]}>
          <img
            src={pic3}
            alt="Hotel Pic 3"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--4"]}>
          <img
            src={pic4}
            alt="Hotel Pic 4"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--5"]}>
          <img
            src={pic5}
            alt="Hotel Pic 5"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--6"]}>
          <img
            src={pic6}
            alt="Hotel Pic 6"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--7"]}>
          <img
            src={pic7}
            alt="Hotel Pic 7"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--8"]}>
          <img
            src={pic8}
            alt="Hotel Pic 8"
            className={styles["gallery__img"]}
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;
