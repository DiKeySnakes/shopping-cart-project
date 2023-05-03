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
import { HashLink } from 'react-router-hash-link';
import Ultra_Max_Hero from '../assets/images/Ultra_Max_Hero.png';
import Ultra_Max_Header from '../assets/images/Ultra_Max_Header.jpg';
import HagstromUltraMaxDarkStorm from '../assets/images/HagstromUltraMaxDarkStorm.png';
import HagstromUltraMaxFallSkySatin from '../assets/images/HagstromUltraMaxFallSkySatin.png';
import HagstromUltraMaxMilkyMandarinSatin from '../assets/images/HagstromUltraMaxMilkyMandarinSatin.png';
import HagstromUltraMaxBlackSatin from '../assets/images/HagstromUltraMaxBlackSatin.png';
import HagstromUltraMaxCosmicBlackBurstSatin from '../assets/images/HagstromUltraMaxCosmicBlackBurstSatin.png';
import HagstromUltraMaxGoldenEagleBurst from '../assets/images/HagstromUltraMaxGoldenEagleBurst.png';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import Colors_Dark_Storm from '../assets/images/Colors_Dark_Storm.png';
import Colors_Fall_Sky_Satin from '../assets/images/Colors_Fall_Sky_Satin.png';
import Colors_Milky_Mandarin_Satin from '../assets/images/Colors_Milky_Mandarin_Satin.png';
import Colors_Black_Satin from '../assets/images/Colors_Black_Satin.png';
import Colors_Cosmic_Black_Burst_Satin from '../assets/images/Colors_Cosmic_Black_Burst_Satin.png';
import Colors_Golden_Eagle_Burst_Flamed from '../assets/images/Colors_Golden_Eagle_Burst_Flamed.png';
import Logo_Hagstrom_Lilie from '../assets/images/Logo_Hagstrom_Lilie.png';
import Ultra_Max_Details_1 from '../assets/images/Ultra_Max_Details_1.jpg';
import Ultra_Max_Details_2 from '../assets/images/Ultra_Max_Details_2.jpg';
import Ultra_Max_Details_3 from '../assets/images/Ultra_Max_Details_3.jpg';
import Ultra_Max_Details_4 from '../assets/images/Ultra_Max_Details_4.jpg';
import Ultra_Max_Details_5 from '../assets/images/Ultra_Max_Details_5.jpg';
import Ultra_Max_Details_6 from '../assets/images/Ultra_Max_Details_6.jpg';
import Detail_expander from '../assets/images/Detail_expander.jpg';
import Detail_tuning_peg from '../assets/images/Detail_tuning_peg.jpg';
import Detail_sustain_block_tailpiece from '../assets/images/Detail_sustain_block_tailpiece.jpg';

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
  /* white-space: nowrap; */
