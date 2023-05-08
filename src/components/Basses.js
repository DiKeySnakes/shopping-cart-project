import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import GuitarsCustomHeader from './GuitarsCustomHeader';
import Basses_Header from '../assets/images/Basses_Header.jpg';
import Basses_Super_Swede from '../assets/images/Basses_Super_Swede.png';
import Basses_Swede from '../assets/images/Basses_Swede.png';
import Basses_Viking from '../assets/images/Basses_Viking.png';
import Basses_Retro_HB8 from '../assets/images/Basses_Retro_HB8.png';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const NavWrapper = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2vmin;
  font-weight: 400;
  padding-left: 16px;
  padding-right: 16px;
  & .active {
    border-bottom: 1px dotted #111111;
  }
  a {
    text-decoration: none;
    color: #111111;
    font-family: 'Signika Negative', sans-serif;
  }
  & a:hover {
    border-bottom: 1px solid #111111;
  }
  span {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  @media (max-width: 768px) {
    font-size: 3vmin;
  }
  @media (max-width: 430px) {
    font-size: 3.5vmin;
  }
`;

const NavLinks = styled.div`
  width: 66, 66666667%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  float: left;
  white-space: nowrap;
`;

const ShareLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  float: right;
  white-space: nowrap;
  @media (max-width: 992px) {
    display: none;
  }
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
  background-image: url(${Basses_Header});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
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

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
`;

const RowTitle = styled.h3`
  display: flex;
  flex-direction: row;
  font-size: 3vmin;
  font-weight: 400;
  line-height: 110%;
  font-family: 'Bitter', serif;
  color: #333333;
  margin-top: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    font-size: 5vmin;
  }
  @media (max-width: 350px) {
    font-size: 7vmin;
  }
`;

const RowParagraph = styled.p`
  color: #333333;
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

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  gap: 2rem;
  @media (max-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  &:hover {
    background-color: #eee;
  }
`;

const ItemText = styled.p`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 1.8vmin;
  @media (max-width: 800px) {
    font-size: 3vmin;
  }
  @media (max-width: 550px) {
    font-size: 4vmin;
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
  margin-top: 2rem;
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

const Basses = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>BASSES</IntroTitle>
      </IntroBackground>
      <NavContainer>
        <NavWrapper>
          <NavLinks>
            <NavLink to='/'>Home</NavLink>
            <span>/</span>
            <NavLink>Basses</NavLink>
          </NavLinks>
          <ShareLinks>
            <NavLink>
              <i className='fa-brands fa-square-facebook'></i> share
            </NavLink>
            <span>/</span>
            <NavLink>
              <i className='fa-brands fa-square-twitter'></i> tweet
            </NavLink>
            <span>/</span>
            <NavLink>
              <i className='fa-solid fa-square-envelope'></i> mail
            </NavLink>
          </ShareLinks>
        </NavWrapper>
      </NavContainer>
      <MainContentWrapper key={nanoid()}>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()} id='superSwedeBass'>
          <RowTitle key={nanoid()}>Super Swede Bass</RowTitle>
          <RowParagraph key={nanoid()}>
            Johan Rutger Gunnarsson, bassist for ABBA, worked with Hagstrom on
            the original Super Swede Bass design. He used the bass on ABBA’s
            1979 - 1980 tour of North America.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoSuperSwedeBass'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Basses_Super_Swede}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Super Swede Bass</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()} id='swedeBass'>
          <RowTitle key={nanoid()}>Swede Bass</RowTitle>
          <RowParagraph key={nanoid()}>
            The Swede Bass’ classic, single-cut design will be the perfect
            partner for players looking for superior tone, comfort, and sonic
            versatility.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoSwedeBass'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Basses_Swede}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Swede Bass</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()} id='vikingBass'>
          <RowTitle key={nanoid()}>Viking Bass</RowTitle>
          <RowParagraph key={nanoid()}>
            The semi hollow Viking bass beautifully blend stunnings looks and a
            rich tonal palette.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoVikingBass'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Basses_Viking}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Viking® Bass</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()}>
          <RowTitle key={nanoid()}>RetroScape</RowTitle>
          <RowParagraph key={nanoid()}>
            The RetroScape series combines authentic vintage design with modern
            components.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/Products'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Basses_Retro_HB8}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>H8-II Bass</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
      </MainContentWrapper>
      <ButtonWrapper key={nanoid()}>
        <Link to='/Products' key={nanoid()}>
          <Button key={nanoid()} style={{ marginBottom: '0' }}>
            <i className='fa-solid fa-angles-right fa-sm' key={nanoid()}></i>{' '}
            Shop Now
          </Button>
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
  );
};

export default Basses;
