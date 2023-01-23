import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

import { numberFormat } from "../utils";
import  {Context}  from "../App";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductCard = ({ product, category, discont = "0", index }) => {
  const { handleAdd } = useContext(Context);

  const { title, price, image, slug } = product.attributes;
  const url = image.data.attributes.formats.thumbnail.url;

  const mediaAnimation = {
    offScreen: { y: 100, opacity: 0 },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.7,
        delay: 0.1 * index,
        duration: 3,
      },
    },
  };

  return (
    <motion.div
      layout
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.1 }}
      variants={mediaAnimation}
      className="p-6 bg-white rounded-lg shadow-2xl w-60 "
    >
      <div className="flex items-center justify-center w-48 h-48 p-2 mx-auto mb-3 overflow-hidden border border-dotted border-secondary">
        <div className="transition duration-200 ease-out hover:opacity-80 hover:scale-105">
          <Link to={`/products/${slug}`}>
            <LazyLoadImage
              effect="blur"
              src={url}
              alt={title}
              // width={165}
              // height={165}
              width="100%"
              height="100%"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold">{category}</h4>
          <span className="text-xs badge badge-primary">{discont}%off</span>
        </div>
        <p className="flex mb-3">
          <span className="text-sm truncate text-gray">{title}</span>
        </p>
        <span className="relative flex items-center justify-between">
          <small className="text-xs text-secondary">
            Ks {numberFormat(price)}.00
          </small>

          <button
            onClick={() => handleAdd(product)}
            className="h-2 btn btn-outline btn-secondary btn-sm"
          >
            +
          </button>
        </span>
      </div>
    </motion.div>
  );
};

export default ProductCard;
