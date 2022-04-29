import React from "react";
import styles from "./PostCategory.module.css";
const PostCategory = () => {
  return (
    <div>
      <div className={styles["post_category"]}>
        <div className={styles["sidebar"]}>
          <h4 className="border-0">Post Category</h4>
        </div>
        <ul className="list-group">
          <li className="list-group-item list_icon">
            {" "}
            <a href="/#">
              <i className="icofont-arrow-right"></i>Feature Products
            </a>
          </li>
          <li className="list-group-item list_icon">
            {" "}
            <a href="/#">
              <i className="icofont-arrow-right"></i>Organic Juices
            </a>
          </li>
          <li className="list-group-item list_icon">
            {" "}
            <a href="/#">
              <i className="icofont-arrow-right"></i>Dried Products
            </a>
          </li>
          <li className="list-group-item list_icon">
            {" "}
            <a href="/#">
              <i className="icofont-arrow-right"></i>Fruits Fresh
            </a>
          </li>
          <li className="list-group-item list_icon">
            {" "}
            <a href="/#">
              <i className="icofont-arrow-right"></i>Fresh Meal
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostCategory;
