import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/components/header/BookRoom.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SelectInput } from "../helper-components/FormikFormInputs";
import DatePickerField from "../helper-components/DatePickerField";

function BookRoom({ closeModal }) {
  const navigate = useNavigate();
  return (
    <div className={styles.popup}>
      <div className={styles["popup__container"]}>
        <div className={styles["popup__close-btn"]}>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            &times;
          </button>
        </div>
        <div className={styles["popup__title"]}>
          <h3>Book a Room</h3>
        </div>
        <div className={styles["popup__body"]}>
          <Formik
            initialValues={{
              roomType: "",
              startDate: "",
              endDate: "",
            }}
            validationSchema={Yup.object({
              roomType: Yup.string().required("Number of rooms is required"),
              startDate: Yup.date().required(),
              endDate: Yup.date().required(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log("submitted", values);
                navigate("/");
                setSubmitting(false);
              }, 100);
            }}
          >
            <Form className={styles["popup__form"]}>
              <SelectInput
                className={styles["popup__form-select"]}
                label="Room Type"
                name="roomType"
              >
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="quad">Quad</option>
                <option value="twin">Twin</option>
                <option value="king">King</option>
              </SelectInput>

              <div className={styles["popup__form-date"]}>
                <h3>Start Date</h3>
                <DatePickerField name="startDate" />
              </div>
              <div className={styles["popup__form-date"]}>
                <h3>End Date</h3>
                <DatePickerField name="endDate" />
              </div>

              <button type="submit">Book</button>
            </Form>
          </Formik>
        </div>
        <div className={styles["popup__footer"]}>
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookRoom;
