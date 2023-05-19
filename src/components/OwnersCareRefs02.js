import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import Artists_Main_Image from '../assets/images/Artists_Main_Image.jpg';
import Owners_Care_Back_Bowed_Neck from '../assets/images/Owners_Care_Back_Bowed_Neck.jpg';
import Owners_Care_Bowed_Neck from '../assets/images/Owners_Care_Bowed_Neck.jpg';

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

const OwnersCareRefs02 = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>H-EXPANDER TRUSS ROD</IntroTitle>
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
            <NavLink>H-Expander Truss Rod</NavLink>
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
                H-Expander Truss Rod{<br />}
                Hagstrom’s Patented H-Expander Truss Rod
              </MediaTitle>
              <Paragraph>
                The neck on your Hagstrom guitar is reinforced with our
                H-Expander metal truss rod. The design of the truss rod prevents
                twisting of the neck, and allows the neck to the be adjusted if
                there is uncomfortable playability between the 5-9th fret area,
                or even fret buzz in extreme conditions. We have incorporated
                this special H-Expander truss rod into your guitars for a number
                or reasons:
              </Paragraph>
              <Paragraph>
                <ol>
                  <li>
                    To ensure that the neck on your guitar is as strong and
                    trouble-free as possible
                  </li>
                  <li>
                    To allow easy adjustment if/when possible. Please note that
                    if you do not have adequate experience of adjusting truss
                    rods in the past, we suggest to have a professional guitar
                    technician to make such adjustments for you, to avoid
                    possible permanent damage the instrument which may void
                    warranty.
                  </li>
                  <li>
                    The H-Expander truss rod also plays part in tonally
                    enhancing the physical vibration and resonance of your
                    instrument. It will increase the instruments sustain, and
                    provide a sharper attack for Hagstrom players.
                  </li>
                </ol>
              </Paragraph>
              <MediaTitle key={nanoid()}>
                H-Expander Truss Rod Adjustment
              </MediaTitle>
              <Paragraph>
                To determine if the neck on your truss rod is out of alignment,
                follow this procedure:
              </Paragraph>
              <Paragraph>
                With your left hand, depress the low E-string between the nut
                and the first fret. With your right hand, hold the same string
                against the fingerboard at the 12th fret.{<br />} There should
                be a minimum clearance (at least 0.005” (metric: 0.127mm))
                between the bottom of the string and the top of the 5th fret. If
                the string clearance is more than 0.03” (Metric: 0.762mm) this
                would mean that your neck is “bowed” and could need to be
                adjusted.
              </Paragraph>
              <Paragraph>
                <ImageWrapper>
                  <Image src={Owners_Care_Back_Bowed_Neck} alt='' />
                </ImageWrapper>
                To correct neck back bow (requiring less tension on the neck, to
                relieve any back-bow on the neck), you first need to remove the
                truss rod cover plate on the headstock, and turn the truss rod
                nut (using a metric AllenKey and depending on the year your
                guitar was made, either 3mm or 4mm in size) clockwise. Each
                movement of the Allen nut should be made using small increments
                of about 1/12 of a full turn and by placing slight pressure on
                the neck each time an adjustment is made to help set the neck
                into its new position.{<br />}
                If either of the E-strings touch the 5th fret (when placing one
                finger in the first fret, and the other on the 12th fret), the
                neck still has a back bow which causes the frets to buzz when
                played at the first few frets.Fora perfect setup, the string
                should barely touch the 5th and 6th frets (when placing one
                finger on the 1st fret and the other on the 12th fret).
              </Paragraph>
              <Paragraph>
                <ImageWrapper>
                  <Image src={Owners_Care_Bowed_Neck} alt='' />
                </ImageWrapper>
                To determine if the neck has too much of a bow (too much
                relief),follow the same procedure outlined above, however by
                making adjustments to the truss rod using counter-clockwise
                motions using the Allan Key, to place more tension on the truss
                rod to achieve the proper relief. Once either of the the
                E-strings barely touches the 5th to 6th fret (again, by placing
                one finger on the string of the 1st fret and another finger on
                the 12th fret),the neck will then have the correct relief in the
                neck and truss rod.
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

export default OwnersCareRefs02;
