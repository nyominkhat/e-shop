import React from "react";

import ProductCard from "./ProductCard";

import useFilteringProducts from "../hooks/useFilteringProducts";

const FilteringProducts = ({ category }) => {
  const { response, loading } = useFilteringProducts(category);

  if (loading)
    return (
      <div className="font-bold bg-heather  flex items-center mx-auto justify-center  min-h-[50vh]">
        <button className="btn loading">loading</button>
      </div>
    );
  const products = response.data;
  // console.log("products", products, loading);
  // flex flex-wrap items-center justify-evenly xl:justify-start
  return (
    <div
      style={{ gridTemplateColumns: "repeat(auto-fit,minmax(15rem , 1fr))" }}
      className="lg:grid sm:flex sm:justify-evenly flex flex-wrap justify-center w-[85%] gap-10  px-10 py-4  mx-auto"
    >
      {products.map((product, index) => (
        <ProductCard
          index={index}
          key={product.attributes.slug}
          product={product}
          category={product.attributes.category.toUpperCase()}
        />
      ))}
    </div>
  );
};

export default FilteringProducts;
