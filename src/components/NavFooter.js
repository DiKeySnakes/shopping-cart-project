import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HagstromLogoBlack from '../assets/images/Logo_Hagstrom_black.svg';
import FindUsOnFacebook from '../assets/images/FindUsOnFacebook_320.png';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #bdbbb9;
  font-size: 14px;
  color: #333333;
  padding: 50px 0 15px;
  text-align: left;
  margin-top: 3rem;
`;

const Container = styled.div`
  width: 1170px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
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
  }
`;

const FooterFlex = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-right: 8%;
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

const FooterHeadingLogo = styled.div`
  background: url(${HagstromLogoBlack}) no-repeat;
  background-size: contain;
  height: 32px;
  text-indent: -9999px;
  width: 94px;
  margin: 16px 0 8px;
`;

const FooterHeading = styled.h4`
  font: 22px/32px 'Bitter', serif;
  margin: 16px 0 8px;
`;

const FooterHeadingLevel2 = styled.h5`
  font-family: 'Signika Negative', sans-serif;
  margin: 16px 0 8px;
  font-size: 1.2em;
  color: #333333;
  font-weight: normal;
`;

const FacebookWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const FacebookFind = styled.div`
  display: block;
  float: right;
  width: 160px;
  height: 42px;
  margin-bottom: 1em;
  background: transparent url(${FindUsOnFacebook}) no-repeat 0 0;
  &:hover {
    background: transparent url(${FindUsOnFacebook}) no-repeat 0 20%;
  }
`;

const NavFooter = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <FooterFlex>
            <ul>
              <li>
                <Link>
                  <FooterHeadingLogo />
                </Link>
              </li>
              <li>
                <Link>News</Link>
              </li>
              <li>
                <Link>Artists</Link>
              </li>
            </ul>
            <FooterHeadingLevel2>Stories</FooterHeadingLevel2>
            <ul>
              <li>
                <Link>Hagstrom History</Link>
              </li>
            </ul>
            <FooterHeadingLevel2>Your Hagstrom</FooterHeadingLevel2>
            <ul>
              <li>
                <Link>International Distributors</Link>
              </li>
              <li>
                <Link>Store Locator</Link>
              </li>
              <li>
                <Link>Instrument Archive</Link>
              </li>
              <li>
                <Link>Owners Care</Link>
              </li>
            </ul>
          </FooterFlex>
          <FooterFlex>
            <FooterHeading>Guitars</FooterHeading>
            <ul>
              <li>
                <Link>Signature</Link>
              </li>
              <li>
                <Link>Artist Project</Link>
              </li>
              <li>
                <Link>Fantomen</Link>
              </li>
              <li>
                <Link>Retroscape</Link>
              </li>
              <li>
                <Link>Super Swede</Link>
              </li>
              <li>
                <Link>Swede</Link>
              </li>
              <li>
                <Link>Ultra Max</Link>
              </li>
              <li>
                <Link>Ultra Swede</Link>
              </li>
              <li>
                <Link>Alvar</Link>
              </li>
              <li>
                <Link>Super Viking®</Link>
              </li>
              <li>
                <Link>Viking®</Link>
              </li>
              <li>
                <Link>Jazz Models</Link>
              </li>
            </ul>
          </FooterFlex>
          <FooterFlex>
            <FooterHeading>Basses</FooterHeading>
            <ul>
              <li>
                <Link>Super Swede</Link>
              </li>
              <li>
                <Link>Swede</Link>
              </li>
              <li>
                <Link>Viking®</Link>
              </li>
              <li>
                <Link>RetroScape</Link>
              </li>
            </ul>
          </FooterFlex>
          <FooterFlex>
            <FooterHeading>Acoustic Guitars</FooterHeading>
            <ul>
              <li>
                <Link>Orsa</Link>
              </li>
              <li>
                <Link>Elfdalia II</Link>
              </li>
              <li>
                <Link>Mora II</Link>
              </li>
              <li>
                <Link>Siljan II</Link>
              </li>
              <li>
                <Link>Seafarer II</Link>
              </li>
            </ul>
          </FooterFlex>
          <FacebookWrapper>
            <a
              href='https://www.facebook.com/hagstromguitarsofsweden/'
              target='_blank'
              rel='noopener noreferrer'>
              <FacebookFind />
            </a>
          </FacebookWrapper>
        </Container>
      </Wrapper>
    </>
  );
};

export default NavFooter;
