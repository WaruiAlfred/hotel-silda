import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/components/footer/Footer.module.scss";
import UseSvg from "../helper-components/UseSvg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__content"]}>
        <div className={styles["footer__features"]}>
          <h5>Features</h5>
          <ul>
            <li>
              <Link to="#" className={styles["footer__features-link"]}>
                Jet Skiing
              </Link>
            </li>
            <li>
              <Link to="#" className={styles["footer__features-link"]}>
                Airport pickup
              </Link>
            </li>
            <li>
              <Link to="#" className={styles["footer__features-link"]}>
                Master Suites
              </Link>
            </li>
            <li>
              <Link to="#" className={styles["footer__features-link"]}>
                Conference halls
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["footer__contact"]}>
          <h5>Contact Us</h5>
          <div className={styles["footer__contact-icons"]}>
            <Link to="#" className={styles["footer__contact-link"]}>
              <UseSvg
                className={styles["footer__contact-icon"]}
                iconName="twitter-with-circle"
              />
            </Link>
            <Link to="#" className={styles["footer__contact-link"]}>
              <UseSvg
                className={styles["footer__contact-icon"]}
                iconName="facebook"
              />
            </Link>
            <Link to="#" className={styles["footer__contact-link"]}>
              <UseSvg
                className={styles["footer__contact-icon"]}
                iconName="instagram-with-circle"
              />
            </Link>
            <Link to="#" className={styles["footer__contact-link"]}>
              <UseSvg
                className={styles["footer__contact-icon"]}
                iconName="behance"
              />
            </Link>
            <Link to="#" className={styles["footer__contact-link"]}>
              <UseSvg
                className={styles["footer__contact-icon"]}
                iconName="linkedin-with-circle"
              />
            </Link>
            <Link to="#" className={styles["footer__contact-link"]}>
              <UseSvg
                className={styles["footer__contact-icon"]}
                iconName="whatsapp"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>&copy; 2022, Hotel Silda</div>
    </footer>
  );
}

export default Footer;
