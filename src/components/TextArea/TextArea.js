import React from "react";
import styles from "./TextArea.module.css";

const TextArea = (props) => {
  return (
    <div>
      <textarea
        {...props}
        className={`border-radius-0 ${styles["custom-control"]} form-control`}
      />
    </div>
  );
};

export default TextArea;
