import styles from "./Header.module.css";
import { NavHashLink } from "react-router-hash-link";
import Logo from "../../assets/Logo.svg";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const { bestSellers } = cartCtx;

  return (
    <>
      <header className={`${styles["sticky"]}`}>
        <div className={`${styles.header} `}>
          <div className="container">
            <nav
              className={`navbar navbar-expand-lg  ${styles["navbar-lights"]} ${styles["header-bg"]}`}
            >
              <Link className={styles["navbar-brand"]} to="/">
                <img src={Logo} alt="" />
              </Link>
              <button
                className={`navbar-toggler ${styles["navbar-toggler-item"]}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <Icofont icon="navigation-menu" className={styles.iconm} />
              </button>

              <div
                className={`collapse navbar-collapse ${styles["collapse-navbar"]}`}
                ˍ
                id="navbarSupportedContent"
              >
                <ul
                  className={` navbar-nav ${styles["navbar-nav-item"]} mx-auto`}
                >
                  <li className="nav-item active">
                    <Link
                      className={`nav-link ${styles["nav-link-nav"]}`}
                      to=""
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${styles["nav-link-nav"]}`}
                      href="#full-about"
                    >
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <NavHashLink
                      className={`nav-link ${styles["nav-link-nav"]}`}
                      to="/#product"
                    >
                      Product
                    </NavHashLink>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${styles["nav-link-nav"]}`}
                      href="#full-testimonial"
                    >
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${styles["nav-link-nav"]}`}
                      to={"/AddProduct"}
                    >
                      Add Product
                    </Link>
                  </li>

                  <li className="nav-item dropdown">
                    <a
                      className={`${styles["nav-link-nav"]} nav-link dropdown-toggle`}
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul
                      className={`dropdown-menu  ${styles["dropdown-menus"]}`}
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link
                          to="/pages/product/Product/"
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                        >
                          Product Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li></li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/BlogDetails/1"
                        >
                          Blog Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Error"
                        >
                          404 Error
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/Cart"
                        >
                          Cart Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`dropdown-item ${styles["dropdown-items"]}`}
                          to="/CheckOut"
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className={styles["header-content"]}>
                  <div className={`${styles["header_contact"]} text-end`}>
                    <span className={styles.call_us}>Call Us!</span>
                    <span className={styles.phone_no}>+00 569 846 348</span>
                  </div>
                  <div className={styles.header_icon}>
                    <Link to="/Cart">
                      <i className="icofont icofont-cart"></i>
                      <span className={styles.cart_no}>
                        {bestSellers.length}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
