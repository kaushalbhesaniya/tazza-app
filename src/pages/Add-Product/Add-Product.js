import React, { useState } from "react";
import styles from "./Add-Product.module.css";

const AddProduct = () => {
  const [name, setName] = useState();
  const [prevPrice, setPrevPrice] = useState();
  const [curPrice, setCurPrice] = useState();
  const [img, setImg] = useState();
  const [quantity, setQuentity] = useState();

  const [data, setdata] = useState({});

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const prevPriceHandler = (event) => {
    setPrevPrice(event.target.value);
  };
  const curPriceHandler = (event) => {
    setCurPrice(event.target.value);
  };
  const imgHandler = (event) => {
    setImg(event.target.value);
  };
  const quentityHandler = (event) => {
    setQuentity(event.target.value);
  };
  const AllData = {
    id: Math.random(),
    name: name,
    prevPrice: prevPrice,
    curPrice: curPrice,
    img: img,
    quantity: quantity,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await fetch(
      "https://tazza-product-default-rtdb.firebaseio.com/tazza-product.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AllData),
      }
    );
    setName("");
    setPrevPrice("");
    setCurPrice("");
    setImg("");
    setQuentity("");

    alert("Data Has Been SucessFully Submitted!!!");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <h1 className={styles.heading}>Add Product</h1>
        <div className={styles.main}>
          <div className="form-group m-auto col-md-6">
            <label for="text">Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product Name"
              onChange={nameHandler}
              value={name}
            ></input>
          </div>
          <div className="form-group m-auto col-md-6">
            <label for="text">PrevPrice</label>
            <input
              type="number"
              className="form-control"
              placeholder="PrevPrice"
              onChange={prevPriceHandler}
              value={prevPrice}
            ></input>
          </div>

          <div className="form-group m-auto col-md-6">
            <label for="tetx">CurrentPrice</label>
            <input
              type="number"
              className="form-control"
              placeholder="CurrentPrice"
              onChange={curPriceHandler}
              value={curPrice}
            ></input>
          </div>
          <div className="form-group m-auto  col-md-6">
            <label for="tetx">Image Link</label>
            <input
              type="url"
              className="form-control"
              placeholder="Image Link"
              onChange={imgHandler}
              value={img}
            ></input>
          </div>

          <div className="form-group m-auto  col-md-6">
            <label for="tetx">Quentity</label>
            <input
              type="number"
              className="form-control"
              placeholder="quentity"
              onChange={quentityHandler}
              value={quantity}
            ></input>
          </div>
          <div className="mx-auto m-4 col-md-6">
            <button className="btn col-md-12" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AddProduct;
