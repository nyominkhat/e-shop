import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { TiArrowBack } from "react-icons/ti";
import { motion } from "framer-motion";

import { Context } from "../App";
import useAllProducts from "../hooks/useAllProducts";
import { numberFormat } from "../utils";

const ProductDetail = () => {
  const { handleAdd } = useContext(Context);

  const { productSlug } = useParams();

  const { response, loading } = useAllProducts();

  if (loading)
    return (
      <div className="font-bold bg-heather  flex items-center mx-auto justify-center  min-h-[90vh]">
        <button className="btn loading">loading</button>
      </div>
    );

  const products = response.data;

  const sluggedProduct = products.find(
    (product) => product.attributes.slug === productSlug
  );

  const { title, description, price, image } = sluggedProduct.attributes;
  const url = image.data.attributes.url;
  // console.log(productSlug, sluggedProduct);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white w-full min-h-[90vh] text-charcoal overflow-hidden flex justify-center items-center "
    >
      {/* over small device */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 1, type: "spring", bounce: 0.6 }}
        className="md:w-full lg:w-[90%] xl:w-4/5 md:h-[25rem]  bg-heather p-14 mx-auto shadow-2xl rounded-md md:flex hidden flex-wrap justify-between items-center relative"
      >
        <div className="overflow-hidden w-2/5 h-96 shadow-md bg-white rounded-sm p-[2px] absolute -top-14  border border-heather border-t-2">
          <div className="hover:scale-110 h-full transition duration-200 ease-out">
            <LazyLoadImage
              effect="blur"
              src={url}
              alt={title}
              // width={165}
              // height={165}
              width="100%"
              height="100%"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div>
          <Link className="absolute top-2 right-3" to="/products">
            <TiArrowBack size={30} />
          </Link>
          <div
            style={{ transform: "translate(0%,-10%)" }}
            className="absolute right-0 w-1/2 top-[20%] p-1"
          >
            <h2 className="font-bold text-2xl mb-4">{title}</h2>
            <span className="text-lg font-bold text-gray">
              Ks {numberFormat(price)}.00
            </span>
            <p className="flex text-sm mt-4 mb-4">{description}</p>
            <button
              onClick={() => handleAdd(sluggedProduct)}
              className="btn btn-outline btn-accent"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </motion.div>

      {/* small device */}
      <div className="md:hidden flex flex-col w-96 p-4">
        <LazyLoadImage
          effect="blur"
          src={url}
          alt={title}
          // width={165}
          // height={165}
          width="100%"
          height="100%"
          className="object-cover w-full h-full"
        />

        <div className="mt-2 p-2 ">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <span className="font-bold text-gray">Ks {price}.00</span>
          <p className="flex my-2 text-sm">{description}</p>
          <div className="flex mt-4 items-center justify-between">
            <button
              onClick={() => handleAdd(sluggedProduct)}
              className="btn btn-outline btn-accent"
            >
              Add To Cart
            </button>
            <Link className="pr-4" to="/products">
              <TiArrowBack size={25} />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDetail;
