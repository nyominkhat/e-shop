import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <section className="px-10 min-h-[40vh] flex justify-center items-center gap-1">
      <div className="cursor-pointer h-96">
        <LazyLoadImage
          effect="blur"
          width="100%"
          height="100%"
          className="object-cover w-full h-full bg-heather "
          src="./images/banner/Professional-E-Commerce-Shoes-Banner-Design.jpg"
        />
      </div>
      <div className="cursor-pointer h-96">
        <LazyLoadImage
          effect="blur"
          width="100%"
          height="100%"
          className="object-cover w-full h-full"
          src="./images/banner/banner-1.webp"
        />
      </div>
    </section>
  );
};

export default Banner;
