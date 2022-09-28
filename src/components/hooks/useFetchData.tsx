import React, { useEffect, useState } from "react";

const useFetchData = (url: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => setError(error));
  }, [url]);

  return { data, error };
};

export default useFetchData;
