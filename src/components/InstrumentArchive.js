import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import GuitarsCustomHeader from './GuitarsCustomHeader';
import Artists_Main_Image from '../assets/images/Artists_Main_Image.jpg';
import Instrument_Archive_Super_Swede_LTD from '../assets/images/Instrument_Archive_Super_Swede_LTD.png';
import Instrument_Archive_Northern_Super_Swede from '../assets/images/Instrument_Archive_Northern_Super_Swede.png';
import Instrument_Archive_Northern_Swede from '../assets/images/Instrument_Archive_Northern_Swede.png';
import Instrument_Archive_Viking_Deluxe from '../assets/images/Instrument_Archive_Viking_Deluxe.png';
import Instrument_Archive_Three_Kings from '../assets/images/Instrument_Archive_Three_Kings.png';
import Instrument_Archive_Viking_Deluxe_Custom_Limited_2016 from '../assets/images/Instrument_Archive_Viking_Deluxe_Custom_Limited_2016.png';
import Instrument_Archive_HB_8 from '../assets/images/Instrument_Archive_HB_8.png';
import Instrument_Archive_Northen_Super_Swede_Bass from '../assets/images/Instrument_Archive_Northen_Super_Swede_Bass.png';

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

const InstrumentArchive = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>INSTRUMENT ARCHIVE</IntroTitle>
      </IntroBackground>
      <NavContainer>
        <NavWrapper>
          <NavLinks>
            <NavLink to='/'>Home</NavLink>
            <span>/</span>
            <NavLink>Your Hagstrom</NavLink>
            <span>/</span>
            <NavLink>Instrument Archive</NavLink>
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
        <Row key={nanoid()} id='superSwedeLTD'>
          <RowTitle key={nanoid()}>Swedish Made</RowTitle>
          <RowParagraph key={nanoid()}>
            Uncompromising luthiery. Made in Sweden.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoSuperSwedeLTD'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Instrument_Archive_Super_Swede_LTD}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Super Swede LTD</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()} id='northernSwede'>
          <RowTitle key={nanoid()}>Northen Series</RowTitle>
          <RowParagraph key={nanoid()}>Uncompromising luthiery.</RowParagraph>
          <RowParagraph key={nanoid()}>Made in Europe.</RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoNorthernSuperSwede'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Instrument_Archive_Northern_Super_Swede}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Northen Super Swede</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/MoreInfoNorthernSwede'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Instrument_Archive_Northern_Swede}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Northen Swede</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()} id='vikingDeluxe'>
          <RowTitle key={nanoid()}>Viking®</RowTitle>
          <RowParagraph key={nanoid()}>
            The All-Rounder. It covers all genres, from blues to rock, fusion,
            jazz - and back. Vikings® took no prisoners and neither will this
            versatile, elegant and amazing instrument.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoVikingDeluxe'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Instrument_Archive_Viking_Deluxe}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Viking® Deluxe</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()} id='limitedEditions'>
          <RowTitle key={nanoid()}>Limited Editions</RowTitle>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoThreeKings'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Instrument_Archive_Three_Kings}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Three Kings</ItemText>
              </ImageWrapper>
            </Link>
            <Link
              to='/MoreInfoVikingDeluxeCustomLimited2016'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Instrument_Archive_Viking_Deluxe_Custom_Limited_2016}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>
                  Viking® Deluxe Custom Limited 2016
                </ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()} id='northernSeries'>
          <RowTitle key={nanoid()}>Northern Series</RowTitle>
          <RowParagraph key={nanoid()}>
            The Northen Series from Hagstrom. Made in Europe.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoNorthernSuperSwedeBass'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Instrument_Archive_Northen_Super_Swede_Bass}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>Super Swede Bass</ItemText>
              </ImageWrapper>
            </Link>
          </ItemBox>
        </Row>
        <GuitarsCustomHeader key={nanoid()} />
        <Row key={nanoid()} id='HBmodels'>
          <RowTitle key={nanoid()}>HB Models</RowTitle>
          <RowParagraph key={nanoid()}>
            The HB series faithfully recreates the sought after 8 string
            classics, but implements a good portion of up to date features you‘d
            expect from today‘s instruments.
          </RowParagraph>
          <ItemBox key={nanoid()}>
            <Link
              to='/MoreInfoHB8'
              style={{ textDecoration: 'none' }}
              key={nanoid()}>
              <ImageWrapper key={nanoid()}>
                <Image
                  key={nanoid()}
                  src={Instrument_Archive_HB_8}
                  alt=''
                  style={{ width: '130px', height: '230px' }}
                />
                <ItemText key={nanoid()}>HB-8</ItemText>
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

export default InstrumentArchive;
