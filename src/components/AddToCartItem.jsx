import React, { useContext, useState } from "react";
import { GrClose } from "react-icons/gr";
import { motion, spring } from "framer-motion";
import { Context } from "../App";

const AddToCartItem = ({ item, index }) => {
  const { totalPrice, setTotalPrice, quentity, setQuentity, handleRemove } =
    useContext(Context);

  const { title, image, price } = item.attributes;
  const [amount, setAmount] = useState(1);
  const url = image.data.attributes.formats.thumbnail.url;
  // console.log("amount", amount);
  // console.log(amount);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2 * index,
        type: "spring",
        bounce: 0.4,
      }}
      className="bg-heather my-2 rounded-md p-2 px-4 flex items-center justify-between"
    >
      <div className="w-1/2 flex items-center gap-2">
        <img className="bg-white w-12 h-12 rounded-sm" src={url} alt={title} />
        <div className="flex flex-col overflow-hidden">
          <h4 className="text-sm font-semibold truncate">{title}</h4>
          <span className="text-xs text-tan">Ks {price}</span>
        </div>
      </div>

      <div className="cursor-pointer flex items-center gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (quentity === 0 || amount === 1) {
                handleRemove(item.id);
                setQuentity(quentity - 1);
                setTotalPrice(totalPrice - price);
                return;
              } else {
                setTotalPrice(totalPrice - price);
                setQuentity(quentity - 1);
                setAmount(amount - 1);
              }
            }}
            className="btn btn-xs btn-outline text-charcoal text-sm btn-secondary"
          >
            -
          </button>
          <span className="text-xs">{amount}</span>
          <button
            onClick={() => {
              if (quentity == 0 && amount === 1) {
                setQuentity(quentity + 1);
                setTotalPrice(totalPrice + price);
                setAmount(1);
              } else {
                setTotalPrice(totalPrice + price);
                setQuentity(quentity + 1);
                setAmount(amount + 1);
              }
            }}
            className="btn btn-xs btn-outline text-charcoal text-sm btn-secondary"
          >
            +
          </button>
        </div>

        <div
          onClick={() => {
            handleRemove(item.id);
            setQuentity(quentity - amount);
            setTotalPrice(totalPrice - price * amount);
          }}
        >
          <GrClose size={12} />
        </div>
      </div>
    </motion.div>
  );
};

export default AddToCartItem;
