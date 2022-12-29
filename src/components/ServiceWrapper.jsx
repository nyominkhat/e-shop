import React from "react";
import { FaShieldAlt, FaWallet, FaTruckMoving } from "react-icons/fa";
import { GiVrHeadset } from "react-icons/gi";

import WrapperCard from "./WrapperCard";

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
    <section className="flex justify-around flex-wrap gap-2">
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
  );
};

export default ServiceWrapper;
