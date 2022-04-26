import React, { useState } from "react";
import styles from "../../styles/components/header/BookRoom.module.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { SelectInput } from "../helper-components/FormikFormInputs";
import DatePickerField from "../helper-components/DatePickerField";
import Notification from "../helper-components/Notification";

function BookRoom({ closeModal }) {
  const [formValues, setFormValues] = useState(null);

  let roomType, startDate, endDate;
  if (formValues) {
    roomType = formValues.roomType;
    startDate = formValues.startDate;
    endDate = formValues.endDate;
  }

  const convertDate = (enteredDate) => {
    const date = new Date(enteredDate),
      month = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [day, month, date.getFullYear()].join("-");
  };

  return (
    <div className={styles.popup}>
      <div className={styles["popup__container"]}>
        {!!formValues && (
          <Notification
            className={styles["popup__notification"]}
            content={`You have booked a ${roomType} room(s) from ${convertDate(
              startDate
            )} to ${convertDate(endDate)} -> (${Math.ceil(
              Math.abs(endDate - startDate) / (1000 * 3600 * 24)
            )} days)`}
          />
        )}
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
              //TODO:Correctly validate date
              startDate: Yup.date().required(),
              endDate: Yup.date().required(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log("submitted", values);
                setFormValues(values);
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
