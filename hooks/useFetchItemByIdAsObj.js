import {useState, useEffect} from "react";

const useFetchItem = (url, id) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`${url}/${id}`);
        const json = await response.json();
        setItem(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, [url, id]);

  return item;
};

const fetchItemByIdDataPromise = (url, id) => {
  return new Promise((resolve, reject) => {
    const data = useFetchItem(url, id);
    if (data) {
      resolve(data);
    } else {
      reject(new Error("Failed to fetch data"));
    }
  });
};

export default fetchItemByIdDataPromise;
