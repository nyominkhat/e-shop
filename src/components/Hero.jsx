import React from "react";
import { Link as ScrollTag } from "react-scroll";

const Hero = () => {
  return (
    <section
      className="hero bg-heather container min-h-[70vh]"
      style={{ backgroundImage: `url("./images/hero.png")` }}
    >
      <div className=" text-charcoal lg:w-full w-auto  flex items-center">
        <div className="lg:pl-20 lg:text-left text-center">
          <h1 className=" lg:text-7xl md:text-5xl sm:text-4xl text-3xl  font-bold">
            Find the best for you
          </h1>
          <p className="my-4 md:my-2 text-base text-gray">
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
