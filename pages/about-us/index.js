import Head from "next/head";
import Offer from "../../components/sub/Offer";
import Navbar from "../../components/common/Navbar";
import AboutUs from "./AboutUs";
import Footer from "../../components/common/Footer";

const AboutPage = () => {
  return (
    <div className="">
      <Head>
        <title>Arrivo | About us</title>
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
        <AboutUs />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
