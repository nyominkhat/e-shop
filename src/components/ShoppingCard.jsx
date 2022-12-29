import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Context } from "../App";
import AddToCartItem from "./AddToCartItem";

const ShoppingCard = () => {
  const { quentity, cartProduct,  totalPrice } =
    useContext(Context);

  return (
    <motion.aside
      layout
      initial={{ y: -100 }}
      animate={{
        y: 0,
      }}
      className="fixed right-[10%] top-[10.2vh] text-charcoal w-1/5 z-[49] bg-white p-5 flex flex-col gap-2 shadow-2xl rounded-md "
    >
      <div className="max-h-[50vh] overflow-auto overflow-x-hidden">
        {cartProduct.map((item, index) => {
          // console.log("item", item);
          return <AddToCartItem key={item.id} item={item} index={index} />;
        })}
      </div>

      <div className="flex items-center justify-between px-4">
        <p className="text-sm">Items</p>
        <span className="text-sm font-semibold">{quentity}</span>
      </div>

      <div className="flex items-center justify-between px-4">
        <p className="text-sm">Total</p>
        <span className="text-sm font-semibold text-tan">
          Ks {totalPrice}.00
        </span>
      </div>

      <div className="flex justify-center">
        <button className="btn btn-outline btn-secondary">CheckOut</button>
      </div>
    </motion.aside>
  );
};

export default ShoppingCard;
