import React, { useContext } from "react";
import styles from "./CardTotal.module.css";
import Button from "../../components/Button/Button";
import { CartContext } from "../../store/cart-context";
import { bestSellers } from "../../looping/looping";
import { Link } from "react-router-dom";
import Checkout from "../../pages/Checkout/Checkout";
const CardTotal = () => {
  const cartCtx = useContext(CartContext);

  const { bestSellers } = cartCtx;

  let mainTotal = 0;
  cartCtx.bestSellers.map((value) => {
    mainTotal += +value.curPrice * +value.quantity;
  });

  let fullTotal = 80;
  fullTotal = mainTotal - fullTotal;

  const dtas = { ...bestSellers, total: fullTotal };
  const CheckoutItemHandler = async () => {
    await fetch(
      "https://tazza-product-default-rtdb.firebaseio.com/cart-product.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dtas),
      }
    );
  };

  return (
    <>
      <div className={styles.order_cardTotal}>
        <table className="table">
          <thead>
            <tr>
              <th
                scope="col"
                className={`${styles["card_total"]} text-uppercase" colspan="2"`}
              >
                CARD TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="subtotal">
                Subtotal:
              </th>
              <td className="text-right">${mainTotal}</td>
            </tr>
            <tr>
              <th scope="row" className=" ">
                Discount:
              </th>
              <td className="text-right">$80</td>
            </tr>
            <tr>
              <th scope="row">Total:</th>
              <td className={`text-right ${styles["total_num"]}`}>
                ${mainTotal && fullTotal}{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="chechout_btn text-end">
        <Button
          square
          iconName="icofont-bubble-right"
          class="mr-50"
          onClick={CheckoutItemHandler}
        >
          <Link className={styles.btn} to={"/CheckOut/"}>
            Checkout
          </Link>
        </Button>
      </div>
      {/* // </div> */}
    </>
  );
};

export default CardTotal;
