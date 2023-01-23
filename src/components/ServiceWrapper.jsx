import React from "react";
import { FaShieldAlt, FaWallet, FaTruckMoving } from "react-icons/fa";
import { GiVrHeadset } from "react-icons/gi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WrapperCard from "./WrapperCard";

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const data = [
  {
    cover: <FaTruckMoving size={30} />,
    title: "Worldwide Delivery",
    decs: "We deliver to all possible countries within 3 weeks.",
  },
  {
    cover: <FaWallet size={30} />,
    title: "Secure Payment",
    decs: "We accept Paypal, Visa, Master Card, Apple Pay, American Express.",
  },
  {
    cover: <FaShieldAlt size={30} />,
    title: "Shop With Confidence ",
    decs: "All items in our website are qualified and fair price.",
  },
  {
    cover: <GiVrHeadset size={30} />,
    title: "24/7 Support ",
    decs: "Our customer service team members are more than happy to help .",
  },
];

const ServiceWrapper = () => {
  return (
    <>
      <section className="flex-wrap justify-around hidden gap-2 sm:flex">
        {data.map((item, index) => (
          // <span key={index}>{item.cover}</span>
          <WrapperCard
            key={index}
            cover={item.cover}
            title={item.title}
            decs={item.decs}
          />
        ))}
      </section>

      <section className="sm:hidden">
        <Slider {...settings}>
          {data.map((item, index) => (
            // <span key={index}>{item.cover}</span>
            <div key={index}>
              <div className="mx-auto w-14">
                <figure className="absolute top-0 p-4 rounded-full shadow-md bg-heather">
                  {item.cover}
                </figure>
              </div>

              <div className="mt-12 text-center card-body">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm">{item.decs}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
};

export default ServiceWrapper;
