import React from "react";
import { Link as ScrollTag } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="hero bg-heather  min-h-[70vh]"
      style={{ backgroundImage: `url("./images/hero.png")` }}
    >
      <div className="flex items-center w-auto text-charcoal lg:w-full">
        <div className="text-center lg:pl-20 lg:text-left">
          <h1 className="text-3xl font-bold lg:text-7xl md:text-5xl sm:text-4xl">
            Find the best for you
          </h1>
          <p className="my-4 text-base md:my-2 text-gray">
            Explore and buy anything you want
            <br />
            in one place.
          </p>

          <div>
            <ScrollTag
              to="shop-now"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <button className="btn btn-secondary text-charcoal">
                Shop Now
              </button>
            </ScrollTag>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
