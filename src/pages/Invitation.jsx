import React from "react";
import anoop from "../assets/anoop.jpeg";
import invitation from "../assets/invitation.jpg";
import { getGithubRawUrl } from "../utils/githubUtils.jsx";

export default function Invitation() {
  return (
    <section className="bg-white py-10 px-5 text-[#1c4330] min-h-screen pt-10">
      <div className="flex flex-col items-center pt-10">
        <h2 className="text-3xl font-bold text-[#043C2C] mb-2 pt-14 text-center">
          Sustainable Industrial Parks in Meenachil Taluk (SIPMT) Seminar
        </h2>
        <p className="m-4 text-[#043C2C] text-xl  text-center max-w-4xl mx-auto">

          We are pleased to invite you to the “Sustainable Industrial Parks in Meenachil Taluk” (SIPMT) seminar, organized by the Engineers’ Forum Pala (EFP), Pala Management Association (PMA), and the Rotary Club of Pala (RCP). The event will be held at 9.30 am on 17 August 2024 at the Alphonsian Pastoral Institute, Arunapuram, Pala.
        </p>
        <p className="m-4 text-[#043C2C] text-xl text-justify max-w-4xl mx-auto mb-10">
പാലായിൽ സുസ്ഥിര വ്യവസായപാർക്കുകൾ സെമിനാർ 17 ന്പാലാ:
എഞ്ചിനീയേഴ്സ് ഫോറം പാലാ, പാലാ മാനേജ്മെൻ്റ് അസോസിയേഷൻ,റോട്ടറി ക്ലബ് ഓഫ് പാലാ എന്നിവയുടെ സംയുക്താഭിമുഖ്യത്തിൽ പാലായെ ഒരു വ്യവസായ കേന്ദ്രമാക്കുവാനുള്ള സാധ്യതകളെക്കുറിച്ച് ആരായുവാനും പഠിക്കുവാനും പദ്ധതികൾ ആസൂത്രണം ചെയ്യുവാനുമായി ഒരു
 സെമിനാർ ആഗസ്റ്റ് 17-ാം തീയതി ശനിയാഴ്ച രാവിലെ 9.15 മുതൽ  12.45 വരെ അരുണാപുരം അൽഫോൻഷ്യൻ പാസ്റ്ററൽ സെൻ്ററിൽ വെച്ച് സംഘടിപ്പിക്കുന്നു. രാജ്യത്തിൻ്റെ വിവിധരംഗങ്ങളിൽ നിർണ്ണായക സംഭാവനകൾ അർപ്പിച്ച 
നിരവധി വ്യക്തിത്വങ്ങൾക്ക് ജന്മം നൽകിയ ഈ പ്രദേശം വ്യവസായസംരംഭങ്ങളുടെ അഭാവത്താൽ നിരവധി പ്രതിസന്ധികളെ അഭിമുഖീകരിക്കുന്നുണ്ട്. അഭ്യസ്തവിദ്യരുടെയും പരിശ്രമശാലികളുടെയും നാടായ ഈ ജില്ലയിൽ നിന്നുമുള്ള വിദേശകുടിയേറ്റം അവസാനിപ്പിക്കുവാനും പ്രതിഭയുള്ള അനേകരെ നൂതന സംരംഭങ്ങൾ വഴി ഇവിടെ
 നിലനിർത്തുവാനും ഉദ്ദേശിച്ചാണ് സുസ്ഥിരവ്യവസായ പാർക്കുകൾ ആരംഭിക്കുന്നത്. തികച്ചും പരിസ്ഥിതി സൗഹാർദ്ദപരമായും നമ്മുടെ പ്രദേശത്തിൻ്റെ വികസന സാധ്യതകൾ മുന്നിൽക്കണ്ടുമുള്ള 
പദ്ധതികൾക്കായിരിക്കും പ്രാമുഖ്യം നൽകുന്നത്. പദ്ധതിയുമായി സഹകരിക്കുവാൻ താല്പര്യമുള്ള ഏതു വ്യക്തിക്കും സെമിനാറിൽ സംബന്ധിക്കുവാൻ സാധിക്കും. താല്പര്യമുള്ളവർ sipmt.efpala.org എന്ന വെബ് പേജിലോ sipmt.pala@gmail.com എന്ന വിലാസത്തിലോ  രജിസ്റ്റർ ചെയ്യാവുന്നതാണ്.</p>

      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <h3 className="text-xl font-bold text-[#043C2C] mb-4">Invitation Letter</h3>
          <img
  src={invitation}
  className="w-[100%] h-[80vh] mb-4 border rounded-md border-gray-300"
/>

          <a
            href="/invitation letter (2).pdf"
            download
            className="text-blue-500 underline mb-8"
          >
            Click to Download Invitation
          </a>

          <h3 className="text-xl font-bold text-[#043C2C] mb-4">Watch Video</h3>
          <video className="md:w-[50vw] w-[100vw] h-[70vh]" controls>
    <source src={getGithubRawUrl("videos/VID-20240804-WA0023.mp4")} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          <a
            href="/VID-20240804-WA0023.mp4"
            download
            className="text-blue-500 mt-2 underline"
          >
            Click to Download Video
          </a>
        </div>
      </div>
    </section>
  );
}

