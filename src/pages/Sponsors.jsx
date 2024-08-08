import React from "react";
import diamond1 from "../assets/diamond1.jpg"
import spon1 from "../assets/somanylogo.jpg"
import silver from "../assets/silver.jpg"

export default function Sponsors() {
  return (
    <div className="w-full pt-10 md:pt-8 bg-white">
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Sponsors</h2>
            <p className="mt-3 text-muted-foreground md:text-xl">
              Thank you to our amazing sponsors for their support.
            </p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="mb-6 text-2xl font-bold flex justify-center">Platinum Sponsors</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                                
                  <img
                    src={spon1}
                    alt="Platinum Sponsor Logo"
                    width={180}
                    height={90}
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
          </div>
          
            </div>
            <div>
              <h3 className="mb-6 text-2xl flex justify-center font-bold">Diamond Sponsors</h3>
               <div className="flex flex-wrap gap-6 justify-center">
                  <img
                    src={diamond1}
                    alt="Diamond Sponsor Logo"
                    width={180}
                    height={90}
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                
              
            </div>
            <div>
              <h3 className="mb-6 text-2xl flex justify-center font-bold">Gold Sponsors</h3>
               <div className="flex flex-wrap gap-6 justify-center">
              <p className="text-lg font-medium">
          Sponsors are yet to be announced. Please wait.
        </p>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-2xl flex justify-center font-bold">Silver Sponsors</h3>
               <div className="flex flex-wrap gap-6 justify-center">
                  <img
                    src={silver}
                    alt="Diamond Sponsor Logo"
                    width={180}
                    height={90}
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
