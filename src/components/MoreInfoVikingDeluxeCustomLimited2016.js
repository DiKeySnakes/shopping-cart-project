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
import Super_Swede_Hero from '../assets/images/Super_Swede_Hero_350x453Px.png';
import Super_Swede_Header from '../assets/images/Super_Swede_Header.jpg';
import HagstromSuperSwedeCrimsonFlame from '../assets/images/HagstromSuperSwedeCrimsonFlame.png';
import HagstromSuperSwedeCrimsonFlameBack from '../assets/images/HagstromSuperSwedeCrimsonFlameBack.png';
import HagstromSuperSwedeDarkStorm from '../assets/images/HagstromSuperSwedeDarkStorm.png';
import HagstromSuperSwedeDarkStormBack from '../assets/images/HagstromSuperSwedeDarkStormBack.png';
import HagstromSuperSwedeXtraSpecialOldPale from '../assets/images/HagstromSuperSwedeXtraSpecialOldPale.png';
import HagstromSuperSwedeFallSkyGloss from '../assets/images/HagstromSuperSwedeFallSkyGloss.png';
import HagstromSuperSwedeFallSkyGlossBack from '../assets/images/HagstromSuperSwedeFallSkyGlossBack.png';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import Colors_HAGSTROM_Crimson_Flame from '../assets/images/Colors_HAGSTROM_Crimson_Flame.png';
import Colors_HAGSTROM_Dark_Storm from '../assets/images/Colors_HAGSTROM_Dark_Storm.png';
import Colors_HAGSTROM_X_tra_Special_Old_Pale from '../assets/images/Colors_HAGSTROM_X_tra_Special_Old_Pale.png';
import Colors_HAGSTROM_Fall_Sky_Gloss from '../assets/images/Colors_HAGSTROM_Fall_Sky_Gloss.png';
import Logo_Hagstrom_Lilie from '../assets/images/Logo_Hagstrom_Lilie.png';
import HSSUSWEMK3_Details_1 from '../assets/images/HSSUSWEMK3_Details_345x276Px_01.jpg';
import HSSUSWEMK3_Details_2 from '../assets/images/HSSUSWEMK3_Details_345x276Px_02.jpg';
import HSSUSWEMK3_Details_3 from '../assets/images/HSSUSWEMK3_Details_345x276Px_03.jpg';
import HSSUSWEMK3_Details_4 from '../assets/images/HSSUSWEMK3_Details_345x276Px_04.jpg';
import HSSUSWEMK3_Details_5 from '../assets/images/HSSUSWEMK3_Details_345x276Px_05.jpg';
import HSSUSWEMK3_Details_6 from '../assets/images/HSSUSWEMK3_Details_345x276Px_06.jpg';
import HSSUSWEMK3_Details_7 from '../assets/images/HSSUSWEMK3_Details_345x276Px_07.jpg';
import HSSUSWEMK3_Details_8 from '../assets/images/HSSUSWEMK3_Details_345x276Px_08.jpg';
import HSSUSWEMK3_Details_9 from '../assets/images/HSSUSWEMK3_Details_345x276Px_09.jpg';
import Detail_expander from '../assets/images/Detail_expander.jpg';
import Detail_resinator_wood from '../assets/images/Detail_resinator_wood.jpg';
import Detail_locking_mechanic from '../assets/images/Detail_locking_mechanic.jpg';
import Detail_sustain_block_tailpiece from '../assets/images/Detail_sustain_block_tailpiece.jpg';
import Detail_nape_tenon from '../assets/images/Detail_nape_tenon.jpg';
import Detail_stainless_steel_fret from '../assets/images/Detail_stainless_steel_fret.jpg';
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
  background-image: url(${Super_Swede_Header});
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
  margin-top: 3rem;
`;

const Video = styled.div`
  width: 84vmin;
  height: 48vmin;
  display: flex;
  flex-direction: row;
