import styled from 'styled-components';
import footerLogo from '../assets/logo.png'; // Replace with your actual footer logo image

const FooterContainer = styled.footer`
  background-color: #CDE2D3;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.875em;
  color: #1c4330;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 0.75em;
  }
`;

const FooterLogo = styled.img`
  max-width: 100px;
  height: auto;
  margin: 10px 0;

  @media (max-width: 768px) {
    max-width: 80px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Terms of Service</FooterText>
      <FooterLogo src={footerLogo} alt="SIPMT Logo" />
      <FooterText>Copyright 2024 - SIPMT</FooterText>
    </FooterContainer>
  );
};

export default Footer;
