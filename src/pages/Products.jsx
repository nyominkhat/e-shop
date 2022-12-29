import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollTag } from "react-scroll";
import FilteringProducts from "../components/FilteringProducts";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative bg-heather text-charcoal"
    >
      <div className="flex p-5 px-16 mb-4 sticky top-[10vh] left-0 z-50 backdrop-blur-sm ">
        <ul className="items-center justify-between hidden w-full md:flex">
          <li className="cursor-pointer select-none">
            <ScrollTag
              to="watch"
              spy={true}
              smooth={true}
              offset={-190}
              duration={200}
              className="font-bold p-2"
            >
              WATCH
            </ScrollTag>
          </li>

          <li className="cursor-pointer select-none">
            <ScrollTag
              to="polo-tee"
              spy={true}
              smooth={true}
              offset={-190}
              duration={200}
              className="font-bold p-2"
            >
              POLO-TEE
            </ScrollTag>
          </li>

          <li className="cursor-pointer select-none">
            <ScrollTag
              to="loose-tee"
              spy={true}
              smooth={true}
              offset={-190}
              duration={200}
              className="font-bold p-2"
            >
              LOOSE-TEE
            </ScrollTag>
          </li>

          <li className="cursor-pointer select-none">
            <ScrollTag
              to="shirt"
              spy={true}
              smooth={true}
              offset={-190}
              duration={200}
              className="font-bold p-2"
            >
              SHIRT
            </ScrollTag>
          </li>

          <li className="cursor-pointer select-none">
            <ScrollTag
              to="sneaker"
              spy={true}
              smooth={true}
              offset={-190}
              duration={200}
              className="font-bold p-2"
            >
              SNEAKER
            </ScrollTag>
          </li>

          <li className="cursor-pointer select-none">
            <ScrollTag
              to="bag"
              spy={true}
              smooth={true}
              offset={-190}
              duration={200}
              className="font-bold p-2"
            >
              BAG
            </ScrollTag>
          </li>
        </ul>
      </div>

      <div id="watch">
        <h2 className="mt-5 mb-10 text-2xl font-bold text-center lg:text-5xl md:text-4xl sm:text-3xl lg:pl-10 lg:text-left">
          WATCH
        </h2>
        <FilteringProducts category="watch" />
      </div>

      <hr className="w-4/5 mx-auto my-10 text-white border shadow-md" />

      <div id="polo-tee">
        <h2 className="mt-5 mb-10 text-2xl font-bold text-center lg:text-5xl md:text-4xl sm:text-3xl lg:pl-10 lg:text-left">
          POLO TEE
        </h2>
        <FilteringProducts category="polo-tee" />
      </div>

      <hr className="w-4/5 mx-auto my-10 text-white border shadow-md" />

      <div id="loose-tee">
        <h2 className="mt-5 mb-10 text-2xl font-bold text-center lg:text-5xl md:text-4xl sm:text-3xl lg:pl-10 lg:text-left">
          LOOSE TEE
        </h2>
        <FilteringProducts category="loose-tee" />
      </div>

      <hr className="w-4/5 mx-auto my-10 text-white border shadow-md" />

      <div id="shirt">
        <h2 className="mt-5 mb-10 text-2xl font-bold text-center lg:text-5xl md:text-4xl sm:text-3xl lg:pl-10 lg:text-left">
          SHIRT
        </h2>
        <FilteringProducts category="shirt" />
      </div>

      <hr className="w-4/5 mx-auto my-10 text-white border shadow-md" />

      <div id="sneaker">
        <h2 className="mt-5 mb-10 text-2xl font-bold text-center lg:text-5xl md:text-4xl sm:text-3xl lg:pl-10 lg:text-left">
          SNEAKER
        </h2>
        <FilteringProducts category="sneaker" />
      </div>

      <hr className="w-4/5 mx-auto my-10 text-white border shadow-md" />

      <div id="bag" className="mb-10">
        <h2 className="mt-5 mb-10 text-2xl font-bold text-center lg:text-5xl md:text-4xl sm:text-3xl lg:pl-10 lg:text-left">
          BAG
        </h2>
        <FilteringProducts category="bag" />
      </div>

      <hr className="w-4/5 mx-auto my-10 text-white border shadow-md" />

      <Footer />
    </motion.div>
  );
};

export default Products;
