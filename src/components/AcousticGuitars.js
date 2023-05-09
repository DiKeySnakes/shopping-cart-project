import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import GuitarsCustomHeader from './GuitarsCustomHeader';
import Acoustic_Guitars_Header from '../assets/images/Acoustic_Guitars_Header.jpg';
import Acoustic_Guitars_Orsa_Dreadnought from '../assets/images/Acoustic_Guitars_Orsa_Dreadnought.png';
import Acoustic_Guitars_Dalarna_Dreadnought_CE from '../assets/images/Acoustic_Guitars_Dalarna_Dreadnought_CE.png';
import Acoustic_Guitars_Orsa_Grand_Auditorium from '../assets/images/Acoustic_Guitars_Orsa_Grand_Auditorium.png';
import Acoustic_Guitars_Dalarna_Grand_Auditorium_CE from '../assets/images/Acoustic_Guitars_Dalarna_Grand_Auditorium_CE.png';
import Acoustic_Guitars_Elfdalia_Dreadnought from '../assets/images/Acoustic_Guitars_Elfdalia_Dreadnought.png';
import Acoustic_Guitars_Elfdalia_Dreadnought_CE from '../assets/images/Acoustic_Guitars_Elfdalia_Dreadnought_CE.png';
import Acoustic_Guitars_Elfdalia_Grand_Auditorium from '../assets/images/Acoustic_Guitars_Elfdalia_Grand_Auditorium.png';
import Acoustic_Guitars_Elfdalia_Grand_Auditorium_CE from '../assets/images/Acoustic_Guitars_Elfdalia_Grand_Auditorium_CE.png';
import Acoustic_Guitars_Mora_Concert_II from '../assets/images/Acoustic_Guitars_Mora_Concert_II.png';
import Acoustic_Guitars_Mora_Concert from '../assets/images/Acoustic_Guitars_Mora_Concert.png';
import Acoustic_Guitars_Mora_Dreadnought_II from '../assets/images/Acoustic_Guitars_Mora_Dreadnought_II.png';
import Acoustic_Guitars_Mora_Dreadnought from '../assets/images/Acoustic_Guitars_Mora_Dreadnought.png';
import Acoustic_Guitars_Siljan_Dreadnought_II from '../assets/images/Acoustic_Guitars_Siljan_Dreadnought_II.png';
import Acoustic_Guitars_Siljan_Dreadnought_CE from '../assets/images/Acoustic_Guitars_Siljan_Dreadnought_CE.png';
import Acoustic_Guitars_Siljan_Grand_Auditorium_II from '../assets/images/Acoustic_Guitars_Siljan_Grand_Auditorium_II.png';
import Acoustic_Guitars_Siljan_Grand_Auditorium_CE from '../assets/images/Acoustic_Guitars_Siljan_Grand_Auditorium_CE.png';
import Acoustic_Guitars_Siljan_12 from '../assets/images/Acoustic_Guitars_Siljan_12.png';
import Acoustic_Guitars_Seafarer_Parlour_CE from '../assets/images/Acoustic_Guitars_Seafarer_Parlour_CE.png';

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
  white-space: nowrap;
`;

const ShareLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  float: right;
  white-space: nowrap;
  @media (max-width: 992px) {
    display: none;
  }
`;

const MainContentWrapper = styled.div`
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const IntroBackground = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url(${Acoustic_Guitars_Header});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 800px) {
    height: 200px;
  }
`;

const IntroTitle = styled.h1`
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.5);
  font-style: italic;
  font-weight: bold;
  font-size: 5vmin;
  line-height: 80%;
  font-family: 'Bitter', serif;
  @media (max-width: 800px) {
    font-size: 7vmin;
  }
  @media (max-width: 350px) {
    font-size: 9vmin;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;

const RowTitle = styled.h3`
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

const RowParagraph = styled.p`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 1.7vmin;
  padding: 0 0 2vmin;
  @media (max-width: 800px) {
    font-size: 2.2vmin;
  }
  @media (max-width: 550px) {
    font-size: 3.2vmin;
  }
`;

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  &:hover {
    background-color: #eee;
  }
`;

const ItemText = styled.p`
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-bottom: 3rem;
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

