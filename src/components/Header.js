import styled from 'styled-components';
import Logo from '../assets/images/yellow_feather.png';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100vw;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #b20600;
  position: fixed;
  border-bottom: 2px solid black;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  top: 0;
  left: 50%;
  margin-left: -50vw;
  z-index: 10;
  font-size: calc(1.5rem + 2vmin);
  @media (max-width: 650px) {
    font-size: calc(1rem + 2vmin);
  }
  @media (max-width: 430px) {
    font-size: calc(0.5rem + 2vmin);
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.7);
  margin-left: 3rem;
`;

const Title = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  white-space: nowrap;
  font-size: calc(1.5rem + 2vmin);
  font-family: 'Great Vibes', cursive;
  margin-left: 0.5rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const LogoWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-right: 3rem;
  font-size: calc(1.5rem + 2vmin);
  font-family: 'Great Vibes', cursive;
  background-color: #b20600;
  border: none;
  cursor: pointer;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.9);
  @media (max-width: 650px) {
    font-size: calc(1rem + 2vmin);
  }
  @media (max-width: 430px) {
    font-size: calc(0.5rem + 2vmin);
  }
`;

function Header(props) {
  return (
    <Wrapper>
      <TitleWrapper>
        <LogoWrapper>
          <Image src={Logo} alt='Logo'></Image>
        </LogoWrapper>
        <Title>Super Guitar Shop</Title>
      </TitleWrapper>
      <ButtonGroup>
        <NavLink to='/'>
          <Button onClick={props.onClick}>
            <i className='fa-solid fa-house'></i> Home
          </Button>
        </NavLink>
        <NavLink to='/Shop'>
          <Button onClick={props.onClick}>
            <i className='fa-solid fa-cart-shopping'></i> Shop
          </Button>
        </NavLink>
        <NavLink to='/Contacts'>
          <Button onClick={props.onClick}>
            <i className='fa-solid fa-address-card'></i> Contacts
          </Button>
        </NavLink>
      </ButtonGroup>
    </Wrapper>
  );
}

export default Header;
