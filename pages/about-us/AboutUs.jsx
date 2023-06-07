import BlogShort from "../../components/BlogShort";
import ContactShort from "../../components/ContactShort";
import Enjoy from "../../components/Enjoy";
import AboutUSBanner from "./AboutUSBanner";
import AboutUsBrif from "./AboutUsBrif";
import AboutUsServices from "./AboutUsServices";
import KnowUs from "./KnowUs";
import TouristDestinations from "./TouristDestinations";

const AboutUs = () => {
  return (
    <div>
      <AboutUSBanner />
      <AboutUsBrif />
      <KnowUs />
      <TouristDestinations />
      <AboutUsServices />
      <Enjoy />
      <BlogShort />
      <ContactShort />
    </div>
  );
};

export default AboutUs;
