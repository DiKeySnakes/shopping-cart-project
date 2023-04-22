import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Homepage_Slider_SwedeMKIII_1920x640Px from '../assets/images/Homepage_Slider_SwedeMKIII_1920x640Px.jpg';
import Homepage_Slider_Super_SwedeMKIII_1920x640Px from '../assets/images/Homepage_Slider_Super_SwedeMKIII_1920x640Px.jpg';
import Homepage_Slider_Alvar_1920x640Px from '../assets/images/Homepage_Slider_Alvar_1920x640Px.jpg';
import Homepage_Slider_Danko_Jones_1920x640Px from '../assets/images/Homepage_Slider_Danko_Jones_1920x640Px.jpg';
import Homepage_Slider_Paramore_1920x640Px from '../assets/images/Homepage_Slider_Paramore_1920x640Px.jpg';
import Homepage_Slider_Super_Swede_Book_2021_1920x640Px from '../assets/images/Homepage_Slider_Super_Swede_Book_2021_1920x640Px.jpg';
import Home_Headstock from '../assets/images/Home_Headstock.png';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const Canvas = styled.div`
  width: 70em;
  color: #eeeeee;
  position: absolute;
  top: 0;
  right: 7%;
  padding: 5em 3em 2em;
  background: #000;
  background: linear-gradient(315deg, transparent 15px, rgba(0, 0, 0, 0.5) 0)
      bottom right,
    linear-gradient(45deg, transparent 15px, rgba(0, 0, 0, 0.5) 0) bottom left;
  background-size: 50% 100%;
  background-repeat: no-repeat;
  @media (max-width: 1480px) {
    width: 65em;
  }
  @media (max-width: 1280px) {
    width: 60em;
  }
  @media (max-width: 1024px) {
    width: 55em;
    padding: 3em 2em 1em;
  }
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    min-height: 100%;
    top: 0%;
    right: 0px;
    background-color: rgba(0, 0, 0, 1);
    text-align: center;
    padding: 15px;
  }
`;

const CanvasTheme = styled.h2`
  font-family: 'Bitter', serif;
  font-weight: normal;
  line-height: 110%;
  color: #fff;
  font-size: 3rem;
  margin: 0 0 16px;
  @media (max-width: 1480px) {
    font-size: 2.5rem;
  }
  @media (max-width: 1280px) {
    font-size: 2.2rem;
  }
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 4vmin;
  }
`;

const CanvasClaim = styled.h2`
  font-family: 'Bitter', serif;
  font-style: italic;
  font-weight: 700;
  font-size: 5rem;
  line-height: 110%;
  color: #fff;
  margin: 0 0 16px;
  @media (max-width: 1480px) {
    font-size: 4rem;
  }
  @media (max-width: 1280px) {
    font-size: 3rem;
  }
  @media (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 6vmin;
  }
`;

const CanvasText = styled.p`
  font-family: 'Signika Negative', sans-serif;
  font-size: 2rem;
  padding-bottom: 16px;
  margin-bottom: 1em;
  line-height: 150%;
  @media (max-width: 1480px) {
    font-size: 1.8rem;
  }
  @media (max-width: 1280px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
  @media (max-width: 768px) {
    padding-bottom: 0;
    margin-bottom: 16px;
    font-size: 3.5vmin;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-bottom: 1em;
  font-size: 2rem;
  font-weight: 700;
  background-color: transparent;
  font-family: 'Signika Negative', sans-serif;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #eeeeee;
  &:hover {
    color: #000;
    background-color: #fff;
    text-shadow: none;
  }
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.9);
  @media (max-width: 768px) {
    font-size: 3vmin;
    margin-bottom: 16px;
  }
  @media (max-width: 650px) {
    font-size: 3.5vmin;
  }
  @media (max-width: 430px) {
    font-size: 4vmin;
  }
`;

const HeadstockWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 3%;
  display: block;
  margin: 16px 0px 0px auto;
  height: 125px;
  width: 75px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnFocus: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <Wrapper>
        <Image src={Homepage_Slider_SwedeMKIII_1920x640Px} alt='' />
        <Canvas>
          <CanvasTheme>Reimagined. Redefined. Revived.</CanvasTheme>
          <CanvasClaim>Swede</CanvasClaim>
          <CanvasText>
            The excellent quality of its predecessors, combined with
            contemporary development and emotional design, catapults this Swede
            generation into an exciting new era.
          </CanvasText>
          <Link to='/MoreInfoSwede'>
            <Button>
              <i className='fa-solid fa-angles-right fa-sm'></i> Explore The
              Hagstrom Swede
            </Button>
          </Link>
          <HeadstockWrapper>
            <Image src={Home_Headstock} alt='' />
          </HeadstockWrapper>
        </Canvas>
      </Wrapper>
      <Wrapper>
        <Image src={Homepage_Slider_Super_SwedeMKIII_1920x640Px} alt='' />
        <Canvas>
          <CanvasTheme>Reimagined. Redefined. Revived.</CanvasTheme>
          <CanvasClaim>Super Swede</CanvasClaim>
          <CanvasText>
            While popular classics tend to remain unchanged, only truly creative
            minds dare to have them reimagined.
          </CanvasText>
          <Link to='/MoreInfoSuperSwede'>
            <Button>
              <i className='fa-solid fa-angles-right fa-sm'></i> Explore The
              Hagstrom Super Swede
            </Button>
          </Link>
          <HeadstockWrapper>
            <Image src={Home_Headstock} alt='' />
          </HeadstockWrapper>
        </Canvas>
      </Wrapper>
      <Wrapper>
        <Image src={Homepage_Slider_Alvar_1920x640Px} alt='' />
        <Canvas>
          <CanvasTheme>Hagstrom Alvar</CanvasTheme>
          <CanvasClaim>The Elf-Warrior</CanvasClaim>
          <CanvasText>
            The smaller brother of the Hagstrom Viking which perfectly lives up
            to its Norse origins. A true best friend and fellow fighting
            companion.{<br />} Photo: The Wildhearts © Trudi Knight
          </CanvasText>
          <Button>
            <i className='fa-solid fa-angles-right fa-sm'></i> Explore The
            Hagstrom Alvar
          </Button>
          <HeadstockWrapper>
            <Image src={Home_Headstock} alt='' />
          </HeadstockWrapper>
        </Canvas>
      </Wrapper>
      <Wrapper>
        <Image src={Homepage_Slider_Danko_Jones_1920x640Px} alt='' />
        <Canvas>
          <CanvasTheme>Hagstrom Ultra Max</CanvasTheme>
          <CanvasClaim>Ultra Max</CanvasClaim>
          <CanvasText>
            The Ultra Max shares the same small body concept of the Ultra Swede,
            yet with a slightly larger proportioned mahogany body topped with a
            thick custom carved flame maple top.{<br />} Photo: Danko Jones ©
            Björn Olsson
          </CanvasText>
          <Button>
            <i className='fa-solid fa-angles-right fa-sm'></i> Explore The
            Hagstrom Ultra Max
          </Button>
          <HeadstockWrapper>
            <Image src={Home_Headstock} alt='' />
          </HeadstockWrapper>
        </Canvas>
      </Wrapper>
      <Wrapper>
        <Image src={Homepage_Slider_Paramore_1920x640Px} alt='' />
        <Canvas>
          <CanvasTheme>Hagstrom Artist Project</CanvasTheme>
          <CanvasClaim>Justin & Taylor York from Paramore</CanvasClaim>
          <CanvasText>
            Each Artist Project instrument we deliver to guitarists worldwide is
            identical in every way to the guitar Justin and Taylor use in their
            studio and on stage.{<br />} Photo: Paramore © Trudi Knight
          </CanvasText>
          <Button>
            <i className='fa-solid fa-angles-right fa-sm'></i> Explore The
            Newest Artist Project
          </Button>
          <HeadstockWrapper>
            <Image src={Home_Headstock} alt='' />
          </HeadstockWrapper>
        </Canvas>
      </Wrapper>
      <Wrapper>
        <Image src={Homepage_Slider_Super_Swede_Book_2021_1920x640Px} alt='' />
        <Canvas>
          <CanvasTheme>Super Swede DeLuxe:</CanvasTheme>
          <CanvasClaim>The Hagstrom Guitar History – So Far</CanvasClaim>
          <CanvasText>
            This brand new book tells the history of Hagstrom electric and
            acoustic guitars, made by a Swedish innovative company founded in
            the 1920s by a young entrepreneur, Albin Hagström (1905–1952)...
          </CanvasText>
          <Button>
            <i className='fa-solid fa-angles-right fa-sm'></i> Explore Super
            Swede DeLuxe book
          </Button>
          <HeadstockWrapper>
            <Image src={Home_Headstock} alt='' />
          </HeadstockWrapper>
        </Canvas>
      </Wrapper>
    </Slider>
  );
}
