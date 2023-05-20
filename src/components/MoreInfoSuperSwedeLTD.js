import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Super_Swede_LTD_Hero from '../assets/images/Super_Swede_LTD_Hero.png';
import Super_Swede_LTD_Header from '../assets/images/Super_Swede_LTD_Header.jpg';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import Logo_Aegishjalmur from '../assets/images/Logo_Aegishjalmur.png';
import Colors_Cosmic_Black_Burst from '../assets/images/Colors_Cosmic_Black_Burst.png';
import Super_Swede_LTD_Detail_1 from '../assets/images/Super_Swede_LTD_Detail_1.jpg';
import Super_Swede_LTD_Detail_2 from '../assets/images/Super_Swede_LTD_Detail_2.jpg';
import Super_Swede_LTD_Detail_3 from '../assets/images/Super_Swede_LTD_Detail_3.jpg';
import Super_Swede_LTD_Detail_4 from '../assets/images/Super_Swede_LTD_Detail_4.jpg';
import Super_Swede_LTD_Headstock_Detail_5 from '../assets/images/Super_Swede_LTD_Headstock_Detail_5.jpg';
import Super_Swede_LTD_Detail_6 from '../assets/images/Super_Swede_LTD_Detail_6.jpg';
import Super_Swede_LTD_Body_Detail from '../assets/images/Super_Swede_LTD_Body_Detail.jpg';
import Super_Swede_LTD_Cosmic_Black_Burst from '../assets/images/Super_Swede_LTD_Cosmic_Black_Burst.png';
import Super_Swede_LTD_Cosmic_Black_Burst_Back from '../assets/images/Super_Swede_LTD_Cosmic_Black_Burst_Back.png';
import Detail_expander from '../assets/images/Detail_expander.jpg';
import Detail_resinator_wood from '../assets/images/Detail_resinator_wood.jpg';
import Detail_lundgren_pickups from '../assets/images/Detail_lundgren_pickups.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavWrapper = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2vmin;
  font-weight: 400;
  padding-left: 16px;
  padding-right: 16px;
  & .active {
    border-bottom: 1px dotted #111111;
  }
  a {
    text-decoration: none;
    color: #111111;
    font-family: 'Signika Negative', sans-serif;
  }
  & a:hover {
    border-bottom: 1px solid #111111;
  }
  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 768px) {
    font-size: 3vmin;
  }
  @media (max-width: 430px) {
    font-size: 3.5vmin;
  }
`;

const NavLinks = styled.div`
  width: 66, 66666667%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  float: left;
`;

const ShareLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  float: right;
  @media (max-width: 992px) {
    display: none;
  }
`;

const IntroBackground = styled.div`
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Super_Swede_LTD_Header});
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;
  position: relative;
  @media (max-width: 1170px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 550px) {
    height: 200px;
  }
`;

const IntroContainer = styled.div`
  width: 1170px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  @media (max-width: 1190px) {
    width: 950px;
  }
  @media (max-width: 970px) {
    width: 750px;
  }
  @media (max-width: 780px) {
    width: 660px;
  }
  @media (max-width: 680px) {
    width: 560px;
  }
  @media (max-width: 580px) {
    width: 460px;
  }
  @media (max-width: 480px) {
    width: 360px;
  }
  @media (max-width: 380px) {
    width: 260px;
  }
`;

const IntroTitle = styled.div`
  width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  font-size: 7vmin;
  line-height: 80%;
  font-family: 'Bitter', serif;
  @media (max-width: 800px) {
    font-size: 7vmin;
  }
  @media (max-width: 350px) {
    font-size: 9vmin;
  }
`;

const IntroParagraph = styled.p`
  font-family: 'Signika Negative', sans-serif;
  font-weight: normal;
  font-size: 0.4em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const IntroImage = styled.img`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  vertical-align: top;
  object-fit: contain;
  @media (max-width: 1400px) {
    height: 40em;
  }
  @media (max-width: 1200px) {
    height: 35em;
  }
  @media (max-width: 1100px) {
    height: 30em;
  }
  @media (max-width: 992px) {
    height: 25em;
  }
  @media (max-width: 768px) {
    height: 20em;
  }
  @media (max-width: 650px) {
    height: 15em;
  }
  @media (max-width: 450px) {
    height: 10em;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const MainContentWrapper = styled.div`
  max-width: 1170px;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const LeftContentWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 800px) {
    border: none;
  }
`;

const RightContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1.5px solid rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 800px) {
    border: none;
  }
