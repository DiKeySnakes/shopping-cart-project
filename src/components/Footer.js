import styled from 'styled-components';

const Wrapper = styled.footer`
  width: 100vw;
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
  color: #eeeeee;
  background-color: #ff5f00;
  border-top: 2px solid #00092c;
  font-size: calc(0.3rem + 2vmin);
  font-family: 'Kalam', cursive;
  text-shadow: 4px 3px 0px #00092c;
  a {
    text-decoration: none;
    color: #eeeeee;
  }
  a:hover {
    text-decoration: underline;
    color: #eeeeee;
  }
  i {
    color: #eeeeee;
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
