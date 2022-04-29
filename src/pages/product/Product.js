import HeroSection from "../../components/HeroSection/HeroSection";
import styles from "./Product.module.css";
import { Redirect } from "react-router-dom";
import Slider from "react-slick";
import Button from "../../components/Button/Button";
import { bestSellers } from "../../looping/looping";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import { Link, useParams, useHistory } from "react-router-dom";
// import { bestSellers } from "../../looping/organic";
const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  let history = useHistory();

  const cartCtx = useContext(CartContext);

  const { id } = useParams();
  console.log(id);

  const setProduct = (value) => {
    cartCtx.addItem(value);
  };

  const increaseNumber = (value) => {
    cartCtx.addItem(value);
  };

  const decreaseNumber = (id) => {
    cartCtx.removeItem(id);
  };

  let existingProduct;

  if (id) {
    existingProduct = bestSellers.find((item) => item.id === id);
  } else {
    <Redirect to="/HomePage" />;
    history.push("/HomePage");
    // console.log("abc");
  }

  return existingProduct ? (
    <>
      <HeroSection>Product Details </HeroSection>

      {/* <!-- PRODUCT DETAILS PART START --> */}
      <div className={styles["product_details"]}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className="product_img d-flex">
                <div className={styles.small_img}>
                  <img className="w-100" src={existingProduct.img} alt="" />
                  <img className="w-100" src={existingProduct.img} alt="" />
                  <img className="w-100" src={existingProduct.img} alt="" />
                </div>
                <div className="big_img">
                  <img
                    src={existingProduct.img}
                    className="w-100 img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <div className={styles.producudetails_content}>
                <h3>{existingProduct.productName}: Health Benefits</h3>
                <div className={styles.customer_review}>
                  <ul>
                    <li>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                      <i className="icofont-star"></i>
                    </li>
                    <li>
                      <p>(3 Customer Review)</p>
                    </li>
                  </ul>
                </div>
                <strong>${existingProduct.prevprice}</strong>
                <strong>
                  <del>${existingProduct.price}</del>
                </strong>
                <p>{existingProduct.deccription}</p>

                <div className="add_to_cart d-flex">
                  <div className={`${styles.quantity} d-flex`}>
                    <div className="left_arrow">
                      <button onClick={() => decreaseNumber(existingProduct)}>
                        &nbsp; -
                      </button>
                    </div>
                    <div className={styles.quantity_num}>
                      {existingProduct.quantity}
                    </div>
                    <div>
                      <button onClick={() => increaseNumber(existingProduct)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="ms-5">
                    <Button
                      iconName="icofont-bubble-right"
                      onClick={() => setProduct(existingProduct)}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- PRODUCT DETAILS PART END --> */}

      {/* <!-- PRODUCT TABBER START --> */}
      <div className={styles.product_tabber}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul
                className={`nav ${styles["nav-tabs"]} ${styles["nav_custom"]}`}
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={`${styles["nav-link"]} ${styles["nav-link-custom"]} `}
                    id="information-tab"
                    data-toggle="tab"
                    href="#information"
                    role="tab"
                    aria-controls="information"
                    aria-selected="true"
                  >
                    DESCRIPTION
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`${styles["nav-link"]} ${styles["nav-link-custom"]} `}
                    id="information-tab"
                    data-toggle="tab"
                    href="#information"
                    role="tab"
                    aria-controls="information"
                    aria-selected="true"
                  >
                    INFORMATION
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className={`${styles["nav-link"]} ${styles["nav-link-custom"]} `}
                    id="review-tab"
                    data-toggle="tab"
                    href="#review"
                    role="tab"
                    aria-controls="review"
                    aria-selected="true"
                  >
                    REVIEW
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className={`${styles["tab-pane"]} fade show ${styles.active}`}
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="information"
                  role="tabpanel"
                  aria-labelledby="information-tab"
                >
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                </div>
                <div
                  className="tab-pane fade"
                  id="review"
                  role="tabpanel"
                  aria-labelledby="review-tab"
                >
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                  <p>
                    Fresh strawberries are very high in water, so their total
                    carb content is very low fewer than 8 grams of carbs per 3.5
                    ounces (100 grams). The net digestible carb content is fewer
                    than 6 grams in the same serving size. Most of these
                    berries’ carbs come from simple sugars such as glucose,
                    fructose, and sucrose but they contan a decent amount of
                    fiber. Strawberries have a glycemic index (GI) score of 40,
                    which is relatively low (4). This means that strawberries
                    should not lead to big spikes in blood sugar levels and are
                    considered safe for people with diabetes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- PRODUCT TABBER END --> */}

      {/* <!-- BEST SELLER PART START --> */}
      <div className={`${styles["full-bestSeller"]}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-left">
              <h3 className={`${styles["section-title"]}`}>Related Product</h3>
            </div>
          </div>
          <div className="row mt-5">
            <Slider {...settings}>
              {bestSellers.map((value) => {
                return (
                  <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
                    <div className={styles.product}>
                      <div className={styles["product-img"]}>
                        <img className="w-100" src={value.img} alt="" />
                      </div>
                      <div className={styles["product-content"]}>
                        <div
                          className={`${styles["product-details"]} position-bottom-left`}
                        >
                          <h3 className={styles["product-name"]}>
                            <a href="productdetails.html">
                              {value.productName}
                            </a>
                          </h3>
                          <span className={styles["product-prev-price"]}>
                            ${value.prevprice}kg
                          </span>
                          <span className="product-price">
                            ${value.price} KG
                          </span>
                        </div>
                        <div className={styles["buttons"]}>
                          <span
                            className={`${styles["sold-out-tag"]} position-top-right`}
                          >
                            {value.soldtag}
                          </span>
                          <div className="position-bottom-right">
                            <Button cart onClick={() => setProduct(value)}>
                              Add to cart
                            </Button>
                          </div>
                        </div>

                        <div className={`${styles["icons"]} position-center`}>
                          <div className="rounded-icon">
                            <Link to={`/product/${value.id}`}>
                              <i className="icofont-eye"></i>
                            </Link>
                          </div>

                          <div className="rounded-icon">
                            <i className="icofont-heart-alt"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* <!-- BEST SELLER PART END --> */}
    </>
  ) : (
    <p>dsdsds</p>
  );
};

export default Product;
