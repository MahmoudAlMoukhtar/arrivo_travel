import Head from "next/head";
import ContactShort from "../../components/ContactShort";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Offer from "../../components/sub/Offer";
import app from "../../firebase";
import OurBlogs from "./OurBlogs";
import {useEffect, useState} from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";
export async function getServerSideProps() {
  try {
    const db = getFirestore(app);
    const tripsRef = collection(db, "blogs");
    const querySnapshot = await getDocs(tripsRef);
    const blogs = querySnapshot.docs.map(doc => doc.data());
    console.log("from server", blogs);
    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    console.error("error");
    console.error(error.message);
    return {
      props: {
        blogs: [],
      },
    };
  }
}

export default function Blogs({openModal, slideIn}) {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    async function makeRequest() {
      const db = getFirestore(app);
      const tripsRef = collection(db, "blogs");
      const querySnapshot = await getDocs(tripsRef);
      const blogsSnapshot = querySnapshot.docs.map(doc => doc.data());
      console.log(blogsSnapshot);
      setBlogs(blogsSnapshot);
    }
    makeRequest();
  }, []);
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Arrivo | Our Blogs</title>
        <meta
          name="description"
          content="This is a beautiful travel agency website"
        />
      </Head>

      <main>
        <Offer />
        <Navbar openModal={openModal} slideIn={slideIn} />
        <OurBlogs blogs={blogs} />
        <ContactShort />
      </main>

      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}
