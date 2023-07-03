import Image from "next/image";
import firebase from "firebase/app";
import "firebase/storage";
import {useState} from "react";

const BlogCard = blog => {
  const [arrowWhite, setArrowWhite] = useState(false);

  //   async function getImageURL(path) {
  //     try {
  //       const storageRef = firebase.storage().ref();
  //       const imageRef = storageRef.child(path);
  //       const downloadURL = await imageRef.getDownloadURL();
  //       console.log("Image URL retrieved:", downloadURL);
  //       return downloadURL;
  //     } catch (error) {
  //       console.error("Error retrieving image URL:", error);
  //       return null;
  //     }
  //   }

  //   const imageUrl = getImageURL("blogs/Background.jpeg");
  return (
    <div className="flex flex-col sm:flex-row items-start gap-8">
      <Image
        src={blog.blog.thumbImage}
        alt="blog"
        width={285}
        height={302}
        className="w-full sm:w-auto"
      />

      <div id="blog-content" className="flex flex-col gap-[20px]">
        <h2 className="text-[20px] sm:text-[28px] md:text-[36px] font-bold max-w-[875px]">
          {blog.blog.Title}
        </h2>
        <div className="text-[#F08631] text-[14px] sm:text-[16px]">
          طرابزون <span className="text-black">الوجهة</span> : 2023 فبراير 22
        </div>
        <p>{blog.blog.Body.slice(0, 150)}</p>
        <button
          onMouseOver={() => setArrowWhite(true)}
          onMouseOut={() => setArrowWhite(false)}
          className="flex items-center gap-x-[4px] py-[8px] px-[20px] border border-orange rounded-[8px] border-solid text-orange hover:bg-[#F08631] hover:text-white transtion duration-200 w-full sm:w-fit justify-center sm:justify-start"
        >
          أكمل القراءة
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 9L8.25 12M8.25 12L11.25 15M8.25 12H15.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
              stroke={arrowWhite ? "#fff" : "#F6882F"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
