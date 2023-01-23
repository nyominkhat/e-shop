import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Categories = () => {
  return (
    <section id="shop-now">
      <h2 className="mt-5 mb-10 text-2xl font-bold text-center lg:text-5xl md:text-4xl sm:text-3xl lg:pl-14 lg:text-left">
        CATEGORIES
      </h2>

      {/* over small device */}
      <div className="h-[80vh] md:grid grid-cols-4 grid-rows-2 gap-2 px-10 hidden">
        <div className="relative overflow-hidden bg-heather">
          <div className="h-full transition duration-200 ease-out hover:scale-105">
            <LazyLoadImage
              effect="blur"
              src="./images/category-imgs/watch.jpg"
              width="100%"
              height="100%"
              className="object-cover w-full h-full bg-heather "
            />
            {/* transform: translate(-50%,-50%); */}
            <button
              style={{ transform: "translate(-50%,-50%)" }}
              className="absolute top-[50%] left-[50%] text-secondary border border-secondary border-1 py-3 px-4 rounded-md hover:bg-tan hover:text-charcoal font-semibold transition duration-200 ease-out"
            >
              WATCH
            </button>
          </div>
        </div>

        <div className="relative row-span-2 overflow-hidden bg-heather">
          <div className="h-full transition duration-200 ease-out hover:scale-105">
            <LazyLoadImage
              effect="blur"
              src="./images/category-imgs/loosetee.jpg"
              width="100%"
              height="100%"
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <button
              style={{ transform: "translate(-50%,-50%)" }}
              className="absolute top-[50%] left-[50%] text-secondary border border-secondary border-1 py-3 px-4 rounded-md hover:bg-tan hover:text-charcoal font-semibold transition duration-200 ease-out 
               
            "
            >
              LOOSE TEE
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-heather">
          <div className="h-full transition duration-200 ease-out hover:scale-105">
            <LazyLoadImage
              effect="blur"
              src="./images/category-imgs/polotee.jpg"
              width="100%"
              height="100%"
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <button
              style={{ transform: "translate(-50%,-50%)" }}
              className="absolute top-[50%] left-[50%] text-secondary border border-secondary border-1 py-3 px-4 rounded-md hover:bg-tan hover:text-charcoal font-semibold transition duration-200 ease-out  "
            >
              POLO TEE
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-heather">
          <div className="h-full transition duration-200 ease-out hover:scale-105">
            <LazyLoadImage
              effect="blur"
              src="./images/category-imgs/shirt.jpg"
              width="100%"
              height="100%"
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <button
              style={{ transform: "translate(-50%,-50%)" }}
              className="absolute top-[50%] left-[50%] text-secondary border border-secondary border-1 py-3 px-4 rounded-md hover:bg-tan hover:text-charcoal font-semibold transition duration-200 ease-out  "
            >
              SHIRT
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-heather">
          <div className="h-full transition duration-200 ease-out hover:scale-105">
            <LazyLoadImage
              effect="blur"
              src="./images/category-imgs/sneaker.jpg"
              width="100%"
              height="100%"
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <button
              style={{ transform: "translate(-50%,-50%)" }}
              className="absolute top-[50%] left-[50%] text-secondary border border-secondary border-1 py-3 px-4 rounded-md hover:bg-tan hover:text-charcoal font-semibold transition duration-200 ease-out  "
            >
              SNEAKER
            </button>
          </div>
        </div>

        <div className="relative col-span-2 overflow-hidden bg-heather">
          <div className="h-full transition duration-200 ease-out hover:scale-105">
            <LazyLoadImage
              effect="blur"
              src="./images/category-imgs/bag.jpg"
              width="100%"
              height="100%"
              loading="lazy"
              className="object-cover w-full h-full"
            />
            <button
              style={{ transform: "translate(-50%,-50%)" }}
              className="absolute top-[50%] left-[50%] text-secondary border border-secondary border-1 py-3 px-4 rounded-md hover:bg-tan hover:text-charcoal font-semibold transition duration-200 ease-out "
            >
              BAG
            </button>
          </div>
        </div>
      </div>

      {/* small device */}

      <div className="md:hidden max-h-[80vh] flex gap-2 px-5">
        <div className="flex flex-col w-1/4 gap-2">
          <div className="transition duration-200 ease-out h-1/2 hover:opacity-80 hover:scale-105 bg-heather">
            <LazyLoadImage
              effect="blur"
              src="./images/category-imgs/watch.jpg "
              width="100%"
              height="100%"
              className="object-cover w-full h-full cursor-pointer "
            />
          </div>

          <div className="transition duration-200 ease-out h-1/2 hover:opacity-80 hover:scale-105 bg-heather">
            <LazyLoadImage
              effect="blur"
              src="./images/category-imgs/sneaker.jpg"
              width="100%"
              height="100%"
              loading="lazy"
              className="object-cover w-full h-full cursor-pointer"
            />
          </div>
        </div>

        <div className="w-1/4 transition duration-200 ease-out hover:opacity-80 hover:scale-105 bg-heather">
          <LazyLoadImage
            effect="blur"
            src="./images/category-imgs/loosetee.jpg"
            width="100%"
            height="100%"
            className="object-cover w-full h-full cursor-pointer"
          />
        </div>

        <div className="flex flex-col w-2/4 gap-2 ">
          <div className="flex gap-2 h-1/2">
            <div className="w-1/2 transition duration-200 ease-out hover:opacity-80 hover:scale-105 bg-heather">
              <LazyLoadImage
                effect="blur"
                src="./images/category-imgs/polotee.jpg"
                width="100%"
                height="100%"
                className="object-cover w-full h-full cursor-pointer"
              />
            </div>
            <div className="w-1/2 transition duration-200 ease-out hover:opacity-80 hover:scale-105 bg-heather">
              <LazyLoadImage
                effect="blur"
                src="./images/category-imgs/shirt.jpg"
                width="100%"
                height="100%"
                className="object-cover w-full h-full cursor-pointer"
              />
            </div>
          </div>
          <div className="transition duration-200 ease-out h-1/2 hover:opacity-80 hover:scale-105 bg-heather">
            <LazyLoadImage
              effect="blur"
              src="./images/category-imgs/bag.jpg"
              width="100%"
              height="100%"
              className="object-cover w-full h-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
