import styled from 'styled-components';
import Logo from '../assets/images/Logo_Hagstrom_white.svg';
import { NavLink } from 'react-router-dom';
import { Counter } from '../features/counter/Counter';
import DropDownMenu from './DropDownMenu';

const Wrapper = styled.div`
  width: 100vw;
  height: 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #111111;
  position: fixed;
  border-bottom: 2px solid black;
  top: 0;
  left: 50%;
  margin-left: -50vw;
  z-index: 10;
  font-size: 2vmin;
  font-weight: 400;
  & .active {
    border-bottom: 1px dotted #eeeeee;
  }
  a {
    margin-right: 3rem;
    text-decoration: none;
    color: #eeeeee;
    font-family: 'Bitter', serif;
  }
  @media (max-width: 768px) {
    font-size: 3vmin;
  }
  @media (max-width: 430px) {
    font-size: 3.5vmin;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #eeeeee;
  margin-left: 3rem;
`;

const Title = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  white-space: nowrap;
  font-size: 2vmin;
  font-family: 'Bitter', serif;
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
  width: 12vmin;
  height: 4vmin;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CartWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  white-space: nowrap;
`;

const AnchorGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    display: none;
  }
`;

function Header(props) {
  return (
    <Wrapper>
      <TitleWrapper>
        <LogoWrapper>
          <Image src={Logo} alt='Logo'></Image>
        </LogoWrapper>
        <Title></Title>
      </TitleWrapper>
      <CartWrapper>
        <NavLink to='/Cart' style={{ marginRight: '1rem' }}>
          <i className='fa-solid fa-cart-shopping'></i> Cart
        </NavLink>
        <Counter />
      </CartWrapper>
      <DropDownMenu />
      <AnchorGroup>
        <NavLink to='/'> Home</NavLink>
        <NavLink to='/Products'> Products</NavLink>
        <NavLink to='/ElectricGuitars'>Electric Guitars</NavLink>
        <NavLink to='/Basses'>Basses</NavLink>
        <NavLink to='/AcousticGuitars'>Acoustic Guitars</NavLink>
      </AnchorGroup>
    </Wrapper>
  );
}

export default Header;
