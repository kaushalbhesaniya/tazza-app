import React from "react";
import styles from "./FormInput.module.css";

const FormInput = (props) => {
  return (
    <div>
      <input
        {...props}
        className={`border-radius-0 ${styles["custom-control"]} form-control`}
      />
    </div>
  );
};

export default FormInput;
