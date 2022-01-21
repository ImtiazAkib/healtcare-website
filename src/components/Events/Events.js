import React from "react";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";
import img7 from "./images/7.jpg";
import img8 from "./images/8.jpg";

const Events = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-10 ml-5 mr-5 mt-5 mb-5">
      <div className="border-2">
        <div className="img-container">
          <img src={img1} alt="" />
        </div>
        <div className="pl-3 pb-3">
          <h1 className="font-bold text-sky-800 text-lg pt-2">
            Staying Healthy As You...
          </h1>
          <p>
            Be physically active for 30 minutes most days of the week. Break
            this up into three 10-minute sessions when pressed for time.
          </p>
        </div>
      </div>
      <div className="border-2">
        <div className="img-container">
          <img src={img2} alt="" />
        </div>
        <div className="pl-3 pb-3">
          <h1 className="font-bold text-sky-800 text-lg pt-2">
            There’s something special about...
          </h1>
          <p>
            Healthy movement may include walking, sports, dancing, yoga, running
            or other activities you enjoy.
          </p>
        </div>
      </div>
      <div className="border-2">
        <div className="img-container">
          <img src={img3} alt="" />
        </div>
        <div className="pl-3 pb-3">
          <h1 className="font-bold text-sky-800 text-lg pt-2">
            Fresh goes better in...
          </h1>
          <p>
            Eat a well-balanced, low-fat diet with lots of fruits, vegetables
            and whole grains.
          </p>
        </div>
      </div>
      <div className="border-2">
        <div className="img-container">
          <img src={img4} alt="" />
        </div>
        <div className="pl-3 pb-3">
          <h1 className="font-bold text-sky-800 text-lg pt-2">Prevention</h1>
          <p>
            Prevention is a leading provider of trustworthy health information,
            empowering readers with practical strategies to improve their
            physical, mental, ...
          </p>
        </div>
      </div>
      <div className="border-2">
        <div className="img-container">
          <img src={img5} alt="" />
        </div>
        <div className="pl-3 pb-3">
          <h1 className="font-bold text-sky-800 text-lg pt-2">
            Children’s Jakarta Hoops Fest
          </h1>
          <p>
            Be physically active for 30 minutes most days of the week. Break
            this up into three 10-minute sessions when pressed for time.
          </p>
        </div>
      </div>
      <div className="border-2">
        <div className="img-container">
          <img src={img6} alt="" />
        </div>
        <div className="pl-3 pb-3">
          <h1 className="font-bold text-sky-800 text-lg pt-2">
            Medical research
          </h1>
          <p>
            Medical research is different from a doctor's examination of a
            patient. Doctors examine patients to find out what is causing their
            health issues.
          </p>
        </div>
      </div>
      <div className="border-2">
        <div className="img-container">
          <img src={img7} alt="" />
        </div>
        <div className="pl-3 pb-3">
          <h1 className="font-bold text-sky-800 text-lg pt-2">
            Medical Equipment
          </h1>
          <p>
            This is called diagnostic examination and is aimed at helping people
            get better. ... Research aimed at developing better treatments for
            diseases and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;
