import footerLogo from '../assets/logo.png'; // Replace with your actual footer logo image

const Footer = () => {
  return (
    <footer className="bg-[#CDE2D3] p-5 text-center md:p-10">
      <div className="md:flex md:justify-between md:items-center md:max-w-[1280px] md:mx-auto">
        <p className="text-sm text-[#1c4330] my-2 md:text-base">Terms of Service</p>
        <div className="flex justify-center my-2 md:my-0">
          <img src={footerLogo} alt="SIPMT Logo" className="max-w-[100px] h-auto md:max-w-[120px]" />
        </div>
        <p className="text-sm text-[#1c4330] my-2 md:text-base">Copyright 2024 - SIPMT</p>
      </div>
      <div className="mt-4">
        <p className="text-sm text-[#1c4330]">Powered by <a href="https://blackswitch.tech" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Blackswitch Technologies</a></p>
      </div>
    </footer>
  );
};

export default Footer;
