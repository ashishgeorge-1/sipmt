import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #CDE2D3;
`;

const NavContent = styled.nav`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  border-bottom: 2px solid #043C2C;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
    padding: 0.5rem;
    flex-wrap: wrap;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li`
  position: relative;
  margin: 0 1rem;

  &.active::after {
    content: '•';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    color: #15825C;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;

    &.active::after {
      bottom: -10px;
      font-size: 1.5rem;
    }
  }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: 500;

  &:hover, .active & {
    color: #15825C;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const LogoContainer = styled.div`
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const Logo = styled.img`
  height: 70px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Brand = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: black;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <NavContent>
        <LogoContainer>
          <Logo src={logo} alt="Logo" />
        </LogoContainer>
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
        <NavList isOpen={isOpen}>
          <NavItem className={location.pathname === '/' ? 'active' : ''}>
            <NavLink to="/" onClick={() => setIsOpen(false)}>HOME</NavLink>
          </NavItem>
          <NavItem className={location.pathname === '/speakers' ? 'active' : ''}>
            <NavLink to="/speakers" onClick={() => setIsOpen(false)}>SPEAKERS</NavLink>
          </NavItem>
          <NavItem className={location.pathname === '/sponsorship' ? 'active' : ''}>
            <NavLink to="/sponsorship" onClick={() => setIsOpen(false)}>SPONSORSHIP</NavLink>
          </NavItem>
          <NavItem className={location.pathname === '/contact' ? 'active' : ''}>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>CONTACT</NavLink>
          </NavItem>
        </NavList>
        <Brand>SIPMT</Brand>
      </NavContent>
    </NavContainer>
  );
}

export default Navigation;