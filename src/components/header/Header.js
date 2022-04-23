import React, { useState } from "react";
import styles from "../../styles/components/header/Header.module.scss";
import logo from "../../assets/img/logo.png";
import UseSvg from "../helper-components/UseSvg";

function Header() {
  const [userMenuVisibility, setUserMenuVisibility] = useState(false);

  const userMenuHandler = () => {
    setUserMenuVisibility((prevState) => !prevState);
  };

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
            <h5>New User</h5>
            <button>Profile</button>
            <button>Login / Sign In</button>
            <button>Logout</button>
          </div>
        )}
      </div>
      <h1 className={styles.title}>Hotel Silda</h1>
    </header>
  );
}

export default Header;
