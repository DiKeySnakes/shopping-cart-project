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
import Retroscape_HIII_Hero from '../assets/images/Retroscape_HIII_Hero.png';
import Retroscape_HIII_Header from '../assets/images/Retroscape_HIII_Header.jpg';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import Colors_Retroscape_Black_Gloss from '../assets/images/Colors_Retroscape_Black_Gloss.png';
import Colors_RetroScape_3_Tone_Sunburst from '../assets/images/Colors_RetroScape_3_Tone_Sunburst.png';
import Colors_RetroScape_Aged_Sky_Blue from '../assets/images/Colors_RetroScape_Aged_Sky_Blue.png';
import Colors_RetroScape_White from '../assets/images/Colors_RetroScape_White.png';
import HSH309_HIII_BLK_Body_Final from '../assets/images/HSH309_HIII_BLK_Body_Final.jpg';
import HSH361_HIII_ABE_Body_Final from '../assets/images/HSH361_HIII_ABE_Body_Final.jpg';
import HSH361_Detail_HIII_ABE_Persp from '../assets/images/HSH361_Detail_HIII_ABE_Persp.jpg';
import HSH361_Detail_HIII_ABE_Switches from '../assets/images/HSH361_Detail_HIII_ABE_Switches.jpg';
import HSCOR08_Detail_COR_TSB_Vintage_Tremar from '../assets/images/HSCOR08_Detail_COR_TSB_Vintage_Tremar.jpg';
import HSCOR18_Headstock_HII_HIII_IMP_COR_Side_Final from '../assets/images/HSCOR18_Headstock_HII_HIII_IMP_COR_Side_Final.jpg';
import Logo_Retroscape_bg from '../assets/images/Logo_Retroscape_bg.png';
import Hagstrom_Retroscape_HIII_White from '../assets/images/Hagstrom_Retroscape_HIII_White.png';
import Hagstrom_Retroscape_HIII_White_Back from '../assets/images/Hagstrom_Retroscape_HIII_White_Back.png';
import Hagstrom_Retroscape_HIII_3_Tone_Sunburst from '../assets/images/Hagstrom_Retroscape_HIII_3_Tone_Sunburst.png';
import Hagstrom_Retroscape_HIII_3_Tone_Sunburst_Back from '../assets/images/Hagstrom_Retroscape_HIII_3_Tone_Sunburst_Back.png';
import Hagstrom_Retroscape_HIII_Black from '../assets/images/Hagstrom_Retroscape_HIII_Black.png';
import Hagstrom_Retroscape_HIII_Black_Back from '../assets/images/Hagstrom_Retroscape_HIII_Black_Back.png';
import Hagstrom_Retroscape_HIII_Aged_Sky_Blue from '../assets/images/Hagstrom_Retroscape_HIII_Aged_Sky_Blue.png';
import Hagstrom_Retroscape_HIII_Aged_Sky_Blue_Back from '../assets/images/Hagstrom_Retroscape_HIII_Aged_Sky_Blue_Back.png';
import Detail_vintage_tremar_retroscape from '../assets/images/Detail_vintage_tremar_retroscape.jpg';
import Detail_expander from '../assets/images/Detail_expander.jpg';
import Detail_resinator_wood from '../assets/images/Detail_resinator_wood.jpg';
import Detail_bolt_on_neck from '../assets/images/Detail_bolt_on_neck.jpg';
import ReactPlayer from 'react-player';

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
  background-image: url(${Retroscape_HIII_Header});
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
  & a {
    color: #333333;
    float: right;
    margin-top: 3rem;
    text-decoration: none;
    border-bottom: 1px dotted #333333;
  }
  & a:hover {
    border-bottom: 1px solid #333333;
  }
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

const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Video = styled.div`
  width: 84vmin;
  height: 48vmin;
  display: flex;
  flex-direction: row;
`;

