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

const OwnersCareRefs01 = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>HOW TO CARE FOR YOUR GUITAR</IntroTitle>
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
            <NavLink>How to care for your guitar</NavLink>
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
                How to care for your guitar
              </MediaTitle>
              <Paragraph>
                Proper care of your Hagstrom instrument is basically a matter of
                common sense. It requires very little time and energy to keep
                your guitar in proper condition, and your efforts will pay off
                in the years to come.
              </Paragraph>
              <MediaTitle key={nanoid()}>Fingerboard and Strings</MediaTitle>
              <Paragraph>
                It's important to take good care of your guitar to ensure that
                it continues to perform at its best. The following instructions
                are provided for cleaning and oiling the fretboard of your
                Hagstrom instrument.
              </Paragraph>
              <Paragraph>
                Regularly wiping the fingerboard and strings clean after each
                playing session is a good practice, as it can help to remove
                dirt and perspiration acids that can build up and shorten the
                lifespan of the strings. When oiling the fretboard, we recommend
                the use of Paraffin oil or Fret Butter™ by DMI Guitar Labs.
              </Paragraph>
              <Paragraph>
                <ol>
                  <li>
                    Using Paraffin oil: Remove the old strings. Using a soft,
                    lint-free cloth, apply a small amount of oil to the
                    fretboard, and gently rub it in around the first fret area,
                    working your way through each fret to the top of the
                    fretboard. Allow the oil to sit for a minute, then wipe it
                    dry with a clean cloth. For stubborn grime and dirt, you can
                    use a soft-bristled toothbrush to help remove it. After the
                    oiling application, your guitar can be strung with new
                    strings.
                  </li>
                  <li>
                    Using DMI Guitar Labs – Fret Butter™: Your Hagstrom Guitar
                    was pre-treated with Fret Butter™” prior to leaving our
                    factory. If you choose to use Fret Butter™, by first
                    removing the old strings, simply apply it to the fretboard
                    using the supplied penetrated cloth, and gently apply the
                    solution to the entire length of the neck. Allow the Fret
                    Butter™ to penetrate into the fretboard for approximately
                    one minute. Then remove any excess solution and built-up
                    grime by rubbing a clean terry cloth up and down along the
                    entire length of the fretboard. You can also rub each
                    individual fret perpendicularly with the terry cloth to
                    clean the surface of each of the frets for an amazing feel
                    and shine for your next performance.
                  </li>
                </ol>
              </Paragraph>
              <Paragraph>
                It's important to note that the use of Lemon oil is not
                recommended, as it could negatively affect the fret slots
                (resulting in uneven frets) and even miscolor your fretboard
                over time. By following these instructions, you can help to
                maintain the longevity and quality of your Hagstrom instrument.
              </Paragraph>
              <MediaTitle key={nanoid()}>Plating of hardware</MediaTitle>
              <Paragraph>
                Perspiration acid from your fingers and hands can also dull the
                beauty of the metal plating of the hardware on your instrument.
                While you are wiping the fingerboard and strings, it is advised
                to also wipe off the hardware at the same time using a clean
                cloth.
              </Paragraph>
              <MediaTitle key={nanoid()}>Care of Gloss Finishes</MediaTitle>
              <Paragraph>
                The high-quality polyester clear coat finish of your instrument
                can be cleaned as necessary using a number of different guitar
                care finish products on the market. The Polyester that we use is
                very durable and will provide you with years of high gloss
                shine.
              </Paragraph>
              <MediaTitle key={nanoid()}>Care of Satin Finishes</MediaTitle>
              <Paragraph>
                As Satin finishes can tend to become glossy over time (mainly
                due to people cleaning their instrument in the same manner as a
                gloss finish), it is important to clean and treat Satin finishes
                differently than Gloss finished instruments. There are a number
                of common household sponges available on the market (commonly
                available at hardware stores) such as “Magic Eraser Stain
                Remover pads” that are perfect to clean your Hagstrom guitar
                that has a Satin finish. Simply by wiping these pads over the
                satin finish will clean any dirt and debris from your
                instrument, but will also bring back the guitars original look
                just at the time that it was shipped from our factory line.
              </Paragraph>
              <MediaTitle key={nanoid()}>Tuning Machines</MediaTitle>
              <Paragraph>
                The tuning machines on your guitar require no maintenance, as
                each tuners worm gear and thread are sealed at the back of the
                tuner. Tuner button tension can be adjusted using a small
                Philips screwdriver if buttons feel loose over time. Only apply
                slight 1/16 turn movements (with extreme sensitivity and
                caution) so return to a firm tuning ease and smoothness of each
                tuner. Again, use extreme caution as to not damage the Hagstrom
                button. If you are unsure of this method, always consult a
                professional guitar technician for such adjustments.
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

export default OwnersCareRefs01;