`;

const MediaTitle = styled.h3`
  display: flex;
  flex-direction: row;
  font-size: 3vmin;
  font-weight: 400;
  line-height: 110%;
  font-family: 'Bitter', serif;
  color: #333333;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    font-size: 5vmin;
  }
  @media (max-width: 350px) {
    font-size: 7vmin;
  }
`;

const MediaTitleSecondary = styled.h4`
  display: flex;
  flex-direction: row;
  font-size: 2.5vmin;
  font-weight: 400;
  line-height: 110%;
  font-family: 'Signika Negative', sans-serif;
  color: #333333;
  @media (max-width: 800px) {
    font-size: 4vmin;
  }
  @media (max-width: 350px) {
    font-size: 6vmin;
  }
`;

const Paragraph = styled.p`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 2vmin;
  padding: 0 0 2vmin;
  a {
    color: #9b0600;
  }
  @media (max-width: 800px) {
    font-size: 3vmin;
  }
  @media (max-width: 550px) {
    font-size: 4vmin;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const LogoSpan = styled.span`
  width: 3em;
  height: 3em;
  display: block;
  float: left;
  opacity: 0.3;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`;

const DetailsText = styled.p`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 2vmin;
  @media (max-width: 800px) {
    font-size: 3vmin;
  }
  @media (max-width: 550px) {
    font-size: 4vmin;
  }
`;

const Colors = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 2rem;
  align-self: center;
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ColorsWrapper = styled.div`
  text-align: center;
`;

const ColorsText = styled.p`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 1.8vmin;
  @media (max-width: 800px) {
    font-size: 3vmin;
  }
  @media (max-width: 550px) {
    font-size: 4vmin;
  }
`;

const Quote = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  margin-top: 7rem;
`;

const QuoteContentWrapper = styled.div`
  max-width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const QuoteText = styled.p`
  color: #ffffff;
  font-family: 'Bitter', serif;
  font-size: 2vmin;
  padding: 2vmin 2vmin 2vmin;
  margin: 2vmin;
  & a {
    color: #ddd;
    float: right;
    margin-top: 3rem;
    text-decoration: none;
    border-bottom: 1px dotted #fff;
  }
  & a:hover {
    border-bottom: 1px solid #fff;
  }
  @media (max-width: 800px) {
    font-size: 3vmin;
  }
  @media (max-width: 550px) {
    font-size: 4vmin;
  }
`;

const LightboxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e0e0dc;
  overflow: hidden;
`;

const SpecsWrapper = styled.div`
  max-width: 1170px;
  display: flex;
  flex-direction: row;
  margin-top: 5rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const StandardsWrapper = styled.div`
  margin-top: 16px;
  margin-left: -15px;
  margin-right: -15px;
  & p {
    font-size: 2vmin;
    font-family: 'Signika Negative', sans-serif;
    color: #333333;
    margin: 16px;
    @media (max-width: 800px) {
      font-size: 2.5vmin;
    }
    @media (max-width: 550px) {
      font-size: 3vmin;
    }
  }
  & h4 {
    font-size: 2.5vmin;
    font-weight: normal;
    font-family: 'Signika Negative', sans-serif;
    color: #333333;
    margin: 16px;
    @media (max-width: 800px) {
      font-size: 3vmin;
    }
    @media (max-width: 550px) {
      font-size: 3.5vmin;
    }
  }
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
  }
`;

const StandardsImageWrapper = styled.div`
  width: 33.3333%;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  float: left;
  @media (max-width: 400px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

const StandardsTextWrapper = styled.div`
  width: 66.6667%;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  float: left;
  @media (max-width: 400px) {
    width: 100%;
    margin-bottom: 16px;
    padding-left: 0;
    padding-right: 0;
  }
`;

const LeftSpecsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  padding-right: 15px;
  & ul {
    font-size: 2vmin;
    font-family: 'Signika Negative', sans-serif;
    color: #333333;
    margin: 16px;
    @media (max-width: 800px) {
      font-size: 2.5vmin;
    }
    @media (max-width: 550px) {
      font-size: 3vmin;
    }
  }
  @media (max-width: 800px) {
    border: none;
  }
`;

const RightSpecsWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1.5px solid rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 800px) {
    border: none;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 2vmin;
  background-color: #9b0600;
  font-family: 'Signika Negative', sans-serif;
  border: none;
  cursor: pointer;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.9);
  @media (max-width: 800px) {
    font-size: 3vmin;
  }
  @media (max-width: 650px) {
    font-size: 3.5vmin;
  }
  @media (max-width: 430px) {
    font-size: 4vmin;
  }
