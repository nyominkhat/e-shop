import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-heather text-charcoal h-[100vh] overflow-hidden min-h-[90vh]"
    >
      <h1 className="text-center text-7xl font-bold mt-20">About Us</h1>
    </motion.div>
  );
};

export default About;
