import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./Error.module.css";
import Error1 from "../../assets/error.png";
import Button from "../../components/Button/Button";

const Error = () => {
  return (
    <div>
      <HeroSection> 404_Error</HeroSection>
      <div className={styles.error_part}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className={styles.error_content}>
                <h4>Opps......This page is not found.</h4>
                <p>
                  Botanically, the strawberry fruit is considered an “accessory
                  fruit” and is not a true berry. The flesh consists of the
                  greatly nlarged flower receptacle.
                </p>
                <Button position="left" iconName="icofont-bubble-left">
                  Back to home
                </Button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="error_img">
                <img src={Error1} className="w-100 img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
