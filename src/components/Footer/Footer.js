import styles from "./Footer.module.css";

import React from "react";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_top}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
              <div className={styles.footer_widget}>
                <div className={styles.footer_widget_title}>
                  <h2>Contact Us!</h2>
                </div>
                <ul className={styles.footer_widget_content}>
                  <li>
                    <span>Phone: &nbsp;&nbsp;&nbsp;&nbsp;</span>+000 333 879 788
                  </li>
                  <li>
                    <span>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    support@gmail.com
                  </li>
                  <li>
                    <span>Address: &nbsp;</span> king street,avenue
                  </li>
                </ul>

                <div className={styles.footer_social}>
                  <ul className={styles.footer_social_icons}>
                    <li>
                      <a href="#">
                        <i className="icofont-skype"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"> </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-whatsapp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
              <div className={styles.footer_widget}>
                <div className={styles.footer_widget_title}>
                  <h2>Customer support</h2>
                </div>
                <ul className={styles.footer_widget_content}>
                  <li>
                    <i className="icofont-double-right"></i>
                    <a href="#">about us</a>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <a href="#">privacy policy</a>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <a href="#">terms & conditions</a>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <a href="#">product returns</a>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <a href="#">wholesale policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 mb-5">
              <div className={styles.footer_widget}>
                <div className={styles.footer_widget_title}>
                  <h2>quick links</h2>
                </div>
                <ul className={styles.footer_widget_content}>
                  <li>
                    <i className="icofont-double-right"></i>
                    <a href="#">Pagination</a>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <i className="icofont-double-right"></i>
                    <a href="#">Term of use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- FOOTER BOTTOM PART START --> */}
      <div className={styles.footer_bottom}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12">
              <div className={`${styles["footer_txt"]} text-center`}>
                <p>
                  Copyright 2022{" "}
                  <span>
                    <a href="#top">TazZa</a>
                  </span>
                  . All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- FOOTER BOTTOM PART END --> */}
    </>
  );
};

export default Footer;
