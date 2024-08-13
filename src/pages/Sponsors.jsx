import diamond1 from "../assets/diamond1.jpg";
import spon1 from "../assets/somanylogo.jpg";
import silver from "../assets/silver.jpg";
import gold from "../assets/gold.png";
import silver2 from "../assets/silver2.jpg";
import diamond2 from "../assets/diamond2.jpg";
import diamond3 from "../assets/diamond3.jpg";
import gold1 from "../assets/gold1.png";
import gold2 from "../assets/gold2.jpg";

export default function Sponsors() {
  return (
    <div className="w-full pt-10 md:pt-8 bg-white">
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Sponsors
            </h2>
            <p className="mt-3 text-muted-foreground md:text-xl">
              Thank you to our amazing sponsors for their support.
            </p>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="mb-6 text-2xl font-bold flex justify-center">
                Platinum Sponsors
              </h3>
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
              <h3 className="mb-6 text-2xl flex justify-center font-bold">
                Diamond Sponsors
              </h3>
              <div className="flex flex-col items-center">
                <div className="flex flex-wrap gap-6 justify-center">
                  <img
                    src={diamond1}
                    alt="Diamond Sponsor Logo"
                    width={180}
                    height={90}
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
                <div className="flex flex-wrap gap-12 justify-center mt-6">
                  <img
                    src={diamond2}
                    alt="Diamond Sponsor Logo"
                    width={240}
                    height={120}
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>

                <div className="flex flex-wrap gap-6 mt-6 justify-center">
                  <img
                    src={diamond3}
                    alt="Diamond Sponsor Logo"
                    width={180}
                    height={90}
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  />
                </div>
              </div>
            </div>
            <div>
  <h3 className="mb-6 text-2xl flex justify-center font-bold">Gold Sponsors</h3>
  <div className="flex flex-wrap gap-6 justify-center items-center">
    <img
      src={gold}
      alt="Gold Sponsor Logo"
      width={180}
      height={90}
      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
    />
  </div>
  <div className="flex flex-wrap gap-6 justify-center mt-12 items-center">
    <img
      src={gold1}
      alt="Gold Sponsor Logo"
      width={180}
      height={90}
      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
    />
  </div>

  <div className="flex flex-wrap gap-6 justify-center mt-12 items-center">
    <img
      src={gold2}
      alt="Gold Sponsor Logo"
      width={180}
      height={90}
      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
    />
  </div>




  <div className="mt-6 flex justify-center">
    <div className="bg-gray-100 border border-gray-300 rounded-lg px-6 py-3 shadow-sm">
      <p className="text-xl font-bold text-center text-gray-800">
        THOTTUPURAM AGENCIES
      </p>
    </div>
  </div>
</div>


            <div>
              <h3 className="mb-6 text-2xl flex justify-center font-bold">
                Silver Sponsors
              </h3>
              <div className="flex flex-wrap gap-10 justify-center">
                <img
                  src={silver}
                  alt="Silver Sponsor Logo"
                  width={180}
                  height={90}
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src={silver2}
                  alt="Silver Sponsor Logo"
                  width={180}
                  height={90}
                  className="aspect-[2/1] overflow-hidden rounded-lg border object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
