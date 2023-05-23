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
import Three_Kings_Hero from '../assets/images/Three_Kings_Hero.png';
import Three_Kings_Header from '../assets/images/Three_Kings_Header.jpg';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import Logo_Three_Kings from '../assets/images/Logo_Three_Kings.png';
import Colors_Black_Gloss from '../assets/images/Colors_Black_Gloss.png';
import Three_Kings_Detail_Headstock_01 from '../assets/images/Three_Kings_Detail_Headstock_01.jpg';
import Three_Kings_Detail_Body_02 from '../assets/images/Three_Kings_Detail_Body_02.jpg';
import Three_Kings_Detail_Crest_03 from '../assets/images/Three_Kings_Detail_Crest_03.jpg';
import Three_Kings_Super_Swede from '../assets/images/Three_Kings_Super_Swede.png';
import Three_Kings_Swede from '../assets/images/Three_Kings_Swede.png';
import Three_Kings_Ultra_Swede from '../assets/images/Three_Kings_Ultra_Swede.png';
import Detail_expander from '../assets/images/Detail_expander.jpg';
import Detail_resinator_wood_three_kings from '../assets/images/Detail_resinator_wood_three_kings.jpg';
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
  background-image: url(${Three_Kings_Header});
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

const MoreInfoThreeKings = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroContainer>
            <IntroTitle>
              Three Kings
              <IntroParagraph>Discover Swedish Legends!</IntroParagraph>
            </IntroTitle>
            <IntroImage src={Three_Kings_Hero} alt='' />
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
              <HashLink to='/InstrumentArchive#limitedEditions'>
                Limited Editions
              </HashLink>
              <span>/</span>
              <NavLink>Three Kings</NavLink>
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
            <MediaTitle>
              Hagstrom Three Kings Super Swede, Swede & Ultra Swede
            </MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              At Hagstrom we take every new design challenge as a way to bring
              our history of innovation and performance to contemporary
              guitarists in a fresh and exciting way. Sometimes we exceed even
              our own high expectations. Our Three Kings series is a case in
              point.
            </Paragraph>
            <Paragraph>
              The goal was to take our three most established solid body
              platforms and create an extraordinary aesthetic to be combined
              with equally extraordinary performance enhancements. All three
              models keep essential structural elements that contribute so much
              towards their overall character and voice. The classic,
              all-mahogany Swede; the longer scale-length Super Swede with its
              mahogany/maple body; and the lighter, more lively Ultra Swede all
              maintain their basic tone-wood infrastructure together with
              Hagstrom’s signature H-Expander™ truss rod system and
              Sustain-Block™ tailpiece. Each model sings with the unique voice
              guitarists have come to expect from Hagstrom.
            </Paragraph>
            <MediaTitle>Darkly mysterious</MediaTitle>
            <Paragraph>
              A decidedly rich, yet unifying aesthetic allows these distinctly
              different guitars to be considered together as a coherent group. A
              dark, heraldic motif centered on a raised medallion embedded into
              the top (see inset below for more about the medallion) is set off
              by black chrome hardware elements and black pearloid binding.
              Handsomely tooled knobs, custom-made by Q-Parts® specifically for
              this project, complete the package. Darkly mysterious and slightly
              wicked-looking, but with a versatile refinement that will appeal
              to a wide range of sensibilities, the result is both rich and
              deep.
            </Paragraph>
            <MediaTitle>Swedish Lundgren Pickups</MediaTitle>
            <Paragraph>
              With such a singular visual impression, we sought to equip these
              guitars with pickups that were equally extraordinary, and that
              would expand their sonic profiles into areas not previously
              touched upon by their conventional counterparts in the Hagstrom
              range. To accomplish this, we reached out to{' '}
              <a
                style={{
                  textDecoration: 'none',
                  color: '#9b0600',
                  borderBottom: '1px dotted #9b0600',
                }}
                href='https://lundgren.se/en/'
                target='_blank'
                rel='noopener noreferrer'>
                Swedish pickup master Johan Lundgren
              </a>
              . His mission was to design a pair of humbucking pickups that
              would rock as hard as Hagstrom pickups are known for, but would
              also offer a level of dynamics and intensity enabling entry into
              heavier, edgier, more progressive domains. With Lundgren’s history
              of designing pickups for the likes of Swedish progressive-metal
              powerhouse bands Meshuggah and GHOST, we felt he would be up to
              the challenge; and up to it he was. Each of these models is
              equipped with a Lundgren-designed AlNiCo-2 humbucker in the neck
              position and AlNiCo-5 humbucker at the bridge. The result covers
              an immense expressive range; from smooth, warm tones to the kind
              of attack and intense dynamic output that would satisfy the
              demands of even the most extreme musical styles.
            </Paragraph>
            <MediaTitle>Cutting Edge Features</MediaTitle>
            <Paragraph>
              Rounding out the compliment of cutting-edge features is a set of
              Ratio® tuning machines by Graph-Tech®. Each string is mated to a
              tuning machine with a custom gear ratio so that one turn equals
              one tone, regardless of the string. Predictable, precise and
              efficient, Ratio® makes tuning intuitive and natural. Now, a
              perfectly reasonable question to ask is how we came to call these
              special models “Three Kings”. One possibility is a connection with
              Swedish royal history or with ancient Scandinavian folklore, and,
              in fact, this would not be too far off the mark. But a much
              simpler reason they’re called the Three Kings is because there are
              three of them and, well, … THEY RULE!
            </Paragraph>
            <Paragraph>
              You would think guitars like these would come with a hefty
              premium, but you will be very surprised. Check them out at your
              local Hagstrom dealer.
            </Paragraph>
            <Paragraph>
              * Availability may vary depending on the selection offered in
              different international markets.
            </Paragraph>
            <Paragraph>
              * Availability may vary depending on the selection offered in
              different international markets.
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
            </Colors>
          </RightContentWrapper>
        </MainContentWrapper>
        <MainContentWrapper>
          <Details>
            <DetailsWrapper>
              <Image src={Three_Kings_Detail_Headstock_01} alt='' />
              <DetailsText>
                Graphtech Ratio® Tuners: Concise & precision tuning
              </DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Three_Kings_Detail_Body_02} alt='' />
              <DetailsText>
                Customized Q-Parts® knobs: Suave design, with admirable control
              </DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={Three_Kings_Detail_Crest_03} alt='' />
              <DetailsText>
                “Tre Kronor Castle“: Paying tribute to our Swedish royal roots
              </DetailsText>
            </DetailsWrapper>
          </Details>
        </MainContentWrapper>
        <Quote>
          <QuoteContentWrapper>
            <Image
              src={Logo_Three_Kings}
              alt=''
              style={{ width: '170px', height: 'auto', margin: '2vmin' }}
            />
            <QuoteText>
              As royalty and kingship has always been associated with grandeur
              expenditures, the value packed into each of the Three King models
              offers a wonderful opportunity and unique collector’s item.
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
              { src: Three_Kings_Super_Swede },
              { src: Three_Kings_Swede },
              { src: Three_Kings_Ultra_Swede },
            ]}
          />
        </LightboxWrapper>
        <SpecsWrapper>
          <LeftSpecsWrapper>
            <MediaTitle>Three Kings Specs</MediaTitle>
            <MediaTitleSecondary>Body</MediaTitleSecondary>
            <ul>
              <li>Material: Mahogany</li>
              <li>Super Swede Top: 10 mm Carved Maple</li>
              <li>Swede & Ultra Swede Top: Mahogany</li>
              <li>Style: Single Cutaway</li>
            </ul>
            <MediaTitleSecondary>Neck</MediaTitleSecondary>
            <ul>
              <li>Joint: Set Neck</li>
              <li>Material: Mahogany</li>
              <li>Truss Rod: H-Expander™</li>
            </ul>
            <MediaTitleSecondary>Fingerboard/Nut</MediaTitleSecondary>
            <ul>
              <li>Material: Resinator™</li>
              <li>Radius: 15"</li>
              <li>Inlays: Perloid Block</li>
              <li>Frets: 22 Medium Jumbo</li>
              <li>Super Swede Scale Length: 25.5" (648 mm)</li>
              <li>Swede & Ultra Swede Scale Length: 24.75" (628 mm)</li>
              <li>Nut: GraphTech Black Tusq XL</li>
              <li>Nut Width: 43 mm</li>
            </ul>
            <MediaTitleSecondary>Electronics</MediaTitleSecondary>
            <ul>
              <li>Pickups: Lundgren Design</li>
              <li>Neck: AlNico #2</li>
              <li>Bridge: AlNiCo #5</li>
              <li>Pickup Selector: 3-Way Toggle Switch</li>
              <li>Controls:</li>
              <li>2 x Volume / 2 x Tone (Super Swede/Swede)</li>
              <li>
                1 x Volume/1 x Tone (Ultra Swede){<br />}
                Push/Pull Coil tap option on Tone Potentiometer(s) Super
                Swede/Ultra Swede{<br />}
                3-Way Sound Filter Toggle switch Swede
              </li>
            </ul>
            <MediaTitleSecondary>Parts</MediaTitleSecondary>
            <ul>
              <li>Black Nickel Finish</li>
              <li>Knobs: Q-Parts Dome Knobs "Vine"</li>
              <li>
                Bridge: Long Travel T-O-M bridge with HAGSTROM Stop Tail Piece,
                6 individual brass string blocks
              </li>
              <li>
                Tuning Keys: Graphtech Ratio Tuners with optimized tuning ratios
                per strings (180° turn = 1/2 tone)
              </li>
              <li>Tre Kronor Castle Metal Badge</li>
              <li>
                3-Kings Body Decal and Black Pearloid Body/Neck/Headstock
                Binding
              </li>
              <li>Strings: D'Addario EXP 110 (10-46)</li>
            </ul>
            <MediaTitleSecondary>Case</MediaTitleSecondary>
            <ul>
              <li>Hagstrom Hard Case C51 optional (Super Swede/Swede)</li>
              <li>Hagstrom Hard Case C52 optional (Ultra Swede)</li>
              <li>Hagstrom Bag E20 optional</li>
            </ul>
          </LeftSpecsWrapper>
          <RightSpecsWrapper>
            <MediaTitle>Three Kings Standards</MediaTitle>
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
                  src={Detail_resinator_wood_three_kings}
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

export default MoreInfoThreeKings;