`;

const MoreInfoVikingDeluxeCustomLimited2016 = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroContainer>
            <IntroTitle>
              Super Swede
              <IntroParagraph>Reimagined. Redefined. Revived.</IntroParagraph>
            </IntroTitle>
            <IntroImage src={Super_Swede_Hero} alt='' />
          </IntroContainer>
        </IntroBackground>
        <NavContainer>
          <NavWrapper>
            <NavLinks>
              <NavLink to='/'>Home</NavLink>
              <span>/</span>
              <NavLink to='/ElectricGuitars'>Electric Guitars</NavLink>
              <span>/</span>
              <HashLink to='/ElectricGuitars#superSwede'>Super Swede</HashLink>
              <span>/</span>
              <NavLink>Super Swede NewGen</NavLink>
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
            <MediaTitle>Hagstrom Super Swede</MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              The Super Swede with its longer scale length of 25.5 inches
              (648mm), delivers a snappy and focused tone that features a
              well-defined low-end presence. Its higher string tension delivers
              a clear and articulate tone, well balanced and evenly defined. The
              Lundgren Design No. 2 pickup in the neck position and No. 5 pickup
              in the bridge position were carefully paired to deliver a wide
              diversity of tonal options. The AlNiCo-2 neck pickup produces warm
              and clear tones, while the AlNiCo-5 bridge pickup delivers a
              powerful and articulate tone. Combined together, they provide a
              perfect balance of expression and clarity that allows the Super
              Swede's natural tone to transpire.
            </Paragraph>
          </LeftContentWrapper>
          <RightContentWrapper>
            <MediaTitle>Colors</MediaTitle>
            <Colors>
              <ColorsWrapper>
                <Image
                  src={Colors_HAGSTROM_Crimson_Flame}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Crimson Flame</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_HAGSTROM_Dark_Storm}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Dark Storm</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_HAGSTROM_X_tra_Special_Old_Pale}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>X-tra Special Old Pale</ColorsText>
              </ColorsWrapper>
              <ColorsWrapper>
                <Image
                  src={Colors_HAGSTROM_Fall_Sky_Gloss}
                  alt=''
                  style={{ width: '70px', height: 'auto' }}
                />
                <ColorsText>Fall Sky Gloss</ColorsText>
              </ColorsWrapper>
            </Colors>
          </RightContentWrapper>
        </MainContentWrapper>
        <MainContentWrapper>
          <Details>
            <DetailsWrapper>
              <Image src={HSSUSWEMK3_Details_1} alt='' />
              <DetailsText>Crimson Flame Finish</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSUSWEMK3_Details_2} alt='' />
              <DetailsText>Iconic headstock</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSUSWEMK3_Details_3} alt='' />
              <DetailsText>Included C-51 Case</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSUSWEMK3_Details_4} alt='' />
              <DetailsText>Dark Storm Finish</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSUSWEMK3_Details_5} alt='' />
              <DetailsText>
                Lundgren Design AlNiCo-2 No. 5/2 Pickups
              </DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSUSWEMK3_Details_6} alt='' />
              <DetailsText>X-tra Special Old Pale Finish</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSUSWEMK3_Details_7} alt='' />
              <DetailsText>Long Travel Tune-O-Matic Bridge</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSUSWEMK3_Details_8} alt='' />
              <DetailsText>Fall Sky Gloss Finish</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSUSWEMK3_Details_9} alt='' />
              <DetailsText>Super Swede Cutaway</DetailsText>
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
              ”I have been playing music since 20 years. I play various types of
              music such as jazz, hard rock and reggae. This guitar can play all
              kinds of my music styles. I don't like to compare my guitars but
              this one has a different class.“{<br />}
              <a
                href='https://www.ultimate-guitar.com/reviews/electric_guitars/hagstrom/super_swede/33059/'
                target='_blank'
                rel='noopener noreferrer'>
                Ultimate-Guitar.com/Super-Swede-Review
              </a>
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
              { src: HagstromSuperSwedeCrimsonFlame },
              { src: HagstromSuperSwedeCrimsonFlameBack },
              { src: HagstromSuperSwedeDarkStorm },
              { src: HagstromSuperSwedeDarkStormBack },
              { src: HagstromSuperSwedeXtraSpecialOldPale },
              { src: HagstromSuperSwedeDarkStormBack },
              { src: HagstromSuperSwedeFallSkyGloss },
              { src: HagstromSuperSwedeFallSkyGlossBack },
            ]}
          />
        </LightboxWrapper>
        <SpecsWrapper>
          <LeftSpecsWrapper>
            <MediaTitle>Super Swede Specs</MediaTitle>
            <ul>
              <li>Body: Mahogany</li>
              <li>Top: ¾” Carved Maple Top w/ Top Grade Flame Maple Veneer</li>
              <li>Binding: Single-Ply Ivory</li>
              <li>Style: Single Cutaway</li>
              <li>Neck: Mahogany</li>
              <li>
                Neck: Set Neck, customized Nape-Tenon neck joint for ultimate
                fret access
              </li>
              <li>
                Neck Thickness: 1st fret 21 mm (excludes FB, paint clear coat)
                12th fret 22.5 mm (excludes FB, paint clear coat)
              </li>
              <li>Trussrod: Dual Action H-Expander™</li>
              <li>Fingerboard: Resinator™</li>
              <li>Scale Length: 25.50” (648 mm)</li>
              <li>Radius: 14.4“</li>
              <li>
                Inlays: Ivoriod Hagstrom Crest inlays – Lions on 12th fret
              </li>
              <li>
                Position Marks: Hagstrom Crest inlays – Hagstrom Lions on 12th
                fret
              </li>
              <li>Frets: Stainless Steel - 22 Medium Jumbo</li>
              <li>Nut: Custom String Spaced - GraphTech™ Black Tusq XL</li>
              <li>Nut Width: 43 mm</li>
              <li>
                Headstock Reinforcement: Volute with internal reinforcements
              </li>
              <li>
                Pickup Neck: Lundgren Design AlNiCo-2 No. 2 (Medium Output –
                Calibrated – 7.3K) Humbucker - Splitable
              </li>
              <li>
                Pickup Bridge: Lundgren Design AlNiCo-2 No. 5 (High Output –
                Calibrated – 13.2K) Humbucker - Splitable
              </li>
              <li>
                Switch: 3-Way Toggle Switch w/Hagstrom Brass Plated Cap (Chrome
                Plated)
              </li>
              <li>
                Controls: 2 x Volume Control with R/C Circuit, 2 x Tone Control
                with Push-Pull Coil Splits
              </li>
              <li>
                Tuning Keys: Hagstrom Bottom Locking – 19:1 Ratio Chrome Tuners
                w/Hagstrom Tuning Buttons
              </li>
              <li>
                Stop tail: Hagstrom Direct Mounted Sustain Blocks, Plexi Glass
                Plate, with Chrome Cover
              </li>
              <li>Bridge: Long Travel Tune-O-Matic Bridge</li>
              <li>
                Knobs: 4 x Hagstrom “H” Barrel Knurled Brass Knobs (Chrome
                Plated)
              </li>
              <li>Pickguard: Single Ply Ivory or 3-ply Black/White/Black</li>
              <li>
                Pickup Frames: Hagstrom “Standard” Humbucker Pickup Frame set
              </li>
              <li>Strap Buttons: Set of 3, with dual mount at base of body</li>
              <li>Strings: D’Addario (10-46)</li>
              <li>Case: Included C-51</li>
              <li>Optinal Gigbag: E-20</li>
            </ul>
          </LeftSpecsWrapper>
          <RightSpecsWrapper>
            <MediaTitle>Super Swede Standards</MediaTitle>
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
                  H-Expander NewGen
                </h4>
                <p>
                  All Hagstrom electric guitars and basses include our patented
                  H-Expander™ truss rod design. Introduced with the new Swede
                  and Super Swede models and coupled with a dual action truss
                  rod, making adjustments even more accurate, it is fit for a
                  whole new generation of players while retaining Hagstrom’s
                  reputation as the world’s fastest playing guitar. The
                  H-Expander™ truss rod not only provides ultimate neck adjust-
                  and stability, but it also contributes to Hagstrom’s unique
                  tone. Longer sustain and a round attack are some of the sonic
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
                  src={Detail_locking_mechanic}
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
                  Locking Machine Heads by Hagstrom
                </h4>
                <p>
                  A variety of Hagstrom instruments include 19:1 gear ratio
                  locking machine heads based on our own distinct innovations to
                  enable highly accurate tuning, fewer wraps around the tuning
                  post, and hence faster string changes.
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
            <StandardsWrapper>
              <StandardsImageWrapper>
                <Image
                  src={Detail_nape_tenon}
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
                  Nape-Tenon Body Neck Joint
                </h4>
                <p>
                  The body and neck joint is a vital part of stringed
                  instruments. When done correctly, it allows for a seamless
                  flow of tone, energy, and resonance. Hagstrom has developed an
                  innovative neck joint design called the "Nape-Tenon", which
                  combines the custom shop proven mortise and tenon design with
                  a recessed neck body joint for ultimate upper fret access.
                </p>
              </StandardsTextWrapper>
            </StandardsWrapper>
            <StandardsWrapper>
              <StandardsImageWrapper>
                <Image
                  src={Detail_stainless_steel_fret}
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
                  Stainless Steel Fret Material
                </h4>
                <p>
                  Although this construction process may take more time and
                  effort, we firmly believe that shortcuts are not an option
                  when striving for excellence. Hence the use of stainless steel
                  frets, which provide a hassle free lifetime of performance and
                  ensure optimal intonation and playability.
                </p>
              </StandardsTextWrapper>
            </StandardsWrapper>
          </RightSpecsWrapper>
        </SpecsWrapper>
        <VideoWrapper>
          <Video>
            <ReactPlayer
              url='https://youtu.be/BLI5lSsmpXA'
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

export default MoreInfoVikingDeluxeCustomLimited2016;
