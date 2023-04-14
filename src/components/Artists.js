import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FramedImage from '../components/FramedImage';
import ArtistsCustomHeader from './ArtistsCustomHeader';
import artistsList from './artistsList';
import Artists_Main_Image from '../assets/images/Artists_Main_Image.jpg';

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

const ArtistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  align-items: top;
  /* padding-left: calc(10% - 15px); */
  /* padding-right: calc(10% - 15px); */
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

const Artists = () => {
  return (
    <Wrapper>
      <IntroBackground>
        <IntroTitle>WE LOVE TO PLAY HAGSTROM</IntroTitle>
      </IntroBackground>
      <MainContentWrapper>
        <ArtistsCustomHeader />
        <ArtistsContainer>
          {artistsList.map((elem) => {
            return (
              <ArtistsWrapper>
                <FramedImage src={elem.src} alt={elem.alt} />
                <ArtistsTitle>{elem.name}</ArtistsTitle>
                <ArtistsParagraph>{elem.description}</ArtistsParagraph>
              </ArtistsWrapper>
            );
          })}
        </ArtistsContainer>
        <ArtistsCustomHeader />
      </MainContentWrapper>
      <ButtonWrapper>
        <Link to='/Products'>
          <Button>
            <i className='fa-solid fa-angles-right fa-sm'></i> Shop Now
          </Button>
        </Link>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Artists;
