import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import Artists_Main_Image from '../assets/images/Artists_Main_Image.jpg';
import Owners_Care_string_replacement_1 from '../assets/images/Owners_Care_string_replacement_1.jpg';
import Owners_Care_string_replacement_2 from '../assets/images/Owners_Care_string_replacement_2.jpg';

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
  flex-wrap: wrap;
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
  font-family: 'Signika Negative', sans-serif;
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
  ol {
    padding-left: 16px;
  }
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

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
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

const OwnersCareRefs05 = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>STRING REPLACEMENT</IntroTitle>
      </IntroBackground>
      <NavContainer>
        <NavWrapper>
          <NavLinks>
            <NavLink to='/'>Home</NavLink>
            <span>/</span>
            <NavLink>Your Hagstrom</NavLink>
            <span>/</span>
            <NavLink to='/OwnersCare'>Owners Care</NavLink>
            <span>/</span>
            <NavLink>String Replacement</NavLink>
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
              <MediaTitle key={nanoid()}>
                When to change the strings of your guitar
              </MediaTitle>
              <Paragraph>
                Do not wait for a string to break before replacing it. Strings
                lose their brilliance and response for many reasons, including
                corrosion from perspiration acids, contact with the frets, and
                even a player’s touch and playing style. The amount of time
                required for strings to “go dead” varies considerably from
                player to player and string to string. You can best compensate
                for the loss of tonal quality caused by dead strings by changing
                them often – at least every two weeks if you play regularly and
                have a normal amount of acid in your system.
              </Paragraph>
              <Paragraph>
                When a string “goes dead”, it is best to replace the entire set.
                Replacing only one string will usually result in it sounding
                “brighter” than the other strings, and the set will no longer be
                balanced. If you change to different string gauges, it may be
                necessary to adjust the neck and even the nut (and may even
                require re-intonation).
              </Paragraph>
              <Paragraph>
                When changing strings, remove only one string at a time to
                maintain the tension on the neck and to allow the old strings to
                be used for tuning reference. Bring the new string up to pitch
                slowly to avoid breaking it, and do not clip the string to
                length until after it is mounted, in order to avoid unravelling.
              </Paragraph>
              <MediaTitle key={nanoid()}>
                How to re-string your guitar
              </MediaTitle>
              <MediaTitleSecondary key={nanoid()}>
                At the Tailpiece
              </MediaTitleSecondary>
              <Paragraph>
                Simply insert each string through the proper hole in the
                tailpiece. The “Ball end” of the string will hold it in place.
              </Paragraph>
              <MediaTitleSecondary key={nanoid()}>
                At the Neck
              </MediaTitleSecondary>
              <Paragraph>
                Bring each string up the neck and make a 90-degree bend in the
                end about 2 inches beyond the proper tuning machine. Insert the
                string into the hole of the string post. Wind the end of the
                string halfway around the post and under the attached string.
                The end of the string is then bent back over the attached string
                to prevent slippage.
              </Paragraph>
              <ImageWrapper>
                <Image src={Owners_Care_string_replacement_1} alt='' />
              </ImageWrapper>
              <Paragraph>
                The string windings should be close to the base of the post. The
                string should be wound around the shaft about three times. Bring
                the string up to pitch before clipping the end.
              </Paragraph>
              <ImageWrapper>
                <Image src={Owners_Care_string_replacement_2} alt='' />
              </ImageWrapper>
            </NewsWrapper>
          </News>
        </LeftContentWrapper>
        <RightContentWrapper>
          <News key={nanoid()}>
            <NewsWrapper key={nanoid()}>
              <MediaTitleSecondary key={nanoid()}>
                Owners Care:
              </MediaTitleSecondary>
              <Paragraph>
                <Link to='/OwnersCareRefs01'>How to care for your guitar</Link>
              </Paragraph>
              <Paragraph>
                <Link to='/OwnersCareRefs02'>H-Expander Truss Rod</Link>
              </Paragraph>
              <Paragraph>
                <Link to='/OwnersCareRefs03'>
                  Setting up your Hagstrom instrument
                </Link>
              </Paragraph>
              <Paragraph>
                <Link to='/OwnersCareRefs04'>
                  Transport and store your guitar
                </Link>
              </Paragraph>
              <Paragraph>
                <Link to='/OwnersCareRefs05'>String Replacement</Link>
              </Paragraph>
            </NewsWrapper>
          </News>
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

export default OwnersCareRefs05;
