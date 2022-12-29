import React from "react";
import { motion } from "framer-motion";

const Warnning = () => {
  return (
    <motion.article
      initial={{
        x: -200,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      className="fixed top-[50vh] text-charcoal bg-[#ff9966] z-50 text-sm p-2 px-4 rounded-xl"
    >
      It's already added!
    </motion.article>
  );
};

export default Warnning;
