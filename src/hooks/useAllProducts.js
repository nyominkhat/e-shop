import useFetch from "./useFetch";

const useAllProducts = () => {
  return useFetch("&pagination[pageSize]=100", "GET");
};

export default useAllProducts;
