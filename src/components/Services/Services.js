import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-24 mt-10">
        <h1 className="font-bold text-2xl mb-3">HOSPITAL SERVICES</h1>
        <p>
          Our doctors are specialized in their{" "}
          <span className="border-b-2 border-blue-700 pb-8">
            field and have
          </span>{" "}
          more than 10 years of experiences.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8 lg:ml-14 lg:mr-14 mb-24">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
