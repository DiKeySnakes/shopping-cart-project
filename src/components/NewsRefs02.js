import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import FramedImage from './FramedImage';
import Artists_Main_Image from '../assets/images/Artists_Main_Image.jpg';
import Logo_Hagstrom_Lilie_Black from '../assets/images/Logo_Hagstrom_Lilie_Black.png';
import HS_Justin_York_Artist_Profile from '../assets/images/HS_Justin_York_Artist_Profile.jpg';
import Home_HS_H8II_Bass_2017 from '../assets/images/Home_HS_H8II_Bass_2017.jpg';
import Home_HS_Super_Swede_Bass_2017 from '../assets/images/Home_HS_Super_Swede_Bass_2017.jpg';
import Home_HS_Swede_Bass_Test_2017 from '../assets/images/Home_HS_Swede_Bass_Test_2017.jpg';

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
  flex-direction: row;
  margin-top: 3rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const LeftContentWrapper = styled.div`
  width: 66.66666666%;
  flex: 2;
  display: flex;
  flex-direction: column;
  border-right: 1.5px solid rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 800px) {
    border: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightContentWrapper = styled.div`
  width: 33.33333333%;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1.5px solid rgba(0, 0, 0, 0.3);
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: 800px) {
    border: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const MediaTitle = styled.h3`
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

const MediaTitleSecondary = styled.h4`
  display: flex;
  flex-direction: row;
  font-size: 2.5vmin;
  font-weight: 400;
  line-height: 110%;
  font-family: 'Bitter', serif;
  color: #333333;
  margin-bottom: 2rem;
  @media (max-width: 800px) {
    font-size: 4vmin;
  }
  @media (max-width: 350px) {
    font-size: 6vmin;
  }
`;

const Paragraph = styled.p`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 2vmin;
  padding: 0 0 2vmin;
  a {
    font-weight: 700;
    color: #9b0600;
    text-decoration: none;
    border-bottom: 1px dotted #9b0600;
  }
  & a:hover {
    color: #333333;
    text-decoration: none;
    border-bottom: 1px solid #333333;
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

const News = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const NewsTitle = styled.h3`
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

const NewsParagraph = styled.p`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 1.7vmin;
  padding: 0 0 2vmin;
  margin-bottom: 2rem;
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
  @media (max-width: 800px) {
    font-size: 2.2vmin;
  }
  @media (max-width: 550px) {
    font-size: 3.2vmin;
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

const NewsRefs02 = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>NEWS</IntroTitle>
      </IntroBackground>
      <NavContainer>
        <NavWrapper>
          <NavLinks>
            <NavLink to='/NewsP01'>News</NavLink>
            <span>/</span>
            <NavLink>Artist Profile Justin York</NavLink>
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
        <LeftContentWrapper>
          <News key={nanoid()}>
            <NewsWrapper key={nanoid()}>
              <Image
                src={HS_Justin_York_Artist_Profile}
                alt=''
                key={nanoid()}
              />
              <MediaTitle key={nanoid()}>Artist Profile Justin York</MediaTitle>
              <MediaTitleSecondary key={nanoid()}>
                Guitarist from Nashville, TN
              </MediaTitleSecondary>
              <Paragraph>
                <LogoSpan>
                  <Logo src={Logo_Hagstrom_Lilie_Black} alt='' />
                </LogoSpan>
                Justin York has led the kind of life many guitarists only dream
                about. Raised in a musical family, he turned professional at 17
                and has been making his living as a musician ever since. His
                recent stint as touring guitarist with Grammy award wining
                alt-rock band{' '}
                <a
                  href='https://www.paramore.net/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Paramore
                </a>{' '}
                has taken him all over the world with sold-out performances in
                legendary venues. Hear Justin talk about his beginnings, his
                approach to his craft, and what it’s like to tour the world with
                a group like Paramore. We also learn about his special
                relationship with Hagstrom Guitars.
              </Paragraph>
              <Paragraph>
                <a
                  href='https://twitter.com/jyplaysguitar'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Follow Justin on Twitter
                </a>
              </Paragraph>
            </NewsWrapper>
          </News>
        </LeftContentWrapper>
        <RightContentWrapper>
          <MediaTitle>Latest Posts</MediaTitle>
          <NewsWrapper key={nanoid()}>
            <Link
              to='/MoreInfoH8IIBass'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <FramedImage src={Home_HS_H8II_Bass_2017} alt='' key={nanoid()} />
              <NewsTitle key={nanoid()}>H8II Bass</NewsTitle>
              <NewsParagraph key={nanoid()}>
                8-String Reissue RetroScape Series
              </NewsParagraph>
            </Link>
          </NewsWrapper>
          <NewsWrapper key={nanoid()}>
            <Link
              to='/MoreInfoSuperSwedeBass'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <FramedImage
                src={Home_HS_Super_Swede_Bass_2017}
                alt=''
                key={nanoid()}
              />
              <NewsTitle key={nanoid()}>Super Swede Bass</NewsTitle>
              <NewsParagraph key={nanoid()}>
                Authentic Re-Creation
              </NewsParagraph>
            </Link>
          </NewsWrapper>
          <NewsWrapper key={nanoid()}>
            <Link
              to='/MoreInfoSwedeBass'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <FramedImage
                src={Home_HS_Swede_Bass_Test_2017}
                alt=''
                key={nanoid()}
              />
              <NewsTitle key={nanoid()}>Swede Bass</NewsTitle>
              <NewsParagraph key={nanoid()}>Vintage Shortscale</NewsParagraph>
            </Link>
            <NewsParagraph>
              <Link to='/NewsP01'>
                <i
                  className='fa-solid fa-angles-right fa-sm'
                  key={nanoid()}></i>{' '}
                All News
              </Link>
            </NewsParagraph>
          </NewsWrapper>
        </RightContentWrapper>
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

export default NewsRefs02;
