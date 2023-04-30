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
import Retroscape_Impala_Hero from '../assets/images/Retroscape_Impala_Hero.png';
import Retroscape_Impala_Header from '../assets/images/Retroscape_Impala_Header.jpg';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import Colors_Retroscape_Black_Gloss from '../assets/images/Colors_Retroscape_Black_Gloss.png';
import Colors_Retroscape_Brown_Burst from '../assets/images/Colors_Retroscape_Brown_Burst.png';
import Colors_Retroscape_Tobacco_Sunburst from '../assets/images/Colors_Retroscape_Tobacco_Sunburst.png';
import Colors_Retroscape_Cherry_Sunburst from '../assets/images/Colors_Retroscape_Cherry_Sunburst.png';
import HSIMP18_IMP_TSB_Body_Final from '../assets/images/HSIMP18_IMP_TSB_Body_Final.jpg';
import HSIMP09_IMP_BLK_Body_Final from '../assets/images/HSIMP09_IMP_BLK_Body_Final.jpg';
import HSIMP08_IMP_CSB_Body_Final from '../assets/images/HSIMP08_IMP_CSB_Body_Final.jpg';
import HSCOR08_Detail_COR_TSB_Vintage_Tremar from '../assets/images/HSCOR08_Detail_COR_TSB_Vintage_Tremar.jpg';
import HSCOR18_Detail_COR_TSB_Logo_Final from '../assets/images/HSCOR18_Detail_COR_TSB_Logo_Final.jpg';
import HSCOR18_Headstock_HII_HIII_IMP_COR_Side_Final from '../assets/images/HSCOR18_Headstock_HII_HIII_IMP_COR_Side_Final.jpg';
import Logo_Retroscape_bg from '../assets/images/Logo_Retroscape_bg.png';
import Hagstrom_Retroscape_Impala_Cherry_Sunburst from '../assets/images/Hagstrom_Retroscape_Impala_Cherry_Sunburst.png';
import Hagstrom_Retroscape_Impala_Cherry_Sunburst_Back from '../assets/images/Hagstrom_Retroscape_Impala_Cherry_Sunburst_Back.png';
import Hagstrom_Retroscape_Impala_Black from '../assets/images/Hagstrom_Retroscape_Impala_Black.png';
import Hagstrom_Retroscape_Impala_Black_Back from '../assets/images/Hagstrom_Retroscape_Impala_Black_Back.png';
import Hagstrom_Retroscape_Impala_Tobacco_Sunburst from '../assets/images/Hagstrom_Retroscape_Impala_Tobacco_Sunburst.png';
import Hagstrom_Retroscape_Impala_Tobacco_Sunburst_Back from '../assets/images/Hagstrom_Retroscape_Impala_Tobacco_Sunburst_Back.png';
import Hagstrom_Retroscape_Impala_Brown_Burst from '../assets/images/Hagstrom_Retroscape_Impala_Brown_Burst.png';
import Detail_fantomen_set_neck from '../assets/images/Detail_fantomen_set_neck.jpg';
import Detail_vintage_tremar_retroscape from '../assets/images/Detail_vintage_tremar_retroscape.jpg';
import Detail_expander from '../assets/images/Detail_expander.jpg';
import Detail_resinator_wood from '../assets/images/Detail_resinator_wood.jpg';
import ReactPlayer from 'react-player';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroBackground = styled.div`
  width: 100%;
  height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${Retroscape_Impala_Header});
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 3rem;
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
  margin-top: 5rem;
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
  height: 56vmin;
  display: flex;
  flex-direction: row;
`;

