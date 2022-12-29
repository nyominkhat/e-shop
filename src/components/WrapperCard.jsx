import React from "react";

const WrapperCard = ({ cover, title, decs }) => {
  return (
    <section className="card lg:w-80 w-60 md:h-1/2 shadow-2xl bg-white p-3">
      <figure className="mx-auto p-4 rounded-full shadow-md bg-heather">
        {cover}
      </figure>

      <div className="card-body text-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm">{decs}</p>
      </div>
    </section>
  );
};

export default WrapperCard;
