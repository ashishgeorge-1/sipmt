import React from "react";
import Map from "../components/map";

export default function Contact() {
  return (
    <section className="bg-white py-16 px-8 text-[#1c4330] mt-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#043C2C] mb-8 text-left border-b-2 border-gray-300 pb-4">
          Contact Us
        </h2>
        <div className="flex items-center justify-center pb-5 border-b-2">
          <Map />
        </div>

        <div className="flex flex-col md:flex-row pt-5 md:gap-16 gap-8">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Event Details</h3>
            <p className="mb-2">
              <strong className="font-bold">Location:</strong> Alphonsian Pastoral Institute,
              Arunapuram, Pala
            </p>
            <p className="mb-2">
              <strong className="font-bold">Time:</strong> 9:30 AM
            </p>
            <p className="mb-2">
              <strong className="font-bold">Date:</strong> August 17, 2024
            </p>
            <p className="mb-2">
              <strong className="font-bold">Contact Us:</strong>{" "}
              <a
                href="mailto:sipmt.pala@gmail.com"
                className="text-blue-600 underline font-bold"
              >
                sipmt.pala@gmail.com
              </a>
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">
              Invitation Committee Chair
            </h3>
            <p className="mb-2">
              <strong className="font-bold">Name:</strong> Er Michael Thomas Panjikunnel
            </p>
            <p className="mb-2">
              <strong className="font-bold">Phone:</strong>{" "}
              <a href="tel:+919446496045" className="text-blue-600 underline font-bold">
                9446496045
              </a>
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-4">Sponsorship Contacts</h3>
            <p className="mb-2">
              <strong className="font-bold">Name:</strong> Ar James Kappen
            </p>
            <p className="mb-2">
              <strong className="font-bold">Cell:</strong>{" "}
              <a href="tel:+919447140251" className="text-blue-600 underline font-bold">
                9447212979
              </a>
            </p>
            <p className="mt-4">
              <strong className="font-bold">Name:</strong> Gp Capt Babu Joseph (Veteran)
            </p>
            <p className="mb-2">
              <strong className="font-bold">Cell:</strong>{" "}
              <a href="tel:+919449050283" className="text-blue-600 underline font-bold">
                9449050283
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
