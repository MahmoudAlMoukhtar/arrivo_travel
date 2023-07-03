import Head from "next/head";
import Offer from "../../components/sub/Offer";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import Programs from "./programs/Programs";
import {useEffect, useState} from "react";
import {getFirestore, collection, getDocs} from "firebase/firestore";
import app from "../../firebase";

export async function getServerSideProps() {
  //const data = await fetchDataPromise(url);
  const programs = [
    {
      img: "programs/pro-1.png",
      title: "جولة طبيعية في مدينة طرابزون",
      country: "trabzaon",
      rating: {
        avg: 4.8,
        count: 14,
      },
      tripStations: ["بحيرة اوزنجول", "متحف طرابزون للآثار", "كهف كارست"],
      description:
        "استمتع بجولة طبيعية في مدينة طرابزون واكتشف جمال الطبيعة الخلابة",
      price: 2500,
      persons: {from: 2, to: 5},
      hours: 9,
      offer: "العرض السياحي",
      mainType: "programs",
      subType: "withDriver",
      longTimeTravel: 5,
    },
    {
      img: "programs/pro-2.png",
      title: "رحلة إلى أهم المعالم السياحية في اسطنبول",
      country: "istanbul",
      rating: {
        avg: 4.5,
        count: 22,
      },
      tripStations: ["قصر توب كابي", "متحف سابانجا", "حديقة جولهان"],
      description:
        "استمتع برحلة إلى أهم المعالم السياحية في اسطنبول واكتشف جمالها الرائع",
      price: 3900,
      persons: {from: 3, to: 6},
      hours: 11,
      offer: "العرض السياحي",
      mainType: "programs",
      subType: "groub",
      longTimeTravel: 6,
    },

    {
      img: "programs/pro-3.png",
      title: "جولة ثقافية في مدينة اسطنبول",
      country: "istanbul",
      rating: {
        avg: 4.0,
        count: 10,
      },
      tripStations: [
        "متحف ايفاندو",
        "متحف الفن الحديث",
        "متحف الآثار الأناضولية",
      ],
      description: "استمتع بجولة ثقافية في مدينة اسطنبول واكتشف تاريخها الغني",
      price: 3100,
      persons: {from: 2, to: 4},
      hours: 7,
      offer: "العرض الثقافي",
      mainType: "daily-trips",
      subType: "privait",
      longTimeTravel: 4,
    },
    {
      img: "programs/pro-4.png",
      title: "رحلة إلى مناطق الأناضول الجبلية",
      country: "anadolu",
      rating: {
        avg: 3.9,
        count: 7,
      },
      tripStations: ["جبل أرارات", "وادي بولوت", "متحف الآثار الحربية"],
      description:
        "استمتع برحلة إلى مناطق الأناضول الجبلية وتمتع بالمناظر الطبيعية الخلابة",
      price: 4800,
      persons: {from: 4, to: 7},
      hours: 13,
      offer: "العرض الطبيعي",
      mainType: "programs",
      subType: "groub",
      longTimeTravel: 8,
    },
    {
      img: "programs/pro-5.png",
      title: "جولة تاريخية في مدينة بورصا",
      country: "anadolu",
      rating: {
        avg: 4.3,
        count: 13,
      },
      tripStations: [
        "قلعة بورصا",
        "متحف الفن التركي الإسلامي",
        "متنزه يشيل كوفي",
      ],
      description: "استمتع بجولة تاريخية في مدينة بورصا واكتشف تاريخها الغني",
      price: 2900,
      persons: {from: 2, to: 6},
      hours: 10,
      offer: "العرض الثقافي",
      mainType: "daily-trips",
      subType: "privait",
      longTimeTravel: 5,
    },
    {
      img: "programs/pro-1.png",
      title: "رحلة إلى شواطئ بحر إيجة الخلابة",
      country: "ege-deniz",
      rating: {
        avg: 4.6,
        count: 18,
      },
      tripStations: ["شاطئ بالاموت", "شاطئ ألتينداج", "شاطئ كوشاداسي"],
      description:
        "استمتع برحلة إلى شواطئ بحر إيجة الخلابة واسترخِ على أجمل الشواطئ",
      price: 3700,
      persons: {from: 3, to: 7},
      hours: 12,
      offer: "العرض السياحي",
      mainType: "programs",
      subType: "groub",
      longTimeTravel: 6,
    },
    {
      img: "programs/pro-2.png",
      title: "جولة تاريخية في مدينة ازمير",
      country: "ege-deniz",
      rating: {
        avg: 4.1,
        count: 11,
      },
      tripStations: ["قلعة ازمير", "متحف الآثار اليونانية", "حديقة كونيالتي"],
      description: "استمتع بجولة تاريخية في مدينة ازمير واكتشف تاريخها العريق",
      price: 3200,
      persons: {from: 2, to: 5},
      hours: 8,
      offer: "العرض الثقافي",
      mainType: "daily-trips",
      subType: "privait",
      longTimeTravel: 4,
    },

    {
      img: "programs/pro-3.png",
      title: "رحلة إلى مناطق شرق تركيا الجميلة",
      country: "anadolu",
      rating: {
        avg: 4.0,
        count: 9,
      },
      tripStations: ["جبل الأرارات", "متحف الآثار الحربية", "وادي بولوت"],
      description:
        "استمتع برحلة إلى مناطق شرق تركيا الجميلة وتمتع بالمناظر الخلابة",
      price: 4800,
      persons: {from: 4, to: 7},
      hours: 13,
      offer: "العرض الطبيعي",
      mainType: "programs",
      subType: "groub",
      longTimeTravel: 8,
    },
    {
      img: "programs/pro-5.png",
      title: "جولة تاريخية في مدينة إدرنة",
      country: "anadolu",
      rating: {
        avg: 4.2,
        count: 12,
      },
      tripStations: [
        "قلعة إدرنة",
        "متحف الآثار الحربية",
        "متحف الفن التركي الإسلامي",
      ],
      description:
        "استمتع بجولة تاريخية في مدينة إدرنة وتعرف على تاريخها العريق",
      price: 2900,
      persons: {from: 2, to: 5},
      hours: 8,
      offer: "العرض الثقافي",
      mainType: "daily-trips",
      subType: "privait",
      longTimeTravel: 4,
    },

    {
      img: "programs/pro-4.png",
      title: "رحلة إلى مناطق البحر الأسود الخلابة",
      country: "karadeniz",
      rating: {
        avg: 4.7,
        count: 19,
      },
      tripStations: ["بحيرة اوزنجول", "متحف طرابزون للآثار", "كهف كارست"],
      description:
        "استمتع برحلة إلى مناطق البحر الأسود الخلابة وتمتع بالمناظر الطبيعية الخلابة",
      price: 4200,
      persons: {from: 3, to: 6},
      hours: 11,
      offer: "العرض الطبيعي",
      mainType: "programs",
      subType: "groub",
      longTimeTravel: 6,
    },

    {
      img: "programs/pro-3.png",
      title: "جولة طبيعية في منطقة كابادوكيا",
      country: "kapadokya",
      rating: {
        avg: 4.9,
        count: 15,
      },
      tripStations: ["وادي الحبشة", "قصر أفانوس", "متحف دير غوريم"],
      description:
        "استمتع بجولة طبيعية في منطقة كابادوكيا وتمتع بالمناظر الخلابة والجو الممتع",
      price: 3200,
      persons: {from: 2, to: 4},
      hours: 7,
      offer: "العرض الطبيعي",
      mainType: "daily-trips",
      subType: "privait",
      longTimeTravel: 4,
    },

    {
      img: "programs/pro-2.png",
      title: "رحلة إلى شواطئ بحر مرمرة الساحرة",
      country: "marmara",
      rating: {
        avg: 4.4,
        count: 17,
      },
      tripStations: ["شاطئ دودورجا", "شاطئ يالوفا", "شاطئ سبنجا"],
      description:
        "استمتع برحلة إلى شواطئ بحر مرمرة الساحرة وتمتع بالمناظر الخلابة والشواطئ الرائعة",
      price: 3600,
      persons: {from: 3, to: 7},
      hours: 12,
      offer: "العرض السياحي",
      mainType: "programs",
      subType: "groub",
      longTimeTravel: 6,
    },

    {
      img: "programs/pro-1.png",
      title: "جولة تاريخية في مدينة أنقرة",
      country: "anadolu",
      rating: {
        avg: 4.1,
        count: 11,
      },
      tripStations: [
        "متحف الآثار الأنطولوجية",
        "قلعة أنقرة",
        "متحف الفن التركي الحديث",
      ],
      description:
        "استمتع بجولة تاريخية في مدينة أنقرة وتعرف على تاريخها العريق والمعالم السياحية الشهيرة",
      price: 2700,
      persons: {from: 2, to: 5},
      hours: 6,
      offer: "العرض الثقافي",
      mainType: "daily-trips",
      subType: "privait",
      longTimeTravel: 2,
    },

    {
      img: "programs/pro-2.png",
      title: "رحلة إلى مناطق الأناضول الغربية",
      country: "anadolu",
      rating: {
        avg: 4.8,
        count: 20,
      },
      tripStations: ["مدينة بورصة", "منتزه طبيعي أولوداغ", "مدينة إزمير"],
      description:
        "استمتع برحلة إلى مناطق الأناضول الغربية وتمتع بالمناظر الطبيعية الخلابة والمدن الجميلة",
      price: 4800,
      persons: {from: 3, to: 6},
      hours: 14,
      offer: "العرض الطبيعي",
      mainType: "programs",
      subType: "groub",
      longTimeTravel: 8,
    },

    {
      img: "programs/pro-3.png",
      title: "جولة طبيعية في منطقة بحر إيجه",
      country: "ege",
      rating: {
        avg: 4.6,
        count: 18,
      },
      tripStations: ["جزيرة بوزهادا", "شلالات بيرغاما", "جزيرة مندي"],
      description:
        "استمتع بجولة طبيعية في منطقة بحر إيجه وتمتع بالمناظر الخلابة والجزر الجميلة",
      price: 3800,
      persons: {from: 2, to: 4},
      hours: 10,
      offer: "العرض الطبيعي",
      mainType: "daily-trips",
      subType: "privait",
      longTimeTravel: 4,
    },

    {
      img: "programs/pro-4.png",
      title: "رحلة إلى منطقة البحر الأبيض المتوسط",
      country: "akdeniz",
      rating: {
        avg: 4.3,
        count: 16,
      },
      tripStations: ["مدينة أنطاليا", "شلالات كورونو", "مركز تزلج ساكليكنت"],
      description:
        "استمتع برحلة إلى منطقة البحر الأبيض المتوسط وتمتع بالمناظر الطبيعية الخلابة والمدن الجميلة",
      price: 4400,
      persons: {from: 3, to: 7},
      hours: 13,
      offer: "العرض السياحي",
      mainType: "programs",
      subType: "groub",
      longTimeTravel: 7,
    },
    {
      img: "programs/pro-2.png",
      title: "جولة تاريخية في مدينة اسطنبول",
      country: "istanbul",
      rating: {
        avg: 4.5,
        count: 25,
      },
      tripStations: ["السلطان احمد", "اياصوفيا", "متحف التاريخ الطبيعي"],
      description:
        "استمتع بجولة تاريخية في مدينة اسطنبول واكتشف أسرارها الغامضة",
      price: 3200,
      persons: {from: 2, to: 6},
      hours: 8,
      offer: "العرض الفاخر",
      mainType: "programs",
      subType: "privait",
      longTimeTravel: 4,
    },

    {
      img: "programs/pro-3.png",
      title: "رحلة استكشافية في منطقة البحر الأسود",
      country: "rize",
      rating: {
        avg: 4.2,
        count: 12,
      },
      tripStations: ["شلالات ريزا", "قلعة كستيلي", "متحف الفن التركي الإسلامي"],
      description:
        "استمتع برحلة استكشافية في منطقة البحر الأسود واكتشف جمالها الخلاب",
      price: 4500,
      persons: {from: 3, to: 7},
      hours: 12,
      offer: "العرض العائلي",
      mainType: "daily-trips",
      subType: "withDriver",
      longTimeTravel: 8,
    },

    {
      img: "programs/pro-4.png",
      title: "جولة سياحية في منطقة الأناضول",
      country: "anadolu",
      rating: {
        avg: 3.8,
        count: 8,
      },
      tripStations: ["مدينة قونية", "متحف الآثار الأناضولية", "مسجد سليمانية"],
      description:
        "استمتع بجولة سياحية في منطقة الأناضول واكتشف تاريخها العريق",
      price: 1800,
      persons: {from: 1, to: 5},
      hours: 6,
      offer: "العرض المميز",
      mainType: "programs",
      subType: "groub",
      longTimeTravel: 3,
    },

    {
      img: "programs/pro-5.png",
      title: "جولة سياحية في منطقة بحر إيجة",
      country: "ege-deniz",
      rating: {
        avg: 4.1,
        count: 17,
      },
      tripStations: ["متحف الحضارات الإغريقية", "قلعة بودروم", "شاطئ ألتينداج"],
      description:
        "استمتع بجولة سياحية في منطقة بحر إيجة واستمتع بجمال الشواطئ الرائعة",
      price: 2800,
      persons: {from: 2, to: 4},
      hours: 7,
      offer: "العرض الخاص",
      mainType: "daily-trips",
      subType: "privait",
      longTimeTravel: 5,
    },
  ];
  return {
    props: {
      trips: [],
      data: programs,
    },
  };
  // try {
  //   const db = getFirestore(app);
  //   const tripsRef = collection(db, "trips");
  //   const querySnapshot = await getDocs(tripsRef);
  //   const trips = querySnapshot.docs.map(doc => doc.data());
  //   console.log("from server", trips);
  //   return {
  //     props: {
  //       trips,
  //       data: programs,
  //     },
  //   };
  // } catch (error) {
  //   console.error("error");
  //   console.error(error.message);
  //   return {
  //     props: {
  //       trips: [],
  //       data: programs,
  //     },
  //   };
  // }
}

const TravelsPrograms = ({trips, data}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [slideIn, setSlideIn] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setSlideIn(true);
  };

  const closeModal = () => {
    setSlideIn(false);
    setTimeout(() => {
      setModalIsOpen(false);
    }, 500);
  };
  useEffect(() => {
    async function makeRequest() {
      const db = getFirestore(app);
      const tripsRef = collection(db, "trips");
      const querySnapshot = await getDocs(tripsRef);
      const trips = querySnapshot.docs.map(doc => doc.data());
      console.log(trips);
    }
    makeRequest();
  }, []);
  return (
    <div className="">
      <Head>
        <title>Arrivo | Programs</title>
        <meta
          name="description"
          content="This is a beautiful travel agency website"
        />
      </Head>

      <main className="">
        <div className="hidden md:block">
          <Offer />
        </div>
        <Navbar />
        <Programs
          data={data}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          closeModal={closeModal}
          openModal={openModal}
          slideIn={slideIn}
        />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default TravelsPrograms;
