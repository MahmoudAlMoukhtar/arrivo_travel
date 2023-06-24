import {useRouter} from "next/router";
import services from "./servicesdata.json";
import ServiceBanner from "./ServiceBanner";
import BlogShort from "../../components/BlogShort";
import Enjoy from "../../components/Enjoy";
import ContactShort from "../../components/ContactShort";
import Service from "../../components/Service";
import ServiceDetail from "../../components/ServiceDetail";

const OurServices = () => {
  const router = useRouter();
  const {service} = router.query;
  const selectedService = services.find(s => s.slug === service);

  if (!selectedService) {
    return <div></div>;
  }

  return (
    <div>
      {selectedService.service && <ServiceBanner service={selectedService} />}
      <div className="wrapper sm:pt-[80px]">
        <Service
          url={selectedService.service.url}
          service={service}
          imageSrc={selectedService.service.imageSrc}
          preTitle={selectedService.service.preTitle}
          title={selectedService.service.title}
          description={selectedService.service.description}
          reverse={true}
        >
          {selectedService.details.map((d, i) => (
            <ServiceDetail key={i} title={d.title} paragraph={d.paragraph} />
          ))}
        </Service>
      </div>
      <Enjoy />
      <BlogShort />
      <ContactShort />
    </div>
  );
};

export default OurServices;
