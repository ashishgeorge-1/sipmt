import { useState } from 'react';
import anoop from '../assets/anoop.jpeg';
import Sinojacob from "../assets/Sinojacob.jpg";
import susan from "../assets/susan.jpg";
import ajay from "../assets/ajay.jpg";
import Binu from "../assets/Binu.jpg";
import george from "../assets/george.jpg";  // Import the new image

export default function Speaker() {
  const [expandedSpeaker, setExpandedSpeaker] = useState(null);

  const speakers = [
    {
      name: "Er Anoop Ambika",
      title: "CEO of Kerala Startup Mission",
      image: anoop,
      description: "Anoop has over 26 years of industry experience with proficiency in international sales & marketing, policy making, Artificial Intelligence and Machine Learning, Life Sciences, ideation and entrepreneurship. Prior to being appointed as CEO of KSUM, Shri Anoop was the CEO of biotech firm GenproResearch. He had earlier worked as CEO in clinical data management company Kreara Solutions for more than 12 years. Hailing from Thiruvananthapuram, Shri Anoop is an engineering graduate and has his post graduation in Computational Biology and Bioinformatics from University of Kerala. Starting out as a Design Engineer in Bengaluru-based General Electric, Anoop later joined Lucent Technologies in Boston, US. Then he had short stints in US firms Nortel Networks as Project Leader and Telica Inc as Project Manager. A serial entrepreneur and technology enthusiast, Shri Anoop has co-founded several technology startups. He also represents Kerala Knowledge Economy Mission (KKEM) in Kerala State Planning Board. An art enthusiast and cultural organizer, Shri Anoop had served as the Patron of Natana, the arts and cultural forum of IT companies in Kerala."
    },
    {
      name: "Er Sino Jacob Mathew",
      title: "Assistant District Industries Officer",
      image: Sinojacob,
      description: "Mr. Sino Jacob Mathew completed his B.Tech (Electrical & Electronics Engineering) and M.Tech (Industrial Engineering and Management) from Govt Engineering College, Kottayam in the first decade of the 3rd millennium. He had a brief stint on the Kerala State Electricity Board as a substation operator. Then He had together 6 years of Teaching experience at St. Joseph's College of Engineering and Technology, Choondacherry and VISAT, Elanji in Electrical Engineering subjects. He joined the Dept of Industries and Commerce as an Industries extension officer in 2014. He worked in different Block Panchayaths and Municipalities till 2021 wherein He was promoted to Assistant district industries Officer and posted in Meenachil taluk. He is responsible for coordinating the services of the Directorate of Industries and Commerce in Meenachil Taluk which include the promotion of Entrepreneurship In and around Pala. He paved the way for establishing two private industrial estates in Meenachil Taluk so far."
    },
    {
      name: "Susan Paul",
      title: "Vice President and Center Head, EXL Services, Infopark, Kochi",
      image: susan,
      description: "Susan Paul is a dynamic leader in the IT services sector. Her strategic vision and operational excellence have been key to EXL Services' success in Kochi. Susan Paul is currently serving as the Vice President at EXL, a position she has held since January 2021, with over three years of experience in this role in India. Prior to this, she worked as Senior Assistant Vice President at EXL from November 2014 to January 2021, accumulating six years and three months of expertise in leadership. Earlier, from January 2012 to October 2014, she was the Assistant Vice President at EXL, where she managed transitions and migration of finance and accounting services. Additionally, she served as DGM at Outsource Partners International in Kochi, India, from November 2010 to December 2011, focusing on managing operations in finance and accounting processes, including P2P, O2C, and R2R. Susan is a qualified Chartered Accountant, having completed her CA from the Institute of Chartered Accountants of India between 1993 and 1997. She also holds a Bachelor of Science degree in Mathematics from Stella Maris College, which she earned from 1986 to 1989. She is known for her innovative approaches to talent development and business growth."
    },
    {
      name: "Mr Ajay George Varghese",
      title: "MD Bipha Ayurveda",
      image: ajay,
      description: "Ajay George Varghese is a third-generation entrepreneur and visionary leader of Bipha Ayurveda, a renowned company rooted in Kerala's rich Ayurvedic heritage since 1929. With a background in Business Management, Mr Ajay joined his family business in 1989 and has since transformed the company into a global leader in the premium Ayurveda brand. Under his leadership, the company has expanded into D2C segment in 2011 which has since grown into a 200+ premium retail store chain with a pan India presence across airports. Bipha had developed an omni channel presence across diverse market places and ecommerce in India and abroad. The company has over the last few decades developed a formidable portfolio of therapeutic, personal care, wellness, health food, and fragrances spanning multiple segments. Product innovations and categories were constant disruptive changes in the last few decades. Bipha today has strategically transformed from an innovative therapeutic company to a holistic lifestyle brand. Ajay George Varghese is committed to innovation, embracing scientific research to launch credible products. The company has strategically acquired diverse technologies from leading R&D centres in India. Bipha also has also entered into strategic alliances with universities and research institutions in India and abroad. Bipha is today moving into a technologically driven research-based science-oriented company transforming itself to meet the consumer requirements of tomorrow. Beyond business, Ajay actively engages in Ayurveda and entrepreneurial forums and also actively leads policy advocacy for CII, exemplifying his dedication to industry advancement in the State. In addition to his role at Bipha Ayurveda, Ajay holds influential positions in trade organizations such as CII, FICCI, RAI and TIE, underscoring his leadership in business and entrepreneurial communities. His strategic vision ensures Bipha Ayurveda continues to grow and innovate, setting benchmarks in the global Ayurveda segment."
    },
    {
      name: "Mr Binu Jose",
      title: "Vodafone Idea Kerala Head",
      image: Binu,
      description: "Mr Binu Jose holds a BSc from STC Pala and an MBA from Poona University. He is currently working with Vodafone Idea as the Head of Kerala Circle Operations. His career began with Tata Press Ltd, followed by roles at Sify Ltd, Tata Teleservices, Hutch, and Vodafone. He has gained extensive experience working in various markets, including Mumbai, Maharashtra, Tamil Nadu, and Kerala."
    },
    {
      name: "Mr George Mathew",
      title: "Director Brilliant Study Centre",
      image: george,
    }
  ];

  const toggleDescription = (index) => {
    setExpandedSpeaker(expandedSpeaker === index ? null : index);
  };

  return (
    <section className="bg-white py-10 px-5 text-[#1c4330]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-2xl font-bold py-14 text-[#043C2C] mb-5 text-center mt-10">
          PRESENTING OUR PANEL OF DISTINGUISHED SPEAKERS
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-32 h-40 rounded-full object-cover mb-5"
              />
              <h3 className="text-xl font-bold mb-3 text-center">{speaker.name}</h3>
              <p className="text-gray-600 font-bold text-center mb-5">{speaker.title}</p>
              <button
                onClick={() => toggleDescription(index)}
                className="bg-[#043C2C] text-white px-4 py-2 rounded-full hover:bg-[#1c4330] transition-colors"
              >
                {expandedSpeaker === index ? 'Read Less' : 'Read More'}
              </button>
              {expandedSpeaker === index && (
                <div className="mt-4 text-sm text-gray-700 text-justify transition-all duration-300 ease-in-out max-h-[300px] overflow-y-auto p-4 bg-gray-100 rounded-lg">
                  {speaker.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
