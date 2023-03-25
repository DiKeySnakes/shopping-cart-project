import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -50vw;
  z-index: 10;
  color: #f9f5eb;
  background-color: #002b5b;
  font-size: calc(0.3rem + 2vmin);
  font-family: 'Handlee', cursive;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.9);
  a {
    text-decoration: none;
    color: #f9f5eb;
  }
  a:hover {
    text-decoration: underline;
    color: #f9f5eb;
  }
  i {
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
