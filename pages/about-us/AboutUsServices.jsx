import Image from "next/image";
import Service from "../../components/Service";
import ServiceDetail from "../../components/ServiceDetail";

const Services = () => {
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

      <Service
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
      </Service>
      <Service
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
      </Service>
      <Service
        imageSrc="/images/About us/car.jpg"
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
      </Service>
      <Service
        imageSrc="/images/About us/daily.jpg"
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
      </Service>
    </section>
  );
};

export default Services;
