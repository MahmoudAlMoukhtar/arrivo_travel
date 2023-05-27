import Head from "next/head";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Hero from "../components/Hero";
import Enjoy from "../components/Enjoy";
import Book from "../components/Book";
import Destinations from "../components/Destinations";
import Services from "../components/Services";
import Places from "../components/Places";
import DailyDests from "../components/DailyDests";
import Reviews from "../components/Reviews";
import Offer from "../components/sub/Offer";
import Tours from "../components/Tours";
import BlogShort from "../components/BlogShort";
import ContactShort from "../components/ContactShort";
import Footer from "../components/Footer";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (true) {
      // router.push("/programs/id");
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Arrivo</title>
        <meta
          name="description"
          content="This is a beautiful travel agency website"
        />
      </Head>

      <main>
        <Offer />
        <Navbar />
        <Hero />
        <Enjoy />
        <Book />
        <Destinations />
        <Services />
        <Places />
        <DailyDests />
        <Reviews />
        <Tours />
        <BlogShort />
        <ContactShort />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
