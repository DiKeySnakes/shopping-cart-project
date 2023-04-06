import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import Homepage_Slider_SwedeMKIII_1920x640Px from '../assets/images/Homepage_Slider_SwedeMKIII_1920x640Px.jpg';
import Homepage_Slider_Super_SwedeMKIII_1920x640Px from '../assets/images/Homepage_Slider_Super_SwedeMKIII_1920x640Px.jpg';
import Homepage_Slider_Alvar_1920x640Px from '../assets/images/Homepage_Slider_Alvar_1920x640Px.jpg';
import Homepage_Slider_Danko_Jones_1920x640Px from '../assets/images/Homepage_Slider_Danko_Jones_1920x640Px.jpg';
import Homepage_Slider_Paramore_1920x640Px from '../assets/images/Homepage_Slider_Paramore_1920x640Px.jpg';
import Homepage_Slider_Super_Swede_Book_2021_1920x640Px from '../assets/images/Homepage_Slider_Super_Swede_Book_2021_1920x640Px.jpg';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const Canvas = styled.div`
  width: 60vmin;
  height: 60vmin;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  color: #eeeeee;
  border: 2px solid white;
  position: relative;
  /* position: absolute; */
  /* top: 0; */
  /* left: calc(50% + 15vmin); */
  /* left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* margin-top: -65vmin; */
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
      <div>
        <Image src={Homepage_Slider_SwedeMKIII_1920x640Px} alt='' />
      </div>
      <div>
        <Image src={Homepage_Slider_Super_SwedeMKIII_1920x640Px} alt='' />
      </div>
      <div>
        <Image src={Homepage_Slider_Alvar_1920x640Px} alt='' />
      </div>
      <div>
        <Image src={Homepage_Slider_Danko_Jones_1920x640Px} alt='' />
      </div>
      <div>
        <Image src={Homepage_Slider_Paramore_1920x640Px} alt='' />
      </div>
      <div>
        <Image src={Homepage_Slider_Super_Swede_Book_2021_1920x640Px} alt='' />
      </div>
    </Slider>
  );
}
