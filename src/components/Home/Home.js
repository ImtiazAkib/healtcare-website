import React from "react";
import "tw-elements";
import "./Home.css";
import banner1 from "./image/banner-1.jpg";
import banner2 from "./image/banner-2.jpg";

const Home = () => {
  return (
    <div>
      {/* Top Banner */}
      <div
        id="carouselExampleControls"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner relative w-full  overflow-hidden">
          <div class="carousel-item active relative float-left w-full">
            <img
              src={banner1}
              class="block w-full carousel-img"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item relative float-left w-full">
            <img src={banner2} class="block w-full carousel-img" alt="Camera" />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* end of top banner */}
      {/* start of overview section */}
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
    </div>
  );
};

export default Home;
