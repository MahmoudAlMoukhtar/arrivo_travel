import Head from "next/head";
import React, { useRef } from "react";
import Slider from "react-slick";

const SlickSlider = ({ children, settings }) => {
  return (
    <div dir="ltr" className="relative">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default SlickSlider;
