import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Contactus = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden bg-white text-charcoal min-h-[90vh]"
    >
      <h1 className="text-7xl font-bold text-center mt-12">Contact Us</h1>

      <div className="mt-16 flex items-center justify-around ">
        <div className="text-gray text-center">
          <p className="mb-10">We want to hear from you just contact us.</p>

          <p className="my-2">Customer Service - 09 999999999</p>
          <p className="my-2"> Office - 09 999999999</p>
          <p className="my-2">Email - exmple@gmail.com</p>
        </div>

        <div className="w-1/3">
          <label className="font-bold" htmlFor="name">
            Name <span className="text-[red]">*</span>
          </label>
          <div className="flex gap-3">
            <input
              id="name"
              type="text"
              placeholder="first"
              className="bg-white input input-bordered input-md w-full max-w-xs border-secondary"
            />
            <input
              type="text"
              placeholder="last"
              className="bg-white input input-bordered input-md w-full max-w-xs border-secondary"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label className="font-bold" htmlFor="email">
              Email <span className="text-[red]">*</span>
            </label>
            <input
              id="email"
              type="text"
              className="bg-white input input-bordered input-md w-full max-w-xs border-secondary"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label className="font-bold" htmlFor="message">
              Comment or Message <span className="text-[red]">*</span>
            </label>
            <textarea
              id="message"
              className="textarea bg-white border-secondary"
              placeholder=""
            ></textarea>
          </div>

          <button className="btn btn-secondary mt-5">Submit</button>
        </div> 
      </div>

      <div className="mt-40 ">
        <Footer />
      </div>
    </motion.div>
  );
};

export default Contactus;
