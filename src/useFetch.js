import { useState, useEffect } from "react";
import paginate from "./paginate";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return { loading, data };
};
