import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Context } from "../App";
import AddToCartItem from "./AddToCartItem";
import { numberFormat } from "../utils";

const ShoppingCard = () => {
  const { quentity, cartProduct, totalPrice } = useContext(Context);

  return (
    <motion.aside
      layout
      initial={{ y: -100 }}
      animate={{
        y: 0,
      }}
      className="fixed right-[0%] -top-1 text-charcoal z-[49] bg-white p-5 flex flex-col gap-2 shadow-2xl rounded-md sm:w-[25rem] w-full "
    >
      <div className="pt-20 pb-4 overflow-auto overflow-x-hidden max-h-[50vh]">
        {cartProduct.length < 1 ? (
          <p className="capitalize min-h-[10vh] flex justify-center items-center text-xl font-semibold text-gray">
            No products in the cart.
          </p>
        ) : (
          cartProduct.map((item, index) => {
            // console.log("item", item);
            return <AddToCartItem key={item.id} item={item} index={index} />;
          })
        )}
      </div>

      <div className="flex items-center justify-between px-4">
        <p className="text-sm">Items</p>
        <span className="text-sm font-semibold">{quentity}</span>
      </div>

      <div className="flex items-center justify-between px-4">
        <p className="text-sm">Total</p>
        <span className="text-sm font-semibold text-tan">
          Ks {numberFormat(totalPrice)}.00
        </span>
      </div>

      <div className="flex justify-center">
        <button className="btn btn-outline btn-secondary">CheckOut</button>
      </div>
    </motion.aside>
  );
};

export default ShoppingCard;