const MoreInfoRetroScapeHIII = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroContainer>
            <IntroTitle>
              H-III
              <IntroParagraph>H-Story reborn</IntroParagraph>
            </IntroTitle>
            <IntroImage src={Retroscape_HIII_Hero} alt='' />
          </IntroContainer>
        </IntroBackground>
        <NavContainer>
          <NavWrapper>
            <NavLinks>
              <NavLink to='/'>Home</NavLink>
              <span>/</span>
              <NavLink to='/ElectricGuitars'>Electric Guitars</NavLink>
              <span>/</span>
              <HashLink to='/ElectricGuitars#retroscape'>Retroscape</HashLink>
              <span>/</span>
              <NavLink>H-III</NavLink>
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
            <MediaTitle>Hagstrom H-III</MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              The H-II and H-III were introduced in 1965, so 2015 marks the 50th
              anniversary of these iconic guitars. Known for their quirky
              switches and easy playability, they quickly achieved wide
              popularity. Favorites among punk and grunge bands looking for a
              hard-rocking individualist statement, H-IIs and H-IIIs have been
              showing up in the hands of artists such as Aaron North (The Icarus
              Line, Nine Inch Nails) for years. Many people have been asking for
              these classics to be re-issued, and we at Hagstrom are happy to
              comply with lovingly recreated and updated versions of these great
              classics.
            </Paragraph>
            <MediaTitle>Let me out</MediaTitle>
            <Paragraph>
              A comfortably profiled Canadian Maple neck is bolted to a
              hand-selected American Alder body insuring that the original
              attack and “bite” of the H-II and H-III is maintained. The classic
              6-in-line Hagstrom headstock design, used for the first production
              of H-IIs and H-IIIs, has been slightly updated, and the “Vintage
              Tremar” has been re-engineered for functional improvements without
              sacrificing its original appearance.
            </Paragraph>
            <Paragraph>
              Hagstrom has taken great care in recreating the original pickups,
              and the new ceramic „C-Spin“ pickups do an excellent job of
              matching the originals’ sonic glory. Tone-shaping functionality is
              enhanced by incorporating Hagstrom’s new RC-Circuit into the
              volume control, which allows for volume reduction without the loss
              of that high frequency “shimmer”.
            </Paragraph>
          </LeftContentWrapper>
          <RightContentWrapper>
            <MediaTitle>Colors</MediaTitle>
            <Colors>
              <ColorsWrapper>
                <Image
                  src={Colors_Retroscape_Black_Gloss}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Black</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_RetroScape_3_Tone_Sunburst}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>3-Tone Sunburst</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_RetroScape_Aged_Sky_Blue}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Aged Sky Blue</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_RetroScape_White}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>White</ColorsText>
              </ColorsWrapper>
            </Colors>
          </RightContentWrapper>
        </MainContentWrapper>
        <MainContentWrapper>
          <Details>
            <DetailsWrapper>
              <Image src={HSH309_HIII_BLK_Body_Final} alt='' />
              <DetailsText>H-III Black</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSH361_HIII_ABE_Body_Final} alt='' />
              <DetailsText>H-III Aged Sky Blue</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSCOR08_Detail_COR_TSB_Vintage_Tremar} alt='' />
              <DetailsText>Retroscape Vintage Tremar</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSH361_Detail_HIII_ABE_Persp} alt='' />
              <DetailsText>H-III Pick Ups</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSH361_Detail_HIII_ABE_Switches} alt='' />
              <DetailsText>H-III Switches</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image
                src={HSCOR18_Headstock_HII_HIII_IMP_COR_Side_Final}
                alt=''
              />
              <DetailsText>Restroscape Headstock</DetailsText>
            </DetailsWrapper>
          </Details>
        </MainContentWrapper>
        <Quote>
          <QuoteContentWrapper>
            <Image
              src={Logo_Retroscape_bg}
              alt=''
              style={{ width: '170px', height: 'auto', margin: '2vmin' }}
            />
            <QuoteText>
              We are proud to offer the H-II and H-III once again to Hagstrom
              fans worldwide in 2015, the 50th anniversary of their
              introduction.
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
              { src: Hagstrom_Retroscape_HIII_White },
              { src: Hagstrom_Retroscape_HIII_White_Back },
              { src: Hagstrom_Retroscape_HIII_3_Tone_Sunburst },
              { src: Hagstrom_Retroscape_HIII_3_Tone_Sunburst_Back },
              { src: Hagstrom_Retroscape_HIII_Black },
              { src: Hagstrom_Retroscape_HIII_Black_Back },
              { src: Hagstrom_Retroscape_HIII_Aged_Sky_Blue },
              { src: Hagstrom_Retroscape_HIII_Aged_Sky_Blue_Back },
            ]}
          />
        </LightboxWrapper>
        <SpecsWrapper>
          <LeftSpecsWrapper>
            <MediaTitle>Hagstrom H-III Specs</MediaTitle>
            <MediaTitleSecondary>Body</MediaTitleSecondary>
            <ul>
              <li>Material: American Alder</li>
              <li>Style: Double Cutaway</li>
              <li>Binding: None</li>
            </ul>
            <MediaTitleSecondary>Neck</MediaTitleSecondary>
            <ul>
              <li>Joint: Bolt On</li>
              <li>Material: Canadian Hard Maple</li>
              <li>Binding: None</li>
              <li>Truss Rod: H-Expander™</li>
            </ul>
            <MediaTitleSecondary>Fingerboard/Nut</MediaTitleSecondary>
            <ul>
              <li>Material: Resinator™</li>
              <li>Radius: 15"</li>
              <li>Inlays: 6 mm Pearl Dot</li>
              <li>Frets: 22 Medium Jumbo</li>
              <li>Scale Length: 24.75" (628 mm)</li>
              <li>Nut: GraphTech Black Tusq XL</li>
              <li>Nut Width: 43mm</li>
            </ul>
            <MediaTitleSecondary>Electronics</MediaTitleSecondary>
            <ul>
              <li>Pickups: 3 x Hagstrom Ceramic C-Spin</li>
              <li>Pickup Selection:</li>
              <ul>
                <li>Neck Pickup On/Off</li>
                <li>Middle Pickup On/Off</li>
                <li>Bridge Pickup On/Off</li>
                <li>Master Tone On/Off</li>
                <li>Mute On/Off</li>
                <li>Top (Bass Cut) On/Off</li>
              </ul>
              <li>Controls:</li>
              <ul>
                <li>1 x Volume with R/C Tone Circuit</li>
                <li>Kill Switch on Upper Horn</li>
              </ul>
            </ul>
            <MediaTitleSecondary>Parts</MediaTitleSecondary>
            <ul>
              <li>Bridge: Long Travel T-O-M Roller Bridge</li>
              <li>Tailpiece: Hagstrom Vintage Tremar</li>
              <li>Machine Keys: Hagstrom 15:1 Die Cast</li>
              <li>Strings: D'Addario EXP 110 (10-46)</li>
            </ul>
            <MediaTitleSecondary>Optional</MediaTitleSecondary>
            <ul>
              <li>Hagstrom Bag: E-20</li>
              <li>Hagstrom Case: C-49</li>
            </ul>
          </LeftSpecsWrapper>
          <RightSpecsWrapper>
            <MediaTitle>H-III Standards</MediaTitle>
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
                  src={Detail_bolt_on_neck}
                  alt=''
                  style={{
                    height: 'auto',
                    maxWidth: '100%',
                    verticalAlign: 'top',
                  }}
                />
              </StandardsImageWrapper>
              <StandardsTextWrapper>
                <h4 style={{ marginTop: '0', lineHeight: '1.2em' }}>Bolt-On</h4>
                <p>
                  <ul>
                    <li>Slightly brighter and more vivid tone</li>
                    <li>Ample amounts of attack/"snap"</li>
                    <li>Strong resonance and sustain</li>
                    <li>Great serviceability</li>
                  </ul>
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
            <StandardsWrapper>
              <StandardsImageWrapper>
                <Image
                  src={Detail_vintage_tremar_retroscape}
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
                  Vintage Tremar
                </h4>
                <p>
                  In combination with the trusted long travel Tune-O-Matic
                  roller bridge and the Graphtech Black TUSQ XL nut, the
                  re-engineered Vintage Tremar vibrato unit keeps it original
                  appearance while tremendously improving its functionality.
                  Smooth vibrato action and great tuning stability included.
                </p>
              </StandardsTextWrapper>
            </StandardsWrapper>
          </RightSpecsWrapper>
        </SpecsWrapper>
        <VideoWrapper>
          <MediaTitle>
            <a
              href='https://youtu.be/HusbQgGzw00'
              target='_blank'
              rel='noopener noreferrer'>
              Hagstrom H-III Demo by Justin York
            </a>
          </MediaTitle>
          <Video>
            <ReactPlayer
              url='https://youtu.be/HusbQgGzw00'
              width='100%'
              height='100%'
            />
          </Video>
        </VideoWrapper>
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

export default MoreInfoRetroScapeHIII;
