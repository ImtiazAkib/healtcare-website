import React from "react";

const Service = (props) => {
  const { title, description, img } = props.service;
  return (
    <div>
      <div className="border-2">
        <div className="img-container">
          <img src={img} alt="" />
        </div>
        <div className="pl-3 pb-3">
          <h1 className="font-bold text-sky-800 text-lg pt-2">{title}</h1>
          <p>{description}</p>
          <button
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            class="inline-block mt-5 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            See Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
