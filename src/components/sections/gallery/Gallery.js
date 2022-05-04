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
import pic1Min from "../../../assets/img/hotel-1-min.jpg";
import pic2Min from "../../../assets/img/hotel-2-min.jpg";
import pic3Min from "../../../assets/img/hotel-3-min.jpg";
import pic4Min from "../../../assets/img/hotel-4-min.jpg";
import pic5Min from "../../../assets/img/hotel-5-min.jpg";
import pic6Min from "../../../assets/img/hotel-6-min.jpg";
import pic7Min from "../../../assets/img/hotel-7-min.jpg";
import pic8Min from "../../../assets/img/hotel-8-min.jpg";

function Gallery() {
  return (
    <section className={styles.gallery}>
      <h3 className={styles["gallery__heading"]}>Some pictures of our hotel</h3>
      <div className={styles["gallery__image"]}>
        <div className={styles["gallery__image--1"]}>
          <img
            srcset={`${pic1Min} 1x, ${pic1} 2x`}
            src={pic1}
            alt="Hotel Pic 1"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--2"]}>
          <img
            srcset={`${pic2Min} 1x, ${pic2} 2x`}
            src={pic2}
            alt="Hotel Pic 2"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--3"]}>
          <img
            srcset={`${pic3Min} 1x, ${pic3} 2x`}
            src={pic3}
            alt="Hotel Pic 3"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--4"]}>
          <img
            srcset={`${pic4Min} 1x, ${pic4} 2x`}
            src={pic4}
            alt="Hotel Pic 4"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--5"]}>
          <img
            srcset={`${pic5Min} 1x, ${pic5} 2x`}
            src={pic5}
            alt="Hotel Pic 5"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--6"]}>
          <img
            srcset={`${pic6Min} 1x, ${pic6} 2x`}
            src={pic6}
            alt="Hotel Pic 6"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--7"]}>
          <img
            srcset={`${pic7Min} 1x, ${pic7} 2x`}
            src={pic7}
            alt="Hotel Pic 7"
            className={styles["gallery__img"]}
          />
        </div>
        <div className={styles["gallery__image--8"]}>
          <img
            srcset={`${pic8Min} 1x, ${pic8} 2x`}
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
