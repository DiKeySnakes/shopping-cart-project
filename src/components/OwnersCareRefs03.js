import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import Artists_Main_Image from '../assets/images/Artists_Main_Image.jpg';

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

const OwnersCareRefs03 = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>
          SETTING UP YOUR HAGSTROM INSTRUMENT
        </IntroTitle>
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
            <NavLink>Setting up your Hagstrom instrument</NavLink>
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
                Setting up your Hagstrom instrument{<br />}
                Adjustable Bridge
              </MediaTitle>
              <Paragraph>
                Your Hagstrom guitars has an adjustable bridge which allows for
                string adjustment both horizontally and vertically. It is
                important to remember that the location of the bridge is a
                critical factor in assuring correct string vibration and perfect
                intonation. The bridge on your guitar has been set for optimum
                performance with the balanced set of strings supplied on the
                instrument. If you change to different gauges of strings
                (factory strings are 0.010 – 0.046 gauge), the bridge may
                require adjustment (as could the neck relief and nut slots).
                Unless you thoroughly understand the relation between string
                gauge, bridge height and action, neck relief, nut slot sizing,
                etc, we do not recommend that you attempt to make such
                adjustments on the instrument yourself. Instead, take your
                instrument to a competent service centre. It won’t take long to
                make the necessary adjustment, and you can be sure that it is
                done correctly.
              </Paragraph>
              <MediaTitle key={nanoid()}>Pickup height</MediaTitle>
              <Paragraph>
                The pickups on your Hagstrom guitar or bass have been specially
                created by us, and designed and formed ideally for your Hagstrom
                guitar. Each of our pickups are created with a specific tone and
                character in order to best compliment the instrument. As players
                have different ideals as to how a guitar should respond and
                react to their playing style and technique, the pickups on your
                instrument are set up before leaving the factory to provide
                players with a well-balanced and dynamic tone. As the height of
                a pickup works in the same fashion as a hand held microphone,
                the closer that it is to the source of the sound, the louder
                that it will be. Ideally, if your Hagstrom instrument is
                equipped with several pickups, it is essential to setup the
                height of each pickup to create a perfectly balanced tone when
                using more than one pickup at a time.
              </Paragraph>
              <Paragraph>
                The bridge pickup in your Hagstrom guitar is always hotter
                (stronger) than the others, in order to provide a stronger lead
                tones. The neck (and middle pickup, if equipped) has less output
                than the bridge pickup, which are also specially compensated to
                control stronger string vibrations normally found at each of
                these positions on the body. Ideally for a stronger lead tone,
                we recommend to raise the bridge pickup no higher than 2mm away
                from the strings (measuring from the top of the screws/slugs (if
                equipped). If raised higher than this recommended height, it can
                create buzzing issues (strings vibrating against the pickups) or
                it can even create a magnetic pull on the strings, which can
                create feedback issues (common on Semi-hollow or Hollow-body
                guitars), tuning issues, or even negatively affect the sustain
                of the instrument. Neck (and middle, if equipped) should be
                adjusted to a lower position, due to the increased string
                vibrations that emit from this area. Ideally, we recommend for a
                neck pickup to be no closer to the strings than around 7-8mm, to
                create a good balance between the neck and bridge pickup. If
                your guitar is equipped with a middle pickup, it’s height should
                be compensated between the height of both the bridge and neck
                pickups (approximately 4-5mm away from the strings).
              </Paragraph>
              <Paragraph>
                As players have ideal tones that they wish to achieve, it can be
                helpful to sit with your instrument and listen to the tones
                between each pickup and make adjustments to the height of each
                pickup to suit your personal taste to achieve your “ideal tone”.
                Even small adjustments of the height of each pickup will change
                the initial response and character of the instruments tone when
                amplified.
              </Paragraph>
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

export default OwnersCareRefs03;
