import React, { useContext, useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";

import { numberFormat } from "../utils";
import { Context } from "../App";

const AddToCartItem = React.memo(({ item, index }) => {
  const { totalPrice, setTotalPrice, quentity, setQuentity, handleRemove } =
    useContext(Context);

  const { title, image, price } = item.attributes;
  const [amount, setAmount] = useState(
    localStorage.getItem(title) ? parseInt(localStorage.getItem(title)) : 1
  );
  const url = image.data.attributes.formats.thumbnail.url;
  // console.log(quentity);
  // console.log(title, amount);
  useEffect(() => {
    if (quentity === 0 || amount === 1) {
      localStorage.removeItem(title);
    }

    localStorage.setItem(title, amount);
  }, [amount, title]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.09 * index,
        type: "spring",
        bounce: 0.4,
      }}
      className="flex items-center justify-between p-2 px-4 my-2 rounded-md bg-heather"
    >
      <div className="flex items-center w-1/2 gap-2">
        <img className="w-12 h-12 bg-white rounded-sm" src={url} alt={title} />
        <div className="flex flex-col overflow-hidden">
          <h4 className="text-sm font-semibold truncate">{title}</h4>
          <span className="text-xs text-tan">Ks {numberFormat(price)}</span>
        </div>
      </div>

      <div className="flex items-center gap-3 cursor-pointer">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (quentity === 0 || amount === 1) {
                handleRemove(item.id);
                setQuentity(quentity - 1);
                setTotalPrice(totalPrice - price);
              } else {
                setTotalPrice(totalPrice - price);
                setQuentity(quentity - 1);
                setAmount(amount - 1);
              }
            }}
            className="text-sm btn btn-xs btn-outline text-charcoal btn-secondary"
          >
            -
          </button>
          <span className="text-xs">{amount}</span>
          <button
            onClick={() => {
              if (quentity === 0 && amount === 1) {
                setQuentity(quentity + 1);
                setTotalPrice(totalPrice + price);
                setAmount(1);
              } else {
                setTotalPrice(totalPrice + price);
                setQuentity(quentity + 1);
                setAmount(amount + 1);
              }
            }}
            className="text-sm btn btn-xs btn-outline text-charcoal btn-secondary"
          >
            +
          </button>
        </div>

        <div
          onClick={() => {
            handleRemove(item.id);
            setQuentity(quentity - amount);
            setTotalPrice(totalPrice - price * amount);
            localStorage.removeItem(title);
          }}
        >
          <GrClose size={12} />
        </div>
      </div>
    </motion.div>
  );
});

export default AddToCartItem;
