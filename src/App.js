import "./App.css";
import Header from "./components/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/HomePage/Homepage";
import { Route, Switch, useLocation } from "react-router";
import Product from "./pages/product/Product";
import Checkout from "./pages/Checkout/Checkout";
import Blog from "./pages/Blog/Blog";
import Blogdetails from "./pages/Blog-details/Blog-details";
import Cartoverview from "./pages/CartOverview/Cartoverview";
import Error from "./pages/404error/Error";
import { useEffect } from "react";
import CartProvider from "./store/cart-provider";
import { Redirect } from "react-router";
import AddProduct from "./pages/Add-Product/Add-Product";

const App = () => {
  const { pathName } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  return (
    <div>
      <CartProvider>
        <Header />

        <Route path="/" exact>
          <Redirect to="/HomePage" />
        </Route>

        <Route path="/Error" exact>
          <Error />
        </Route>

        <Route path="/HomePage" exact>
          <Homepage />
        </Route>

        <Route path="/Cart" exact component={Cartoverview} />

        <Route path="/BlogDetails" exact>
          <Blogdetails />
        </Route>
        <Route exact path="/BlogDetails/:id">
          <Blogdetails />
        </Route>

        <Route path="/Checkout" exact>
          <Checkout />
        </Route>

        <Route exact path="/product/:id">
          <Product />
        </Route>
        <Route exct path="/product">
          <Product />
        </Route>

        <Route path="/Blog" exact>
          <Blog />
        </Route>

        <Route path="/AddProduct" exact>
          <AddProduct />
        </Route>
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
