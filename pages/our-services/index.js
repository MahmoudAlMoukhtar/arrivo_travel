import Head from "next/head";
import Offer from "../../components/sub/Offer";
import Navbar from "../../components/common/Navbar";
import OurServices from "./OurServices";
import Footer from "../../components/common/Footer";

const OurServicesPage = () => {
  return (
    <div className="">
      <Head>
        <title>Arrivo | Our services</title>
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
        <OurServices />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default OurServicesPage;