const MoreInfoRetroScapeImpala = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroContainer>
            <IntroTitle>
              Impala
              <IntroParagraph>Perfectly Balanced Uproar</IntroParagraph>
            </IntroTitle>
            <IntroImage src={Retroscape_Impala_Hero} alt='' />
          </IntroContainer>
        </IntroBackground>
        <MainContentWrapper>
          <LeftContentWrapper>
            <MediaTitle>Hagstrom Impala</MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              Hagstrom introduced the Impala and Condor models in 1963, and the
              instruments quickly found their way into the hands of many
              professional and aspiring musicians throughout the world. This was
              a period of great experimentation and innovation in electric
              guitar design. With their futuristic body shapes and unique
              assortment of tone-shaping options, the Impala and Condor stood
              out and became integral in creating great music and inspiring
              amazing artists. They have become highly sought after as
              collectibles, and vintage instruments still find their way onto
              stages worldwide. Now, don’t look any further. Back and here to
              stay: the all new Condor and Impala models.
            </Paragraph>
            <MediaTitle>Fits like a Glove</MediaTitle>
            <Paragraph>
              With their re-introduction in 2015, Hagstrom has taken great care
              to keep the set-neck “soul” of the Impala and Condor intact while
              incorporating important design improvements that will immediately
              appeal to modern players. The neck profile has been slightly
              rounded, weight balance has been optimized, and important
              improvements to the “Vintage Tremar” vibrato unit have been made.
              Finally, an improved switching array maintains the look and
              function of the originals while incorporating modern, dependable,
              and ergonomic slide switches.
            </Paragraph>
            <Paragraph>
              Since the tone of these instruments carved such a powerful space
              in the hearts of players, countless hours have been spent to
              reproduce the essence of the original pickups used in the Impala
              and Condor. The hard work has paid off with Hagstrom’s AlNiCo 5
              “Retro-S” pickups, which expertly recreate the essence of the ‘60s
              sound and, at the same time, keep the door open for more modern
              sonic possibilities.
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
                <ColorsText>Black Gloss</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_Retroscape_Brown_Burst}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Brown Burst</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_Retroscape_Tobacco_Sunburst}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Tobacco Sunburst</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_Retroscape_Cherry_Sunburst}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Cherry Sunburst</ColorsText>
              </ColorsWrapper>
            </Colors>
          </RightContentWrapper>
        </MainContentWrapper>
        <MainContentWrapper>
          <Details>
            <DetailsWrapper>
              <Image src={HSIMP18_IMP_TSB_Body_Final} alt='' />
              <DetailsText>Impala Tobacco Sunburst</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSIMP09_IMP_BLK_Body_Final} alt='' />
              <DetailsText>Impale Black</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSIMP08_IMP_CSB_Body_Final} alt='' />
              <DetailsText>Impala Cherry Sunburst</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSCOR08_Detail_COR_TSB_Vintage_Tremar} alt='' />
              <DetailsText>Retroscape Vintage Tremar</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSCOR18_Detail_COR_TSB_Logo_Final} alt='' />
              <DetailsText>Hagstrom Vintage Logo</DetailsText>
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
              Hagstrom introduced the Impala and Condor models in 1963, and the
              instruments quickly found their way into the hands of many
              professional and aspiring musicians throughout the world.
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
              { src: Hagstrom_Retroscape_Impala_Cherry_Sunburst },
              { src: Hagstrom_Retroscape_Impala_Cherry_Sunburst_Back },
              { src: Hagstrom_Retroscape_Impala_Black },
              { src: Hagstrom_Retroscape_Impala_Black_Back },
              { src: Hagstrom_Retroscape_Impala_Tobacco_Sunburst },
              { src: Hagstrom_Retroscape_Impala_Tobacco_Sunburst_Back },
              { src: Hagstrom_Retroscape_Impala_Brown_Burst },
              { src: Hagstrom_Retroscape_Impala_Tobacco_Sunburst_Back },
            ]}
          />
        </LightboxWrapper>
        <SpecsWrapper>
          <LeftSpecsWrapper>
            <MediaTitle>Impala Specs</MediaTitle>
            <MediaTitleSecondary>Body</MediaTitleSecondary>
            <ul>
              <li>Material: Mahogany</li>
              <li>Style: Asymmetric Double Cutaway</li>
              <li>Binding: None</li>
            </ul>
            <MediaTitleSecondary>Neck</MediaTitleSecondary>
            <ul>
              <li>Joint: Set Neck</li>
              <li>Material: Mahogany</li>
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
              <li>Pickups: 2 x Hagstrom AlNiCo-5 Retro-S</li>
              <li>Pickup Selection:</li>
              <ul>
                <li>Neck Pickup On/Off</li>
                <li>Neck Tone On/Off</li>
                <li>Bridge Pickup On/Off</li>
                <li>Bridge Tone On/Off</li>
                <li>Mute On/Off</li>
                <li>Top (Bass Cut) On/Off</li>
              </ul>
              <li>Controls: 1 x Volume with R/C Tone Circuit</li>
            </ul>
            <MediaTitleSecondary>Parts</MediaTitleSecondary>
            <ul>
              <li>Bridge: Long Travel T-O-M Roller Bridge</li>
              <li>Tailpiece: Hagstrom Vintage Tremar</li>
              <li>Machine Keys: Hagstrom 15:1 Ratio Die Cast</li>
              <li>Strings: D'Addario EXP 110 (10-46)</li>
            </ul>
            <MediaTitleSecondary>Optional</MediaTitleSecondary>
            <ul>
              <li>Hagstrom Bag: E-20</li>
              <li>Hagstrom Case: C-48</li>
            </ul>
          </LeftSpecsWrapper>
          <RightSpecsWrapper>
            <MediaTitle>Impala Standards</MediaTitle>
            <StandardsWrapper>
              <StandardsImageWrapper>
                <Image
                  src={Detail_fantomen_set_neck}
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
                  Set Neck
                </h4>
                <p>
                  Hagstrom uses a variety of different neck joints throughout
                  our range. Our set-neck recipe is the classic and time-tested
                  Mortise and Tenon joint, a design that most efficiently
                  transfers string energy from neck to body, and can often only
                  be found on more expensive custom-built guitars. A team of
                  experienced and dedicated craftsmen hand carves every neck
                  joint, insuring perfect execution of this traditional
                  technique preferred by luthiers for generations.
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
        <VideoWrapper>
          <MediaTitle>
            <a
              href='https://youtu.be/CZFBSyo89ww'
              target='_blank'
              rel='noopener noreferrer'>
              Hagstrom Impala Review by Premier Guitar
            </a>
          </MediaTitle>
          <Video>
            <ReactPlayer
              url='https://youtu.be/CZFBSyo89ww'
              width='100%'
              height='100%'
            />
          </Video>
        </VideoWrapper>
        <VideoWrapper>
          <MediaTitle>
            <a
              href='https://youtu.be/iM-tyijKioY'
              target='_blank'
              rel='noopener noreferrer'>
              Hagstrom Impala Demo by Justin York
            </a>
          </MediaTitle>
          <Video>
            <ReactPlayer
              url='https://youtu.be/iM-tyijKioY'
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

export default MoreInfoRetroScapeImpala;
