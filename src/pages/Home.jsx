import React from "react";
import { motion } from "framer-motion";

import Categories from "../components/Categories";

import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import ServiceWrapper from "../components/ServiceWrapper";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden bg-white text-charcoal"
    >
      <Hero />

      <hr className="w-4/5 mx-auto my-10 border shadow-md text-heather" />

      <NewArrivals />

      <hr className="w-4/5 mx-auto my-10 border shadow-md text-heather" />

      <Categories />

      <hr className="w-4/5 mx-auto my-10 border shadow-md text-heather" />

      <Banner />

      <hr className="w-4/5 mx-auto my-10 border shadow-md text-heather" />

      <ServiceWrapper />
    </motion.div>
  );
};

export default Home;
