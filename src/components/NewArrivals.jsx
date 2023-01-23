import React from "react";
import { Link } from "react-router-dom";

import ProductCard from "./ProductCard";

import useFilteringProducts from "../hooks/useFilteringProducts";

const NewArrivals = () => {
  const { response, loading } = useFilteringProducts("watch");

  // console.log(response);

  if (loading)
    return (
      <div className="font-bold bg-heather  flex items-center mx-auto justify-center  min-h-[70vh]">
        <button className="btn loading">loading</button>
      </div>
    );
  const products = response.data;

  const firstProduct = products[0];

  // console.log(firstProduct);

  return (
    <section className="bg-heather  p-4 min-h-[55vh]">
      <h2 className="mt-5 mb-10 text-2xl font-bold text-center lg:text-5xl md:text-4xl sm:text-3xl lg:pl-10 lg:text-left">
        NEW ARRIVALS
      </h2>

      {/* over small device */}
      <div className="flex-wrap items-center justify-around hidden gap-4 sm:flex">
        {products.map((product, index) => (
          <ProductCard
            index={index}
            key={product.attributes.slug}
            product={product}
            category={product.attributes.category.toUpperCase()}
          />
        ))}
      </div>

      {/* small device */}
      <div className="flex flex-col items-center justify-around gap-4 sm:hidden">
        <ProductCard
          product={firstProduct}
          category={firstProduct.attributes.category.toUpperCase()}
        />

        <Link to='/products'>
          <button className="btn btn-outline btn-secondary text-charcoal">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NewArrivals;
