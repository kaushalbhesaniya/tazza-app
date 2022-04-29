import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./Checkout.module.css";
import CreditCard from "../../assets/CreditCard.svg";
import Paypal from "../../assets/PayPal.svg";
import CardTotal from "../../components/CardTotal/CardTotal";
import FormInput from "../../components/FormInput/FormInput";
import TextArea from "../../components/TextArea/TextArea";
import { useForm, Controller } from "react-hook-form";
import Button from "../../components/Button/Button";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  Name: Yup.string()
    .min(8, "Too short")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  Text: Yup.string()
    .min(8, "Too short")
    .max(5000, "Too Long!")
    .required("add some text"),

  NickName: Yup.string()
    .min(8, "Too short")
    .max(50, "Too Long!")
    .required("Firstname is required"),

  phoneNumber: Yup.string()
    .min(10, "Too short")
    .max(10, "Too Long!")
    .required("Phone number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Invalid phone number"
    ),

  Postal: Yup.string()
    .required("Postal number is required")
    .matches(
      /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Invalid phone number"
    ),
  Country: Yup.string()
    .min(3, "Too short")
    .max(10, "Too Long!")
    .required("Country is required"),

  State: Yup.string()
    .min(3, "Too short")
    .max(8, "Too Long!")
    .required("State is required"),

  Address: Yup.string()
    .min(3, "Too short")
    .max(8, "Too Long!")
    .required("State is required"),

  Email: Yup.string().email().required("Email is required"),
});
const Checkout = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div>
      <HeroSection>Checkout</HeroSection>
      {/* <!-- ORDER PART STRAT --> */}
      <div className={styles.order_part}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className={styles.order_content}>
                <div className={styles.order_txt}>
                  <h2>Your Order</h2>
                  <p>
                    We all know how hard it can be make sure ead lookis like
                    demo tom make your start intoe the world of easy ase
                    possible have encluded the demom.
                  </p>
                </div>
                <CardTotal />
                <div className={`${styles["payment_method"]} pt-4`}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className={styles.payment_head}
                          colspan="2"
                        >
                          Payment method
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="w-50">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment"
                              id="credit_card"
                              value=""
                              checked
                            />
                            <label
                              className="form-check-label"
                              for="credit_card"
                            >
                              Credit Card
                            </label>
                          </div>
                        </th>
                        <td className="w-50">
                          <img
                            src={CreditCard}
                            alt="img"
                            className="credit_card float-right"
                          />
                        </td>
                      </tr>
                      <tr>
                        <th className="w-50">
                          <div className={`${styles["form-check"]}`}>
                            <input
                              className="form-check-input"
                              type="radio"
                              name="payment"
                              id="paypal"
                              value=""
                            />
                            <label className="form-check-label" for="paypal">
                              Paypal
                            </label>
                          </div>
                        </th>
                        <td className="w-50">
                          <img
                            src={Paypal}
                            alt="img"
                            className="paypal float-right"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
              <div className="billing_content">
                <div className={`${styles["billing_head"]} text-uppercase`}>
                  <h2>billing details</h2>
                  <div className="billing_form">
                    {/* form submitted */}
                    <form
                      novalidate
                      action="#"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <FormInput {...field} placeholder="Name" />
                            )}
                            name="Name"
                            control={control}
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                          />
                          {errors.Name && (
                            <span role="alert">{errors.Name.message}</span>
                          )}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <FormInput {...field} placeholder="NickName" />
                            )}
                            name="NickName"
                            control={control}
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                          />
                          {errors.NickName && (
                            <span role="alert">{errors.NickName.message}</span>
                          )}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <FormInput {...field} placeholder="Email" />
                            )}
                            name="Email"
                            control={control}
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                          />
                          {errors.Email && (
                            <span role="alert">{errors.Email.message}</span>
                          )}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <FormInput {...field} placeholder="phoneNumber" />
                            )}
                            name="phoneNumber"
                            control={control}
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                          />
                          {errors.phoneNumber && (
                            <span role="alert">
                              {errors.phoneNumber.message}
                            </span>
                          )}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <FormInput {...field} placeholder="Country" />
                            )}
                            name="Country"
                            control={control}
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                          />
                          {errors.Country && (
                            <span role="alert">{errors.Country.message}</span>
                          )}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <FormInput
                                {...field}
                                placeholder="State/District"
                              />
                            )}
                            name="State"
                            control={control}
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                          />
                          {errors.State && (
                            <span role="alert">{errors.State.message}</span>
                          )}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <FormInput {...field} placeholder="Address" />
                            )}
                            name="Address"
                            control={control}
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                          />
                          {errors.Address && (
                            <span role="alert">{errors.Address.message}</span>
                          )}
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                          <Controller
                            render={({ field }) => (
                              <FormInput {...field} placeholder="Postal" />
                            )}
                            name="Postal"
                            control={control}
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                          />
                          {errors.Postal && (
                            <span role="alert">{errors.Postal.message}</span>
                          )}
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  col-xl-12 mt-3">
                          <Controller
                            render={({ field }) => (
                              <TextArea
                                {...field}
                                placeholder="Textarea"
                                rows="10"
                              />
                            )}
                            name="Text"
                            control={control}
                            className={`form-control ${styles["form-control-form"]} border-radius-0`}
                          />
                          {errors.Text && (
                            <span role="alert">{errors.Text.message}</span>
                          )}
                        </div>

                        <div className="text-end mt-3">
                          <Button
                            // onClick={handleSubmit(onSubmit)}
                            square
                            type="submit"
                          >
                            submit
                          </Button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
