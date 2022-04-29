import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import PopularTag from "../../components/PopularTag/PopularTag";
import PostCategory from "../../components/Post_category/PostCategory";
import RecentPost from "../../components/RecentPosst/RecentPost";
import styles from "./Blog.module.css";
import News1 from "../../assets/news1.jpg";
import FormInput from "../../components/FormInput/FormInput";
import { blog } from "../../looping/looping";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <HeroSection> Blog Page</HeroSection>
      {/* <!-- BLOG PART START --> */}
      <div className={styles["blog_part"]}>
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
              {blog.map((value) => {
                return (
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <div className="blog">
                        <div className="blog_img">
                          <img
                            src={value.img}
                            className="w-100 img-fluid"
                            alt="jpgimg"
                          />
                        </div>
                        <div className="pt-4 blog_publish d-flex justify-content-between">
                          <div className={styles.date}>
                            <span>
                              <i className="icofont-ui-calendar"></i>{" "}
                              {value.date}
                            </span>
                          </div>
                          <div className={styles.fav_icon}>
                            <span>
                              <i className="icofont-ui-love"></i> {value.like}
                            </span>
                            <span>
                              <i className="icofont-speech-comments"></i>{" "}
                              {value.comment}
                            </span>
                          </div>
                        </div>
                        <div className={`${styles.blog_title} text-uppercase`}>
                          <h4>
                            <a>{value.shortDescription}</a>
                          </h4>
                          <div className={styles.blog_title}>
                            <Link to={`/BlogDetails/${value.id}`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="mt-5 text-center row">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <div className={styles.pages_num}>
                    <ul className={styles.blog_list}>
                      <li>
                        <Link to="/BlogDetails/1">1</Link>
                      </li>
                      <li>
                        <Link to="/BlogDetails/2">2</Link>
                      </li>
                      <li>
                        <Link to="/BlogDetails/3">3</Link>
                      </li>
                      <li>
                        <a href="/#">
                          <i className="icofont-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
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

export default Blog;
