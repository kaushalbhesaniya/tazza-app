import Button from "../../components/Button/Button";
import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import PopularTag from "../../components/PopularTag/PopularTag";
import PostCategory from "../../components/Post_category/PostCategory";
import RecentPost from "../../components/RecentPosst/RecentPost";
import styles from "./BlogDetails.module.css";
import CustomerBg from "../../assets/Jennifer Lofez.jfif";
import CustomerBg1 from "../../assets/Belitaram Kusani.jpg";
import FormInput from "../../components/FormInput/FormInput";
import TextArea from "../../components/TextArea/TextArea";
import { blog } from "../../looping/looping";
import { useHistory, useParams } from "react-router";

const Blogdetails = () => {
  let history = useHistory();

  const { id } = useParams();
  console.log(id);

  let existingBlog;
  if (id) {
    existingBlog = blog.find((item) => item.id === id);
  } else {
    history.push("/HomePage");
  }

  return (
    <div>
      <HeroSection>Blog Details</HeroSection>
      {/* <!-- BLOG DETAILS PART START --> */}
      <div className={styles.blogdetails_part}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div className="allpost_content">
                    <div className="serach_btn">
                      <form action="#">
                        <div className={styles.search_ber}>
                          <FormInput
                            type="text"
                            className={` form-control ${styles["search_button"]} `}
                            id="serach_button"
                            name="serach_button"
                            value=""
                            placeholder="Search Here"
                          />
                          <i className="icofont-search-1"></i>
                        </div>
                      </form>
                    </div>
                    <PostCategory />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <RecentPost />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <PopularTag />
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className="blog">
                    <div className="blog_img">
                      <img
                        src={existingBlog.img}
                        className="w-100 img-fluid"
                        alt="jpgimg"
                      />
                    </div>
                    <div className="blog_publish d-flex justify-content-between pt-4">
                      <div className="date">
                        <span>
                          <i className="icofont-ui-calendar"></i>
                          {existingBlog.date}
                        </span>
                      </div>
                      <div className={styles.fav_icon}>
                        <span>
                          <i className="icofont-ui-love"></i>
                          {existingBlog.like}
                        </span>
                        <span>
                          <i className="icofont-speech-comments"></i>
                          {existingBlog.comment}
                        </span>
                      </div>
                    </div>
                    <div className={styles.blog_title}>
                      <h4>
                        <a href="blogdetails.html">
                          {existingBlog.shortDescription}
                        </a>
                      </h4>
                    </div>
                    <div className={styles.blog_details}>
                      <p>{existingBlog.longDescription}</p>
                      <p>{existingBlog.longDescription}</p>
                      <div
                        className={`${styles["blog_details_comment"]} mt-3 mb-3`}
                      >
                        <p>{existingBlog.commentlong}</p>
                      </div>
                      <p>{existingBlog.longDescription}</p>
                      <strong>
                        Strawberries are low-growing herbaceous plants with a
                        fibrous root system and a crown from which arise basal
                        leaves.
                      </strong>
                      <p>{existingBlog.longDescription}</p>
                      <p>{existingBlog.longDescription}</p>
                      <p>{existingBlog.longDescription}</p>
                      <div className="details_img mt-3 mb-3">
                        <div className="row">
                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img
                              src={existingBlog.img4}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>

                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img
                              src={existingBlog.img3}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>

                          <div className="col-xs-4 col-sm-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <img
                              src={existingBlog.img4}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmoed tempor encididunt ut labore et dolorem
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullameco laboris nisi ut aliquip ex ea
                        commod consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur excepteur sint occaecat cupidatat non proident.
                      </p>
                      <div className={styles.social_iconber}>
                        <div className="row align-items-center">
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-left">
                            <div className={styles.tags}>
                              <span>Tags:</span>
                              <span>
                                <a href="/#">Organic,</a>
                              </span>
                              <span>
                                <a href="/#">Farmer,</a>
                              </span>
                              <span>
                                <a href="/#">Food</a>
                              </span>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 text-right">
                            <div className={styles.social_icon}>
                              <ul className={styles.social_media}>
                                <li>
                                  <a href="/#">
                                    <i className="icofont-skype"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/#">
                                    <i className="icofont-facebook"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/#">
                                    <i className="icofont-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="/#">
                                    <i className="icofont-whatsapp"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`${styles["details_comment"]} mt-4`}>
                        <strong>Comment</strong>
                        <div className="customer d-flex mt-3">
                          <div className={`${styles["customer_img"]} mt-2`}>
                            <img
                              src={CustomerBg}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>

                          <div className={styles.customer_info}>
                            <strong>
                              Jennifer Lofez <br />
                            </strong>
                            <span>20 April 2020</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed doem eiusmoed tempor encidi dunt ut
                              labore et dolorem magna aliqua. Ut enim ad minim
                              veniam, quis nostru exercitation.
                            </p>
                          </div>
                          <div className={styles.reply}>
                            <i className="icofont-reply"></i>Reply
                          </div>
                        </div>
                        <div className="customer d-flex mt-3">
                          <div className={`${styles["customer_img"]} mt-2`}>
                            <img
                              src={CustomerBg1}
                              className="w-100 img-fluid"
                              alt=""
                            />
                          </div>{" "}
                          <div className={styles.customer_info}>
                            <strong>
                              Belitaram Kusani
                              <br />
                            </strong>
                            <span>20 April 2020</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed doem eiusmoed tempor encidi dunt ut
                              labore et dolorem magna aliqua. Ut enim ad minim
                              veniam, quis nostru exercitation
                            </p>
                          </div>
                          <div className={styles.reply}>
                            <i className="icofont-reply"></i>Reply
                          </div>
                        </div>
                      </div>
                      <div className={`${styles["blog_form"]} mt-4}`}>
                        <strong>Leave A Comments Here</strong>
                        <form action="#">
                          <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <FormInput
                                type="text"
                                className="form-control border-radius-0"
                                id="name"
                                name="name"
                                placeholder="Name:"
                              />
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <FormInput
                                type="email"
                                className="form-control border-radius-0"
                                id="email"
                                name="email"
                                placeholder="Email:"
                              />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <FormInput
                                type="text"
                                className="form-control border-radius-0"
                                id="phonenumber"
                                name="phonenumber"
                                placeholder="Phone:"
                              />
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-3">
                              <FormInput
                                type="text"
                                className="form-control border-radius-0"
                                id="subject"
                                name="subject"
                                placeholder="Subject:"
                              />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
                              <TextArea
                                className="form-control border-radius-0"
                                id="message:"
                                name="message:"
                                rows="3"
                                placeholder="Message:"
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button square iconName="icofont-bubble-right">
                              Submit comment
                            </Button>
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
      </div>
    </div>
  );
};

export default Blogdetails;
