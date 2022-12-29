import React, { useEffect, useState } from "react";

const API = "http://localhost:1337/api/products?populate=*";

// const API = "https://e-shop-api-qnqq.onrender.com/api/products?populate=*";

const useFetch = (query = "", method) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setLoading(true);
    setResponse(null);

    fetch(`${API}${query}`, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setResponse(data);
        setLoading(false);
      })
      .catch((error) => console.warn("Sorry!", error));
  }, [method]);

  return { response, loading };
};

export default useFetch;
