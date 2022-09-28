import React, { useEffect, useState } from "react";

const useFetchData = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res), setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true), setError(error);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, isError, error };
};

export default useFetchData;
