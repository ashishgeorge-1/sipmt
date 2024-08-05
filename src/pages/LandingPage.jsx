import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiArrowUpRight } from 'react-icons/fi';
import Footer from "../components/Footer";
import Map from "../components/map";
// Import all the required images
import logo from "../assets/Meenachil Industrial Parks Logo.png";
import logosvg from "../assets/logo.svg";
import dateIcon from "../assets/date.png";
import locationIcon from "../assets/location.png";
import org1 from "../assets/org1.png";
import org2 from "../assets/org2.png";
import org3 from "../assets/org3.png";
import key1 from "../assets/key1.png";
import key2 from "../assets/key2.png";
import key3 from "../assets/key3.png";
import key4 from "../assets/key4.png";
import anoop from "../assets/anoop.jpeg";
import slide1 from "../assets/pala-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg";
import slide2 from "../assets/slide2.jpeg.jpg";
import slide3 from "../assets/slide3.jpeg.jpg";
import { AiOutlineCalendar } from 'react-icons/ai';

function LoaderOverlay() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
      <div role="status">
        <svg
          aria-hidden="true"
          className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.onload = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // 100ms delay
    };
  }, []);

  return (
    <>
      {isLoading && <LoaderOverlay />}
      <div
        className={`flex flex-col min-h-screen bg-[#CDE2D3] overflow-x-hidden ${
          isLoading ? "pointer-events-none" : ""
        }`}
      >
        <section className="flex md:flex-row flex-col gap-10 mt-5 items-center w-full max-w-[1280px] h-[100vh] mx-auto py-10 px-5 justify-center">
          <div className="w-full flex flex-col justify-center md:order-1 order-2 md:w-3/4 lg:w-1/2">
          <h3 className="md:text-2xl underline font-thin text-xl mb-2">
         
            JOIN US FOR A SEMINAR ON
          
</h3>

            <h2 className="md:text-5xl text-3xl mb-6 text-[#043C2C] font-bold">
              SUSTAINABLE INDUSTRIAL PARKS IN MEENACHIL TALUK
            </h2>
            <div className="flex items-center mb-2">
              <img src={dateIcon} alt="Calendar" className="w-5 h-5 mr-2" />
              <p className="text-lg text-[#043C2C] font-medium">
                9:30 am, 17 August 2024
              </p>
            </div>
            <div className="flex items-center mb-10">
              <img
                src={locationIcon}
                alt="Location"
                className="text-[#043C2C] w-5 h-5 mr-2 mt-1"
              />
              <p className="text-md font-medium text-[#043C2C]">
                Alphonsian Pastoral Institute, Arunapuram, Pala
              </p>
              
            </div>

            <div className="flex items-center mb-4">
        <AiOutlineCalendar size={20} className="text-[#043C2C] mr-2" />
        <p className="text-md font-medium text-[#043C2C]">
        <a
        href="/invitation letter (2).pdf"
        className="no-underline flex items-center text-md font-semibold "
      >
        Invitation
        
      </a>        </p>
      </div>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfUU16gu_51u1-1dS0R84-R7SsuLLP6-r1ZpstccCVgNTFbJA/viewform"
              className="text-md text-black no-underline font-bold hover:underline uppercase"
            >
              Register Now ⤴
            </a>
          </div>
          <img
            src={logo}
            alt="SIPMT Logo"
            className="md:order-1 w-7/12 md:w-2/6 md:mx-20 md:mb-24 md:mt-16"
          />
        </section>

        <section className="bg-white py-10 px-5">
          <div className="flex flex-col md:flex-row md:items-start items-center max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-bold w-full text-[#043C2C] mb-5">
              ORGANIZED BY
            </h2>
            <div className="flex flex-row md:justify-end items-center justify-center gap-10 md:gap-40 w-full h-fit">
              <img src={org1} alt="Organization 1" className="h-20 w-auto" />
              <img src={org2} alt="Organization 2" className="h-20 w-auto" />
              <img src={org3} alt="Organization 3" className="h-20 w-auto" />
            </div>
          </div>
        </section>

        <section className="bg-[#CDE2D3] py-10 px-5 text-bold-[#000000]">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-bold text-[#043C2C] mb-5">
              WHAT IS SIPMT?
            </h2>
            <div className="w-full max-w-[1086px] mx-auto overflow-hidden rounded-lg mb-8">
            <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          showStatus={false}
          dynamicHeight={true}
          emulateTouch={true}
        >
          <div>
            <img src={slide1} alt="Slide 1" className="w-full h-auto" />
          </div>
         
        </Carousel>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <p className="flex-1 text-justify">
                Meenachil Taluk, Known For Its Natural Beauty And Rich
                Agricultural Heritage, Has Significant Untapped Industrial
                Potential.
              </p>
              <p className="flex-1 text-justify">
                Our Seminar Aims To Unlock This Potential And Stimulate Growth
                In Sectors Such As Education, Transportation, Construction, And
                Healthcare, While Fostering Local Talent And Employment.
              </p>
            </div>
            <div className=" flex justify-center items-center pt-10">
            <video className="md:w-[50vw] w-[100vw] h-auto" controls>
              <source src="/VID-20240804-WA0023.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          </div>
        </section>

        <section className="bg-[#CDE2D3] py-10 px-5 text-[#1c4330]">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-bold text-[#043C2C] mb-5">
              KEY OBJECTIVES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={key1}
                  alt="Enhance Industrial Footprint"
                  className="w-24 h-24 mb-4"
                />
                <p className="text-center">Enhance Industrial Footprint</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={key2}
                  alt="Generate Employment"
                  className="w-24 h-24 mb-4"
                />
                <p className="text-center">Generate Employment</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={key3}
                  alt="Leverage Connectivity"
                  className="w-24 h-24 mb-4"
                />
                <p className="text-center">Leverage Connectivity</p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={key4}
                  alt="Diverse Industrial Base"
                  className="w-24 h-24 mb-4"
                />
                <p className="text-center">Diverse Industrial Base</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-10 px-5 text-[#1c4330]">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-2xl font-bold text-[#043C2C] mb-5">
              PRESENTING OUR PANEL OF DISTINGUISHED SPEAKERS
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
                <img
                  src={anoop}
                  alt="Er. Anoop Ambika"
                  className="w-32 h-32 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl mb-2">Er. Anoop P Ambika</h3>
                <p className="text-center">
                Chief Executive Officer - Kerala Startup Mission
                </p>
                <h2 className="text-lg font-bold text-[#043C2C] mb-5 mt-10">
        More speakers to be decided soon.
      </h2>
              </div>
              
              {/* Add more speakers here */}
            </div>
          </div>
        </section>
     
      </div>
    </>
  );
}

export default LandingPage;