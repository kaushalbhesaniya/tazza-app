import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import styles from "./Homepage.module.css";
import Icofont from "react-icofont";
import { Route, Switch, useParams } from "react-router";
import Slider from "react-slick";
import { CartContext } from "../../store/cart-context";
import Product from "../product/Product";
import { Link } from "react-router-dom";
import Testimonial from "../../assets/testimonial-1.png";

import News1 from "../../assets/news1.jpg";
import News2 from "../../assets/news2.jpg";
import News3 from "../../assets/news3.jpg";
import Button from "../../components/Button/Button";
import { blog } from "../../looping/looping";

import {
  bestSellers,
  Features,
  FirstBanner,
  partner,
} from "../../looping/looping";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <>
      <Icofont
        icon="icofont-double-right"
        className={styles["icofont-double-right"]}
        onClick={onClick}
      />
    </>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <>
      <Icofont
        icon="icofont-double-left"
        className={styles["icofont-double-left"]}
        onClick={onClick}
      />
    </>
  );
};

const Homepage = (props) => {
  // console.log();
  const testimonial = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const banner = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const BioProduct = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <rightSide />,
    prevArrow: <leftSide />,
  };
  const features = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const cartCtx = useContext(CartContext);

  const setProduct = (value) => {
    cartCtx.addItem(value);
  };
  const [getedData, setGetedData] = useState([
    // {
    //   id: Math.random(),
    //   name: "No Product",
    //   prevPrice: "prevPrice",
    //   curPrice: "curPrice",
    //   img: "123",
    // },
  ]);

  useEffect(() => {
    const sendrequst = async () => {
      const send = await fetch(
        "https://tazza-product-default-rtdb.firebaseio.com/tazza-product.json"
      );
      const geted = await send.json();
      const loadedMeals = [];

      for (const key in geted) {
        loadedMeals.push({
          id: geted[key].id,
          img: geted[key].img,
          name: geted[key].name,
          prevPrice: geted[key].prevPrice,
          curPrice: geted[key].curPrice,
          quantity: geted[key].quantity,
        });
      }

      setGetedData(loadedMeals);
      console.log(loadedMeals);
    };

    sendrequst();
  }, []);

  return (
    <>
      {/*banner */}
      <div className={styles["full-banner"]}>
        <div className="container">
          <div>
            <Slider {...banner}>
              {FirstBanner.map((value, index) => {
                return (
                  <div>
                    <div className={styles["banner-content"]}>
                      <h1>
                        {value.per}
                        <span>{value.tag}</span>
                      </h1>
                      <h3>{value.heading}</h3>
                      <p>{value.description}</p>
                      <Button position="right" iconName="icofont-bubble-right">
                        ALL PRoducts
                      </Button>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <span>{props.id}</span>
      {/* features  */}
      <div className={styles.full_features}>
        <div className="container">
          <div>
            <Slider {...features}>
              {Features.map((value, index) => {
                return (
                  <div className="mb-4 col-xs-12 col-md-12 col-lg-12 col-xl-12 col-ms-12">
                    <div className={`${styles["features-box"]} text-center`}>
                      <div className={styles["features-icon-border"]}>
                        <div className={styles["features-icon"]}>
                          {value.icon}
                        </div>
                      </div>

                      <div className={styles.features_text}>
                        <h3>{value.tag}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* about us started */}
      <div className={styles["full-about"]} id="full-about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles["about-content"]}>
                <h3>We Providing Services Since 1841 With Proud.</h3>
                <div className={styles["about-details"]}>
                  <p>
                    The readable content off a page when looking layout using
                    Lorem Ipsum is that it has.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted the readable content off a page when looking at
                    its layout using Lorem Ipsum is that it has.
                  </p>
                </div>

                <div
                  className={`${styles["about-icon-text"]} align-items-center`}
                >
                  <div className={styles["abt-icon"]}>
                    <i className="icofont-fruits"></i>
                  </div>
                  <div className={styles["abt-text"]}>
                    <h2>
                      Fresh Look And <span>100% Organic</span> Farm Fresh
                      Produce Right.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT US PART END --> */}
      {/* <!-- BEST SELLER PART START --> */}
      <div className={styles["full-bestSeller"]} id="product">
        <div className="container">
          <div className="row">
            <div className="text-center col-12">
              <h3 className={styles["section-title"]}>
                Our Best Seller Product
              </h3>
              <p className={styles["secttion-subtitle"]}>
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>

          <div className="mt-5 row">
            {bestSellers.map((value) => {
              // console.log(value.id);
              return (
                <div className="mb-4 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                  <div className={styles.product}>
                    <div className={styles["product-img"]}>
                      <img className="w-100" src={value.img} alt="" />
                    </div>
                    <div className={styles["product-content"]}>
                      <div className="product-details position-bottom-left">
                        <h3 className={styles["product-name"]}>
                          <a>{value.name}</a>
                        </h3>
                        <span className={styles["product-prev-price"]}>
                          ${value.prevprice}kg
                        </span>
                        <span className={styles["product-price"]}>
                          ${value.price}kg
                        </span>
                      </div>
                      <div className="buttons">
                        {value.soldtag && (
                          <span
                            className={`${styles["sold-out-tag"]} position-top-right`}
                          >
                            {value && value.soldtag}
                          </span>
                        )}
                        <span
                          className={`position-bottom-right ${styles["to-cart"]}`}
                        >
                          <Button cart onClick={() => setProduct(value)}>
                            Add to cart
                          </Button>
                        </span>
                      </div>

                      <div className={`${styles.icons} position-center`}>
                        <Link to={`/product/${value.id}`}>
                          <div className="rounded-icon">
                            <i className="icofont-eye"></i>
                          </div>
                        </Link>

                        <div className="rounded-icon">
                          <i className="icofont-heart-alt"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <!-- OFFER PART START --> */}
      <div className={styles["full-offer"]}>
        <div className={styles["bg-1"]}></div>
        <div className={styles["bg-2"]}></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className={styles["offer-content"]}>
                <h3>Daily Essentials</h3>
                <h2>
                  Sale 68% Off <br /> All Fruite Products
                </h2>
                {/* <a href="#" className="btn">
                  Explore more <i className="icofont-bubble-right"></i>
                </a> */}
                <Button position="right" iconName="icofont-bubble-right">
                  Explore more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OFFER PART END --> */}
      {/* <!-- PARTNERS PART START --> */}
      <div className={styles["full-partners"]}>
        <div className="container">
          <div className="partner-slider">
            <Slider {...BioProduct}>
              {partner.map((value) => {
                return (
                  <div className="col-md-12">
                    <div className="text-center partner-img">
                      <img className="mx-auto w-50" src={value.img} alt="" />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      {/* <!-- PARTNERS PART END -->


{/* <!-- TESTIMONIAL PART START --> */}
      <div className={styles["full-testimonial"]} id="full-testimonial">
        <div className="container">
          <div className="row">
            <div className="text-center col-12">
              <h3 className={`'section-title'${styles.section_title}`}>
                Our Happy Customers
              </h3>
              <p className={`'section-subtitle"'${styles.section_subtitle}`}>
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>
          <div className="mt-5 row align-items-center">
            <div className="col-md-4">
              <div className="text-center testimonial-img">
                <Slider {...settings}>
                  <div className="img">
                    <img className="w-100" src={Testimonial} alt="" />
                  </div>

                  <div className="img">
                    <img className="w-100" src={Testimonial} alt="" />
                  </div>
                  <div className="img">
                    <img className="w-100" src={Testimonial} alt="" />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="col-md-8">
              <div className={styles["testimonial-text"]}>
                <Slider {...testimonial}>
                  <div className={styles["testimonial-info"]}>
                    <p>
                      “ There are many variati ons passages of but the majority
                      have suffered alteration in some form, injected humour
                      randomised words which don't look even slightly
                      believable. If you are going to use a passage of text all
                      the loss.
                    </p>
                    <h3>Salvador Stanley</h3>
                    <h4>Happy Customer</h4>
                  </div>
                  <div className={styles["testimonial-info"]}>
                    <p>
                      “ There are many variati ons passages of but the majority
                      have suffered alteration in some form, injected humour
                      randomised words which don't look even slightly
                      believable. If you are going to use a passage of text all
                      the loss.
                    </p>
                    <h3>Salvador Stanley</h3>
                    <h4>Happy Customer</h4>
                  </div>
                  <div className={styles["testimonial-info"]}>
                    <p>
                      “ There are many variati ons passages of but the majority
                      have suffered alteration in some form, injected humour
                      randomised words which don't look even slightly
                      believable. If you are going to use a passage of text all
                      the loss.
                    </p>
                    <h3>Salvador Stanley</h3>
                    <h4>Happy Customer</h4>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- TESTIMONIAL PART END --> */}
      {/* <!-- CONTACT NOW PART END --> */}
      <div className={styles["contact-now"]}>
        <div className="container">
          <div className="row">
            <div className="text-center col-12">
              <h3 className={styles["contact-quote"]}>
                If you Need Natural And Fresh Organic Fruits!
              </h3>
              <Button position="right" iconName="icofont-bubble-right">
                Contact now
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT NOW PART END --> */}
      <div className={styles["full-latest-news"]}>
        <div className="container">
          <div className="row">
            <div className="text-center col-12">
              <h3 className={`'section-title'${styles.section_title}`}>
                Latest News
              </h3>
              <p className={`'section-subtitle"'${styles.section_subtitle}`}>
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>

          <div className="mt-5 row">
            <div className="col-md-6">
              <div className="latest-news-grid">
                <div className={styles["news-img"]}>
                  <img className="w-100" src={News1} alt="" />
                </div>

                <div className={styles["news-content"]}>
                  <div className={styles["date-react"]}>
                    <span className={styles["date"]}>{blog[0].date}</span>
                    <span className={styles["react"]}>
                      <i className="icofont-ui-love"></i> {blog[0].like}
                    </span>
                    <span className={styles["react"]}>
                      <i className="icofont-speech-comments"></i>{" "}
                      {blog[0].comment}
                    </span>
                  </div>
                  <div className={styles["news-title"]}>
                    <Link to={`/BlogDetails/${blog[0].id}`}>
                      <h4>{blog[0].shortDescription.substr(0, 50)}...</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="latest-news-list">
                <div className={styles["news-img"]}>
                  <img className="w-100" src={News2} alt="" />
                </div>

                <div className={styles["news-content"]}>
                  <div className={styles["date-react"]}>
                    <span className={styles["date"]}>{blog[1].date}</span>
                    <span className={styles["react"]}>
                      <i className="icofont-ui-love"></i> {blog[1].like}
                    </span>
                    <span className={styles["react"]}>
                      <i className="icofont-speech-comments"></i>{" "}
                      {blog[1].comment}
                    </span>
                  </div>
                  <div className={styles["news-title"]}>
                    <Link to={`/BlogDetails/${blog[1].id}`}>
                      <h4>{blog[1].verysdec}</h4>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="latest-news-list">
                <div className={styles["news-img"]}>
                  <img className="w-100" src={News3} alt="" />
                </div>

                <div className={styles["news-content"]}>
                  <div className={styles["date-react"]}>
                    <span className={styles["date"]}>{blog[2].date}</span>
                    <span className={styles["react"]}>
                      <i className="icofont-ui-love"></i> {blog[2].like}
                    </span>
                    <span className={styles["react"]}>
                      <i className="icofont-speech-comments"></i>{" "}
                      {blog[2].comment}
                    </span>
                  </div>
                  <div className={styles["news-title"]}>
                    <Link to={`/BlogDetails/${blog[2].id}`}>
                      <h4>{blog[2].verysdec}</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
