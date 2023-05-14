import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  font-size: 12px;
  color: #333333;
  padding: 20px 0px;
  text-align: left;
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

const CreditsFlex = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
    line-height: 150%;
    color: #999;
    text-align: left;
    padding: 0 0 12px;
    font-family: 'Signika Negative', sans-serif;
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

const Credits = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <CreditsFlex>
            <p>
              Hagstrom Guitars - Stockholm, Sweden.{<br />} Copyright © 2023 .
              All rights reserved.
            </p>
          </CreditsFlex>
          <CreditsFlex>
            <p style={{ fontSize: '1.2em' }}>
              <Link>ENGLISH</Link> |{' '}
              <Link style={{ color: '#999' }}>DEUTSCH</Link> |{' '}
              <Link style={{ color: '#999' }}>FRANÇAIS</Link> |{' '}
              <Link style={{ color: '#999' }}>NEDERLANDS</Link>
            </p>
          </CreditsFlex>
          <CreditsFlex>
            <p>
              <Link style={{ color: '#999' }}>Imprint</Link>{' '}
              <Link style={{ color: '#999' }}>Privacy</Link>{' '}
              <Link style={{ color: '#999' }}>Contact</Link>
            </p>
          </CreditsFlex>
        </Container>
      </Wrapper>
    </>
  );
};

export default Credits;
