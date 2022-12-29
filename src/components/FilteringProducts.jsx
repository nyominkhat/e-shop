import React from "react";

import ProductCard from "./ProductCard";

import useFilteringProducts from "../hooks/useFilteringProducts";

const FilteringProducts = ({ category }) => {
  const { response, loading } = useFilteringProducts(`${category}`);

  if (loading)
    return (
      <div className="font-bold bg-heather  flex items-center mx-auto justify-center  min-h-[50vh]">
        <button className="btn loading">loading</button>
      </div>
    );
  const products = response.data;
  // console.log("products", products, loading);

  return (
    <div className="flex flex-wrap items-center justify-evenly  w-[90%] gap-4  px-10 py-4   mx-auto">
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
