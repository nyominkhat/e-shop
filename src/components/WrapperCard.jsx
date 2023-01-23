import React from "react";

const WrapperCard = ({ cover, title, decs, index }) => {
  return (
    <section
      id={index}
      className="p-3 bg-white shadow-2xl card lg:w-80 w-60 md:h-1/2"
    >
      <figure className="p-4 mx-auto rounded-full shadow-md bg-heather">
        {cover}
      </figure>

      <div className="text-center card-body">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{decs}</p>
      </div>
    </section>
  );
};

export default WrapperCard;
