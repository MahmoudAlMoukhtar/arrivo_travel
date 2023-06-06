import Image from "next/image";
import BreadCrumb from "../../components/BreadCrumb";

const AboutUsBrif = () => {
  const breadcrumbs = [
    {name: "الرئيسية", path: "/"},
    {
      name: "من نحن",
      path: "/about-us",
    },
  ];
  return (
    <section className="wrapper">
      <div className="flex items-center justify-between flex-col-reverse lg:flex-row">
        <div className="flex flex-col text-start items-start md:items-center lg:items-start md:text-center lg:text-start gap-[24px]">
          <BreadCrumb breadcrumbs={breadcrumbs} />
          <div className="flex flex-col gap-[4px]">
            <p className="text-orange font-bold-500 text-[16px]">من نحن</p>
            <h2 className=" text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-bold-600">
              شركة السلام للسياحية
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:w-[590px] text-[#475467]">
            <p>
              هي شركة متخصصة في السياحة وتنظيم الرحلات والانشطة السياحية في
              تركيا وخصوصا الشمال التركي, حيث راكمنا طيلة سنوات من العمل في هذا
              الميدان خبرة كبيرة في تنظيم الرحلات داخل تركيا ولكل الجنسيات وحسب
              ميزانية ورغبة عملائنا.
            </p>
            <p>
              هي شركة متخصصة في السياحة وتنظيم الرحلات والانشطة السياحية في
              تركيا وخصوصا الشمال التركي, حيث راكمنا طيلة سنوات من العمل في هذا
              الميدان خبرة كبيرة في تنظيم الرحلات داخل تركيا ولكل الجنسيات وحسب
              ميزانية ورغبة عملائنا.
            </p>
          </div>
        </div>
        <div>
          <Image
            alt=""
            width={590}
            height={590}
            className="w-[400px] lg:w-[590px] hidden sm:block"
            src="/images/About us/Large/Illustration.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBrif;
