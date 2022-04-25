import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/components/auth/Auth.module.scss";
import logo from "../../assets/img/logo.png";
import SignUp from "./SignUp";
import Login from "./Login";

function Auth() {
  const [createAcc, setCreateAcc] = useState(false);

  const createAccModeHandler = () => {
    setCreateAcc((prevState) => !prevState);
  };

  return (
    <div className={styles.auth}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <hr />
      {createAcc ? <SignUp /> : <Login />}
      <p onClick={createAccModeHandler} className={styles["auth__form-link"]}>
        {!createAcc ? "Create Account ?" : "Login ?"}
      </p>
    </div>
  );
}

export default Auth;
