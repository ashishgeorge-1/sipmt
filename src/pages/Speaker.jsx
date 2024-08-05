import React from 'react'

import anoop from '../assets/anoop.jpeg';
export default function Speaker() {
  return (
    <section className="bg-white py-10 px-5 text-[#1c4330] h-svh">
    <div className="max-w-[1280px] mx-auto">
      <h2 className="text-2xl font-bold text-[#043C2C] mb-5 text-center mt-10">
        PRESENTING OUR PANEL OF DISTINGUISHED SPEAKERS
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center w-full sm:w-1/2 md:w-1/3">
          <img
            src={anoop}
            alt="Er. Anoop Ambika"
            className="w-32 h-32 rounded-full object-cover mb-4"
          />
          <h3 className="text-xl mb-2">Er. Anoop Ambika</h3>
          <p className="text-gray-600">CEO of Kerala Startup Mission</p>
        </div>
        <h2 className="text-lg font-bold text-[#043C2C] mb-5">
        More speakers to be decided soon.
      </h2>
      </div>
    </div>
  </section>
  )
}
