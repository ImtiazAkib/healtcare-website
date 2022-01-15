import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useService from "../hooks/useService";

const Detail = () => {
  const { serviceId } = useParams();

  const [services] = useService();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    if (services.length > 0) {
      const matchedData = services.find((service) => service.id == serviceId);
      setDetail(matchedData);
    }
  }, [services]);

  const { title, description, img } = detail;

  return (
    <div>
      <div className="flex justify-center mt-20">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!">
            <img className="rounded-t-lg" src={img} alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
            <p className="text-gray-700 text-base mb-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
