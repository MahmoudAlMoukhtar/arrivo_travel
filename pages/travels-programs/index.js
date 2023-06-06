import Head from "next/head";
import Offer from "../../components/sub/Offer";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Programs from "./programs/Programs";

export async function getStaticProps() {
  const url = "https://api.example.com/data";

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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "groub",
      longTimeTravel: 6,
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
      persons: {from: 3, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "groub",
      longTimeTravel: 6,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "privait",
      longTimeTravel: 16,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "privait",
      longTimeTravel: 16,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "withDriver",
      longTimeTravel: 8,
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
      persons: {from: 3, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "withDriver",
      longTimeTravel: 8,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "privait",
      longTimeTravel: 11,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "privait",
      longTimeTravel: 11,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "groub",
      longTimeTravel: 6,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "groub",
      longTimeTravel: 6,
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
      persons: {from: 3, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "withDriver",
      longTimeTravel: 8,
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
      persons: {from: 2, to: 2},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "withDriver",
      longTimeTravel: 8,
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
      type: "withDriver",
      longTimeTravel: 8,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "privait",
      longTimeTravel: 11,
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
      type: "privait",
      longTimeTravel: 11,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "groub",
      longTimeTravel: 20,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "groub",
      longTimeTravel: 14,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "withDriver",
      longTimeTravel: 18,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "withDriver",
      longTimeTravel: 5,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "privait",
      longTimeTravel: 13,
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
      persons: {from: 1, to: 7},
      hours: 10,
      offer: "العرض الإقتصادي ",
      type: "privait",
      longTimeTravel: 5,
    },
  ];

  //const data = await fetchDataPromise(url);

  return {
    props: {
      data: programs,
    },
  };
}

const TravelsPrograms = ({data}) => {
  //console.log(data);
  return (
    <div className="">
      <Head>
        <title>Arrivo | Programs</title>
        <meta
          name="description"
          content="This is a beautiful travel agency website"
        />
      </Head>

      <main>
        <div className="hidden md:block">
          <Offer />
        </div>
        <Navbar />
        <Programs data={data} />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default TravelsPrograms;
