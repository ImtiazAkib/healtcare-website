import React from "react";
import "tw-elements";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import "./Home.css";
import banner1 from "./image/banner-1.jpg";
import banner2 from "./image/banner-2.jpg";
import doctor1 from "./image/doctor-1.jpg";
import doctor2 from "./image/doctor-2.jpg";
import doctor3 from "./image/doctor-3.jpg";
import doctor4 from "./image/doctor-4.jpg";

const Home = () => {
  return (
    <div>
      {/* Top Banner */}
      <div
        id="carouselExampleControls"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full  overflow-hidden">
          <div className="carousel-item active relative float-left w-full carousel-img">
            <img src={banner1} className="block w-full " alt="" />
          </div>
          <div className="carousel-item relative float-left w-full carousel-img">
            <img src={banner2} className="block w-full " alt="" />
          </div>
        </div>
      </div>
      {/* end of top banner */}
      {/* start of about section */}
      <div className="flex flex-row justify-center mt-24 mb-24">
        <div className="ml-32 basis-1/2">
          <img
            src="https://www.grs.net.au/wp-content/uploads/2021/01/family-walk-forest-768x512.jpg"
            className="w-11/12"
            alt=""
          />
        </div>
        <div className="basis-1/2">
          <h1 className="font-bold text-3xl mb-3">About Us</h1>
          <p className="text-lg mr-14 ">
            Our Hospital has been servicing the local community since 1985.
            Watsonia Road Medical Centre, a new purpose-built clinic opened in
            2019 to cater for the growing needs of our patients. The doctors
            from both clinics have always endeavoured to provide the highest
            quality of service with professionalism and compassion. With the
            wide range of special areas of interest, expertise and skills among
            the medical staff at the two clinics, you will find all your
            healthcare needs will be well managed. All the staff believe in
            holistic management of each individual, encompassing mental,
            physical and emotional health.
          </p>
        </div>
      </div>
      {/* end of about */}
      {/* doctor section */}
      <div>
        <div className="text-center mb-24">
          <h1 className="font-bold text-2xl mb-3">OUR DOCTORS</h1>
          <p>
            Our doctors are specialized in their{" "}
            <span className="border-b-2 border-blue-700 pb-8">
              field and have
            </span>{" "}
            more than 10 years of experiences.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 lg:ml-14 lg:mr-14 mb-24">
          <div className="border-2">
            <div className="img-container">
              <img src={doctor1} alt="" />
            </div>
            <div className="pl-3 pb-3">
              <h1 className="font-bold text-sky-800 text-lg pt-2">
                Dr.Veranda Tanumihardja
              </h1>
              <p className="italic text-slate-500 pb-3">Pulmonary</p>
              <p>
                Veranda was born and raised in Jakarta, Indonesia. He graduated
                from the University of...
              </p>
            </div>
          </div>
          <div className="border-2">
            <div className="img-container">
              <img src={doctor4} alt="" />
            </div>
            <div className="pl-3 pb-3">
              <h1 className="font-bold text-sky-800 text-lg pt-2">
                Dr. Kathryn Wood
              </h1>
              <p className="italic text-slate-500 pb-3">Pulmonary</p>
              <p>
                Kathryn was born and raised in Indonesia, North Way Indonesia He
                graduated from the University...
              </p>
            </div>
          </div>
          <div className="border-2">
            <div className="img-container">
              <img src={doctor3} alt="" />
            </div>
            <div className="pl-3 pb-3">
              <h1 className="font-bold text-sky-800 text-lg pt-2">
                Dr. Hooman Azmi
              </h1>
              <p className="italic text-slate-500 pb-3">Dental</p>
              <p>
                Hooman was born and raised in Indonesia, North Way Indonesia He
                graduated from the University...
              </p>
            </div>
          </div>
          <div className="border-2">
            <div className="img-container">
              <img src={doctor2} alt="" />
            </div>
            <div className="pl-3 pb-3">
              <h1 className="font-bold text-sky-800 text-lg pt-2">
                Dr. Peter Parker
              </h1>
              <p className="italic text-slate-500 pb-3">Neurologist</p>
              <p>
                Parker was born and raised in UK, North Way Australia He
                graduated from the University of...
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end of doctor section */}
      <Services></Services>
    </div>
  );
};

export default Home;
