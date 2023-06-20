import Head from "next/head";
import React, {useState} from "react";
import Offer from "../../components/sub/Offer";
import Navbar from "../../components/common/Navbar";
import BreadCrumb from "../../components/BreadCrumb";
import Footer from "../../components/common/Footer";
import ContctUs from "./ContactUS";

const ProgramPage = () => {
  const breadcrumbs = [
    {name: "الصفحة الرئيسية", path: "/"},
    {
      name: "تواصل معنا",
      path: "/contact-us",
    },
  ];
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
        <div className="mt-[30px] md:mt-[50px] mb-[64px]">
          <BreadCrumb breadcrumbs={breadcrumbs} />
        </div>
        <ContctUs />
        {/* <SimilarOffers /> */}
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default ProgramPage;
