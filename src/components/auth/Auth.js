import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextInput from "../helper-components/FormikFormInputs";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [formValues, setFormValues] = useState(null);
  const [createAcc, setCreateAcc] = useState(false);
  const navigate = useNavigate();

  const auth = getAuth();

  const register = (event) => {
    event.preventDefault();

    setTimeout(() => {
      createUserWithEmailAndPassword(
        auth,
        formValues?.email,
        formValues?.password
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // ...
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode, errorMessage);
        });
    }, 100);
  };

  const login = (event) => {
    event.preventDefault();

    setTimeout(() => {
      signInWithEmailAndPassword(auth, formValues?.email, formValues?.password)
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
    }, 100);
  };

  const createAccModeHandler = () => {
    setCreateAcc((prevState) => !prevState);
  };

  return (
    <div>
      <h1>{createAcc ? "Sign Up" : "Login"}</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Must be at least 8 characters long")
            .required("Required"),
          confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match!"
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setFormValues(values);
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
          />

          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Your password"
          />

          {createAcc && (
            <TextInput
              label="Password Confirmation"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password above"
            />
          )}

          {createAcc && (
            <button type="submit" onClick={register}>
              Create Account
            </button>
          )}
          {!createAcc && (
            <button type="submit" onClick={login}>
              Login
            </button>
          )}
          <p onClick={createAccModeHandler}>
            {!createAcc ? "Create Account" : "Login"}
          </p>
        </Form>
      </Formik>
    </div>
  );
}

export default Auth;
