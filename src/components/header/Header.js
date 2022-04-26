import React, { Fragment, useState } from "react";
import styles from "../../styles/components/header/Header.module.scss";
import logo from "../../assets/img/logo.png";
import UseSvg from "../helper-components/UseSvg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import BookRoom from "./BookRoom";
import Notification from "../helper-components/Notification";

function Header() {
  const [userMenuVisibility, setUserMenuVisibility] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const userMenuHandler = () => {
    setUserMenuVisibility((prevState) => !prevState);
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  let userOptionsLinks = (
    <Link to="auth" className={styles["user__options-link"]}>
      Login / Sign In
    </Link>
  );

  if (user) {
    userOptionsLinks = (
      <Fragment>
        <Link to="/" className={styles["user__options-link"]}>
          Profile
        </Link>
        <Link to="/" onClick={logout} className={styles["user__options-link"]}>
          Logout
        </Link>
      </Fragment>
    );
  }

  return (
    <header className={styles.header}>
      {/*{showNotification && (
        <Notification
          className={styles["header__notification"]}
          content="Test data"
          onClick={setShowNotification}
        />
      )}*/}
      <nav>
        <img src={logo} alt="Logo" />
      </nav>
      <div className={styles.user}>
        <button className={styles["user__img-btn"]} onClick={userMenuHandler}>
          <UseSvg className={styles["user__icon"]} iconName="user" />
        </button>
        {userMenuVisibility && (
          <div className={styles["user__options"]}>
            <h5>{user ? user.email : "New User"}</h5>
            {userOptionsLinks}
          </div>
        )}
      </div>
      <h1 className={styles.title}>Hotel Silda</h1>

      {/*
      TODO:
        work on disabling the button if user is not logged in
      */}
      <button
        className={styles["modal-btn"]}
        onClick={() => {
          setBookingModal(true);
        }}
      >
        {user ? (
          <Fragment>
            <span className={styles["modal-btn__visible"]}>Book now</span>
            <span className={styles["modal-btn__invisible"]}>Best rooms!</span>
          </Fragment>
        ) : (
          <span style={{ padding: "15px" }}>Login to book rooms</span>
        )}
      </button>
      {bookingModal && <BookRoom closeModal={setBookingModal} />}
    </header>
  );
}

export default Header;
