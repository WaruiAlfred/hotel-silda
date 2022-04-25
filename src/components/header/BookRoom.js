import React from "react";
import styles from "../../styles/components/header/BookRoom.module.scss";

function BookRoom({ closeModal }) {
  return (
    <div
      className={styles.popup}
      onClick={() => {
        closeModal(false);
      }}
    >
      <div className={styles["popup__container"]}>
        <div className={styles["popup__close-btn"]}>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className={styles["popup__title"]}>
          <h1>Book a Room</h1>
        </div>
        <div className={styles["popup__body"]}>
          <p>4 rooms left</p>
        </div>
        <div className={styles["popup__footer"]}>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookRoom;
