import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "../../styles/components/header/BookRoom.module.scss";

function BookRoom() {
  return (
    <Popup
      trigger={<button> Trigger</button>}
      position="center"
      className={styles.popup}
    >
      <div>Popup content here !!</div>
    </Popup>
  );
}

export default BookRoom;
