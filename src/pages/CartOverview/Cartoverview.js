import React, { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./CartOverview.module.css";

import { useEffect } from "react";
import CardTotal from "../../components/CardTotal/CardTotal";

const Cartoverview = () => {
  const cartCtx = useContext(CartContext);

  const { bestSellers } = cartCtx;

  const increaseNumber = (value) => {
    cartCtx.addItem(value);
  };

  const decreaseNumber = (id) => {
    cartCtx.removeItem(id);
  };
  const deleteHandler = (id) => {
    cartCtx.removeProduct(id);
  };
  return (
    <div>
      <HeroSection>Cart Overview</HeroSection>
      {/* <!-- CART OVERVIEW PART START --> */}
      <div className={styles.cart_overview}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 table-responsive">
              <table className="table">
                <thead>
                  <tr className={styles.cartoverview_title}>
                    <th>IMAGES</th>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
                    <th>REMOVE</th>
                  </tr>
                </thead>
                <tbody>
                  {bestSellers.map((value) => {
                    // console.log(value);
                    return (
                      <tr>
                        <th scope="row">
                          <div className={`${styles["small_img"]}`}>
                            <img className=" w-100" src={value.img} alt="" />
                          </div>
                        </th>
                        <td className="align-middle">
                          <b>{value.name}</b>
                        </td>
                        <td className="align-middle">${value.curPrice}</td>

                        <td className="align-middle">
                          <div className={`${styles.cart} d-flex`}>
                            <div className={`${styles.quantity} d-flex`}>
                              <div className="left_arrow">
                                <button
                                  type="button"
                                  onClick={() => decreaseNumber(value.id)}
                                >
                                  <i className="icofont-arrow-left"></i>
                                </button>
                              </div>
                              <div className={styles.quantity_num}>
                                {value.quantity}
                              </div>
                              <div className="right_arrow">
                                <button
                                  type="button"
                                  onClick={() => increaseNumber(value)}
                                >
                                  <i className="icofont-arrow-right"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="align-middle">
                          ${value.curPrice * value.quantity}
                        </td>
                        <td className="align-middle">
                          <i
                            className={`icofont-close text-danger ${styles.pointer}`}
                            onClick={() => deleteHandler(value.id)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.coupon_part}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div className={styles.serach_btnn}>
                <form action="#">
                  <div className={`position-relative ${styles.search_ber}`}>
                    <input
                      type="text"
                      className={`form-control ${styles.search_btnn}`}
                      id="serach_button"
                      name="serach_button"
                      value="TAZZA80"
                    />

                    <div className={styles.coupon_btn}>
                      <a href="#" className="border-radius-0">
                        APPLY COUPON
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
              <CardTotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartoverview;
