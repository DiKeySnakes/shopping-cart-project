import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import Info from '../features/info/Info';
import Homepage_Slider_SwedeMKIII_1920x640Px from '../assets/images/Homepage_Slider_SwedeMKIII_1920x640Px.jpg';
import HagstromSwedeCrimsonFlame from '../assets/images/HagstromSwedeCrimsonFlame.png';
import HagstromSwedeCrimsonFlameBack from '../assets/images/HagstromSwedeCrimsonFlameBack.png';
import HagstromSwedeDarkStorm from '../assets/images/HagstromSwedeDarkStorm.png';
import HagstromSwedeDarkStormBack from '../assets/images/HagstromSwedeDarkStormBack.png';
import HagstromSwedeGold from '../assets/images/HagstromSwedeGold.png';
import HagstromSwedeGoldBack from '../assets/images/HagstromSwedeGoldBack.png';
import HagstromSwedeMandarinBurst from '../assets/images/HagstromSwedeMandarinBurst.png';
import HagstromSwedeMandarinBurstBack from '../assets/images/HagstromSwedeMandarinBurstBack.png';

const Image = styled.img`
  width: 100%;
  height: 100%;
  /* padding: 2rem; */
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const LightboxWrapper = styled.div`
  width: 100%;
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #e0e0dc;
`;

const Wrapper = styled.div`
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
      <ImageWrapper>
        <Image src={Homepage_Slider_SwedeMKIII_1920x640Px} alt='' />
      </ImageWrapper>
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
      <Wrapper>
        {/* <Info /> */}
        <Link to='/Products'>
          <Button>Back to Products</Button>
        </Link>
      </Wrapper>
    </>
  );
};

export default MoreInfo;
