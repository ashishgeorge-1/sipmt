import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../components/Footer';

// Import all the required images
import nature from '../assets/nature.png';
import dateIcon from '../assets/date.png';
import locationIcon from '../assets/location.png';
import uaIcon from '../assets/ua.png';
import org1 from '../assets/org1.png';
import org2 from '../assets/org2.png';
import org3 from '../assets/org3.png';
import key1 from '../assets/key1.png';
import key2 from '../assets/key2.png';
import key3 from '../assets/key3.png';
import key4 from '../assets/key4.png';
import slide1 from '../assets/slide1.jpeg.jpg';
import slide2 from '../assets/slide2.jpeg.jpg';
import slide3 from '../assets/slide3.jpeg.jpg';
import mapImage from '../assets/map.png'; // Replace with your actual map image

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
    align-items: flex-start;
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
    padding-right: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: right top;

  @media (max-width: 768px) {
    width: 90%;
    object-position: right center;
    margin-right: -10%;
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

const Header = styled.header`
  background-color: white;
  padding: 40px 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.5em;
  color: #1c4330;
  margin: 0;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 1.25em;
    margin-bottom: 20px;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 120px;
  flex: 2;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Logo = styled.img`
  max-height: 60px;
  width: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const AboutSection = styled.section`
  background-color: #CDE2D3;
  padding: 40px 0;
  color: #1c4330;
`;

const SectionContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutTitle = styled.h2`
  font-size: 1.75em;
  margin-bottom: 30px;
  color: #1c4330;

  @media (max-width: 768px) {
    font-size: 1.25em;
  }
`;

const ImageGallery = styled.div`
  width: 100%;
  max-width: 1086px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const AboutText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  p {
    width: 48%;
    margin: 0;
    text-align: justify;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    p {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

const ObjectivesSection = styled.section`
  background-color: #CDE2D3;
  overflow: hidden;
  padding: 40px 0;
  color: #1c4330;
`;

const ObjectivesTitle = styled.h2`
  font-size: 1.75em;
  margin-bottom: 80px;
  color: #1c4330;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.25em;
    margin-bottom: 40px;
    text-align: center;
  }
`;

const ObjectiveList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Objective = styled.div`
  text-align: center;
  max-width: 200px;

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    color: #1c4330;
    font-size: 1.1em;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SpeakersSection = styled.section`
  background-color: #FFFFFF;
  padding: 40px 20px;
  color: #1c4330;
`;

const SpeakersTitle = styled.h2`
  font-size: 1.5em;
  color: #1c4330;
  text-align: center;
  margin-bottom: 30px;
`;

const SpeakersGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const SpeakerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SpeakerAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const SpeakerName = styled.h3`
  font-size: 1.2em;
  margin: 0;
`;

const SpeakerTitle = styled.p`
  font-size: 1em;
  margin: 5px 0 0;
  color: #555;
`;

const SponsorSection = styled.section`
  background-color: #CDE2D3;
  padding: 40px 20px;
  color: #1c4330;
  text-align: center;
`;

const SponsorTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.25em;
  }
`;

const SponsorText = styled.p`
  font-size: 1em;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 0.875em;
  }
`;

const SponsorButton = styled.a`
  font-size: 1em;
  color: #15825C;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 20px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 0.875em;
  }
`;

const GettingThereSection = styled.section`
  background-color: #FFFFFF;
  padding: 40px 20px;
  color: #1c4330;
  text-align: center;
`;

const GettingThereTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 1.25em;
  }
`;

const MapImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 1em;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 0.875em;
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

      <Header>
        <HeaderContent>
          <HeaderTitle>ORGANIZED BY</HeaderTitle>
          <LogosContainer>
            <Logo src={org1} alt="Organization 1" />
            <Logo src={org2} alt="Organization 2" />
            <Logo src={org3} alt="Organization 3" />
          </LogosContainer>
        </HeaderContent>
      </Header>

      <AboutSection>
        <SectionContent>
          <AboutTitle>What is SIPMT?</AboutTitle>
          <ImageGallery>
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
                <img src={slide1} alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={slide2} alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
              </div>
              <div>
                <img src={slide3} alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
              </div>
            </Carousel>
          </ImageGallery>
          <AboutText>
            <p>
              Meenachil Taluk, Known For Its Natural Beauty And Rich Agricultural Heritage,
              Has Significant Untapped Industrial Potential.
            </p>
            <p>
              Our Seminar Aims To Unlock This Potential And Stimulate Growth In Sectors
              Such As Education, Transportation, Construction, And Healthcare, While
              Fostering Local Talent And Employment.
            </p>
          </AboutText>
        </SectionContent>
      </AboutSection>

      <ObjectivesSection>
        <SectionContent>
          <ObjectivesTitle>Key Objectives</ObjectivesTitle>
          <ObjectiveList>
            <Objective>
              <img src={key1} alt="Enhance Industrial Footprint" />
              <p>Enhance Industrial Footprint</p>
            </Objective>
            <Objective>
              <img src={key2} alt="Generate Employment" />
              <p>Generate Employment</p>
            </Objective>
            <Objective>
              <img src={key3} alt="Leverage Connectivity" />
              <p>Leverage Connectivity</p>
            </Objective>
            <Objective>
              <img src={key4} alt="Diverse Industrial Base" />
              <p>Diverse Industrial Base</p>
            </Objective>
          </ObjectiveList>
        </SectionContent>
      </ObjectivesSection>

      <SpeakersSection>
        <SpeakersTitle>PRESENTING OUR PANEL OF DISTINGUISHED SPEAKERS</SpeakersTitle>
        <SpeakersGrid>
          <SpeakerCard>
            <SpeakerAvatar src="src/assets/anoop.png" alt="Er. Anoop Ambika" />
            <SpeakerName>Er. Anoop Ambika</SpeakerName>
            <SpeakerTitle>CEO of Kerala Startup Mission</SpeakerTitle>
          </SpeakerCard>
          <SpeakerCard>
            <SpeakerAvatar src="src/assets/anoop.png" alt="Er. Anoop Ambika" />
            <SpeakerName>Er. Anoop Ambika</SpeakerName>
            <SpeakerTitle>CEO of Kerala Startup Mission</SpeakerTitle>
          </SpeakerCard>
          <SpeakerCard>
            <SpeakerAvatar src="src/assets/anoop.png" alt="Er. Anoop Ambika" />
            <SpeakerName>Er. Anoop Ambika</SpeakerName>
            <SpeakerTitle>CEO of Kerala Startup Mission</SpeakerTitle>
          </SpeakerCard>
        </SpeakersGrid>
      </SpeakersSection>

      <SponsorSection>
        <SponsorTitle>JOIN US AS A SPONSOR</SponsorTitle>
        <SponsorText>
          We warmly invite you to join this noble cause not only through your participation in the seminar but also by providing your wholehearted support through sponsorship.
        </SponsorText>
        <SponsorText>
          Your sponsorship will not only showcase your commitment to our cause, but also provide your brand with excellent visibility and engagement opportunities.
        </SponsorText>
        <SponsorButton href="#">KNOW MORE ⤴</SponsorButton>
      </SponsorSection>

      <GettingThereSection>
        <GettingThereTitle>GETTING THERE</GettingThereTitle>
        <MapImage src={mapImage} alt="Map" />
        <InfoText>
          <strong>Location:</strong> Alphonsian Pastoral Institute, Arunapuram, Pala
        </InfoText>
        <InfoText>
          <strong>Time:</strong> 9:30 AM
        </InfoText>
        <InfoText>
          <strong>Date:</strong> August 17, 2024
        </InfoText>
        <InfoText>
          <strong>Contact Us:</strong> sipmt.pala@gmail.com
        </InfoText>
      </GettingThereSection>

      <Footer />
    </LandingPageContainer>
  );
}

export default LandingPage;
