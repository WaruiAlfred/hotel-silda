import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../helper-components/FormikFormInputs";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "../../styles/components/auth/Auth.module.scss";

function Login() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <h1 className={styles["auth__header"]}>Login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters long")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, values.email, values.password)
              .then((userCredential) => {
                // Signed in
                // const user = userCredential.user;
                navigate("/");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
              });

            setSubmitting(false);
          }, 100);
        }}
      >
        <Form>
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="joe@gmail.com"
            className={styles["auth__input"]}
          />

          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Your password"
            className={styles["auth__input"]}
          />

          <button type="submit" className={styles["auth__button"]}>
            Login
          </button>
        </Form>
      </Formik>
    </Fragment>
  );
}

export default Login;
