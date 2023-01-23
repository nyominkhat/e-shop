import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Banner = () => {
  return (
    <section className="xl:min-h-[40vh] w-full flex justify-center items-center gap-1 px-10">
      <div className="h-20 cursor-pointer sm:h-40 xl:h-96 md:h-60">
        <LazyLoadImage
          effect="blur"
          width="100%"
          height="100%"
          className="object-cover w-full h-full bg-heather "
          src="./images/banner/Professional-E-Commerce-Shoes-Banner-Design.jpg"
        />
      </div>
      <div className="h-20 cursor-pointer sm:h-40 xl:h-96 md:h-60">
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
