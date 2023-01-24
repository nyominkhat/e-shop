import React, { useEffect, useState } from "react";

const API = `${import.meta.env.VITE_API_URL}/api/products?populate=*`;

// console.log(import.meta.env.VITE_API);

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
