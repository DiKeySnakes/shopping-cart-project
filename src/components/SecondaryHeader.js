import styled from 'styled-components';
import { Link } from 'react-router-dom';
import history from '../assets/images/history.png';

const SecondaryHeaderPusher = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #bdbbb9;
`;

const LeftWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RightWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  font-family: 'Signika Negative', sans-serif;
  font-size: 2vmin;
  color: #333333;
  @media (max-width: 800px) {
    font-size: 2.5vmin;
  }
  @media (max-width: 550px) {
    font-size: 3vmin;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Right = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  font-family: 'Signika Negative', sans-serif;
  font-size: 2vmin;
  color: #333333;
  @media (max-width: 800px) {
    font-size: 2.5vmin;
  }
  @media (max-width: 550px) {
    font-size: 3vmin;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const Edge = styled.div`
  width: 25%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 15%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const SecondaryHeader = () => {
  return (
    <>
      <SecondaryHeaderPusher />
      <Wrapper>
        <LeftWrapper>
          <Edge />
          <Left>
            <Link
              to='/Artists'
              style={{ textDecoration: 'none', color: '#333333' }}>
              Artists playing Hagstrom
            </Link>
          </Left>
        </LeftWrapper>
        <LogoWrapper>
          <Logo src={history} alt='' />
        </LogoWrapper>
        <RightWrapper>
          <Right>
            <Link
              to='/Heritage'
              style={{ textDecoration: 'none', color: '#333333' }}>
              Discover our Heritage
            </Link>
          </Right>
          <Edge />
        </RightWrapper>
      </Wrapper>
    </>
  );
};

export default SecondaryHeader;
