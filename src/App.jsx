import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import { motion } from "framer-motion";

import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import ShoppingCard from "./components/ShoppingCard";
import Warnning from "./components/Warnning";

const Home = React.lazy(() => import("./pages/Home"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"));
const About = React.lazy(() => import("./pages/About"));
const Contactus = React.lazy(() => import("./pages/Contactus"));
const Products = React.lazy(() => import("./pages/Products"));

export const Context = createContext();

function App() {
  const [quentity, setQuentity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [cartProduct, setCartProduct] = useState([]);

  const handleAdd = (product) => {
    if (cartProduct.find((cart) => cart.id === product.id)) {
      setCartProduct([...cartProduct]);
      setQuentity(quentity);
      setIsAdded(true);
    } else {
      setQuentity(quentity + 1);
      setTotalPrice(totalPrice + product.attributes.price);
      setCartProduct([...cartProduct, product]);
    }
  };
  // console.log("length", isAdded);

  useEffect(() => {
    setTimeout(() => {
      setIsAdded(false);
    }, 4000);
  }, [isAdded]);

  const handleRemove = (id) => {
    const arr = cartProduct.filter((i) => i.id !== id);
    setCartProduct(arr);
    // console.log("ll", cartProduct.length);
    if (cartProduct.length === 1) {
      setQuentity(0);
      setTotalPrice(0);
    }
  };

  const ContextValue = {
    isShown,
    setIsShown,
    quentity,
    setQuentity,
    setCartProduct,
    cartProduct,
    totalPrice,
    setTotalPrice,
    handleAdd,
    handleRemove,
  };

  // console.log("run", totalPrice, quentity);
  // console.log("qtu", productQty);

  return (
    <Context.Provider value={ContextValue}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="container mx-auto relative"
      >
        <Router>
          <NavBar amount={quentity} />
          {isAdded ? <Warnning /> : null}
          {/* <Warnning /> */}
          {isShown ? <ShoppingCard /> : null}

          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />}></Route>
              <Route
                path="/products/:productSlug"
                element={<ProductDetail />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<Contactus />} />
            </Routes>
          </React.Suspense>
        </Router>
      </motion.div>
    </Context.Provider>
  );
}

export default App;
