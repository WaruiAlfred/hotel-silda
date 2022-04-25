import React from "react";
import { useField } from "formik";

const errorStyles = { color: "red", fontSize: "20px" };

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={props.className}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={errorStyles}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const SelectInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={props.className}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div style={errorStyles}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextInput;
