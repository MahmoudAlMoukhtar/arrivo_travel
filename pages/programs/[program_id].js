import Head from "next/head";
import React from "react";
import Offer from "../../components/sub/Offer";
import Navbar from "../../components/Navbar";
import BreadCrumb from "../../components/BreadCrumb";
import Program from "../../components/Program";

const ProgramPage = () => {
  return (
    <div className="">
      <Head>
        <title>Arrivo | Program Title</title>
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
        <BreadCrumb />
        <Program />
        {/* <SimilarOffers /> */}
      </main>

      <footer className="">{/* <Footer /> */}</footer>
    </div>
  );
};

export default ProgramPage;
