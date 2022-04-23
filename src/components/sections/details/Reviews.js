import React from "react";
import styles from "../../../styles/components/sections/details/Reviews.module.scss";
import user1 from '../../../assets/img/user-1.jpg'
import user2 from '../../../assets/img/user-2.jpg'

function Reviews() {
  return (
    <section className={styles.reviews}>
      <figure className={styles.review}>
        <blockquote className={styles["review__text"]}>
          I had the best time of my life while in Hotel Silda.It is definitely
          the place to go for a vacation.
        </blockquote>
        <figcaption className={styles.review__user}>
          <img src={user1} alt="User 1" className={styles["review__photo"]} />
          <div className={styles["review__user-box"]}>
            <p className={styles["review__user-name"]}>John Mwaniki</p>
            <p className={styles["review__user-date"]}>Aug 11th, 2019</p>
          </div>
          <div className={styles["review__rating"]}>8.6</div>
        </figcaption>
      </figure>
      <figure className={styles.review}>
        <blockquote className={styles["review__text"]}>
          I loved the way I was handled by the staff.They are very kind and
          welcoming.Who wouldn't love such a place?
        </blockquote>
        <figcaption className={styles.review__user}>
          <img src={user2} alt="User 2" className={styles["review__photo"]} />
          <div className={styles["review__user-box"]}>
            <p className={styles["review__user-name"]}>Mary Onyango</p>
            <p className={styles["review__user-date"]}>Oct 23rd, 2019</p>
          </div>
          <div className={styles["review__rating"]}>7.9</div>
        </figcaption>
      </figure>

      <button className={styles['reviews__btn']}>
        Show all <span>&rarr;</span>
      </button>
    </section>
  );
}

export default Reviews;
