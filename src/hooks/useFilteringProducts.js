import useFetch from "./useFetch";

const useFilteringProducts = (category) => {
  return useFetch(`&filters[category][$in]=${category}`, "GET");
};

export default useFilteringProducts;

