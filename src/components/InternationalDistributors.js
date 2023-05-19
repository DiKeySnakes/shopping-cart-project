import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
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
  margin-bottom: 2rem;
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

const MainTitle = styled.h2`
  display: flex;
  flex-direction: row;
  font-size: 3.2vmin;
  font-weight: 400;
  line-height: 110%;
  font-family: 'Bitter', serif;
  color: #333333;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 16px;
  @media (max-width: 800px) {
    font-size: 5.2vmin;
  }
  @media (max-width: 350px) {
    font-size: 7.2vmin;
  }
`;

const Container = styled.div`
  width: 1170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 1200px) {
    width: 1170px;
  }
  @media (max-width: 992px) {
    width: 970px;
  }
  @media (max-width: 768px) {
    width: 750px;
    flex-direction: column;
  }
`;

const AddressFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding-left: 15px;
  padding-right: 15px;
  li {
    line-height: 200%;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: #333333;
    font-family: 'Signika Negative', sans-serif;
  }
  a:hover {
    border-bottom: 1px dotted #333333;
  }
`;

const Title = styled.h3`
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

const Paragraph = styled.p`
  color: #333333;
  font-family: 'Signika Negative', sans-serif;
  font-size: 1.7vmin;
  padding: 0 0 2vmin;
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

const InternationalDistributors = () => {
  return (
    <Wrapper key={nanoid()}>
      <IntroBackground key={nanoid()}>
        <IntroTitle key={nanoid()}>INTERNATIONAL DISTRIBUTORS</IntroTitle>
      </IntroBackground>
      <NavContainer>
        <NavWrapper>
          <NavLinks>
            <NavLink to='/'>Home</NavLink>
            <span>/</span>
            <NavLink>Your Hagstrom</NavLink>
            <span>/</span>
            <NavLink>International Distributors</NavLink>
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
      <Container>
        <MainTitle>EUROPE</MainTitle>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Austria</Title>
          <Paragraph key={nanoid()}>Musik Meyer GmbH</Paragraph>
          <Paragraph key={nanoid()}>Industriestraße 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.musik-meyer.de/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer.de
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Belgium</Title>
          <Paragraph key={nanoid()}>Musik Meyer Benelux</Paragraph>
          <Paragraph key={nanoid()}>Industriestraße 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.musik-meyer-benelux.com/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer-benelux.com
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Croatia</Title>
          <Paragraph key={nanoid()}>
            MUSIK MEYER Central Europe Division of MUSIK
          </Paragraph>
          <Paragraph key={nanoid()}>MEYER GmbH</Paragraph>
          <Paragraph key={nanoid()}>Industriestraße 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='https://www.musik-meyer-ce.com/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer-ce.com
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Czech Republic</Title>
          <Paragraph key={nanoid()}>
            MUSIK MEYER Central Europe Division of MUSIK
          </Paragraph>
          <Paragraph key={nanoid()}>MEYER GmbH</Paragraph>
          <Paragraph key={nanoid()}>Industriestraße 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='https://www.musik-meyer-ce.com/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer-ce.com
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Denmark</Title>
          <Paragraph key={nanoid()}>
            Max Music (a division of EM Nordic Denmark A/S)
          </Paragraph>
          <Paragraph key={nanoid()}>Hedegaardsvej 88</Paragraph>
          <Paragraph key={nanoid()}>2300</Paragraph>
          <Paragraph key={nanoid()}>Copenhagen S</Paragraph>
          <Paragraph key={nanoid()}>Denmark</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.emnordic.dk/'
              target='_blank'
              rel='noopener noreferrer'>
              www.emnordic.dk
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Estonia</Title>
          <Paragraph key={nanoid()}>
            Max Music (a division of EM Nordic Finland Oy)
          </Paragraph>
          <Paragraph key={nanoid()}>Ylä-Mlamintori 6 A</Paragraph>
          <Paragraph key={nanoid()}>00700</Paragraph>
          <Paragraph key={nanoid()}>Helsinki</Paragraph>
          <Paragraph key={nanoid()}>Finland</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.emnordic.fi/'
              target='_blank'
              rel='noopener noreferrer'>
              www.emnordic.fi
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Finland</Title>
          <Paragraph key={nanoid()}>
            Max Music (a division of EM Nordic Finland Oy)
          </Paragraph>
          <Paragraph key={nanoid()}>Ylä-Mlamintori 6 A</Paragraph>
          <Paragraph key={nanoid()}>00700</Paragraph>
          <Paragraph key={nanoid()}>Helsinki</Paragraph>
          <Paragraph key={nanoid()}>Finland</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.emnordic.fi/'
              target='_blank'
              rel='noopener noreferrer'>
              www.emnordic.fi
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>France</Title>
          <Paragraph key={nanoid()}>ADAGIO</Paragraph>
          <Paragraph key={nanoid()}>Av. la Ferreria</Paragraph>
          <Paragraph key={nanoid()}>08110</Paragraph>
          <Paragraph key={nanoid()}>Montcada i Reixac</Paragraph>
          <Paragraph key={nanoid()}>Spain</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='https://www.adagiofrance.fr/'
              target='_blank'
              rel='noopener noreferrer'>
              www.adagiofrance.fr
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Germany</Title>
          <Paragraph key={nanoid()}>Musik Meyer GmbH</Paragraph>
          <Paragraph key={nanoid()}>Industriestraße 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.musik-meyer.de/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer.de
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Hungary</Title>
          <Paragraph key={nanoid()}>
            MUSIK MEYER Central Europe Division of MUSIK
          </Paragraph>
          <Paragraph key={nanoid()}>MEYER GmbH</Paragraph>
          <Paragraph key={nanoid()}>Industriestrasse 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='https://www.musik-meyer-ce.com/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer-ce.com
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Iceland</Title>
          <Paragraph key={nanoid()}>
            Max Music (a division of EM Nordic AB)
          </Paragraph>
          <Paragraph key={nanoid()}>Box 5025</Paragraph>
          <Paragraph key={nanoid()}>141 05</Paragraph>
          <Paragraph key={nanoid()}>Kungens Kurva</Paragraph>
          <Paragraph key={nanoid()}>Sweden</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.emnordic.se/'
              target='_blank'
              rel='noopener noreferrer'>
              www.emnordic.se
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Ireland</Title>
          <Paragraph key={nanoid()}>Rosetti Limited</Paragraph>
          <Paragraph key={nanoid()}>
            6 Banters Lane Business Park, Main Road
          </Paragraph>
          <Paragraph key={nanoid()}>Great Leighs, Chelmsford</Paragraph>
          <Paragraph key={nanoid()}>CM3 1QX</Paragraph>
          <Paragraph key={nanoid()}>United Kingdom</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.rosetti.co.uk/'
              target='_blank'
              rel='noopener noreferrer'>
              www.rosetti.co.uk
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Italy</Title>
          <Paragraph key={nanoid()}>ADAGIO</Paragraph>
          <Paragraph key={nanoid()}>Av. la Ferreria</Paragraph>
          <Paragraph key={nanoid()}>08110</Paragraph>
          <Paragraph key={nanoid()}>Montcada i Reixac</Paragraph>
          <Paragraph key={nanoid()}>Spain</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='https://www.adagioitalia.it/'
              target='_blank'
              rel='noopener noreferrer'>
              www.adagioitalia.it
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Latvia</Title>
          <Paragraph key={nanoid()}>
            Max Music (a division of EM Nordic Finland Oy)
          </Paragraph>
          <Paragraph key={nanoid()}>Ylä-Mlamintori 6 A</Paragraph>
          <Paragraph key={nanoid()}>00700</Paragraph>
          <Paragraph key={nanoid()}>Helsinki</Paragraph>
          <Paragraph key={nanoid()}>Finland</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.emnordic.fi/'
              target='_blank'
              rel='noopener noreferrer'>
              www.emnordic.fi
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Lithuania</Title>
          <Paragraph key={nanoid()}>
            Max Music (a division of EM Nordic Finland Oy)
          </Paragraph>
          <Paragraph key={nanoid()}>Ylä-Mlamintori 6 A</Paragraph>
          <Paragraph key={nanoid()}>00700</Paragraph>
          <Paragraph key={nanoid()}>Helsinki</Paragraph>
          <Paragraph key={nanoid()}>Finland</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.emnordic.fi/'
              target='_blank'
              rel='noopener noreferrer'>
              www.emnordic.fi
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Luxembourg</Title>
          <Paragraph key={nanoid()}>Musik Meyer Benelux</Paragraph>
          <Paragraph key={nanoid()}>Industriestraße 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.musik-meyer-benelux.com/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer-benelux.com
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Netherlands</Title>
          <Paragraph key={nanoid()}>Musik Meyer Benelux</Paragraph>
          <Paragraph key={nanoid()}>Industriestraße 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.musik-meyer-benelux.com/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer-benelux.com
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Norway</Title>
          <Paragraph key={nanoid()}>
            Max Music (a division of EM Nordic Norway AS)
          </Paragraph>
          <Paragraph key={nanoid()}>Box 150</Paragraph>
          <Paragraph key={nanoid()}>1319</Paragraph>
          <Paragraph key={nanoid()}>Bekkestua</Paragraph>
          <Paragraph key={nanoid()}>Norway</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.emnordic.no/'
              target='_blank'
              rel='noopener noreferrer'>
              www.emnordic.no
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Poland</Title>
          <Paragraph key={nanoid()}>
            MUSIK MEYER Central Europe Division of MUSIK
          </Paragraph>
          <Paragraph key={nanoid()}>MEYER GmbH</Paragraph>
          <Paragraph key={nanoid()}>Industriestrasse 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='https://www.musik-meyer-ce.com/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer-ce.com
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Portugal</Title>
          <Paragraph key={nanoid()}>ADAGIO</Paragraph>
          <Paragraph key={nanoid()}>Av. la Ferreria</Paragraph>
          <Paragraph key={nanoid()}>08110</Paragraph>
          <Paragraph key={nanoid()}>Montcada i Reixac</Paragraph>
          <Paragraph key={nanoid()}>Spain</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.adagiodistribucion.es/'
              target='_blank'
              rel='noopener noreferrer'>
              www.adagiodistribucion.es
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Slovakia</Title>
          <Paragraph key={nanoid()}>
            MUSIK MEYER Central Europe Division of MUSIK
          </Paragraph>
          <Paragraph key={nanoid()}>MEYER GmbH</Paragraph>
          <Paragraph key={nanoid()}>Industriestrasse 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='https://www.musik-meyer-ce.com/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer-ce.com
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Slovenia</Title>
          <Paragraph key={nanoid()}>
            MUSIK MEYER Central Europe Division of MUSIK
          </Paragraph>
          <Paragraph key={nanoid()}>MEYER GmbH</Paragraph>
          <Paragraph key={nanoid()}>Industriestrasse 20</Paragraph>
          <Paragraph key={nanoid()}>35041</Paragraph>
          <Paragraph key={nanoid()}>Marburg</Paragraph>
          <Paragraph key={nanoid()}>Germany</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='https://www.musik-meyer-ce.com/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musik-meyer-ce.com
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Spain</Title>
          <Paragraph key={nanoid()}>NUEVA LETUSA</Paragraph>
          <Paragraph key={nanoid()}>Av. la Ferreria</Paragraph>
          <Paragraph key={nanoid()}>08110</Paragraph>
          <Paragraph key={nanoid()}>Montcada i Reixac</Paragraph>
          <Paragraph key={nanoid()}>Spain</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.nuevaletusa.es/'
              target='_blank'
              rel='noopener noreferrer'>
              www.nuevaletusa.es
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Sweden</Title>
          <Paragraph key={nanoid()}>
            Max Music (a division of EM Nordic AB)
          </Paragraph>
          <Paragraph key={nanoid()}>Box 5025</Paragraph>
          <Paragraph key={nanoid()}>141 05</Paragraph>
          <Paragraph key={nanoid()}>Kungens Kurva</Paragraph>
          <Paragraph key={nanoid()}>Sweden</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.emnordic.se/'
              target='_blank'
              rel='noopener noreferrer'>
              www.emnordic.se
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Switzerland</Title>
          <Paragraph key={nanoid()}>Musik Meyer Schweiz</Paragraph>
          <Paragraph key={nanoid()}>Spitalstraße 74</Paragraph>
          <Paragraph key={nanoid()}>8952</Paragraph>
          <Paragraph key={nanoid()}>Schlieren</Paragraph>
          <Paragraph key={nanoid()}>Switzerland</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.musikmeyer.ch/'
              target='_blank'
              rel='noopener noreferrer'>
              www.musikmeyer.ch
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>United Kingdom</Title>
          <Paragraph key={nanoid()}>Rosetti Limited</Paragraph>
          <Paragraph key={nanoid()}>
            6 Banters Lane Business Park, Main Road
          </Paragraph>
          <Paragraph key={nanoid()}>Great Leighs, Chelmsford</Paragraph>
          <Paragraph key={nanoid()}>CM3 1QX</Paragraph>
          <Paragraph key={nanoid()}>United Kingdom</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.rosetti.co.uk/'
              target='_blank'
              rel='noopener noreferrer'>
              www.rosetti.co.uk
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <MainTitle>NORTH AMERICA</MainTitle>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Canada</Title>
          <Paragraph key={nanoid()}>Erikson Music</Paragraph>
          <Paragraph key={nanoid()}>21000 Trans Canada Highway</Paragraph>
          <Paragraph key={nanoid()}>Baie d'Urfe, Quebec</Paragraph>
          <Paragraph key={nanoid()}>H9X 4B7</Paragraph>
          <Paragraph key={nanoid()}>Canada</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://eriksonmusic.com/'
              target='_blank'
              rel='noopener noreferrer'>
              eriksonmusic.com
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>United States</Title>
          <Paragraph key={nanoid()}>KMC Music Inc.</Paragraph>
          <Paragraph key={nanoid()}>310 Newberry Road</Paragraph>
          <Paragraph key={nanoid()}>Bloomfield, CT</Paragraph>
          <Paragraph key={nanoid()}>06002-9005</Paragraph>
          <Paragraph key={nanoid()}>United States</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.kmcmusic.com/'
              target='_blank'
              rel='noopener noreferrer'>
              www.kmcmusic.com
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <MainTitle>SOUTH AMERICA</MainTitle>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Argentina</Title>
          <Paragraph key={nanoid()}>BREYER HNOS S.A.</Paragraph>
          <Paragraph key={nanoid()}>Rodriguez Peña 470</Paragraph>
          <Paragraph key={nanoid()}>C1020ADJ</Paragraph>
          <Paragraph key={nanoid()}>Capital Federal (Buenos Aires)</Paragraph>
          <Paragraph key={nanoid()}>Argentina</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://breyerinstrumentos.com.ar/'
              target='_blank'
              rel='noopener noreferrer'>
              breyerinstrumentos.com.ar
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <MainTitle>AUSTRALIA</MainTitle>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Australia</Title>
          <Paragraph key={nanoid()}>Pro Music Pty. Ltd.</Paragraph>
          <Paragraph key={nanoid()}>134 Mica Street</Paragraph>
          <Paragraph key={nanoid()}>P.O. Box 291</Paragraph>
          <Paragraph key={nanoid()}>Carole Park, Queensland</Paragraph>
          <Paragraph key={nanoid()}>4300</Paragraph>
          <Paragraph key={nanoid()}>Australia</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='https://www.promusicaustralia.com.au/brand/hagstrom-guitars/'
              target='_blank'
              rel='noopener noreferrer'>
              www.promusicaustralia.com.au
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
      <Container>
        <MainTitle>ASIA</MainTitle>
      </Container>
      <Container>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>China</Title>
          <Paragraph key={nanoid()}>
            Guangzhou Fast Musical Instr. Co. Ltd
          </Paragraph>
          <Paragraph key={nanoid()}>1st Flr - No. 6 Building,</Paragraph>
          <Paragraph key={nanoid()}>East Main Street,</Paragraph>
          <Paragraph key={nanoid()}>Lishui Twn, Nanhai, Foshan,</Paragraph>
          <Paragraph key={nanoid()}>Guangzhou</Paragraph>
          <Paragraph key={nanoid()}>China</Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Malaysia</Title>
          <Paragraph key={nanoid()}>
            Music Connoisseur Malaysia Johor (Apptimistic)
          </Paragraph>
          <Paragraph key={nanoid()}>No. 42, Jalan Eko Botani 3/6,</Paragraph>
          <Paragraph key={nanoid()}>
            Taman Eko Botani (Eco Botanic City),
          </Paragraph>
          <Paragraph key={nanoid()}>Iskandar Puteri,</Paragraph>
          <Paragraph key={nanoid()}>Johor</Paragraph>
          <Paragraph key={nanoid()}>Malaysia</Paragraph>
          <Paragraph key={nanoid()}>79100</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.music-co.my/'
              target='_blank'
              rel='noopener noreferrer'>
              www.music-co.my
            </a>
          </Paragraph>
        </AddressFlex>
        <AddressFlex key={nanoid()}>
          <Title key={nanoid()}>Singapore</Title>
          <Paragraph key={nanoid()}>Music Connoisseur (Apptimistic)</Paragraph>
          <Paragraph key={nanoid()}>5 Coleman St. #81-15,</Paragraph>
          <Paragraph key={nanoid()}>Excelsior Shopping Center</Paragraph>
          <Paragraph key={nanoid()}>Singapore</Paragraph>
          <Paragraph key={nanoid()}>179805</Paragraph>
          <Paragraph key={nanoid()}>
            <a
              href='http://www.music-co.sg/'
              target='_blank'
              rel='noopener noreferrer'>
              www.music-co.sg
            </a>
          </Paragraph>
        </AddressFlex>
      </Container>
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

export default InternationalDistributors;
