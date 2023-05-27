import {useState, useEffect} from "react";

const useFetchData = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return data;
};

const fetchDataPromise = url => {
  return new Promise((resolve, reject) => {
    const data = useFetchData(url);
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Failed to fetch data"));
    }
  });
};

export default fetchDataPromise;
