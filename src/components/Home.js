import ScrollToTop from 'react-scroll-to-top';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SimpleSlider from './SimpleSlider';
import FramedImage from './FramedImage';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import artistsHomeList from './artistsHomeList';
import Home_Viking_Jacob_Widen from '../assets/images/Home_Viking_Jacob-Widen.jpg';
import Home_HSSUVIK60_Side_Final from '../assets/images/Home_HSSUVIK60_Side_Final.jpg';
import Home_TEK_WH_070413_57 from '../assets/images/Home_TEK_WH_070413_57.jpg';
import Home_HS_H8II_Bass_2017 from '../assets/images/Home_HS_H8II_Bass_2017.jpg';
import Home_HS_Super_Swede_Bass_2017 from '../assets/images/Home_HS_Super_Swede_Bass_2017.jpg';
import Home_HS_Swede_Bass_Test_2017 from '../assets/images/Home_HS_Swede_Bass_Test_2017.jpg';
import Home_viking_teaser from '../assets/images/Home_viking_teaser.jpg';
import Home_ultramax_teaser from '../assets/images/Home_ultramax_teaser.jpg';
import Home_h8_2_bass_teaser from '../assets/images/Home_h8_2_bass_teaser.jpg';
import Home_HSVIK6704_teaser from '../assets/images/Home_HSVIK6704_teaser.jpg';
import Home_HSSUSWEB03_teaser from '../assets/images/Home_HSSUSWEB03_teaser.jpg';
import Home_Pat_teaser_2 from '../assets/images/Home_Pat_teaser_2.jpg';
import CustomHeader from './CustomHeader';
import CustomHeaderText from './CustomHeaderText';

const MediaCenter = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const MediaWrapperReverse = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

const MediaBody = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5vmin 5vmin 0;
  text-align: center;
  @media (max-width: 800px) {
    width: 80%;
    margin: 4vmin 0 0;
  }
  @media (max-width: 350px) {
    width: 80%;
    margin: 9vmin 0 0;
  }
`;

const MediaTitle = styled.h3`
  display: flex;
  flex-direction: row;
  font-size: 5vmin;
  font-weight: 400;
  line-height: 110%;
  font-family: 'Bitter', serif;
  color: #333333;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    font-size: 7vmin;
  }
  @media (max-width: 350px) {
    font-size: 9vmin;
  }
