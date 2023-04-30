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
import Fantomen_Custom_Hero from '../assets/images/Fantomen_Custom_Hero.png';
import Fantomen_Custom_Header from '../assets/images/Fantomen_Custom_Header.jpg';
import Logo_HAGSTROM_Fantomen_white from '../assets/images/Logo_HAGSTROM_Fantomen_white.png';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import Colors_Black_Gloss from '../assets/images/Colors_Black_Gloss.png';
import Colors_White_Gloss from '../assets/images/Colors_White_Gloss.png';
import Logo_Fantomen_Ghoul_Round from '../assets/images/Logo_Fantomen_Ghoul_Round.png';
import Hagstrom_Fantomen_Custom_Black_Gloss from '../assets/images/Hagstrom_Fantomen_Custom_Black_Gloss.png';
import Hagstrom_Fantomen_Custom_White_Gloss from '../assets/images/Hagstrom_Fantomen_Custom_White_Gloss.png';
import Detail_expander from '../assets/images/Detail_expander.jpg';
import Detail_lundgren_pickups from '../assets/images/Detail_lundgren_pickups.jpg';
import Detail_tuning_peg from '../assets/images/Detail_tuning_peg.jpg';
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
  background-image: url(${Fantomen_Custom_Header});
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

const MoreInfoFantomenCustom = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroContainer>
            <IntroTitle>
              <Image
                src={Logo_HAGSTROM_Fantomen_white}
                alt=''
                style={{ width: '35vmin', height: 'auto', margin: '2vmin' }}
              />
              <IntroParagraph>Custom</IntroParagraph>
            </IntroTitle>
            <IntroImage src={Fantomen_Custom_Hero} alt='' />
          </IntroContainer>
        </IntroBackground>
        <MainContentWrapper>
          <LeftContentWrapper>
            <MediaTitle>Hagstrom Fantomen Custom</MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              When the Hagstrom Fantomen first reached the market in 2016 it
              immediately became a sensation, recognized as the guitar built in
              collaboration together with the Swedish band “Ghost”. Many players
              since its release have fallen in love, not only with the
              stunningly good-looking design of the Fantomen but also the ease
              of playability, and amazing variety of tone these instruments
              offer.
            </Paragraph>
            <MediaTitle>Designed together with Ghost</MediaTitle>
            <Paragraph>
              We proudly present to the Hagstrom range the new “Fantomen
              Custom”, another collaboration designed together with the “Ghost
              team” to provide some unique customizations to this eye catching
              model. The guitars three-piece maple neck-thru construction is
              joined by two African Mahogany “wings” to create the body of the
              Fantomen Custom. This classic combination produces an incredibly
              growling tone with a venomous bite.
            </Paragraph>
            <MediaTitle>Steady as a rock and built like a boulder</MediaTitle>
            <Paragraph>
              A supportive and extremely comfortable “volute” was added for tour
              worthy strength and support of the angled reversed Hagstrom
              headstock. Graphtech’s Black Tusq nut and revolutionary Ratio
              rear-locking tuners are all equipped with our recognizable
              Hagstrom tuning knobs for accurate and precise tuning, which all
              grace the face of this 6-stringed beast. Illuminated glow-in-the-
              dark side dot inlays will help players find their way around the
              stainless-steel frets on its ebony dressed bound fretboard with a
              ghoulish green glow, even on the darkest of stages.
            </Paragraph>
            <MediaTitle>Swedish Pickups</MediaTitle>
            <Paragraph>
              The deep and shapely recessed cutaway on the lower horn eases
              access the highest frets during vigorous solo’s, where Schaller’s
              STM bridge with its roller equipped saddles and Schaller stop tail
              piece relays the tone directly in this combined maple and mahogany
              dream. Ghost rely entirely on our Lundgren Design pickups as an
              important aspect of their tone. The equipped Lundgren Design No.2
              (Alnico 2) neck pickup and No.5 (Alnico 5) bridge both
              independently splitable humbuckers, continue to deliver a mayhem
              of monstrous tone.
            </Paragraph>
            <Paragraph>
              The Fantomen Custom is built to deliver a brutal and punishing
              resonance. No relief of density applied, only a crushing
              affliction of tone. These axes are not designed for the weak of
              heart or soul, as the punishing tone and incredible sustain and
              stability of these instruments are purely made to howl night after
              night.
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
                  src={Colors_White_Gloss}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>White Gloss</ColorsText>
              </ColorsWrapper>
            </Colors>
          </RightContentWrapper>
        </MainContentWrapper>
        <Quote>
          <QuoteContentWrapper>
            <Image
              src={Logo_Fantomen_Ghoul_Round}
              alt=''
              style={{ width: '170px', height: 'auto', margin: '2vmin' }}
            />
            <QuoteText>
              "The first electric guitar I learned to play on was my father’s
              Hagström Swede that he had in his house for as long as I can
              remember. I had been looking at it for years, but my hands where
              too small to grip around the fretboard and my father said I needed
              to grow my hands a bit before learning how to play. When I was
              about 7 years old, he taught me "TUTTI FRUTTI" and "BREV FRÅN
              KOLONIEN" and then I would have to figure out the rest. And I
              did."{<br />}
              <span style={{ marginTop: '3rem', float: 'right' }}>
                — A Ghoul Writer (lead guitarist and songwriter in Ghost)
              </span>
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
              { src: Hagstrom_Fantomen_Custom_Black_Gloss },
              { src: Hagstrom_Fantomen_Custom_White_Gloss },
            ]}
          />
        </LightboxWrapper>
        <SpecsWrapper>
          <LeftSpecsWrapper>
            <MediaTitle>Fantomen Custom Specs</MediaTitle>
            <MediaTitleSecondary>Body</MediaTitleSecondary>
            <ul>
              <li>Material: Mahogany, Wing Construction</li>
              <li>Binding: Multiply</li>
              <li>Style: Single Cutaway - Asymmetrical Design</li>
            </ul>
            <MediaTitleSecondary>Neck</MediaTitleSecondary>
            <ul>
              <li>Neck-Thru body -</li>
              <ul>
                <li>3 piece Hard Canadian Maple - Slim “D” Profile</li>
                <li>Reinforced headstock with volute</li>
              </ul>
              <li>H-Expander™ Truss Rod</li>
              <li>Multi-Ply Binding</li>
            </ul>
            <MediaTitleSecondary>Fingerboard/Nut</MediaTitleSecondary>
            <ul>
              <li>Ebony Fingerboard / 25.5” (648mm) Scale Length</li>
              <li>
                Pearloid Block Inlays with Glow-In-The-Dark Side Dot Inlays
              </li>
              <li>22 Stainless Steel Medium Jumbo Frets / v15” Radius</li>
              <li>GraphTech Black Tusq XL Nut / 43mm</li>
            </ul>
            <MediaTitleSecondary>Electronics</MediaTitleSecondary>
            <ul>
              <li>Neck Position: Lundgren Design AlNiCo-2 No. 2 Humbucker</li>
              <li>Bridge Position:Lundgren Design AlNiCo-5 No. 5 Humbucker</li>
              <li>Pickup Selector: 3-Way Toggle Switch</li>
              <li>2 x Volume Control with R/C Circuit</li>
              <li>2 x Tone Control with Push-Pull Coil Split</li>
            </ul>
            <MediaTitleSecondary>Parts</MediaTitleSecondary>
            <ul>
              <li>Schaller</li>
              <ul>
                <li>STM Tune-O-Matic Bridge</li>
                <li>Stop Tail Piece</li>
                <li>Strap lock system</li>
              </ul>
              <li>GraphTech Ratio Tuners</li>
              <li>D’Addario (10-46) Strings</li>
              <li>Fantomen Custom in Black – Chrome Hardware</li>
              <li>Fantomen Custom in White – Ruthenium Hardware</li>
            </ul>
            <MediaTitleSecondary>Case, optional</MediaTitleSecondary>
            <ul>
              <li>Hagstrom Case C-47</li>
              <li>Hagstrom Bag E-19</li>
            </ul>
          </LeftSpecsWrapper>
          <RightSpecsWrapper>
            <MediaTitle>Fantomen Custom Standards</MediaTitle>
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
                  Hagstrom Machine Heads
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
              href='https://youtu.be/C_ijc7A5oAc'
              target='_blank'
              rel='noopener noreferrer'>
              Ghost - Rats (Official Music Video)
            </a>
          </MediaTitle>
          <Video>
            <ReactPlayer
              url='https://youtu.be/C_ijc7A5oAc'
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

export default MoreInfoFantomenCustom;
