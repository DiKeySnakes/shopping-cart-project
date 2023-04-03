import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GarageBand from '../assets/images/garage_band.png';

const Wrapper = styled.div`
  width: 100%;
  /* height: 83vh; */
  margin-top: 8rem;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  background-color: #f5c7a9;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
`;

const MainTitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 10vmin;
  font-weight: 800;
  font-family: 'Satisfy', cursive;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.7);
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 9vmin;
  /* font-weight: 800; */
  font-family: 'Delicious Handrawn', cursive;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.7);
`;

const Paragraph = styled.p`
  max-width: 80vmin;
  color: rgba(0, 0, 0, 0.7);
  font-size: 2rem;
  /* line-height: 1.6rem; */
  font-weight: 600;
  margin-top: 3rem;
`;

const ImageWrapper = styled.div`
  width: 80vmin;
  height: 80vmin;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-self: center;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
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
      <Wrapper>
        <ImageWrapper>
          <Image src={GarageBand} alt='guitar'></Image>
        </ImageWrapper>
        <TitleWrapper>
          <MainTitle style={{ marginTop: '2rem' }}>GarageBand</MainTitle>
          <Title>Best Guitar Shop</Title>
          <Title>All Over The World</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Paragraph>
          <Link to='/Products'>
            <Button>Shop Now</Button>
          </Link>
        </TitleWrapper>
      </Wrapper>
    </>
  );
};

export default Home;
