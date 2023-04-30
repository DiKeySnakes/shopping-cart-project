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
import Fantomen_Hero from '../assets/images/Fantomen_Hero.png';
import Fantomen_Custom_Header from '../assets/images/Fantomen_Custom_Header.jpg';
import Logo_HAGSTROM_Fantomen_white from '../assets/images/Logo_HAGSTROM_Fantomen_white.png';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import Colors_Black_Gloss from '../assets/images/Colors_Black_Gloss.png';
import Colors_White_Gloss from '../assets/images/Colors_White_Gloss.png';
import Colors_Tobacco_Sunburst from '../assets/images/Colors_Tobacco_Sunburst.png';
import HSFANTOMEN02_Knob_Detail_05 from '../assets/images/HSFANTOMEN02_Knob_Detail_05.jpg';
import HSFANTOMEN02_Details_Side from '../assets/images/HSFANTOMEN02_Details_Side.jpg';
import HSFANTOMEN09_Pickup_Detail_07 from '../assets/images/HSFANTOMEN09_Pickup_Detail_07.jpg';
import HSFANTOMEN02_Detail_04 from '../assets/images/HSFANTOMEN02_Detail_04.jpg';
import HSFANTOMEN09_Detail_06 from '../assets/images/HSFANTOMEN09_Detail_06.jpg';
import HSFANTOMEN18_Detail_08 from '../assets/images/HSFANTOMEN18_Detail_08.jpg';
import Logo_Fantomen_Ghoul_Round from '../assets/images/Logo_Fantomen_Ghoul_Round.png';
import Fantomen_White_Gloss from '../assets/images/Fantomen_White_Gloss.png';
import Fantomen_White_Gloss_Back from '../assets/images/Fantomen_White_Gloss_Back.png';
import Fantomen_Black_Gloss from '../assets/images/Fantomen_Black_Gloss.png';
import Fantomen_Black_Gloss_Back from '../assets/images/Fantomen_Black_Gloss_Back.png';
import Fantomen_Tobacco_Sunburst from '../assets/images/Fantomen_Tobacco_Sunburst.png';
import Fantomen_Tobacco_Sunburst_Back from '../assets/images/Fantomen_Tobacco_Sunburst_Back.png';
import Detail_expander from '../assets/images/Detail_expander.jpg';
import Detail_lundgren_pickups from '../assets/images/Detail_lundgren_pickups.jpg';
import Detail_tuning_peg from '../assets/images/Detail_tuning_peg.jpg';
import Detail_resinator_wood from '../assets/images/Detail_resinator_wood.jpg';
import Detail_fantomen_set_neck from '../assets/images/Detail_fantomen_set_neck.jpg';
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

