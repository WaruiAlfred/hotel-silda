import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Gallery from './sections/gallery/Gallery'

import styles from "../styles/components/Container.module.scss";
import Details from "./sections/details/Details";

function Container() {
  return (
    <div className={styles.container}>
      <Header />
      <Details/>
      <Gallery />
      <Footer />
    </div>
  );
}

export default Container;
