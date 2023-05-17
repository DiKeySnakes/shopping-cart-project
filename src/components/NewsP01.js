import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import FramedImage from './FramedImage';
import Artists_Main_Image from '../assets/images/Artists_Main_Image.jpg';
import Home_HS_H8II_Bass_2017 from '../assets/images/Home_HS_H8II_Bass_2017.jpg';
import Home_HS_Super_Swede_Bass_2017 from '../assets/images/Home_HS_Super_Swede_Bass_2017.jpg';
import Home_HS_Swede_Bass_Test_2017 from '../assets/images/Home_HS_Swede_Bass_Test_2017.jpg';
import HS_Siljan_White_2017 from '../assets/images/HS_Siljan_White_2017.jpg';
import HS_Pat_Smear_Red_2016 from '../assets/images/HS_Pat_Smear_Red_2016.jpg';
import HS_Parlour_2016 from '../assets/images/HS_Parlour_2016.jpg';

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

const AuxiliaryParagraph = styled.p`
  visibility: hidden;
  color: transparent;
  font-family: 'Signika Negative', sans-serif;
  font-size: 14px;
  padding: 0 0 2vmin;
  @media (max-width: 800px) {
    font-size: 10px;
  }
  @media (max-width: 550px) {
    font-size: 8px;
  }
`;

const PageNavContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PageNavWrapper = styled.div`
  width: 1170px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2vmin;
  font-weight: 400;
  padding-left: 16px;
  padding-right: 16px;
  & .active {
    cursor: auto;
  }
  a {
    text-decoration: none;
    color: #111111;
    font-family: 'Signika Negative', sans-serif;
    padding: 8px 16px;
    border: 1px solid #bdbbb9;
  }
  & a:hover {
    border: 1px solid #111111;
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

const PageNavLinks = styled.div`
  width: 66, 66666667%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  float: left;
  white-space: nowrap;
`;

const NewsP01 = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>NEWS</IntroTitle>
      </IntroBackground>
      <NavContainer>
        <NavWrapper>
          <NavLinks>
            <NavLink to='/'>Home</NavLink>
            <span>/</span>
            <NavLink>News</NavLink>
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
              <Link
                to='/MoreInfoH8IIBass'
                style={{ textDecoration: 'none' }}
                key={nanoid()}>
                <FramedImage
                  src={Home_HS_H8II_Bass_2017}
                  alt=''
                  key={nanoid()}
                />
                <NewsTitle key={nanoid()}>H8II Bass</NewsTitle>
                <NewsParagraph key={nanoid()}>
                  8-String Reissue RetroScape Series
                </NewsParagraph>
                <Button key={nanoid()}>
                  <i
                    className='fa-solid fa-angles-right fa-sm'
                    key={nanoid()}></i>{' '}
                  Read More
                </Button>
              </Link>
              <AuxiliaryParagraph>
                The minute you lay your hands on a Hagstrom and strum it for the
                first time, you can instantly feel why Hagstrom has legions of
                devoted fans and why so many pro musicians have made it their
                “number one”.
              </AuxiliaryParagraph>
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
                <Button key={nanoid()}>
                  <i
                    className='fa-solid fa-angles-right fa-sm'
                    key={nanoid()}></i>{' '}
                  Read More
                </Button>
              </Link>
              <AuxiliaryParagraph>
                The minute you lay your hands on a Hagstrom and strum it for the
                first time, you can instantly feel why Hagstrom has legions of
                devoted fans and why so many pro musicians have made it their
                “number one”.
              </AuxiliaryParagraph>
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
                <Button key={nanoid()}>
                  <i
                    className='fa-solid fa-angles-right fa-sm'
                    key={nanoid()}></i>{' '}
                  Read More
                </Button>
              </Link>
              <AuxiliaryParagraph>
                The minute you lay your hands on a Hagstrom and strum it for the
                first time, you can instantly feel why Hagstrom has legions of
                devoted fans and why so many pro musicians have made it their
                “number one”.
              </AuxiliaryParagraph>
            </NewsWrapper>
            <NewsWrapper key={nanoid()}>
              <Link
                to='/MoreInfoSiljanIIDreadnoughtCE'
                style={{ textDecoration: 'none' }}
                key={nanoid()}>
                <FramedImage src={HS_Siljan_White_2017} alt='' key={nanoid()} />
                <NewsTitle key={nanoid()}>Siljan Dreadnought</NewsTitle>
                <NewsParagraph key={nanoid()}>
                  Now available in white
                </NewsParagraph>
                <Button key={nanoid()}>
                  <i
                    className='fa-solid fa-angles-right fa-sm'
                    key={nanoid()}></i>{' '}
                  Read More
                </Button>
              </Link>
              <AuxiliaryParagraph>
                The minute you lay your hands on a Hagstrom and strum it for the
                first time, you can instantly feel why Hagstrom has legions of
                devoted fans and why so many pro musicians have made it their
                “number one”.
              </AuxiliaryParagraph>
            </NewsWrapper>
            <NewsWrapper key={nanoid()}>
              <Link
                to='/MoreInfoPatSmear'
                style={{ textDecoration: 'none' }}
                key={nanoid()}>
                <FramedImage
                  src={HS_Pat_Smear_Red_2016}
                  alt=''
                  key={nanoid()}
                />
                <NewsTitle key={nanoid()}>Pat's Favorite</NewsTitle>
                <NewsParagraph key={nanoid()}>
                  Now available in White Cherry
                </NewsParagraph>
                <Button key={nanoid()}>
                  <i
                    className='fa-solid fa-angles-right fa-sm'
                    key={nanoid()}></i>{' '}
                  Read More
                </Button>
              </Link>
              <AuxiliaryParagraph>
                The minute you lay your hands on a Hagstrom and strum it for the
                first time, you can instantly feel why Hagstrom has legions of
                devoted fans and why so many pro musicians have made it their
                “number one”.
              </AuxiliaryParagraph>
            </NewsWrapper>
            <NewsWrapper key={nanoid()}>
              <Link
                to='/MoreInfoSeafarerIIParlorE'
                style={{ textDecoration: 'none' }}
                key={nanoid()}>
                <FramedImage src={HS_Parlour_2016} alt='' key={nanoid()} />
                <NewsTitle key={nanoid()}>Seafarer II Parlor</NewsTitle>
                <NewsParagraph key={nanoid()}>
                  The Perfect Companion
                </NewsParagraph>
                <Button key={nanoid()}>
                  <i
                    className='fa-solid fa-angles-right fa-sm'
                    key={nanoid()}></i>{' '}
                  Read More
                </Button>
              </Link>
              <AuxiliaryParagraph>
                The minute you lay your hands on a Hagstrom and strum it for the
                first time, you can instantly feel why Hagstrom has legions of
                devoted fans and why so many pro musicians have made it their
                “number one”.
              </AuxiliaryParagraph>
            </NewsWrapper>
          </News>
          <NewsParagraph>Page 1 of 3.</NewsParagraph>
        </LeftContentWrapper>
        <RightContentWrapper></RightContentWrapper>
      </MainContentWrapper>
      <PageNavContainer>
        <PageNavWrapper>
          <PageNavLinks>
            <NavLink to='/NewsP01'>1</NavLink>
            <span>{<nbsp />}</span>
            <NavLink to='/NewsP02'>2</NavLink>
            <span>{<nbsp />}</span>
            <NavLink to='/NewsP03'>3</NavLink>
            <span>{<nbsp />}</span>
            <NavLink to='/NewsP02'>Next</NavLink>
          </PageNavLinks>
        </PageNavWrapper>
      </PageNavContainer>
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

export default NewsP01;