`;

const ShareLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  float: right;
  /* white-space: nowrap; */
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
  background-image: url(${Ultra_Max_Header});
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

const MoreInfoUltraMax = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroContainer>
            <IntroTitle>
              Ultra Max
              <IntroParagraph></IntroParagraph>
            </IntroTitle>
            <IntroImage src={Ultra_Max_Hero} alt='' />
          </IntroContainer>
        </IntroBackground>
        <NavContainer>
          <NavWrapper>
            <NavLinks>
              <NavLink to='/'>Home</NavLink>
              <span>/</span>
              <NavLink to='/ElectricGuitars'>Electric Guitars</NavLink>
              <span>/</span>
              <HashLink to='/ElectricGuitars#ultraMax'>Ultra Max</HashLink>
              <span>/</span>
              <NavLink>Ultra Max</NavLink>
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
            <MediaTitle>Hagstrom Ultra Max</MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              The Ultra Max shares the same small body concept of the Ultra
              Swede, yet with a slightly larger proportioned mahogany body
              topped with a thick custom carved flame maple top. The body joins
              to a mahogany set neck utilizing a mortise and tenon neck joint
              with a 25.50” scale length, which naturally features our
              H-Expander™ truss-rod and Resinator™ fingerboard. Its sleek and
              “ultra-comfortable fast neck” is paralleled with our Custom 60
              Alnico-5 pickups with their eloquent Aluminum Brushed covers,
              delivering the cutting voice that this instrument demands.
            </Paragraph>
            <MediaTitle>Mighty Punch and Hot Sizzle</MediaTitle>
            <Paragraph>
              Each of the Ultra Max’s specially wound Custom 60 humbucking
              pickups utilizes Nylon coated wire united with an Alnico 5 magnet
              (unmistakably familiar to the “Custom 58”). However, the Custom 60
              ultimately packs a mighty punch and hot sizzle compared to the
              vintage voiced Custom 58. Each pickup is controlled with its own
              independent Volume pot featuring our standard R/C circuit on each
              potentiometer, to help focus on its cleaner tones with a slight
              turn of the pot. It’s single Master Tone also features a dual coil
              split, using its push/pull tone configuration to allow for players
              to switch from “Full Humbucker Tilt” to “Spanky Single Coil Clean”
              in a heartbeat.
            </Paragraph>
            <MediaTitle>Drop Tunings, Flexibilty and Playability</MediaTitle>
            <Paragraph>
              The Ultra Max combines all of the power, long sustain, clarity and
              attack, as found with the “Ultra Swede”, yet offers players a
              fresh tonal pallet with additional flexibility and comfortable
              playability with its compact body. With its longer 25.50” scale
              length the Ultra Max handles drop tunings with ease, where players
              looking for a slightly slimmed body with a searing tone will have
              found their long-term mate.
            </Paragraph>
            <Paragraph>
              The Ultra Max is available in four beautiful satin finishes: Satin
              Black, Fall Sky, Milky Mandarin, and Satin Cosmic Black Burst.
            </Paragraph>
            <Paragraph>
              The most surprising aspect of these instruments will be their
              shockingly reasonable price. These are Hagstrom through and
              through, and built to be driven long and hard. Experience the new
              Hagstrom Ultra Max at your Hagstrom dealer.
            </Paragraph>
          </LeftContentWrapper>
          <RightContentWrapper>
            <MediaTitle>Colors</MediaTitle>
            <Colors>
              <ColorsWrapper>
                <Image
                  src={Colors_Dark_Storm}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Dark Storm</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_Fall_Sky_Satin}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Fall Sky Satin</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_Milky_Mandarin_Satin}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Milky Mandarin Satin</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_Black_Satin}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Black Satin</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_Cosmic_Black_Burst_Satin}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Cosmic Black Burst Satin</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_Golden_Eagle_Burst_Flamed}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Golden Eagle Burst Flamed</ColorsText>
              </ColorsWrapper>
            </Colors>
          </RightContentWrapper>
        </MainContentWrapper>
        <MainContentWrapper>
          <Details>
            <DetailsWrapper>
              <Image src={Ultra_Max_Details_1} alt='' />
              <DetailsText>Ultra Max Black Satin</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Ultra_Max_Details_2} alt='' />
              <DetailsText>Ultra Max Fall Sky Satin</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Ultra_Max_Details_3} alt='' />
              <DetailsText>Ultra Max Milky Mandarin Satin</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Ultra_Max_Details_4} alt='' />
              <DetailsText>Ultra Max Cosmic Black Burst</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Ultra_Max_Details_5} alt='' />
              <DetailsText>Hagstrom Headstock</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Ultra_Max_Details_6} alt='' />
              <DetailsText>Coil Split Option Push/Pull</DetailsText>
            </DetailsWrapper>
          </Details>
        </MainContentWrapper>
        <Quote>
          <QuoteContentWrapper>
            <Image
              src={Logo_Hagstrom_Lilie}
              alt=''
              style={{ width: '100px', height: 'auto', margin: '2vmin' }}
            />
            <QuoteText>
              The minute you lay your hands on a Hagstrom and strum it for the
              first time, you can instantly feel why Hagstrom has legions of
              devoted fans and why so many pro musicians have made it their
              “number one”.
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
              { src: HagstromUltraMaxDarkStorm },
              { src: HagstromUltraMaxFallSkySatin },
              { src: HagstromUltraMaxMilkyMandarinSatin },
              { src: HagstromUltraMaxBlackSatin },
              { src: HagstromUltraMaxCosmicBlackBurstSatin },
              { src: HagstromUltraMaxGoldenEagleBurst },
            ]}
          />
        </LightboxWrapper>
        <SpecsWrapper>
          <LeftSpecsWrapper>
            <MediaTitle>Ultra Max Specs</MediaTitle>
            <MediaTitleSecondary>Body</MediaTitleSecondary>
            <ul>
              <li>Material: Mahogany</li>
              <li>Top: Custom Carved Flame Maple</li>
              <li>Style: Single Cutaway</li>
              <li>Binding: White Perloid</li>
            </ul>
            <MediaTitleSecondary>Neck</MediaTitleSecondary>
            <ul>
              <li>Joint: Set Neck</li>
              <li>Material: Mahogany</li>
              <li>Profile: UltraSlim „D”</li>
              <li>Truss Rod: H-Expander™</li>
            </ul>
            <MediaTitleSecondary>Fingerboard/Nut</MediaTitleSecondary>
            <ul>
              <li>Material: Resinator™ Fingerboard /</li>
              <li>Radius: 15"</li>
              <li>Inlays: Pearloid Block</li>
              <li>Frets: 22 Medium Jumbo</li>
              <li>Scale Length: 25.50" (648 mm)</li>
              <li>Nut: GraphTech Black Tusq XL</li>
              <li>Nut Width: 43 mm</li>
            </ul>
            <MediaTitleSecondary>Electronics</MediaTitleSecondary>
            <ul>
              <li>Pickups: 2 x Custom 60 AlNiCo-5 Humbucker</li>
              <li>Brushed Aluminum Cover</li>
              <li>Pickup Selector: 3-Way Toggle Switch</li>
              <li>Controls: 1 x Tone Control with Push-Pull Coil Split</li>
            </ul>
            <MediaTitleSecondary>Parts</MediaTitleSecondary>
            <ul>
              <li>Bridge: Long Travel Tune-O-Matic</li>
              <li>Hagstrom Sustain Block Tailpiece</li>
              <li>Tuning Keys: Hagstrom Design 15:1</li>
              <li>Strings: D'Addario (10-46)</li>
            </ul>
            <MediaTitleSecondary>Optional Cases</MediaTitleSecondary>
            <ul>
              <li>Case C53</li>
              <li>Bag E20</li>
            </ul>
          </LeftSpecsWrapper>
          <RightSpecsWrapper>
            <MediaTitle>Ultra Max Standards</MediaTitle>
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
                  src={Detail_tuning_peg}
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
                  Machine Heads
                </h4>
                <p>
                  Hagstrom models use 18:1 or 15:1 gear ratio machine heads
                  based on our own designs to insure accurate tuning. Viking®
                  and HB series basses feature machine heads with a 17:1 gear
                  ratio.
                </p>
              </StandardsTextWrapper>
            </StandardsWrapper>
            <StandardsWrapper>
              <StandardsImageWrapper>
                <Image
                  src={Detail_sustain_block_tailpiece}
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
                  Sustain Block Tailpiece
                </h4>
                <p>
                  Hagstrom’s unique Sustain Block Tailpiece™ was the result of
                  design work starting in 1976 and made its first appearance on
                  Swede and Super Swede guitars produced in 1978. Since then it
                  has been a signature feature on many of our solid body models.
                  Each string terminates in a single, massive brass block
                  coupled directly to the guitar’s body. The blocks are detached
                  from one another to reduce interference between the strings,
                  maximizing each string’s unique contribution.
                </p>
              </StandardsTextWrapper>
            </StandardsWrapper>
          </RightSpecsWrapper>
        </SpecsWrapper>
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

export default MoreInfoUltraMax;