`;

const FinalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 768px;
  height: auto;
  margin: 2rem 0;
  padding: 0 16px;
`;

const MoreInfoSuperSwedeLTD = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroContainer>
            <IntroTitle>
              Super Swede LTD
              <IntroParagraph>Made in Sweden.</IntroParagraph>
            </IntroTitle>
            <IntroImage src={Super_Swede_LTD_Hero} alt='' />
          </IntroContainer>
        </IntroBackground>
        <NavContainer>
          <NavWrapper>
            <NavLinks>
              <NavLink to='/'>Home</NavLink>
              <span>/</span>
              <NavLink>Your Hagstrom</NavLink>
              <span>/</span>
              <NavLink to='/InstrumentArchive'>Instrument Archive</NavLink>
              <span>/</span>
              <NavLink to='/ElectricGuitars'>Swedish Made</NavLink>
              <span>/</span>
              <NavLink>Super Swede LTD</NavLink>
            </NavLinks>
            <ShareLinks>
              <NavLink>
                <i className='fa-brands fa-square-facebook'></i> share
              </NavLink>
              <span>/</span>
              <NavLink>
                <i className='fa-brands fa-square-twitter'></i> tweet
              </NavLink>
              <span>/</span>
              <NavLink>
                <i className='fa-solid fa-square-envelope'></i> mail
              </NavLink>
            </ShareLinks>
          </NavWrapper>
        </NavContainer>
        <MainContentWrapper>
          <LeftContentWrapper>
            <MediaTitle>Hagstrom Super Swede LTD</MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              Hagstrom continually strives to build the finest guitars
              available. We steadily take steps to improve our methods and reach
              new heights of building instruments of the highest possible
              standard. After several years of consistent pleas by Hagstrom fans
              over the world, we are very proud to announce that Hagstrom now
              returns to its roots with production out of Sweden for the first
              time since the early 1980’s.
            </Paragraph>
            <MediaTitle>Made in Sweden</MediaTitle>
            <Paragraph>
              To commemorate this historic moment, we are pleased to present the
              introduction of a very special limited edition of one of
              Hagstrom’s historic flagship models, the Hagstrom Super Swede.
              First introduced to the Hagstrom range in 1978, this limited
              edition will be produced in a total of 30 pieces world-wide. Each
              of these limited edition instruments is each meticulously built
              using premium African Mahogany necks and bodies, Mortise and Tenon
              necks joints, united together using some of the highest graded ¾”
              flame maple tops. To top off this classic combination of the 25.5”
              scaled Super Swede, each instrument is offered in one of the most
              popular Hagstrom finishes, “Cosmic Black Burst”. Each guitar is
              numbered and documented, to commemorate the first step of
              returning this point of production back to our motherland.
            </Paragraph>
            <MediaTitle>Lundgren Pickups</MediaTitle>
            <Paragraph>
              We have joined forces with Johan Lundgren of Swedish Lundgren
              pickups, where each of the instrument’s features a perfectly
              matched pair of Lundgren’s hand-built pickups from Sweden. The
              Super Swede with its long sustain and powerful tone, is perfectly
              matched with Lundgren’s Alnico 5 splitable “Suckerbucker” in the
              bridge position. The tone can be best described as “tight” and
              “lively” which only contributes to the Super Swedes already miles
              long natural sustain, which literally “sucks” the tone out from
              the instrument. Lead players will feel an immediate need to
              lengthen their solos, as the output of this “medium plus” bridge
              humbucker sings to bring out the guitar’s full potential.
            </Paragraph>
            <MediaTitle>Sucker Bucker and Heaven 75</MediaTitle>
            <Paragraph>
              In order to provide a perfectly-balanced marriage with the
              “Suckerbucker” and provide extra versatility, Lundgren’s “Heaven
              57” was chosen for the neck pickup adding “vintage breath” and
              delivering a sensational and harmonic clarity. Players will have
              the best of both worlds using this perfect calibrated set of
              Lundgren pickups, which will guarantee bringing a wide grin to the
              face of any player. It’s literally a match made in heaven.
            </Paragraph>
          </LeftContentWrapper>
          <RightContentWrapper>
            <MediaTitle>Colors</MediaTitle>
            <Colors>
              <ColorsWrapper>
                <Image
                  src={Colors_Cosmic_Black_Burst}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Cosmic Black Burst</ColorsText>
              </ColorsWrapper>
            </Colors>
          </RightContentWrapper>
        </MainContentWrapper>
        <MainContentWrapper>
          <Details>
            <DetailsWrapper>
              <Image src={Super_Swede_LTD_Detail_1} alt='' />
              <DetailsText>Roller Bridge, Ruthenium Tailpiece</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Super_Swede_LTD_Detail_2} alt='' />
              <DetailsText>Lundgren Pickups</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Super_Swede_LTD_Detail_3} alt='' />
              <DetailsText>Schaller Hardware</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Super_Swede_LTD_Detail_4} alt='' />
              <DetailsText>Flamed Maple Top</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Super_Swede_LTD_Headstock_Detail_5} alt='' />
              <DetailsText>Hagstrom Headstock</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Super_Swede_LTD_Detail_6} alt='' />
              <DetailsText>Limited Edition</DetailsText>
            </DetailsWrapper>
          </Details>
        </MainContentWrapper>
        <Quote>
          <QuoteContentWrapper>
            <Image
              src={Logo_Aegishjalmur}
              alt=''
              style={{ width: '170px', height: 'auto', margin: '2vmin' }}
            />
            <QuoteText>
              "We proudly present to you the Super Swede LTD Made in Sweden.
              This instrument combines all our experience, our independent
              developments and traditional Hagstrom craftsmanship, with the
              latest manufacturing technologies."
            </QuoteText>
          </QuoteContentWrapper>
        </Quote>
        <LightboxWrapper>
          <Lightbox
            plugins={[Inline, Slideshow, Thumbnails]}
            inline={{
              style: {
                width: '100%',
                maxWidth: '1170px',
                aspectRatio: '3 / 2',
              },
            }}
            thumbnails={{ vignette: false }}
            styles={{
              container: { backgroundColor: '#e0e0dc' },
              thumbnail: { backgroundColor: '#e0e0dc' },
              thumbnailsContainer: { backgroundColor: '#e0e0dc' },
            }}
            open={open}
            close={() => setOpen(false)}
            slides={[
              { src: Super_Swede_LTD_Cosmic_Black_Burst },
              { src: Super_Swede_LTD_Cosmic_Black_Burst_Back },
            ]}
          />
        </LightboxWrapper>
        <SpecsWrapper>
          <LeftSpecsWrapper>
            <MediaTitle>Super Swede LTD Specs</MediaTitle>
            <MediaTitleSecondary>Body</MediaTitleSecondary>
            <ul>
              <li>2 Piece African Gabon Mahogany Body</li>
              <li>3/4” High Grade Flame Maple Top</li>
              <li>Hagstrom Polyester Finish</li>
            </ul>
            <MediaTitleSecondary>Neck</MediaTitleSecondary>
            <ul>
              <li>African Kaya Mahogany Neck - “D” Profile</li>
              <li>H-Expander™ Truss Rod</li>
              <li>
                Schaller 18:1 M6 Rear-Locking Tuning Machines with Hagstrom
                Buttons - Finish: Ruthenium/Gold
              </li>
            </ul>
            <MediaTitleSecondary>Fingerboard/Nut</MediaTitleSecondary>
            <ul>
              <li>Resinator™ Fingerboard / 25.5” (648 mm) Scale Length</li>
              <li>Pearloid Block Inlays</li>
              <li>22 Medium Jumbo Frets / 15” Radius</li>
              <li>GraphTech Black Tusq Nut / 43 mm Nut Width</li>
            </ul>
            <MediaTitleSecondary>Electronics</MediaTitleSecondary>
            <ul>
              <li>Neck Pickup: Lundgren AlNiCo-2 Heaven 57 Humbucker</li>
              <li>Bridge Pickup: Lundgren AlNiCo-5 Suckerbucker Humbucker</li>
              <li>Pickup Selector: 3-Way Toggle Switch</li>
              <li>2 x Volume Control</li>
              <li>2 x Tone Control with Independent Push-Pull Coil Split</li>
              <li>4 x Schaller Dome-Knobs with laser engraved Hagstrom “H”</li>
            </ul>
            <MediaTitleSecondary>Parts</MediaTitleSecondary>
            <ul>
              <li>
                Schaller STM Long Travel Tune-O-Matic Bridge - Finish:
                Ruthenium/Gold
              </li>
              <li>Hagstrom Sustain Block™ Tailpiece-Finish: Ruthenium</li>
              <li>D’Addario Equipped Strings (10-46)</li>
            </ul>
            <MediaTitleSecondary>Case</MediaTitleSecondary>
            <ul>
              <li>Hagstrom Hard Case included</li>
            </ul>
          </LeftSpecsWrapper>
          <RightSpecsWrapper>
            <MediaTitle>Super Swede LTD Standards</MediaTitle>
            <StandardsWrapper>
              <StandardsImageWrapper>
                <Image
                  src={Detail_lundgren_pickups}
                  alt=''
                  style={{
                    height: 'auto',
                    maxWidth: '100%',
                    verticalAlign: 'top',
                  }}
                />
              </StandardsImageWrapper>
              <StandardsTextWrapper>
                <h4 style={{ marginTop: '0', lineHeight: '1.2em' }}>
                  Lundgren Pickups
                </h4>
                <p>
                  We worked with Swedish pickup guru Johan Lundgren, designer of
                  pickups used by artists such as Ghost or Meshuggah’s Martin
                  Hagström (no relation!). His pickups cover an immense
                  expressive range; from smooth, warm tones to the kind of
                  attack and intense dynamic output that would satisfy the
                  demands of even the most extreme musical styles.
                </p>
                <p>
                  <a
                    style={{
                      textDecoration: 'none',
                      color: '#9b0600',
                      borderBottom: '1px dotted #9b0600',
                    }}
                    href='https://lundgren.se/en/'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Website Lundgren Pickups
                  </a>
                </p>
              </StandardsTextWrapper>
            </StandardsWrapper>
            <StandardsWrapper>
              <StandardsImageWrapper>
                <Image
                  src={Detail_expander}
                  alt=''
                  style={{
                    height: 'auto',
                    maxWidth: '100%',
                    verticalAlign: 'top',
                  }}
                />
              </StandardsImageWrapper>
              <StandardsTextWrapper>
                <h4 style={{ marginTop: '0', lineHeight: '1.2em' }}>
                  H-Expander
                </h4>
                <p>
                  All Hagstrom electric guitars and basses include our patented
                  H-Expander™ truss rod. Providing tension at both ends and
                  running the entire length of the neck, the rigid yet
                  light-weight alloy truss rod allows for a very low action and
                  thin neck, two factors that were instrumental in earning
                  Hagstrom its reputation as the world’s fastest playing guitar.
                  The H-Expander™ truss rod not only provides ultimate neck
                  stability, but it also contributes to Hagstrom’s unique tone.
                  Longer sustain and a round attack are some of the sonic
                  characteristics the H-Expander™ adds to the tonal essence of
                  Hagstrom.
                </p>
              </StandardsTextWrapper>
            </StandardsWrapper>
            <StandardsWrapper>
              <StandardsImageWrapper>
                <Image
                  src={Detail_resinator_wood}
                  alt=''
                  style={{
                    height: 'auto',
                    maxWidth: '100%',
                    verticalAlign: 'top',
                  }}
                />
              </StandardsImageWrapper>
              <StandardsTextWrapper>
                <h4 style={{ marginTop: '0', lineHeight: '1.2em' }}>
                  Resinator Wood
                </h4>
                <p>
                  Resinator™ wood is a wood composite material that is both more
                  uniform in density and more stable than any standard wood
                  product. These characteristics eliminate dead spots or “wolf
                  tones” sometimes associated with conventional wood
                  fingerboards. Resinator™ wood has an articulate sound similar
                  to high quality ebony, but without any of the problems
                  associated with ebony. It provides a stable and clear tone,
                  and also adds higher overtones and harmonics which uniquely
                  detail each note. Like our H-Expander™ truss rod, Resinator™
                  wood is a major contributor to the distinctive “Hagstrom
                  tone”.
                </p>
              </StandardsTextWrapper>
            </StandardsWrapper>
          </RightSpecsWrapper>
        </SpecsWrapper>
        <FinalWrapper>
          <Image src={Super_Swede_LTD_Body_Detail} alt='' />
          <MediaTitle>Schaller Hardware</MediaTitle>
          <Paragraph>
            We have also teamed up with one of Hagstrom’s long time suppliers
            since days of past with “Schaller” Germany, since these specialized
            instruments prescribed extraordinary hardware to inspire the eyes
            and ears of the beholder. This joint effort brought forth a
            customized Schaller STM bridge together with a customized set of
            Schaller’s rear-locking M6 tuners, all presented with a special mix
            of Schaller’s Ruthenium with Gold trim finish. Each hardware piece
            has been carefully designed as a detailed ornament. Playability,
            tone and response is unequalled with this fantastic combination of
            hardware, to bring out the best from each instrument.
          </Paragraph>
          <MediaTitle>Fret Treatment</MediaTitle>
          <Paragraph>
            As icing on the cake, specially inscribed Schaller knobs with our
            discernible Hagstrom “H” is featured on each of the two independent
            volume and push/pull tone knobs, to further justify the singularity
            of each instrument. The arduous setup of each guitar before its
            initial delivery from Sweden, is executed with utmost passion where
            each instrument receives several hours of refinement, for perfect
            playing performance. The instrument frets and fretboards are also
            specially scanned and treated using the latest “Plek” technology,
            where any where any necessary fret adjustments are made within
            1/1000 of a millimeter, resulting in perfect playability throughout
            the fretboard. The newly introduced setup of a specially customized
            “Hagstrom Plek” fret radius, offers frets with a slight compound
            radius for comfortable and even playing from the first to last fret.
            We have also taken steps to ensure that players in the future can
            rely on their local “Plek” service shops, to guarantee that their
            instrument receives the exact same setup as intended when the guitar
            originally left production. This is done by simply indicating the
            serial number on the rear inscribed plate at the back of the
            headstock, where the detailed information for that specific
            instruments can be accessed through Plek’s international database.
          </Paragraph>
          <MediaTitle>Limited Edition</MediaTitle>
          <Paragraph>
            Do not hesitate in obtaining one of these unique wonders, as
            quantities are few and sparse. However, as our Hagstrom intention
            always goes, each of these instruments offered are listed at a very
            meager cost considering the time, materials, and heart to offer an
            incredible value for building some of the world’s finest
            instruments.
          </Paragraph>
        </FinalWrapper>
        <ButtonWrapper>
          <Link to='/Products'>
            <Button>
              <i className='fa-solid fa-angles-right fa-sm'></i> Back to
              Products
            </Button>
          </Link>
        </ButtonWrapper>
        <ScrollToTop
          smooth
          component={<MySVG style={{ width: '16', height: '16' }} />}
          top={300}
          color={'gray'}
          width={'16'}
          height={'16'}
          style={{
            border: '1px solid gray',
            borderRadius: '0',
          }}
        />
      </Wrapper>
    </>
  );
};

export default MoreInfoSuperSwedeLTD;
