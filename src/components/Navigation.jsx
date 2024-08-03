import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0  right-0 z-50 bg-[#CDE2D3]">
      <nav className="w-full py-4 border-b-2 border-[#043C2C] flex justify-between items-center md:flex-nowrap flex-wrap px-8">
        <div className="font-bold text-2xl text-black">SIPMT</div>
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-2xl cursor-pointer"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-around items-center w-full md:w-auto m-0 p-0 list-none`}>
          <NavItem to="/" active={location.pathname === '/'} onClick={() => setIsOpen(false)}>
            HOME
          </NavItem>
          <NavItem to="/speakers" active={location.pathname === '/speakers'} onClick={() => setIsOpen(false)}>
            SPEAKERS
          </NavItem>
          <NavItem to="/sponsorship" active={location.pathname === '/sponsorship'} onClick={() => setIsOpen(false)}>
            SPONSORSHIP
          </NavItem>
          <NavItem to="/contact" active={location.pathname === '/contact'} onClick={() => setIsOpen(false)}>
            CONTACT
          </NavItem>
        </ul>
      </nav>
    </div>
  );
}

function NavItem({ to, active, children, onClick }) {
  return (
    <li className={`relative mx-4 my-2 md:my-0 ${active ? 'active' : ''}`}>
      <Link 
        to={to} 
        className="text-black hover:text-[#15825C] font-medium md:text-base text-xl"
        onClick={onClick}
      >
        {children}
      </Link>
      {active && (
        <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-[#15825C] text-4xl md:text-2xl">
          •
        </span>
      )}
    </li>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Navigation;
