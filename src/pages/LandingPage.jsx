import nature from '../assets/nature.png';
import dateIcon from '../assets/date.png';
import locationIcon from '../assets/location.png';
import uaIcon from '../assets/ua.png';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #CDE2D3;
  padding-top: 80px;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10rem 0;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem 0;
    width: 90%;
  }
`;

const TextContainer = styled.div`
  max-width: 50%;
  margin-left: 0;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    margin-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #043C2C;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Date = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: inherit;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Location = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: inherit;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const RegisterLink = styled.a`
  font-size: 1.2rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  right: -12.5vw;
  top: -20%;
  width: 40vw;
  height: auto;

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    padding-right: 0; // Remove any potential right padding
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: right top;

  @media (max-width: 768px) {
    width: 90%; // Increased from 80% to 90%
    object-position: right center;
    margin-right: -10%; // This will push the image further to the right
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.5rem;
`;

const UABanner = styled.div`
  position: absolute;
  top: 5rem;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 768px) {
    position: static;
    justify-content: flex-start;
    margin-top: 1rem;
  }
`;

function LandingPage() {
  return (
    <LandingPageContainer>
      <HeroSection>
        <TextContainer>
          <Title>JOIN US FOR A SEMINAR ON</Title>
          <Subtitle>SUSTAINABLE INDUSTRIAL PARKS IN MEENACHIL TALUK</Subtitle>
          <Date>
            <Icon src={dateIcon} alt="Calendar" />
            9:30 am, 17 August 2024
          </Date>
          <Location>
            <Icon src={locationIcon} alt="Location" />
            Alphonsian Pastoral Institute, Arunapuram, Pala
          </Location>
          <RegisterLink href="#">REGISTER NOW ⤴</RegisterLink>
        </TextContainer>
        <ImageContainer>
          <Image src={nature} alt="Nature" />
        </ImageContainer>
        <UABanner>
          <img src={uaIcon} alt="Sponsorship" />
        </UABanner>
      </HeroSection>
    </LandingPageContainer>
  );
}

export default LandingPage;