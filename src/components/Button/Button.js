import React from "react";
import styles from "./Button.module.css";
import Icofont from "react-icofont";

const Button = (props) => {
  return (
    <button
      className={`${styles.btn} ${props.square ? "rounded" : ""} ${
        props.cart ? `${styles.ms}` : ""
      }`}
      onClick={props.onClick}
    >
      {props.position === "left" && (
        <Icofont icon={props.iconName} className={styles["icon-left"]} />
      )}
      {props.children}
      {props.position === "right" && (
        <Icofont icon={props.iconName} className={styles["icon-right"]} />
      )}
    </button>
  );
};

export default Button;
