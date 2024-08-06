import React from "react";
import Map from "../components/map";
export default function Contact() {
  return (
    <section className="bg-white py-16 px-8 text-[#1c4330] mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#043C2C] mb-8 text-left border-b-2 border-gray-300 pb-4">
          Contact Us
        </h2>
        <div className="flex items-center justify-center pb-5 border-b-2 "><Map/></div>
        
        
        <div className="flex flex-col md:flex-row pt-5 md:gap-16 gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Event Details</h3>
            <p className="mb-2">
              <strong>Location:</strong> Alphonsian Pastoral Institute,
              Arunapuram, Pala
            </p>
            <p className="mb-2">
              <strong>Time:</strong> 9:30 AM
            </p>
            <p className="mb-2">
              <strong>Date:</strong> August 17, 2024
            </p>
            <p className="mb-2">
              <strong>Contact Us:</strong>{" "}
              <a
                href="mailto:sipmt.pala@gmail.com"
                className="text-blue-600 underline"
              >
                sipmt.pala@gmail.com
              </a>
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">
              Invitation Committee Chair
            </h3>
            <p className="mb-2">
              <strong>Name:</strong> Er. Michael Thomas Panjikunnel
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+919446496045" className="text-blue-600 underline">
                9446496045
              </a>
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Sponsorship Contacts</h3>
            <p className="mb-2">
              <strong>Name:</strong> Er Shaji Mathew
            </p>
            <p className="mb-2">
              <strong>Cell:</strong>{" "}
              <a href="tel:+919447140251" className="text-blue-600 underline">
                9447140251
              </a>
            </p>
            <p className="mt-4">
              <strong>Name:</strong> Gp Capt Babu Joseph (Veteran)
            </p>
            <p className="mb-2">
              <strong>Cell:</strong>{" "}
              <a href="tel:+919449050283" className="text-blue-600 underline">
                9449050283
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
