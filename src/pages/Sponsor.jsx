import React, { useState } from "react";
import Bandvisibility from "../assets/visionary.png";
import Netwerk from "../assets/membership.png";
import Marketing from "../assets/solution.png";
import Brand from "../assets/boosting-potential.png";
import Demonstrate from "../assets/work-team.png";
import Footer from '../components/Footer';

export default function Sponsorship() {
  const [activeTier, setActiveTier] = useState('Platinum');

  const tiers = {
    Platinum: {
      price: "Rs. 50,000 & Above",
      benefits: [
        "Prominent Brand Visibility: Logo On Select Marketing Materials And Seminar Website.",
        "Advertising Flyers: Distribution Of 500 Flyers To Attendees.",
        "Table Space: Medium-Sized Table For Display And Networking In A Prime Location.",
        "Access: Direct Access To All Seminar Attendees.",
        "Panel Opportunity: Chance To Speak In A Panel Discussion.",
        "Complimentary Registrations: 6 Delegate Passes.",
        "Recognition: Acknowledgment During The Seminar And On Social Media.",
      ],
    },
    Diamond: {
      price: "Rs. 30,000 - Rs. 50,000",
      benefits: [
        "Brand Visibility: Logo On Select Marketing Materials And Seminar Website.",
        "Advertising Flyers: Distribution Of 300 Flyers To Attendees.",
        "Table Space: Small Table For Display And Networking.",
        "Access: Direct Access To All Seminar Attendees.",
        "Complimentary Registrations: 4 Delegate Passes.",
        "Recognition: Acknowledgment During The Seminar And On Social Media.",
      ],
    },
    Gold: {
      price: "Rs. 20,000 - Rs. 30,000",
      benefits: [
        "Brand Visibility: Logo On Select Marketing Materials And Seminar Website.",
        "Advertising Flyers: Distribution Of 200 Flyers To Attendees.",
        "Table Space: Small Table For Display.",
        "Access: Direct Access To All Seminar Attendees.",
        "Complimentary Registrations: 2 Delegate Passes.",
      ],
    },
    Silver: {
      price: "Rs. 10,000 - Rs. 20,000",
      benefits: [
        "Brand Visibility: Logo On Select Marketing Materials And Seminar Website.",
        "Advertising Flyers: Distribution Of 100 Flyers To Attendees.",
        "Access: Direct Access To All Seminar Attendees.",
        "Complimentary Registrations: 1 Delegate Pass.",
      ],
    },
  };

  return (
    <div className="flex flex-col min-h-screen md:pt-20 pt-24 bg-[#CDE2D3] overflow-x-hidden">

      <section className="flex flex-col gap-10 items-center w-full md:h-[100vh] h-full mx-auto md:pt-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="md:text-4xl text-2xl font-bold text-[#043C2C] md:mb-10 mb-5 text-center">SPONSORSHIPS</h1>
          <div className="md:text-3xl text-xl font-normal w-full text-center">
            <p className="md:mb-6 mb-2">
              Join us as a sponsor for our upcoming motivational Seminar, focusing on <br />
              <strong> SUSTAINABLE INDUSTRIAL PARKS IN MEENACHIL TALUK.</strong>
            </p>
            <p className="md:mb-14 mb-2">
              This is a prime opportunity to showcase your brand and engage with industry <br />
              professionals and budding entrepreneurs.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-end md:gap-32 gap-8 justify-around">
          <div className="flex flex-col items-center text-center">
            <img src={Bandvisibility} alt="Band Visibility" className="w-20 h-20 md:w-28 md:h-28" />
            <p className="mt-2 font-semibold">Brand Visibility</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={Netwerk} alt="Network" className="w-20 h-20 md:w-28 md:h-28" />
            <p className="mt-2 font-semibold">Networking</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={Marketing} alt="Marketing" className="w-20 h-20 md:w-28 md:h-28" />
            <p className="mt-2 font-semibold">Marketing <br /> Opportunities</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={Brand} alt="Brand" className="w-20 h-20 md:w-28 md:h-28" />
            <p className="mt-2 font-semibold">Brand Association</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src={Demonstrate} alt="Demonstrate" className="w-20 h-20 md:w-28 md:h-28" />
            <p className="mt-2 font-semibold">Demonstrate <br /> Leadership</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl mb-14 font-bold text-[#043C2C] text-center">Sponsorship Tiers and Benefits</h1>
        <div className="border border-gray-300 rounded-lg">
          <div className="flex flex-wrap justify-center font-semibold  mb-10">
            <button onClick={() => setActiveTier('Platinum')} className={`px-6 py-3 md:px-20 md:py-3 ${activeTier === 'Platinum' ? 'bg-[#CDE2D3] text-[#043C2C]' : 'bg-white text-gray-600'} border border-gray-300 rounded-none shadow-md`}>
              Platinum
            </button>
            <button onClick={() => setActiveTier('Diamond')} className={`px-6 py-3 md:px-20 md:py-3 ${activeTier === 'Diamond' ? 'bg-[#CDE2D3] text-[#043C2C]' : 'bg-white text-gray-600'} border border-gray-300 rounded-none shadow-md`}>
              Diamond
            </button>
            <button onClick={() => setActiveTier('Gold')} className={`px-6 py-3 md:px-20 md:py-3 ${activeTier === 'Gold' ? 'bg-[#CDE2D3] text-[#043C2C]' : 'bg-white text-gray-600'} border border-gray-300 rounded-none shadow-md`}>
              Gold
            </button>
            <button onClick={() => setActiveTier('Silver')} className={`px-6 py-3 md:px-20 md:py-3 ${activeTier === 'Silver' ? 'bg-[#CDE2D3] text-[#043C2C]' : 'bg-white text-gray-600'} border border-gray-300 rounded-none shadow-md`}>
              Silver
            </button>
          </div>
          <div className="bg-white p-6 md:p-10 flex flex-col items-center border border-gray-300 rounded-none shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-[#043C2C]">{tiers[activeTier].price}</h3>
            <ul className="list-disc pl-5 text-lg font-medium">
              {tiers[activeTier].benefits.map((benefit, index) => (
                <li key={index} className="mb-2">{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className=" py-10 px-5 mt-10 rounded-lg border border-[#CDE2D3] ">
        <h1 className="text-3xl font-bold text-[#043C2C] mb-4">ADDITIONAL BENEFITS FOR ALL SPONSORS</h1>
        <p className="text-xl font-medium mb-4">
          · Speaker Opportunity (Platinum & Diamond): Option to speak or be a panelist for the seminar.
        </p>
        <p className="text-xl font-medium">
          · Recognition: Acknowledgment during the seminar and on social media.
        </p>
      </section>

      <section className="bg-[#EAEAEA] py-10 px-5 mt-10 rounded-lg border border-[#CDE2D3] shadow-md">
        <div className="px-14 py-10"><h1 className="text-3xl font-bold text-[#043C2C] mb-10">Contact Information</h1>
        <p className="text-xl font-medium mb-8">
          For more details or to discuss customized sponsorship opportunities, please <br />contact:
        </p>
        <p className="text-xl font-medium  mb-8">
          Er Shaji Mathew <br />
          Cell: 9447140251
        </p>
        <p className="text-xl font-medium">
          Gp Capt Babu Joseph (Veteran) <br />
          Cell: 9449050283
        </p></div>
        
      </section>
      <Footer />

    </div>
  );
}
