import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import GuitarsCustomHeader from './GuitarsCustomHeader';
import Artists_Main_Image from '../assets/images/Artists_Main_Image.jpg';
import Electric_Guitars_Pat_Smear from '../assets/images/Electric_Guitars_Pat_Smear.png';
import Electric_Guitars_Paramore_Impala from '../assets/images/Electric_Guitars_Paramore_Impala.png';
import Electric_Guitars_Paramore_Viking_Gold from '../assets/images/Electric_Guitars_Paramore_Viking_Gold.png';
import Electric_Guitars_Paramore_Viking_Brown from '../assets/images/Electric_Guitars_Paramore_Viking_Brown.png';
import Electric_Guitars_Fantomen_Custom from '../assets/images/Electric_Guitars_Fantomen_Custom.png';
import Electric_Guitars_Fantomen from '../assets/images/Electric_Guitars_Fantomen.png';
import Electric_Guitars_Impala from '../assets/images/Electric_Guitars_Impala.png';
import Electric_Guitars_HIII from '../assets/images/Electric_Guitars_HIII.png';
import Electric_Guitars_Super_Swede_MK3 from '../assets/images/Electric_Guitars_Super_Swede_MK3.png';
import Electric_Guitars_Swede_MK3 from '../assets/images/Electric_Guitars_Swede_MK3.png';
import Electric_Guitars_Ultra_Max from '../assets/images/Electric_Guitars_Ultra_Max.png';
import Electric_Guitars_Ultra_Swede from '../assets/images/Electric_Guitars_Ultra_Swede.png';
import Electric_Guitars_Ultra_Swede_ESN from '../assets/images/Electric_Guitars_Ultra_Swede_ESN.png';
import Electric_Guitars_Alvar from '../assets/images/Electric_Guitars_Alvar.png';
import Electric_Guitars_Super_Viking from '../assets/images/Electric_Guitars_Super_Viking.png';
import Electric_Guitars_Viking from '../assets/images/Electric_Guitars_Viking.png';
import Electric_Guitars_67_Viking_II from '../assets/images/Electric_Guitars_67_Viking_II.png';
import Electric_Guitars_Viking_Deluxe_Baritone from '../assets/images/Electric_Guitars_Viking_Deluxe_Baritone.png';
import Electric_Guitars_Viking_12 from '../assets/images/Electric_Guitars_Viking_12.png';
import Electric_Guitars_Tremar_Viking_Deluxe from '../assets/images/Electric_Guitars_Tremar_Viking_Deluxe.png';
import Electric_Guitars_HJ500 from '../assets/images/Electric_Guitars_HJ500.png';
import Electric_Guitars_HJ500_Tremar from '../assets/images/Electric_Guitars_HJ500_Tremar.png';
import Electric_Guitars_HJ800 from '../assets/images/Electric_Guitars_HJ800.png';
import Electric_Guitars_HL550 from '../assets/images/Electric_Guitars_HL550.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-image: url(${Artists_Main_Image});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
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

