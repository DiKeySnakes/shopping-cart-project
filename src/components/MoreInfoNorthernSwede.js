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
import Northern_Swede_Hero from '../assets/images/Northern_Swede_Hero.png';
import Super_Swede_LTD_Header from '../assets/images/Super_Swede_LTD_Header.jpg';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import Logo_Northen_Series from '../assets/images/Logo_Northen_Series.png';
import Colors_Black_Gloss from '../assets/images/Colors_Black_Gloss.png';
import Colors_Wild_Cherry_Transparent from '../assets/images/Colors_Wild_Cherry_Transparent.png';
import Colors_White_Gloss from '../assets/images/Colors_White_Gloss.png';
import Northen_Swede_Body_Detail_01 from '../assets/images/Northen_Swede_Body_Detail_01.jpg';
import Northen_Swede_Detail_02 from '../assets/images/Northen_Swede_Detail_02.jpg';
import Northern_Swede_Black_Gloss from '../assets/images/Northern_Swede_Black_Gloss.png';
import Northern_Swede_Wild_Cherry_Transparent from '../assets/images/Northern_Swede_Wild_Cherry_Transparent.png';
import Northern_Swede_White_Gloss from '../assets/images/Northern_Swede_White_Gloss.png';
import Detail_expander from '../assets/images/Detail_expander.jpg';
import Detail_resinator_wood from '../assets/images/Detail_resinator_wood.jpg';
import Detail_lundgren_pickups from '../assets/images/Detail_lundgren_pickups.jpg';
import Detail_sustain_block_tailpiece from '../assets/images/Detail_sustain_block_tailpiece.jpg';
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
  margin-top: 3rem;
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

