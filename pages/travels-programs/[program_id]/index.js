import Head from "next/head";
import React from "react";
import Offer from "../../../components/sub/Offer";
import Navbar from "../../../components/common/Navbar";
import BreadCrumb from "../../../components/BreadCrumb";
import Program from "../../../components/Program";
import Footer from "../../../components/common/Footer";

export async function getServerSideProps({params}) {
  const {program_id} = params;
  // fetch data for the post with ID equal to 'post'
  return {props: {type: program_id}};
}

const ProgramPage = ({type}) => {
  const breadcrumbs = [
    {name: "الصفحة الرئيسية", path: "/"},
    {
      name: "البرامج السياحية",
      path: "/travels-programs",
    },
    {name: "الشمال التركي", path: "/travels-programs/program"},
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
        <div className="mt-[30px] md:mt-[50px]">
          <BreadCrumb breadcrumbs={breadcrumbs} />
        </div>
        <Program type={type} />
        {/* <SimilarOffers /> */}
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
};

export default ProgramPage;