const ElectricGuitars = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>ELECTRIC GUITARS</IntroTitle>
      </IntroBackground>
      <MainContentWrapper key={nanoid()}>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Signature Series</RowTitle>
          <RowParagraph key={nanoid()}>Hagstrom Signature Models</RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoPatSmear'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Pat_Smear}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Pat Smear Signature</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Artist Project</RowTitle>
          <RowParagraph key={nanoid()}>
            Our new Hagstrom “Artist Project” series is a unique line of
            instruments that has been specially created in unison with a chosen
            few of our Hagstrom Artists.
          </RowParagraph>
          <RowParagraph key={nanoid()}>
            Each instrument is a representation of the musician’s creativity and
            specific demands, as each of these featured Artist’s has been given
            free hands to uniquely customize each of their own ideal instruments
            to create a perfect tool of musical expression.
          </RowParagraph>
          <RowParagraph key={nanoid()}>
            Guitarists will appreciate each of these finer details and features
            that each of the instruments presents, while players can be ensured
            that each attribute and specification has been specifically pondered
            and scrutinized by each of these professional musicians.
          </RowParagraph>
          <RowParagraph key={nanoid()}>
            The Artist Project instruments result in a captivating tool that
            will offer a unique playability, tone and visually compelling
            guitar, shared by both the player and their fans.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoImpalaCopperburst'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Paramore_Impala}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Impala Copperburst</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/MoreInfoVikingGoldTop'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Paramore_Viking_Gold}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Viking® Gold Top</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/MoreInfoSuperVikingTransBrown'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Paramore_Viking_Brown}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Super Viking® Trans Brown</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Fantomen</RowTitle>
          <RowParagraph key={nanoid()}>
            You can find the Fantomen on stage with Ghost. You don’t have to be
            a Nameless Ghoul to play it, and you can be sure the guitar
            available at your Hagstrom dealer is identical in every way to those
            on stage with Ghost!
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoFantomenCustom'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Fantomen_Custom}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Fantomen Custom</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/MoreInfoFantomen'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Fantomen}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Fantomen</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>RetroScape Series</RowTitle>
          <RowParagraph key={nanoid()}>Noun (plural Retroscapes)</RowParagraph>
          <RowParagraph key={nanoid()}>
            1. A landscape or setting filled with things from the past.
          </RowParagraph>
          <RowParagraph key={nanoid()}>
            Hagstrom’s RetroScape Series consist of authentically recreated
            guitars from the rich landscape of our history. Our mission is to
            bring modern playability to these great designs without compromising
            any of the badass-retro-vibe coolness that they offer to any
            guitarist who wants to break away from the current crowd by reaching
            back in time - Rock-n-Roll’s formative years … Hagstrom’s
            RetroScape.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoRetroScapeImpala'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Impala}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Impala</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_HIII}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>H-III</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Super Swede | The New Generation</RowTitle>
          <RowParagraph key={nanoid()} style={{ fontWeight: '800' }}>
            Reimagined. Redefined. Revived.
          </RowParagraph>
          <RowParagraph key={nanoid()}>
            Popular classics often remain untouched. Creative minds continue to
            challenge and reconsider these concepts to be fully reimagined. The
            Super Swede with its longer scale length of 25.5 inches (648mm),
            provides a snappy and focused tone that features a well-defined
            low-end presence. Its higher string tension delivers a clear and
            articulate sound, well balanced and evenly defined. The Lundgren
            Design No. 2 pickup in the neck position and No. 5 pickup in the
            bridge position were carefully paired to offer a wide diversity of
            tonal options. The AlNiCo-2 neck pickup produces warm and clear
            tones, while the AlNiCo-5 bridge pickup churns out a powerful and
            articulate one. Combined they are a perfect balance of expression
            and clarity that allows the Super Swede's natural tone to transpire.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoSuperSwede'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Super_Swede_MK3}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Super Swede NewGen</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Swede | The New Generation</RowTitle>
          <RowParagraph key={nanoid()} style={{ fontWeight: '800' }}>
            Reimagined. Redefined. Revived.
          </RowParagraph>
          <RowParagraph key={nanoid()}>
            Popular classics often remain untouched. Creative minds continue to
            challenge and reconsider these concepts to be fully reimagined. The
            Swede with a short scale length of 24.75 inches (628mm) produces a
            thick and warm tone that is both articulate and harmonically rich.
            Its lower string tension allows for longer sustain, providing an
            expressive and versatile tone. aThe equipped Lundgren Design No. 2
            AlNiCo-2 pickups are each specially calibrated to capture the
            natural, balanced voice of the instrument. With their clear and
            well-defined distinction, these pickups allow the soulful character
            of the Swede to shine through.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoSwede'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Swede_MK3}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Swede NewGen</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Ultra Max</RowTitle>
          <RowParagraph key={nanoid()}>
            Since the introduction of the profoundly successful Hagstrom Ultra
            Swede in 2007, guitarists all over the world have been stunned at
            the instruments willingness to offer players a premium performing
            and sounding instrument at a very modest cost. Over the years our
            designers have explored the details of the Ultra Swede and have 
            finally created an upscaled sibling of the Ultra Swede, where we now
            proudly introduce the “Ultra Max”.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoUltraMax'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Ultra_Max}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Ultra Max</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Ultra Swede</RowTitle>
          <RowParagraph key={nanoid()}>
            Impressive. Fantastic tone, perfect balance and dressed to kill. The
            best of both worlds, the fusion of Vintage and Modern.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Ultra_Swede}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Ultra Swede</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Ultra_Swede_ESN}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Ultra Swede ESN</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Alvar</RowTitle>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoAlvar'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Alvar}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Alvar</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Super Viking®</RowTitle>
          <RowParagraph key={nanoid()}>
            Upping the ante in the semi hollow realm with a gammut of sound and
            stunning looks. The Super Viking's® 25.5" scale length, offers a
            brighter and more focused tone, providing sustain on end.
          </RowParagraph>
          <RowParagraph key={nanoid()}>
            In combination with individual coil split from Humbucker to Single
            Coil mode, you get one of the most versatile sixtrings out there.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Super_Viking}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Super Viking®</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Viking®</RowTitle>
          <RowParagraph key={nanoid()}>
            The All-Rounder. It covers all genres, from blues to rock/fusion,
            jazz - and back. Vikings® took no prisoners and neither will this
            versatile and elegant instrument.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Viking}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Viking®</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_67_Viking_II}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>'67 Viking® II</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Viking_Deluxe_Baritone}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Viking® Deluxe Baritone</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Viking_12}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Viking® Deluxe 12-String</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_Tremar_Viking_Deluxe}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Tremar Viking® Deluxe</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>Jazz Models</RowTitle>
          <RowParagraph key={nanoid()}>
            Truly masterful. An outstanding hollowbody archtop, also deemed
            jazz-guitar is the pinnacle of the artform called lutherie. And the
            master’s craft is unmistakably written all over these fine models.
            Not only responsible for the iconic shape of the Hagstrom headstock,
            James “Jimmy” D’Aquisto‘s cooperation with Hagstrom is legendary.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_HJ500}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>HJ500</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_HJ500_Tremar}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Tremar HJ500</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_HJ800}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>HJ800</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Electric_Guitars_HL550}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>HL550</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
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

export default ElectricGuitars;
