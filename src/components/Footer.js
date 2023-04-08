import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  margin-top: 4rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #333333;
  background-color: #bdbbb9;
  font-size: calc(0.3rem + 2vmin);
  font-family: 'Bitter', serif;
  a {
    text-decoration: none;
    color: #333333;
  }
  a:hover {
    text-decoration: underline;
    color: #333333;
  }
  i {
    color: #333333;
    transition: transform 0.3s ease-in-out;
  }
  i:hover {
    transform: rotate(360deg) scale(1.2);
  }
`;

function Footer() {
  return (
    <Wrapper>
      <p>
        Created by DiKeySnakes for
        <a
          href='https://www.theodinproject.com'
          target='_blank'
          rel='noopener noreferrer'>
          {' '}
          The Odin Project
        </a>{' '}
        curriculum
      </p>
      <p>
        Copyright © DiKeySnakes 2023
        <a
          href='https://github.com/DiKeySnakes/shopping-cart-project'
          target='_blank'
          rel='noopener noreferrer'>
          {' '}
          <i className='fa-brands fa-github'></i>
        </a>
      </p>
    </Wrapper>
  );
}

export default Footer;