const MoreInfoNorthernSwede = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroContainer>
            <IntroTitle>
              Northen Swede
              <IntroParagraph>Epitome of a Swedish Classic</IntroParagraph>
            </IntroTitle>
            <IntroImage src={Northern_Swede_Hero} alt='' />
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
              <HashLink to='/InstrumentArchive#northernSwede'>
                Northen Series
              </HashLink>
              <span>/</span>
              <NavLink>Northen Swede</NavLink>
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
            <MediaTitle>Hagstrom Northen Swede</MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              We proudly present to you, the We proudly present to you, the
              Swede and{' '}
              <NavLink to='/MoreInfoNorthernSuperSwede'>Super Swede</NavLink>{' '}
              Models of the new Northen Series. These instruments combine all
              our experience, our independent developments and traditional
              Hagstrom craftsmanship, with the latest manufacturing technologies
              and reputation of one of the finest European guitar manufacturers.
              Already at the first touch, the unmistakable, authentic character
              of these instruments is difficult to resist playing.
            </Paragraph>
            <MediaTitle>Tradition and modern techniques unite.</MediaTitle>
            <Paragraph>
              The new Hagstrom, Northen Series are primarily based on our rich
              Swedish guitar expertise and our original designs dating back to
              the beginnings of Hagstrom’s guitar luthery in 1958. Of course, by
              fusing the latest achievements and the most sophisticated
              technological methods found in modern guitar manufacturing today,
              our goal is to provide the highest quality instrument, of
              uncompromised quality of workmanship to ultimately provide an
              individualized playing style and culture, each complimenting one
              another. The excellent price-performance ratio makes this series,
              (with the complete production in Europe) a true winner. When
              opting for a Northen-Series guitar, one does not only receive a
              top class instrument, but also a piece of our Swedish heritage and
              pride. Our Swedish design team has placed all of their passion
              into the design of these models, where their ultimate goal was to
              introduce you to your new loyal companion on your musical journey
              throughout life.
            </Paragraph>
            <MediaTitle>100% Hagstrom Tone</MediaTitle>
            <Paragraph>
              Whether you choose the legendary, classic rock approved Black
              Gloss, the divine Tobacco Sunburst, or the dazzling, highly
              figured flame maple top finishes in Vintage Sunburst or Cosmic
              Black Burst: The Northen Super Swede’s looks are remarkably
              complimented by its tonal prowess. Powered by a No. 2 set of Johan
              Lundgren designed double coil greatness, the Northen Super Swede
              dishes out sounds as diverse as classic, well articulated
              humbucking heaven, or thanks to the individual coil tap for each
              pickup and its longer scale of 25,5”, a distinct tone that can
              only be called “twangers delight”, reminiscent of the most iconic
              single coil equipped axes.
            </Paragraph>
            <MediaTitle>Satisfying Weight</MediaTitle>
            <Paragraph>
              Bestowing an African Mahogany body, or select Maple Top paired
              with an African Mahogany body, ensures the unmistakable, original
              “Classic” Hagstrom Tone. Each piece of timber is carefully hand
              selected to bring forth the classical design and comfortable
              handling providing the most pleasant weight possible, even hour
              after hour of performing on stage.
            </Paragraph>
          </LeftContentWrapper>
          <RightContentWrapper>
            <MediaTitle>Colors</MediaTitle>
            <Colors>
              <ColorsWrapper>
                <Image
                  src={Colors_Black_Gloss}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Black Gloss</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_Wild_Cherry_Transparent}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Wild Cherry Transparent</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_White_Gloss}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>White Gloss</ColorsText>
              </ColorsWrapper>
            </Colors>
          </RightContentWrapper>
        </MainContentWrapper>
        <MainContentWrapper>
          <Details>
            <DetailsWrapper>
              <Image src={Northen_Swede_Body_Detail_01} alt='' />
              <DetailsText>Swede Wild Cherry Transparent</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Northen_Swede_Detail_02} alt='' />
              <DetailsText>Swede White Gloss</DetailsText>
            </DetailsWrapper>
          </Details>
        </MainContentWrapper>
        <Quote>
          <QuoteContentWrapper>
            <Image
              src={Logo_Northen_Series}
              alt=''
              style={{ width: '170px', height: 'auto', margin: '2vmin' }}
            />
            <QuoteText>
              "We proudly present to you, the Swede and Super Swede Models of
              the Northen Series. These instruments combine all our experience,
              our independent developments and traditional Hagstrom
              craftsmanship, with the latest manufacturing technologies and
              reputation of one of the finest European guitar manufacturers."
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
              { src: Northern_Swede_Black_Gloss },
              { src: Northern_Swede_Wild_Cherry_Transparent },
              { src: Northern_Swede_White_Gloss },
            ]}
          />
        </LightboxWrapper>
        <SpecsWrapper>
          <LeftSpecsWrapper>
            <MediaTitle>Northen Swede Specs</MediaTitle>
            <MediaTitleSecondary>Body</MediaTitleSecondary>
            <ul>
              <li>Material: A-Grade African Mahogany</li>
              <li>Top: A-Grade African Mahogany</li>
              <li>Style: Single Cutaway</li>
            </ul>
            <MediaTitleSecondary>Neck</MediaTitleSecondary>
            <ul>
              <li>Joint: Set Neck</li>
              <li>Material: African Mahogany</li>
              <li>Truss Rod: H-Expander™</li>
            </ul>
            <MediaTitleSecondary>Fingerboard/Nut</MediaTitleSecondary>
            <ul>
              <li>Material: Resinator™</li>
              <li>Radius: 12"</li>
              <li>Inlays: Super Swede Block</li>
              <li>Frets: 22 Medium Jumbo</li>
              <li>Scale Length: 24.75" (628 mm)</li>
              <li>Nut: GraphTech Black Tusq XL</li>
              <li>Nut Width: 43 mm</li>
            </ul>
            <MediaTitleSecondary>Electronics</MediaTitleSecondary>
            <ul>
              <li>
                Pickups: Custom Humbucker Set No. 2, Designed by Lundgren Guitar
                Pickups
              </li>
              <li>Pickup Selector: 3-Way Toggle Switch</li>
              <li>
                Controls: Volume / Tone, 3-Way Tone Filter Toggle Switch (Hi-Mid
                Cut/Center Bypass/Hi Cut)
              </li>
            </ul>
            <MediaTitleSecondary>Parts</MediaTitleSecondary>
            <ul>
              <li>
                Bridge: Long Travel T-O-M bridge with HAGSTROM Stop Tail Piece,
                6 Individual brass string blocks
              </li>
              <li>Tuning Keys: Hagstrom Design 18:1 Tuning Pegs</li>
              <li>Strings: D'Addario EXP 110 (10-46)</li>
            </ul>
            <MediaTitleSecondary>Case</MediaTitleSecondary>
            <ul>
              <li>Hagstrom Hard Case C51 Included</li>
            </ul>
          </LeftSpecsWrapper>
          <RightSpecsWrapper>
            <MediaTitle>Northen Swede Standards</MediaTitle>
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
        <VideoWrapper>
          <MediaTitle>
            <a
              href='https://youtu.be/IkMYQa5VpU4'
              target='_blank'
              rel='noopener noreferrer'>
              Hagstrom Northen Swede NAMM 2012
            </a>
          </MediaTitle>
          <Video>
            <ReactPlayer
              url='https://youtu.be/IkMYQa5VpU4'
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

export default MoreInfoNorthernSwede;
