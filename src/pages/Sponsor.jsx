import React, { useState } from "react";
import Bandvisibility from "../assets/visionary.png";
import Netwerk from "../assets/membership.png";
import Marketing from "../assets/solution.png";
import Brand from "../assets/boosting-potential.png";
import Demonstrate from "../assets/work-team.png";
import { MdDownload } from 'react-icons/md';
import Footer from "../components/Footer";

export default function Sponsorship() {
  const [activeTier, setActiveTier] = useState("Platinum");

  const tiers = {
    Platinum: {
      price: "Rs. 50,000 & Above",
      benefits: [
        "<strong>Prominent Brand Visibility:</strong> Logo On Select Marketing Materials And Seminar Website.",
        "<strong>Advertising Flyers:</strong> Distribution Of 500 Flyers To Attendees.",
        "<strong>Table Space:</strong> Medium-Sized Table For Display And Networking In A Prime Location.",
        "<strong>Access:</strong> Direct Access To All Seminar Attendees.",
        "<strong>Panel Opportunity:</strong> Chance To Speak In A Panel Discussion.",
        "<strong>Complimentary Registrations:</strong> 6 Delegate Passes.",
        "<strong>Recognition:</strong> Acknowledgment During The Seminar And On Social Media.",
      ],
    },
    Diamond: {
      price: "Rs. 30,000 - Rs. 50,000",
      benefits: [
        "<strong>Brand Visibility:</strong> Logo On Select Marketing Materials And Seminar Website.",
        "<strong>Advertising Flyers:</strong> Distribution Of 300 Flyers To Attendees.",
        "<strong>Table Space:</strong> Small Table For Display And Networking.",
        "<strong>Access:</strong> Direct Access To All Seminar Attendees.",
        "<strong>Complimentary Registrations:</strong> 4 Delegate Passes.",
        "<strong>Recognition:</strong> Acknowledgment During The Seminar And On Social Media.",
      ],
    },
    Gold: {
      price: "Rs. 20,000 - Rs. 30,000",
      benefits: [
        "<strong>Brand Visibility:</strong> Logo On Select Marketing Materials And Seminar Website.",
        "<strong>Advertising Flyers:</strong> Distribution Of 200 Flyers To Attendees.",
        "<strong>Table Space:</strong> Small Table For Display.",
        "<strong>Access:</strong> Direct Access To All Seminar Attendees.",
        "<strong>Complimentary Registrations:</strong> 2 Delegate Passes.",
      ],
    },
    Silver: {
      price: "Rs. 10,000 - Rs. 20,000",
      benefits: [
        "<strong>Brand Visibility:</strong> Logo On Select Marketing Materials And Seminar Website.",
        "<strong>Advertising Flyers:</strong> Distribution Of 100 Flyers To Attendees.",
        "<strong>Access:</strong> Direct Access To All Seminar Attendees.",
        "<strong>Complimentary Registrations:</strong> 1 Delegate Pass.",
      ],
    },
  };

  return (
    <div className="flex flex-col min-h-screen h-fit  mt-14 bg-[#CDE2D3] overflow-x-hidden">
      <section className="flex flex-col gap-10 items-center w-full md:h-[100svh]  h-svh mx-auto justify-center align-middle">
        <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="md:text-4xl text-3xl font-bold text-[#043C2C] md:mb-10 mb-5 flex items-center justify-center space-x-2">
        SPONSORSHIPS
       
      </h1>
          
         
          <div className="md:text-3xl text-lg font-normal w-full text-center">
            <p className="md:mb-6 mb-2">
              Join us as a sponsor for our upcoming motivational Seminar,
              focusing on <br />
              <strong> SUSTAINABLE INDUSTRIAL PARKS IN MEENACHIL TALUK.</strong>
            </p>
            <p className="mb-3">
              This is a prime opportunity to showcase your brand and engage with
              industry <br />
              professionals and budding entrepreneurs.
            </p>
            
    
      <a href="/SPONSORSHIP SCHEME FOR SEMINAR-APPROVED (4).pdf" download className="text-[#043C2C] flex items-center justify-center text-sm">
        <span>  Click here to Download</span> 
        <MdDownload size={20} className="ml-1" /> 
      </a>
    
          </div>
        </div>
        <div className="flex flex-wrap items-end mb-16 pb-10 md:gap-32 gap-8 justify-around md:mt-20 mx-2">
          <div className="flex flex-col items-center text-center">
            <img
              src={Bandvisibility}
              alt="Band Visibility"
              className="w-20 h-20 md:w-28 md:h-28"
            />
            <p className="mt-2 font-semibold">Brand Visibility</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={Netwerk}
              alt="Network"
              className="w-20 h-20 md:w-28 md:h-28"
            />
            <p className="mt-2 font-semibold">Networking</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <img
              src={Brand}
              alt="Brand"
              className="w-20 h-20 md:w-28 md:h-28"
            />
            <p className="mt-2 font-semibold">Brand Association</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={Demonstrate}
              alt="Demonstrate"
              className="w-20 h-20 md:w-28 md:h-28"
            />
            <p className="mt-2 font-semibold">Leadership</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl mb-14 font-bold text-[#043C2C] text-center">
          Sponsorship Tiers and Benefits
        </h1>
        <div className="border border-gray-300 rounded-lg ">
          <div className="grid grid-cols-4 justify-center  font-semibold  mb-10 md:w-7/12 md:mx-auto">
            <button
              onClick={() => setActiveTier("Platinum")}
              className={`px-3.5 py-3 md:px-20 md:py-3 text-xs md:text-sm ${
                activeTier === "Platinum"
                  ? "bg-[#CDE2D3] text-[#043C2C]"
                  : "bg-white text-gray-600"
              } border border-gray-300 rounded-none shadow-md`}
            >
              Platinum
            </button>
            <button
              onClick={() => setActiveTier("Diamond")}
              className={`px-3.5 py-3 md:px-20 md:py-3 text-xs md:text-sm  ${
                activeTier === "Diamond"
                  ? "bg-[#CDE2D3] text-[#043C2C]"
                  : "bg-white text-gray-600"
              } border border-gray-300 rounded-none shadow-md`}
            >
              Diamond
            </button>
            <button
              onClick={() => setActiveTier("Gold")}
              className={`px-3.5 py-3 md:px-20 md:py-3 text-xs md:text-sm   ${
                activeTier === "Gold"
                  ? "bg-[#CDE2D3] text-[#043C2C]"
                  : "bg-white text-gray-600"
              } border border-gray-300 rounded-none shadow-md`}
            >
              Gold
            </button>
            <button
              onClick={() => setActiveTier("Silver")}
              className={`px-3.5 py-3 md:px-20 md:py-3 text-xs md:text-sm   ${
                activeTier === "Silver"
                  ? "bg-[#CDE2D3] text-[#043C2C]"
                  : "bg-white text-gray-600"
              } border border-gray-300 rounded-none shadow-md`}
            >
              Silver
            </button>
          </div>
          <div className="bg-white p-6 md:p-10 flex flex-col items-center border border-gray-300 rounded-none shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#043C2C]">
              {tiers[activeTier].price}
            </h3>
            <ul className="list-disc pl-5 text-base font-medium">
              {tiers[activeTier].benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="mb-2"
                  dangerouslySetInnerHTML={{ __html: benefit }}
                ></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 px-5 mt-10 rounded-lg border border-[#CDE2D3]">
        <h1 className="text-3xl md:px-14 p-2 font-bold text-[#043C2C] mb-5">
          ADDITIONAL BENEFITS FOR ALL SPONSORS
        </h1>
        <ul className="list-disc pl-5 text-lg font-medium md:px-14">
          <li className="mb-4">
            <strong>Speaker Opportunity (Platinum & Diamond)</strong>: Option to
            speak or be a panelist for the seminar.
          </li>
          <li>
            <strong>Recognition</strong>: Acknowledgment during the seminar and
            on social media.
          </li>
        </ul>
      </section>

      <section className="bg-[#EAEAEA] py-12 px-8 mt-12 rounded-lg border border-[#CDE2D3] shadow-lg">
        <div className="md:px-16 py-12">
          <h1 className="text-4xl font-bold text-[#043C2C] mb-8">
            Contact Information
          </h1>
          <p className="text-lg font-medium mb-6">
            For more details or to discuss customized sponsorship opportunities,
            please contact:
          </p>
          <div className="flex items-start mb-8">
            <div className="w-1/12 text-center">📞 </div>
            <div className="ml-4">
              <p className="text-lg font-medium">Er Shaji Mathew</p>
              <p className="text-lg">Cell: 9447140251</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-1/12 text-center">📞 </div>
            <div className="ml-4">
              <p className="text-lg font-medium">
                Gp Capt Babu Joseph (Veteran)
              </p>
              <p className="text-lg">Cell: 9449050283</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