const AcousticGuitars = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>ACOUSTIC GUITARS</IntroTitle>
      </IntroBackground>
      <NavContainer>
        <NavWrapper>
          <NavLinks>
            <NavLink to='/'>Home</NavLink>
            <span>/</span>
            <NavLink>Acoustic Guitars</NavLink>
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
      <MainContentWrapper key={nanoid()}>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()} id='orsa'>
          <RowTitle key={nanoid()}>Orsa</RowTitle>
          <RowParagraph key={nanoid()}>
            Hagstrom’s Orsa series is named after a town in the beautiful
            forested lake district near the original Hagstrom factory in Sweden.
          </RowParagraph>
          <RowParagraph key={nanoid()}>
            Ovangol is a material with the appearance and density of rosewood.
            Hagstrom has selected this material because it is safely harvested
            from managed forests and fully compliant under all of the CITES
            endangered hardwood regulations. When married to a solid Sitka
            spruce top Ovangol produces the warm, full spectrum sound associated
            with rosewood. Our dreadnought body shape enhances the guitar’s bass
            response.{<br />} The Orsa’s body, fingerboard, and headstock are
            exquisitely bound with hard Maple, creating a refined accompaniment
            to the rich colors of the Ovangol back and sides. A Maple heel cap
            completes the elegant incorporation of organic materials into the
            ornamental design of the guitar.
          </RowParagraph>
          <RowParagraph key={nanoid()}>
            A fingerboard and bridge made of our unique Resinator™ material,
            with the density, hardness, and sophisticated texture of ebony,
            contribute a level of tonal articulation usually found only in much
            more expensive instruments. Fishman’s ISYS pickup and preamp round
            out the package with authentic and expressive amplification support.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoOrsaDreadnought'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Orsa_Dreadnought}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Dreadnought</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/MoreInfoOrsaDreadnoughtCE'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Dalarna_Dreadnought_CE}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Dreadnought CE</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/MoreInfoOrsaGrandAuditorium'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Orsa_Grand_Auditorium}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Grand Auditorium</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/MoreInfoOrsaGrandAuditoriumCE'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Dalarna_Grand_Auditorium_CE}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Grand Auditorium CE</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Elfdalia II</RowTitle>
          <RowParagraph key={nanoid()}>
            The Elfdalia models using a solid Cedar top with Mahogany back and
            sides, provides a very “lively tone“ as the Cedar top brings out the
            upper-mid range, and has a tendency to be harmonically active. Cedar
            is a great material to help express the instruments overtones. Cedar
            being a darker wood than spruce, the wood grain within the Cedar top
            is often much tighter than spruce. This tighter grain allows the top
            of the instrument to vibrate more, providing a more responsive tone.
            Cedar works very well for both flat pickers and finger style
            technique. With the Elfdalia models, the icing on the cake is the
            gold hardware which will catch the attention of the player and the
            audience. The look of the instrument properly matches the
            instruments responsive tone.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Elfdalia_Dreadnought}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Dreadnought</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Elfdalia_Dreadnought_CE}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Dreadnought CE</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Elfdalia_Grand_Auditorium}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Grand Auditorium</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Elfdalia_Grand_Auditorium_CE}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Grand Auditorium CE</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Mora II</RowTitle>
          <RowParagraph key={nanoid()}>
            The Mora models using a solid Mahogany top with Mahogany back and
            sides provides a more brilliant and brighter tone with a generous
            amount of mids. However, the model produces a rather full tone
            without being considered “trebly“or “thin“. As most acoustic guitars
            on the market today use a combination of different tone woods, this
            single species of wood provides a truly unique tone, where the
            instrument seems to be specially voiced for soloing and finger
            picking styles, as single notes and phrasing seem to jump out from
            the instrument. Cosmetically speaking, the brownish hues from the
            darker tone wood will attract many players looking for a new stage
            companion.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Mora_Concert_II}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Concert</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Mora_Concert}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Concert CE</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Mora_Dreadnought_II}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Dreadnought</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Mora_Dreadnought}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Dreadnought CE</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Siljan II</RowTitle>
          <RowParagraph key={nanoid()}>
            The Siljan models using a high grade Sitka Spruce top with Mahogany
            back and sides provides a warm round and well balanced tone which
            will only continue to improve as time passes. Sitka Spruce is
            considered to be one of the more prestigious spruce origins
            originating from the Northern West coast in North America. Tonally,
            it is known for producing a slightly higher output and responds
            exceptionally well for flat pickers.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Siljan_Dreadnought_II}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Dreadnought</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Siljan_Dreadnought_CE}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Dreadnought CE</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Siljan_Grand_Auditorium_II}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Grand Auditorium</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Siljan_Grand_Auditorium_CE}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Grand Auditorium CE</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Siljan_12}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Grand Auditorium 12 String</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Seafarer II</RowTitle>
          <RowParagraph key={nanoid()}>
            Parlor-sized bodies have been used by acoustic guitar builders for
            centuries. A compact, easy-to-hold size and focused, intimate
            voicings have made parlor guitars attractive tools for vocal
            accompaniment and small ensembles through the ages. Blues and folk
            musicians embraced them in the early 20th century, and the body
            shape has become one of the standard offerings among fine guitar
            producers.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Acoustic_Guitars_Seafarer_Parlour_CE}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Parlour CE</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Hagstrom Acoustics</RowTitle>
          <RowParagraph key={nanoid()}>
            Dalarna is a historical province located in central Sweden, home to
            the town of Älvdalen where Albin Hagström established an accordion
            factory in 1925, and where Hagstrom guitar production began in the
            1950’s. A region steeped in folklore and with a rich tradition of
            art and craftsmanship, it is a source of inspiration for Hagstrom’s
            acoustic guitars. In homage to the birthplace of Hagstrom guitars,
            we have adopted local names from around the region for our acoustic
            series: Siljan, Mora, Efldalia, and, of course, Dalarna.
          </RowParagraph>
          <RowParagraph key={nanoid()}>
            Each model has been carefully developed to produce a unique tone
            with the help of hand-selected and aged timbers, and traditional
            body designs such as Dreadnought, Grand Auditorium, and Concert. A
            feature common to all Hagstrom acoustic guitars is the incorporation
            of our unique Resinator™ material into both fingerboards and
            bridges. The consistency, density, and stability of Resinator™ wood
            is ideally suited to the acoustic guitar, and contributes to the
            rich sonic fingerprint of Hagstrom acoustics.
          </RowParagraph>
          <RowParagraph>
            Beautifully designed cosmetic features such as headstocks, rosettes,
            tuners and other details, together with the finest of materials and
            Hagstrom’s design innovation creates a range of acoustic guitars
            that are a fitting tribute to the legacy started nearly a century
            ago in Dalarna by Albin Hagström.
          </RowParagraph>
        </Row>
      </MainContentWrapper>
      <ButtonWrapper key={nanoid()}>
        <Link to='/Products' key={nanoid()}>
          <Button key={nanoid()} style={{ marginBottom: '0' }}>
            <i className='fa-solid fa-angles-right fa-sm' key={nanoid()}></i>{' '}
            Shop Now
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
  );
};

export default AcousticGuitars;
