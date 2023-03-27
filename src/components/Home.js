import styled from 'styled-components';
import GarageBand from '../assets/images/garage_band.png';

const Wrapper = styled.div`
  width: 100%;
  height: 83vh;
  margin-top: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f5c7a9;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const Home = () => {
  return (
    <>
      <Wrapper>
        <Image src={GarageBand} alt='guitar'></Image>
      </Wrapper>
    </>
  );
};

export default Home;
