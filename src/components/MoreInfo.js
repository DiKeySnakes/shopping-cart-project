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
import Swede_Hero from '../assets/images/Swede_Hero_350x453Px.png';
import Homepage_Slider_SwedeMKIII_1920x640Px from '../assets/images/Homepage_Slider_SwedeMKIII_1920x640Px.jpg';
import HagstromSwedeCrimsonFlame from '../assets/images/HagstromSwedeCrimsonFlame.png';
import HagstromSwedeCrimsonFlameBack from '../assets/images/HagstromSwedeCrimsonFlameBack.png';
import HagstromSwedeDarkStorm from '../assets/images/HagstromSwedeDarkStorm.png';
import HagstromSwedeDarkStormBack from '../assets/images/HagstromSwedeDarkStormBack.png';
import HagstromSwedeGold from '../assets/images/HagstromSwedeGold.png';
import HagstromSwedeGoldBack from '../assets/images/HagstromSwedeGoldBack.png';
import HagstromSwedeMandarinBurst from '../assets/images/HagstromSwedeMandarinBurst.png';
import HagstromSwedeMandarinBurstBack from '../assets/images/HagstromSwedeMandarinBurstBack.png';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import HSSWEMK3_Details_1 from '../assets/images/HSSWEMK3_Details_345x276Px_01.jpg';
import HSSWEMK3_Details_2 from '../assets/images/HSSWEMK3_Details_345x276Px_02.jpg';
import HSSWEMK3_Details_3 from '../assets/images/HSSWEMK3_Details_345x276Px_03.jpg';
import HSSWEMK3_Details_4 from '../assets/images/HSSWEMK3_Details_345x276Px_04.jpg';
import HSSWEMK3_Details_5 from '../assets/images/HSSWEMK3_Details_345x276Px_05.jpg';
import HSSWEMK3_Details_6 from '../assets/images/HSSWEMK3_Details_345x276Px_06.jpg';
import HSSWEMK3_Details_7 from '../assets/images/HSSWEMK3_Details_345x276Px_07.jpg';
import HSSWEMK3_Details_8 from '../assets/images/HSSWEMK3_Details_345x276Px_08.jpg';
import HSSWEMK3_Details_9 from '../assets/images/HSSWEMK3_Details_345x276Px_09.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroContainer = styled.div`
  max-width: 1170px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
`;

const IntroTitle = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const IntroParagraph = styled.p`
  font-family: 'Signika Negative', sans-serif;
  font-weight: normal;
  font-size: 0.5em;
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

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: relative;
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
  align-items: center;
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

const LightboxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e0e0dc;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e0e0dc;
  h1 {
    font-size: calc(3.5rem + 2vmin);
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: calc(1.5rem + 2vmin);
  background-color: #b20600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.9);
  @media (max-width: 650px) {
    font-size: calc(1rem + 2vmin);
  }
  @media (max-width: 430px) {
    font-size: calc(0.5rem + 2vmin);
  }
`;

const MoreInfo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image src={Homepage_Slider_SwedeMKIII_1920x640Px} alt='' />
          <IntroContainer>
            <IntroTitle>
              Swede
              <IntroParagraph>Reimagined. Redefined. Revived.</IntroParagraph>
            </IntroTitle>
            <IntroImage src={Swede_Hero} alt='' />
          </IntroContainer>
        </ImageWrapper>
        <MainContentWrapper>
          <LeftContentWrapper>
            <MediaTitle>Hagstrom Swede</MediaTitle>
            <Paragraph>
              <LogoSpan>
                <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
              </LogoSpan>
              The Swede with a shorter scale length of 24.75 inches (628mm)
              produces a thick and warm tone that is both articulate and
              harmonically rich. Its lower string tension allows for longer
              sustain, providing an expressive and versatile tone. The equipped
              Lundgren Design No. 2 AlNiCo-2 pickups are each specially
              calibrated to capture the natural, balanced tone of the
              instrument. With their clear and well-defined distinction, these
              pickups allow the soulful character of the Swede to shine through.
            </Paragraph>
          </LeftContentWrapper>
          <RightContentWrapper>
            <MediaTitle>Colors</MediaTitle>
          </RightContentWrapper>
        </MainContentWrapper>
        <MainContentWrapper>
          <Details>
            <DetailsWrapper>
              <Image src={HSSWEMK3_Details_1} alt='' />
              <DetailsText>Crimson Flame Finish</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSWEMK3_Details_2} alt='' />
              <DetailsText>Iconic headstock</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSWEMK3_Details_3} alt='' />
              <DetailsText>Included C-51 Case</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSWEMK3_Details_4} alt='' />
              <DetailsText>Dark Storm Finish</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSWEMK3_Details_5} alt='' />
              <DetailsText>Lundgren Design AlNiCo-2 No. 2 Pickups</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSWEMK3_Details_6} alt='' />
              <DetailsText>Mandarin Burst Finish</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSWEMK3_Details_7} alt='' />
              <DetailsText>Long Travel Tune-O-Matic Bridge</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSWEMK3_Details_8} alt='' />
              <DetailsText>Gold Finish</DetailsText>
            </DetailsWrapper>
            <DetailsWrapper>
              <Image src={HSSWEMK3_Details_9} alt='' />
              <DetailsText>Swede Cutaway</DetailsText>
            </DetailsWrapper>
          </Details>
        </MainContentWrapper>
        <LightboxWrapper>
          <Lightbox
            plugins={[Inline, Slideshow, Thumbnails]}
            inline={{
              style: {
                width: '100%',
                maxWidth: '1170px',
                aspectRatio: '4 / 2',
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
              { src: HagstromSwedeCrimsonFlame },
              { src: HagstromSwedeCrimsonFlameBack },
              { src: HagstromSwedeDarkStorm },
              { src: HagstromSwedeDarkStormBack },
              { src: HagstromSwedeGold },
              { src: HagstromSwedeGoldBack },
              { src: HagstromSwedeMandarinBurst },
              { src: HagstromSwedeMandarinBurstBack },
            ]}
          />
        </LightboxWrapper>
        <ButtonWrapper>
          <Link to='/Products'>
            <Button>Back to Products</Button>
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

export default MoreInfo;
