import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SimpleSlider from './SimpleSlider';
import Home_Viking_Jacob_Widen from '../assets/images/Home_Viking_Jacob-Widen.jpg';
import Home_HSSUVIK60_Side_Final from '../assets/images/Home_HSSUVIK60_Side_Final.jpg';
import Home_TEK_WH_070413_57 from '../assets/images/Home_TEK_WH_070413_57.jpg';
import CustomHeader from './CustomHeader';

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
  /* line-height: 1.6rem; */
  /* font-weight: 600; */
  /* margin-top: 3rem; */
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

const ButtonWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 3vmin;
  background-color: #b20600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.9);
  @media (max-width: 950px) {
    font-size: 2.5vmin;
  }
  @media (max-width: 650px) {
    font-size: 2.2vmin;
  }
  @media (max-width: 430px) {
    font-size: 2vmin;
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
      <ButtonWrapper>
        <Link to='/Products'>
          <Button>Shop Now</Button>
        </Link>
      </ButtonWrapper>
    </>
  );
};

export default Home;
