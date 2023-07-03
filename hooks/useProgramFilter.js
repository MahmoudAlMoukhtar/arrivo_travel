import {useState, useEffect} from "react";

const tours = [
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
    country: "trabzaon",
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

const useProgramFilter = initialCountry => {
  const [programs, setPrograms] = useState([]);
  const [country, setCountry] = useState(initialCountry);

  useEffect(() => {
    // Fetch programs data from backend API
    const fetchPrograms = async () => {
      //   const response = await fetch("/api/programs");
      //   const data = await response.json();
      //   setPrograms(data);
      setPrograms(tours);
    };
    fetchPrograms();
  }, []);

  const filteredPrograms = programs.filter(
    program => program.country === country
  );

  return {filteredPrograms, country, setCountry};
};

export default useProgramFilter;
