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
import Viking67_Hero from '../assets/images/Viking67_Hero.png';
import Viking67_Header from '../assets/images/Viking67_Header.png';
import Viking67_Black_Gloss from '../assets/images/Viking67_Black_Gloss.png';
import Viking67_Black_Gloss_Back from '../assets/images/Viking67_Black_Gloss_Back.png';
import Viking67_Wild_Cherry_Transparent from '../assets/images/Viking67_Wild_Cherry_Transparent.png';
import Viking67_Wild_Cherry_Transparent_Back from '../assets/images/Viking67_Wild_Cherry_Transparent_Back.png';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import Colors_Black_Gloss from '../assets/images/Colors_Black_Gloss.png';
import Colors_Wild_Cherry_Transparent from '../assets/images/Colors_Wild_Cherry_Transparent.png';
import Logo_Hagstrom_Lilie from '../assets/images/Logo_Hagstrom_Lilie.png';
import Detail_resinator_wood from '../assets/images/Detail_resinator_wood.jpg';
import Detail_expander from '../assets/images/Detail_expander.jpg';
import Detail_bolt_on_neck from '../assets/images/Detail_bolt_on_neck.jpg';

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
  background-image: url(${Viking67_Header});
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

const MoreInfoViking67 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroContainer>
            <IntroTitle>
              '67 Viking® II
              <IntroParagraph>Conquer The World</IntroParagraph>
            </IntroTitle>
            <IntroImage src={Viking67_Hero} alt='' />
          </IntroContainer>
        </IntroBackground>
        <NavContainer>
          <NavWrapper>
            <NavLinks>
              <NavLink to='/'>Home</NavLink>
              <span>/</span>
              <NavLink to='/ElectricGuitars'>Electric Guitars</NavLink>
              <span>/</span>
              <HashLink to='/ElectricGuitars#viking'>Viking®</HashLink>
              <span>/</span>
              <NavLink>'67 Viking® II</NavLink>
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
            <MediaTitle>Hagstrom '67 Viking® II</MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              The Hagstrom Viking® saw the first light of day back in 1965, and
              became quickly one of the most popular Hagstrom models which
              continued in production until 1979. Since Hagstrom’s international
              return to the market in 2004, the Viking® has made new conquests
              around the world and has become one of our most popular models
              with its amazing tone, ease of playability and ravishingly
              appealing looks.
            </Paragraph>
            <MediaTitle>Rock 'n' Roll History</MediaTitle>
            <Paragraph>
              Now Hagstrom turns back time and rediscovers the 1967 Viking® II
              as it was originally produced during this distinct era of rock 'n'
              roll history. The Swedish pathfinder has influenced the music
              world (and pop culture itself) by becoming so broadly recognized
              within international television, media and in the hands of some of
              music’s biggest legends and forefathers of rock 'n' roll.
            </Paragraph>
            <MediaTitle>Modern Day Technology</MediaTitle>
            <Paragraph>
              The new Hagstrom ’67 Viking® II equipped with its hollow-body slim
              lined flame maple ply body, is adjoined to a 6-in-line, bolt-on
              Canadian maple neck. The new specially developed dual coiled
              Hagstrom Mini-Humbucking pickups will bring players back to the
              golden age of rock/pop music, with the introduction of the newly
              developed Hagstrom “H-52” Mini Humbucker pickups. The same classic
              vibe from the 60’s originals, fused together with modern day
              technology for a classic and punchy humbucker tone or in splitable
              single coil mode, providing players with complete tonal
              flexibility.
            </Paragraph>
            <Paragraph>
              Gold hardware and details tastefully adorn the instrument where
              players can’t help falling in love all over again, with this
              legendary instrument as we bring this ‘67 classic back from days
              of yesteryear.
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
            </Colors>
          </RightContentWrapper>
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
              { src: Viking67_Black_Gloss },
              { src: Viking67_Black_Gloss_Back },
              { src: Viking67_Wild_Cherry_Transparent },
              { src: Viking67_Wild_Cherry_Transparent_Back },
            ]}
          />
        </LightboxWrapper>
        <SpecsWrapper>
          <LeftSpecsWrapper>
            <MediaTitle>'67 Viking® II Specs</MediaTitle>
            <MediaTitleSecondary>Body</MediaTitleSecondary>
            <ul>
              <li>Hollow Double Cutaway</li>
              <li>5-Ply Canadian Flame Maple Ply Construction</li>
              <li>Multi-Ply Binding</li>
              <li>Bound f-Holes</li>
            </ul>
            <MediaTitleSecondary>Neck</MediaTitleSecondary>
            <ul>
              <li>Bolt-On Neck - Canadian Hard Maple</li>
              <li>H-Expander™ Truss Rod</li>
              <li>Multi-Ply Binding</li>
            </ul>
            <MediaTitleSecondary>Fingerboard/Nut</MediaTitleSecondary>
            <ul>
              <li>Resinator™ Fingerboard</li>
              <li>24.56” (624 mm) Scale Length</li>
              <li>Pearloid Block Inlays</li>
              <li>22 Medium Jumbo Frets / 15” Radius</li>
              <li>GraphTech Tusq/40mm</li>
            </ul>
            <MediaTitleSecondary>Electronics</MediaTitleSecondary>
            <ul>
              <li>2 x Hagstrom H-52 AlNiCo 5</li>
              <li>Gold Mini Humbucker Pickups w/ coil split</li>
              <li>3-Way Toggle Switch Pickup Selector - Gold Finish</li>
              <li>2 x Volume Control / 2 x Tone Control (Push/Pull)</li>
            </ul>
            <MediaTitleSecondary>Parts</MediaTitleSecondary>
            <ul>
              <li>
                Long Throw Tune-O-Matic Bridge on wood block with Hagstrom
                Trapeeze Tail Piece - Gold Finish
              </li>
              <li>Hagstrom 18:1 Chrome Die Cast Tuners - Gold Finish</li>
              <li>D’Addario (10-46) Strings</li>
            </ul>
            <MediaTitleSecondary>Optional Cases</MediaTitleSecondary>
            <ul>
              <li>Case C55</li>
              <li>Bag E25</li>
            </ul>
          </LeftSpecsWrapper>
          <RightSpecsWrapper>
            <MediaTitle>'67 Viking® II Standards</MediaTitle>
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
                  <ul style={{ paddingLeft: '16px' }}>
                    <li>Slightly brighter and more vivid tone</li>
                    <li>Ample amounts of attack/"snap"</li>
                    <li>Strong resonance and sustain</li>
                    <li>Great serviceability</li>
                  </ul>
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

export default MoreInfoViking67;
