import React from "react";
import styles from "./PopularTag.module.css";
const PopularTag = () => {
  return (
    <div>
      <div className={styles["populer_tag"]}>
        <div className={styles["sidebar"]}>
          <h4 className="border-0">Populer Tag</h4>
        </div>
        <div className={styles["populer_btn"]}>
          <ul>
            <li>Agency</li>
            <li>Business</li>
            <li>Organic Food</li>
            <li>Farmer</li>
            <li>Marketing</li>
            <li>Company</li>
            <li>Food</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PopularTag;
