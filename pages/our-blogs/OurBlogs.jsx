import BlogsBanner from "./blogs/BlogsBanner";
import BlogsBody from "./blogs/BlogsBody";

const OurBlogs = ({blogs}) => {
  return (
    <div className="">
      <BlogsBanner />
      <BlogsBody blogs={blogs} />
    </div>
  );
};

export default OurBlogs;
