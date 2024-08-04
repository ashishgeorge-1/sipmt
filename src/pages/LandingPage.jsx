import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../components/Footer";
import Map from "../components/map";
// Import all the required images
import logo from '../assets/logo.png';
import dateIcon from '../assets/date.png';
import locationIcon from '../assets/location.png';
import org1 from '../assets/org1.png';
import org2 from '../assets/org2.png';
import org3 from '../assets/org3.png';
import key1 from '../assets/key1.png';
import key2 from '../assets/key2.png';
import key3 from '../assets/key3.png';
import key4 from '../assets/key4.png';
import anoop from '../assets/anoop.png';
import slide1 from '../assets/pala-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg';
import slide2 from '../assets/slide2.jpeg.jpg';
import slide3 from '../assets/slide3.jpeg.jpg';


function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen  bg-[#CDE2D3] overflow-x-hidden">
     

      <section className="flex md:flex-row flex-col gap-10 mt-5 items-center w-full max-w-[1280px] h-[100vh]  mx-auto py-10 px-5 justify-center">
       
        <div className="w-full flex flex-col justify-center md:order-1 order-2 md:w-3/4 lg:w-1/2">
          <h3 className="md:text-2xl font-thin text-xl  mb-2">JOIN US FOR A SEMINAR ON</h3>
          <h2 className="md:text-5xl text-3xl mb-6 text-[#043C2C] font-bold">SUSTAINABLE INDUSTRIAL PARKS IN MEENACHIL TALUK</h2>
          <div className="flex items-center mb-2">
            <img src={dateIcon} alt="Calendar" className="w-5 h-5 mr-2" />
            <p className="text-lg text-[#043C2C] font-medium">9:30 am, 17 August 2024</p>
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
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfUU16gu_51u1-1dS0R84-R7SsuLLP6-r1ZpstccCVgNTFbJA/viewform"
            className=" text-md text-black no-underline font-bold hover:underline uppercase"
          >
            Register Now ⤴
          </a>
        </div>
        <img
          src={logo}
          alt="SIPMT Logo"
          className="md:order-1 w-6/12 md:w-2/6 md:mx-20 md:mb-24 md:mt-16"
        />
      </section>

      <section className="bg-white py-10 px-5">
        <div className="flex flex-col md:flex-row  md:items-start items-center max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-bold w-full text-[#043C2C] mb-5">
            ORGANIZED BY
          </h2>
          <div className="flex flex-row md:justify-end items-center justify-center gap-10 md:gap-40  w-full h-fit">
            <img src={org1} alt="Organization 1" className="h-20 w-auto " />
            <img src={org2} alt="Organization 2" className="h-20 w-auto " />
            <img src={org3} alt="Organization 3" className="h-20 w-auto " />
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
              <div>
                <img src={slide2} alt="Slide 2" className="w-full h-auto" />
              </div>
              <div>
                <img src={slide3} alt="Slide 3" className="w-full h-auto" />
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
              Our Seminar Aims To Unlock This Potential And Stimulate Growth In
              Sectors Such As Education, Transportation, Construction, And
              Healthcare, While Fostering Local Talent And Employment.
            </p>
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
              <h3 className="text-xl mb-2">Er. Anoop Ambika</h3>
              <p className="text-gray-600">CEO of Kerala Startup Mission</p>
            </div>
            <h2 className="text-lg font-bold text-[#043C2C] mb-5">
            More speakers to be decided soon.
          </h2>
          </div>
        </div>
      </section>

      <section className="bg-[#CDE2D3] py-10 px-5 text-[#1c4330] mx-2">
        <div className="max-w-[1280px] mx-auto text-left">
          <h2 className="text-2xl font-bold text-[#043C2C] mb-5">
            JOIN US AS A SPONSOR
          </h2>
          <p className="mb-5">
            We warmly invite you to join this noble cause not only through your
            participation in the seminar but also by providing your wholehearted
            support through sponsorship.
          </p>
          <p className="mb-5">
            Your sponsorship will not only showcase your commitment to our
            cause, but also provide your brand with excellent visibility and
            engagement opportunities.
          </p>
          <a href="/sponsor" className="text-[#15825C] font-bold hover:underline">
            KNOW MORE ⤴
          </a>
        </div>
      </section>

      <section className="bg-white py-10 px-5  text-[#1c4330]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-2xl font-bold text-[#043C2C] mb-5 text-left">
            GETTING THERE
          </h2>
          <div className="flex md:flex-row flex-col gap-10 ">
            <div className="ml-5 md:ml-0">
             
              <Map />
            </div>
            <div className="flex flex-col gap-8 ">
              <p className="mb-2 ">
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
                <strong>Contact Us:</strong> sipmt.pala@gmail.com
              </p>
            </div>
          </div>
          <div className="flex-1 mt-10">
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
          <div className="flex-1 mt-10">
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
      </section>

      
    </div>
  );
}

export default LandingPage;
