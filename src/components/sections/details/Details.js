import React from "react";
import Description from "./Description";
import Reviews from "./Reviews";

import styles from "../../../styles/components/sections/details/Details.module.scss";

function Details() {
  return (
    <div className={styles.details}>
      <Description />
      <Reviews />
    </div>
  );
}

export default Details;
