import Image from "next/image";

const ServiceDetail = ({title, paragraph}) => {
  return (
    <div className="flex items-start gap-2">
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9997 2.8335C6.93692 2.8335 2.83301 6.93741 2.83301 12.0002C2.83301 17.0629 6.93692 21.1668 11.9997 21.1668C17.0624 21.1668 21.1663 17.0629 21.1663 12.0002C21.1663 6.93741 17.0624 2.8335 11.9997 2.8335ZM10.1663 16.963L5.85159 12.6482L7.14776 11.3521L10.1663 14.3707L16.8516 7.68541L18.1478 8.98158L10.1663 16.963Z"
            fill="#F08631"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <h6 className="text-[18px] font-bold">{title}</h6>
        <p className="text-[#475467]">{paragraph}</p>
      </div>
    </div>
  );
};
const AboutUsService = ({
  children,
  reverse,
  preTitle,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div
      className={`flex items-center justify-between flex-col-reverse  ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex flex-col items-start  gap-[24px]">
        <div className="flex flex-col gap-[4px]">
          <p className="text-orange font-bold-500 text-[16px]">{preTitle}</p>
          <h2 className=" text-[24px] sm:text-[28px] md:text-[36px]  font-bold-600">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-4 lg:w-[590px]">
          <p className="text-[#475467]">{description}</p>
          {children}
          <button className="bg-[#F08631] w-full md:w-[154px] py-[14px] px-[20px] text-white rounded-[8px]">
            تصفح الحجوزات
          </button>
        </div>
      </div>
      <div>
        <Image
          alt=""
          width={590}
          height={590}
          className="w-[400px] lg:w-[590px] hidden sm:block"
          src={imageSrc}
        />
      </div>
    </div>
  );
};

const AboutUsServices = () => {
  return (
    <section className="wrapper flex flex-col items-center gap-[56px]">
      <div className="flex flex-col md:items-center w-full">
        <p className="text-orange font-bold-500 text-[16px]">خدماتنا</p>

        <h1 className="text-[32px] sm:text-[48px] flex flex-col md:items-center font-bold">
          نقدم لكم خدمات مميزة
        </h1>
        <p className="text-[#475467] text-[14px] md:text-md md:text-center md:w-[533px]">
          ولأننا نسعى لراحتكم وتمتعكم برحلات فريدة نقدم لكم مجموعة من الخدمات
          المميزة بجودة عالية في رحلات غير إعتيادية لاكتشاف العالم.
        </p>
      </div>

      <AboutUsService
        imageSrc="/images/About us/Image.jpg"
        preTitle={"احصل افضل الباقات"}
        title="برامج سياحية"
        description={`نقدم مغامرات ملهمة وتجارب مصممة بعناية لكل عميل، مع تخطيط متفوق
            وتنظيم محكم لضمان تجربة سفر لا تُنسى.`}
      >
        <ServiceDetail
          title={"رحلات مصممة خصيصا لك :"}
          paragraph={`نهتم بالتفاصيل الصغيرة في تنظيم رحلاتك السياحية لتوفير تجربة
                فريدة تتوافق مع اهتماماتك ورغباتك الشخصية.`}
        />
        <ServiceDetail
          title={"تجارب سفر مبتكرة :"}
          paragraph={`نقدم خدمات مخصصة لكل عميل، مع توفير تجارب سفر مميزة تضمن لك قضاء وقت ممتع ومغامرات لا تنسى.`}
        />
        <ServiceDetail
          title={"دعم من مستشارين سياحيين :"}
          paragraph={`يقف فريقنا المؤلف من مستشارين سياحيين ذوي الخبرة إلى جانبك في كل مرحلة من مراحل تنظيم رحلتك، مما يضمن تجربة سفر سلسة ومريحة.`}
        />
      </AboutUsService>
      <AboutUsService
        imageSrc="/images/About us/Image-1.jpg"
        preTitle={"احجز بضمان"}
        title="حجز الاقامة"
        description={`استمتع بإقامة مثالية من خبراء يقدمون اختيارات ملائمة لكل أنواع الإقامة، مع مجموعة متنوعة من الخيارات لتناسب كل ذوق, مدعومة بأسعار تنافسية ومعرفة عميقة بأماكن الإقامة.`}
        reverse={true}
      >
        <ServiceDetail
          title={"معرفة عميقة :"}
          paragraph={`بناءً على خبرتنا الواسعة، نضمن لك اختيار مكان الإقامة والغرفة المثاليين، مما يكفل لك تجربة إقامة مريحة وممتعة.`}
        />
        <ServiceDetail
          title={"أسعار تنافسية :"}
          paragraph={`نتميز بتقديم أسعار جذابة بفضل شراكاتنا الطويلة الأمد مع مواقع الإقامة، لنوفير خصومات حصرية وعروض مميزة لعملائنا الكرام.`}
        />
        <ServiceDetail
          title={"إختيارات ملائمة :"}
          paragraph={`بفضل الخيارات الواسعة التي نقدمها، نؤكد لك العثور على مكان الإقامة المثالي الذي يتوافق تماماً مع تفضيلاتك واحتياجاتك.`}
        />
      </AboutUsService>
      <AboutUsService
        imageSrc="/images/About us/vector.jpg"
        preTitle={"استأجر وانت مطمن"}
        title="تأجير السيارات"
        description={`تأجير سيارات مرن وآمن, اختيارات متنوعة، توصيل مريح، لتجربة سفر لا مثيل لها.`}
      >
        <ServiceDetail
          title={"تنوع و عصرية المركبات :"}
          paragraph={`نهتم برغباتك واحتياجاتك، لذا نوفر لك مجموعة متنوعة من السيارات العصرية التي تلبي تطلعاتك.`}
        />
        <ServiceDetail
          title={"راحتك و أمانك :"}
          paragraph={`نضع سلامتك وراحتك نصب أعيننا من خلال تأمين جميع سياراتنا، لنمنحك تجربة سفر آمنة ومريحة تستحقها.`}
        />
        <ServiceDetail
          title={"توصيل و إستلام مرن :"}
          paragraph={`سعى دومًا لراحتك ونقدم مرونة تامة تتناسب مع توقيتك، لذا نوفر تسليم واستلام السيارات في أي وقت ومكان ترغب به.`}
        />
      </AboutUsService>
      <AboutUsService
        imageSrc="/images/About us/vector-1.jpg"
        preTitle={"سيارة بسائق"}
        title="رحلات يومية"
        description={`رحلات سياحية مبتكرة: اكتشف جوانب مخفية من البلاد برفقة سائق محترف، بينما يضمن لك مستشارونا المتمرسون تنظيم مسارات مدروسة لرحلة مريحة وممتعة، كل ذلك بأقل جهد ووقت ممكن.`}
        reverse={true}
      >
        <ServiceDetail
          title={"رحلات مصممة خصيصا لك :"}
          paragraph={`نهتم بالتفاصيل الصغيرة في تنظيم رحلاتك السياحية لتوفير تجربة فريدة تتوافق مع اهتماماتك ورغباتك الشخصية.`}
        />
        <ServiceDetail
          title={"تجارب سفر مبتكرة :"}
          paragraph={`نقدم خدمات مخصصة لكل عميل، مع توفير تجارب سفر مميزة تضمن لك قضاء وقت ممتع ومغامرات لا تنسى.`}
        />
        <ServiceDetail
          title={"دعم من مستشارين سياحيين :"}
          paragraph={`يقف فريقنا المؤلف من مستشارين سياحيين ذوي الخبرة إلى جانبك في كل مرحلة من مراحل تنظيم رحلتك، مما يضمن تجربة سفر سلسة ومريحة.`}
        />
      </AboutUsService>
    </section>
  );
};

export default AboutUsServices;
