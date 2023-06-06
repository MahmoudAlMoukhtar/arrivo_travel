import {useState, useEffect} from "react";
const programs = [
  {
    img: "programs/pro-1.png",
    title: "رحلة تاريخ اسطنبول",
    country: "istanbul",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/5.png",
    country: "antalya",
    title: "أنطاليا",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة أنطاليا",
    price: 4170,
    persons: {from: 3, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },

  {
    img: "programs/pro-1.png",
    title: "رحلة تاريخ اسطنبول",
    country: "istanbul",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "programs/pro-1.png",
    title: "رحلة تاريخ اسطنبول",
    country: "istanbul",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },

  {
    img: "programs/pro-1.png",
    title: "رحلة تاريخ اسطنبول",
    country: "istanbul",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/5.png",
    country: "antalya",
    title: "أنطاليا",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة أنطاليا",
    price: 4170,
    persons: {from: 3, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "programs/pro-1.png",
    title: "رحلة تاريخ اسطنبول",
    country: "istanbul",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "programs/pro-1.png",
    title: "رحلة تاريخ اسطنبول",
    country: "istanbul",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "programs/pro-1.png",
    title: "رحلة تاريخ اسطنبول",
    country: "istanbul",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "programs/pro-1.png",
    title: "رحلة تاريخ اسطنبول",
    country: "istanbul",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/5.png",
    country: "antalya",
    title: "أنطاليا",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة أنطاليا",
    price: 4170,
    persons: {from: 3, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/trabzon.png",
    country: "trabzon",
    title: "طرابزون",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 1610,
    persons: {from: 2, to: 0},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/2.png",
    country: "istanbul",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "أوزنجول - إيدر - طرابزون ",
    price: 1690,
    persons: {from: 6, to: 7},
    hours: 10,
    offer: "العرض الفاخر العائلي ",
  },
  {
    img: "dests/3.png",
    country: "istanbul",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 3490,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/2.png",
    country: "istanbul",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "أوزنجول - إيدر - طرابزون ",
    price: 1690,
    persons: {from: 6, to: 7},
    hours: 10,
    offer: "العرض الفاخر العائلي ",
  },
  {
    img: "dests/3.png",
    country: "istanbul",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 3490,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/4.png",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/4.png",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/4.png",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/4.png",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
  {
    img: "dests/4.png",
    title: "الشمال التركي",
    rating: {
      avg: 5.0,
      count: 19,
    },
    tripStations: ["السلطان احمد", "اياصوفيا", "test"],
    description: "رحلة جميلة و رائعة إلى مدينة طرابزون",
    price: 2270,
    persons: {from: 6, to: 8},
    hours: 10,
    offer: "العرض الإقتصادي ",
  },
];

const useFetchData = url => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(url);
        // const json = await response.json();
        // setData(json);
        setData(programs);
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