`;

const Paragraph = styled.p`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 2vmin;
  padding: 0 0 2vmin;
  @media (max-width: 800px) {
    font-size: 3vmin;
  }
  @media (max-width: 550px) {
    font-size: 4vmin;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  @media (max-width: 800px) {
    width: 80vmin;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const News = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: calc(10% - 15px);
  padding-right: calc(10% - 15px);
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`;

const NewsTitle = styled.h3`
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

const NewsParagraph = styled.p`
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

const Teaser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #111111;
  padding-left: calc(10% - 15px);
  padding-right: calc(10% - 15px);
  padding-top: 15px;
  padding-bottom: 15px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const TeaserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  position: relative;
`;

const TeaserHeader = styled.h3`
  display: flex;
  flex-direction: row;
  font-size: 2.2vmin;
  font-weight: 400;
  line-height: 110%;
  font-family: 'Bitter', serif;
  color: #ffffff;
  position: absolute;
  top: 3rem;
  left: 3.5rem;
  z-index: 10;
  @media (max-width: 800px) {
    font-size: 4.2vmin;
  }
  @media (max-width: 350px) {
    font-size: 6.2vmin;
  }
`;

const TeaserText = styled.p`
  color: #ffffff;
  font-family: 'Bitter', serif;
  font-weight: 800;
  font-size: 2.2vmin;
  padding: 0 0 2vmin;
  position: absolute;
  top: 4.5rem;
  left: 3.5rem;
  z-index: 10;
  @media (max-width: 800px) {
    font-size: 4.2vmin;
  }
  @media (max-width: 550px) {
    font-size: 6.2vmin;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

const Artists = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  align-items: top;
  padding-left: calc(10% - 15px);
  padding-right: calc(10% - 15px);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 990px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 770px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ArtistsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 2rem;
  text-align: left;
`;

const ArtistsTitle = styled.h3`
  display: flex;
  flex-direction: row;
  font-size: 2vmin;
  font-weight: 400;
  line-height: 110%;
  font-family: 'Bitter', serif;
  color: #333333;
  margin-top: 1rem;
  @media (max-width: 800px) {
    font-size: 3vmin;
  }
  @media (max-width: 350px) {
    font-size: 5vmin;
  }
`;

const ArtistsParagraph = styled.span`
  color: #a39f9c;
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

const ArtistsButton = styled.button`
  padding: 1rem 2rem;
  margin-bottom: 3rem;
  font-size: 2.5vmin;
  background-color: transparent;
  font-family: 'Signika Negative', sans-serif;
  border: none;
  cursor: pointer;
  color: #111111;
  &:hover {
    text-decoration: underline;
  }
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

const Home = () => {
  return (
    <>
      <SimpleSlider />
      <CustomHeader />
      <MediaCenter>
        <MediaWrapper>
          <ImageWrapper>
            <Image src={Home_Viking_Jacob_Widen} alt=''></Image>
          </ImageWrapper>
          <MediaBody>
            <MediaTitle>Instant Feel</MediaTitle>
            <Paragraph>
              The minute you lay your hands on a Hagstrom and strum it for the
              first time, you can instantly feel why Hagstrom has legions of
              devoted fans and why so many pro musicians have made it their
              “number one”.
            </Paragraph>
          </MediaBody>
        </MediaWrapper>
      </MediaCenter>
      <CustomHeader />
      <News>
        <NewsWrapper>
          <Link to='/Products' style={{ textDecoration: 'none' }}>
            <FramedImage src={Home_HS_H8II_Bass_2017} alt='' />
            <NewsTitle>H8II Bass</NewsTitle>
            <NewsParagraph>8-String Reissue RetroScape Series</NewsParagraph>
            <Button>
              <i className='fa-solid fa-angles-right fa-sm'></i> Read More
            </Button>
          </Link>
        </NewsWrapper>
        <NewsWrapper>
          <Link to='/Products' style={{ textDecoration: 'none' }}>
            <FramedImage src={Home_HS_Super_Swede_Bass_2017} alt='' />
            <NewsTitle>Super Swede Bass</NewsTitle>
            <NewsParagraph>Authentic Re-Creation</NewsParagraph>
            <Button>
              <i className='fa-solid fa-angles-right fa-sm'></i> Read More
            </Button>
          </Link>
        </NewsWrapper>
        <NewsWrapper>
          <Link to='/Products' style={{ textDecoration: 'none' }}>
            <FramedImage src={Home_HS_Swede_Bass_Test_2017} alt='' />
            <NewsTitle>Swede Bass</NewsTitle>
            <NewsParagraph>Vintage Shortscale</NewsParagraph>
            <Button>
              <i className='fa-solid fa-angles-right fa-sm'></i> Read More
            </Button>
          </Link>
        </NewsWrapper>
      </News>
      <CustomHeader />
      <MediaCenter>
        <MediaWrapperReverse>
          <MediaBody>
            <MediaTitle>Constant Innovation</MediaTitle>
            <Paragraph>
              Hagstrom’s unmistakable headstock is iconic. Hagstrom guitars are
              also known for their playing comfort and tonal versatility, the
              result of design innovations such as our aerospace engineered
              H-Expander™ truss rod, Resinator™ fingerboard, custom wound
              pickups, and unique hardware.
            </Paragraph>
          </MediaBody>
          <ImageWrapper>
            <Image src={Home_HSSUVIK60_Side_Final} alt=''></Image>
          </ImageWrapper>
        </MediaWrapperReverse>
      </MediaCenter>
      <CustomHeader />
      <Teaser>
        <TeaserWrapper>
          <Link to='/Products' style={{ textDecoration: 'none' }}>
            <Image src={Home_viking_teaser} alt='' />
            <TeaserHeader>HAGSTROM</TeaserHeader>
            <TeaserText>VIKING®</TeaserText>
          </Link>
        </TeaserWrapper>
        <TeaserWrapper>
          <Link to='/Products' style={{ textDecoration: 'none' }}>
            <Image src={Home_ultramax_teaser} alt='' />
            <TeaserHeader>HAGSTROM</TeaserHeader>
            <TeaserText>ULTRA MAX</TeaserText>
          </Link>
        </TeaserWrapper>
        <TeaserWrapper>
          <Link to='/Products' style={{ textDecoration: 'none' }}>
            <Image src={Home_h8_2_bass_teaser} alt='' />
            <TeaserHeader>HAGSTROM</TeaserHeader>
            <TeaserText>H8II BASS</TeaserText>
          </Link>
        </TeaserWrapper>
      </Teaser>
      <CustomHeader />
      <MediaCenter>
        <MediaWrapper>
          <ImageWrapper>
            <Image src={Home_TEK_WH_070413_57} alt=''></Image>
          </ImageWrapper>
          <MediaBody>
            <MediaTitle>Distinct Sound</MediaTitle>
            <Paragraph>
              The Hagstrom features contribute to that distinct and unmatched
              sound, which has jumpstarted many careers around the world. Now
              fasten your seatbelts and let us take you on a ride to explore the
              Hagstrom range. You’re about to discover a dazzling assortment of
              electric guitars, electric basses and acoustics that will whet
              your appetite to travel to your nearest dealer and try one out
              today. Enjoy!
            </Paragraph>
          </MediaBody>
        </MediaWrapper>
      </MediaCenter>
      <CustomHeader />
      <Teaser>
        <TeaserWrapper>
          <Link to='/Products' style={{ textDecoration: 'none' }}>
            <Image src={Home_HSVIK6704_teaser} alt='' />
            <TeaserHeader>HAGSTROM</TeaserHeader>
            <TeaserText>'67 VIKING® II</TeaserText>
          </Link>
        </TeaserWrapper>
        <TeaserWrapper>
          <Link to='/Products' style={{ textDecoration: 'none' }}>
            <Image src={Home_HSSUSWEB03_teaser} alt='' />
            <TeaserHeader>HAGSTROM</TeaserHeader>
            <TeaserText>SUPER SWEDE BASS</TeaserText>
          </Link>
        </TeaserWrapper>
        <TeaserWrapper>
          <Link to='/Products' style={{ textDecoration: 'none' }}>
            <Image src={Home_Pat_teaser_2} alt='' />
            <TeaserHeader>HAGSTROM</TeaserHeader>
            <TeaserText>PAT SMEAR</TeaserText>
          </Link>
        </TeaserWrapper>
      </Teaser>
      <CustomHeaderText text='ARTISTS' />
      <Artists>
        {artistsHomeList.map((elem) => {
          return (
            <ArtistsWrapper>
              <FramedImage src={elem.src} alt={elem.alt} />
              <ArtistsTitle>{elem.name}</ArtistsTitle>
              <ArtistsParagraph>{elem.description}</ArtistsParagraph>
            </ArtistsWrapper>
          );
        })}
      </Artists>
      <ButtonWrapper
        style={{
          justifyContent: 'right',
          paddingLeft: '10%',
          paddingRight: '10%',
        }}>
        <Link to='/Artists'>
          <ArtistsButton>
            <i className='fa-solid fa-angles-right fa-sm'></i> show all artists
          </ArtistsButton>
        </Link>
      </ButtonWrapper>
      <CustomHeader />
      <ButtonWrapper>
        <Link to='/Products'>
          <Button>
            <i className='fa-solid fa-angles-right fa-sm'></i> Shop Now
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
    </>
  );
};

export default Home;
