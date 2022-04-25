import React, { Fragment, useState } from "react";
import styles from "../../styles/components/header/Header.module.scss";
import logo from "../../assets/img/logo.png";
import UseSvg from "../helper-components/UseSvg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import BookRoom from "./BookRoom";

function Header() {
  const [userMenuVisibility, setUserMenuVisibility] = useState(false);
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
      <BookRoom/>
    </header>
  );
}

export default Header;
