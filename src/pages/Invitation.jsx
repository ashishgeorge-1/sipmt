import React from "react";
import anoop from "../assets/anoop.jpeg";
import { getGithubRawUrl } from "../utils/githubUtils.jsx";

export default function Invitation() {
  return (
    <section className="bg-white py-10 px-5 text-[#1c4330] min-h-screen pt-10">
      <div className="flex flex-col items-center pt-10">
        <h2 className="text-2xl font-bold text-[#043C2C] mb-5 text-center">
          Sustainable Industrial Parks in Meenachil Taluk (SIPMT) Seminar
        </h2>
        <p className="m-4 text-[#043C2C] text-lg text-center max-w-3xl">
          We are pleased to invite you to the “Sustainable Industrial Parks in Meenachil Taluk” (SIPMT) seminar, organized by the Engineers’ Forum Pala (EFP), Pala Management Association (PMA), and the Rotary Club of Pala (RCP). The event will be held at 9.30 am on 17 August 2024 at the Alphonsian Pastoral Institute, Arunapuram, Pala.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-bold text-[#043C2C] mb-4">Invitation Letter</h3>
          <embed
            src="/invitation letter (2).pdf"
            type="application/pdf"
            className="w-full h-[550px] mb-4 border border-gray-300"
          />
          <a
            href="/invitation letter (2).pdf"
            download
            className="text-blue-500 underline mb-8"
          >
            Download PDF
          </a>

          <h3 className="text-xl font-bold text-[#043C2C] mb-4">Watch Video</h3>
          <video className="md:w-[50vw] w-[100vw] h-[70vh]" controls>
    <source src={getGithubRawUrl("videos/VID-20240804-WA0023.mp4")} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          <a
            href="/VID-20240804-WA0023.mp4"
            download
            className="text-blue-500 underline"
          >
            Download Video
          </a>
        </div>
      </div>
    </section>
  );
}

