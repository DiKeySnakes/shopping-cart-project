import styled from 'styled-components';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';

const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* margin-top: 7vmin; */
  /* margin-bottom: 7vmin; */
`;

const LeftWrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RightWrapper = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
`;

const Bottom = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
`;

const Edge = styled.div`
  width: 15px;
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoWrapper = styled.div`
  width: 15%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-self: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const GuitarsCustomHeader = () => {
  return (
    <Wrapper>
      <LeftWrapper>
        <Edge />
        <Left>
          <Top />
          <Bottom />
        </Left>
      </LeftWrapper>
      <LogoWrapper>
        <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
      </LogoWrapper>
      <RightWrapper>
        <Right>
          <Top />
          <Bottom />
        </Right>
        <Edge />
      </RightWrapper>
    </Wrapper>
  );
};

export default GuitarsCustomHeader;