const MoreInfoFantomen = () => {
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
              <IntroParagraph></IntroParagraph>
            </IntroTitle>
            <IntroImage src={Fantomen_Hero} alt='' />
          </IntroContainer>
        </IntroBackground>
        <MainContentWrapper>
          <LeftContentWrapper>
            <MediaTitle>Hagstrom Fantomen</MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              A collaboration between the design team at Hagstrom and the
              Swedish band Ghost, Fantomen (Swedish for “The Phantom”)
              transports Hagstrom’s legendary playability and technical
              excellence into a new, edgier realm. We started with an elegantly
              asymmetrical solid-mahogany body to which we have joined a
              mahogany neck using our classic mortise-and-tenon neck joint
              system. Of course, since it’s a Hagstrom, the Fantomen uses our
              H-Expander® truss rod and Resinator® fingerboard, providing the
              ultimate in playing surface stability and optimal tonal
              enhancement. Together these components create an incredibly
              stable, resonant and responsive sonic foundation.
            </Paragraph>
            <MediaTitle>Sharp attack and more sustain</MediaTitle>
            <Paragraph>
              With a relatively thin 1¼” (3.5cm) body, the Fantomen is
              beautifully balanced and surprisingly lightweight. A 25.5” (648mm)
              scale provides a slightly sharper attack and more sustain than
              classic 24.75” scale guitars. A neck joint design that provides
              total, unrestricted access to all 22 frets will meet the needs of
              even the most virtuosic player.
            </Paragraph>
            <MediaTitle>Immense expressive range</MediaTitle>
            <Paragraph>
              Our goal was to equip the Fantomen with electronics that would
              allow for a varied tonal palette ranging from classic, vintage
              colors to screaming metallic brilliance. We worked with Swedish
              pickup guru Johan Lundgren, designer of pickups used by artists
              such as Meshuggah’s Martin Hagström (no relation!). Lundgren
              recommended two different humbucker designs: No. 2 in the neck
              position and No. 5 in the bridge position. The result covers an
              immense expressive range; from smooth, warm tones to the kind of
              attack and intense dynamic output that would satisfy the demands
              of even the most extreme musical styles. Each pickup can be split
              to single-coil mode by means of push/pull switches incorporated
              into the tone controls for even more sonic flexibility. This
              guitar speaks with many distinct voices.
            </Paragraph>
            <MediaTitle>On stage with Ghost</MediaTitle>
            <Paragraph>
              You can find the Fantomen on stage with Ghost. You don’t have to
              be a Nameless Ghoul to play it, and you can be sure the guitar
              available at your Hagstrom dealer is identical in every way to
              those on stage with Ghost!
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
              <ColorsWrapper>
                <Image
                  src={Colors_Tobacco_Sunburst}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Tobacco Sunburst</ColorsText>
              </ColorsWrapper>
            </Colors>
            <MediaTitle>Colors Lefthand</MediaTitle>
            <Colors>
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
              <Image src={HSFANTOMEN02_Knob_Detail_05} alt='' />
              <DetailsText>Push/Pull for splitting Humbuckers</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSFANTOMEN02_Details_Side} alt='' />
              <DetailsText>Balanced and surprisingly lightweight</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSFANTOMEN09_Pickup_Detail_07} alt='' />
              <DetailsText>Fantomen Lundgren Pickups</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSFANTOMEN02_Detail_04} alt='' />
              <DetailsText>Fantomen White</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSFANTOMEN09_Detail_06} alt='' />
              <DetailsText>Fantomen Black</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSFANTOMEN18_Detail_08} alt='' />
              <DetailsText>Fantomen Tobacco Sunburst</DetailsText>
            </DetailsWrapper>
          </Details>
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
              { src: Fantomen_White_Gloss },
              { src: Fantomen_White_Gloss_Back },
              { src: Fantomen_Black_Gloss },
              { src: Fantomen_Black_Gloss_Back },
              { src: Fantomen_Tobacco_Sunburst },
              { src: Fantomen_Tobacco_Sunburst_Back },
            ]}
          />
        </LightboxWrapper>
        <SpecsWrapper>
          <LeftSpecsWrapper>
            <MediaTitle>Fantomen Specs</MediaTitle>
            <MediaTitleSecondary>Body</MediaTitleSecondary>
            <ul>
              <li>Material: Mahogany</li>
              <li>Binding: Multiply</li>
              <li>Style: Single Cutaway - Asymmetrical Design</li>
            </ul>
            <MediaTitleSecondary>Neck</MediaTitleSecondary>
            <ul>
              <li>Material: Mahogany</li>
              <li>Joint: Set Neck</li>
              <li>Trussrod: H-Expander™</li>
            </ul>
            <MediaTitleSecondary>Fingerboard/Nut</MediaTitleSecondary>
            <ul>
              <li>Material: Resinator™</li>
              <li>Position Marks: Hagstrom Pearl Block Inlay</li>
              <li>Fretboard Radius: 15“</li>
              <li>Frets: 22 Medium Jumbo</li>
              <li>Scale Length: 25.5“ / 648 mm</li>
              <li>Nut: Graph Tech™ Black Tusq XL</li>
              <li>Nut Width: 43 mm</li>
            </ul>
            <MediaTitleSecondary>Electronics</MediaTitleSecondary>
            <ul>
              <li>Pickup Neck: Lundgren Design AlNiCo-2 No. 2 Humbucker</li>
              <li>Pickup Bridge: Lundgren Design AlNiCo-5 No. 5 Humbucker</li>
              <li>Pickup: Selector 3-Way Toggle Switch</li>
              <li>
                Controls: 2 x Volume Control with R/C Circuit, 2 x Tone Control
                with Push-Pull Coil Split
              </li>
            </ul>
            <MediaTitleSecondary>Parts</MediaTitleSecondary>
            <ul>
              <li>Tuning Keys: Hagstrom 18:1 Die Cast</li>
              <li>Stoptail Bridge: Long Travel Tune-O-Matic Bridge</li>
              <li>Strings: D’Addario (10-46)</li>
            </ul>
            <MediaTitleSecondary>Case, optional</MediaTitleSecondary>
            <ul>
              <li>Hagstrom Case C-47</li>
              <li>Hagstrom Bag E-19</li>
            </ul>
          </LeftSpecsWrapper>
          <RightSpecsWrapper>
            <MediaTitle>Fantomen Standards</MediaTitle>
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
                  technique preferred by luthiers for generations
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
        <VideoWrapper>
          <MediaTitle>
            <a
              href='https://youtu.be/EXM2SZr-W_Y'
              target='_blank'
              rel='noopener noreferrer'>
              Hagstrom Fantomen - Demo by Ryan Bruce
            </a>
          </MediaTitle>
          <Video>
            <ReactPlayer
              url='https://youtu.be/EXM2SZr-W_Y'
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

export default MoreInfoFantomen;
