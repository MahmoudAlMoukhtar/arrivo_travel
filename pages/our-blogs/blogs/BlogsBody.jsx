import BreadCrumb from "../../../components/BreadCrumb";
import ToursBar from "../../../components/tours/ToursBar";
import BlogCard from "./BlogCard";

const BlogsBody = ({blogs}) => {
  const breadcrumbs = [
    {name: "الصفحة الرئيسية", path: "/"},
    {
      name: "المدونة",
      path: "/our-blogs",
    },
  ];
  const buttons = [
    {name: "شوارع عالمية", text: "شوارع عالمية"},
    {name: "إرشادات السفر", text: "إرشادات السفر"},
    {name: "الطعام", text: "الطعام"},
    {name: "الثقافة", text: "الثقافة"},
    {name: "معالم دينية", text: "معالم دينية"},
    {name: "ثقافة", text: "ثقافة"},
    {name: "فنادق", text: "فنادق"},
  ];
  return (
    <div className="wrapper flex flex-col gap-[24px]">
      <BreadCrumb center={true} breadcrumbs={breadcrumbs} />
      <div className="flex flex-col gap-y-[16px] items-center justify-center">
        <div className="flex flex-col items-center gap-[6px]">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold-600">
            الشمال التركي
          </h2>
        </div>
        <p className="md:max-w-[519px] text-[16px] text-grey text-center">
          أكثر من 445 مقال مكتوبة بعناية وإتقان عالي وكذلك دقة في صحة المعلومات،
          نرجو لكم وقتاً ممتعاً.
        </p>
      </div>
      <div className="hidden sm:block">
        <ToursBar buttons={buttons} />
      </div>
      <section className="flex flex-col gap-[20px]">
        {blogs?.map((b, i) => (
          <BlogCard key={i} blog={b} />
        ))}
      </section>
    </div>
  );
};

export default BlogsBody;
