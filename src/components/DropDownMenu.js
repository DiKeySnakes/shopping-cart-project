import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

const DropDownContent = styled.div`
  position: absolute;
  width: 100%;
  background: #111111;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.3), 0 14px 11px rgba(0, 0, 0, 0.22);
  height: 0px;
  transition: height 1s;
  overflow: hidden;
  z-index: 10;
`;

const DropDown = styled.div`
  font-size: 2vmin;
  position: relative;
  display: inline-block;
  &:hover ${DropDownContent} {
    height: 40vmin;
    @media (max-width: 1300px) {
      height: 38vmin;
    }
    @media (max-width: 1150px) {
      height: 38vmin;
    }
    @media (max-width: 968px) {
      height: 39vmin;
    }
    @media (max-width: 868px) {
      height: 43vmin;
    }
    @media (max-width: 768px) {
      height: 50vmin;
    }
    @media (max-width: 650px) {
      height: 60vmin;
    }
    @media (max-width: 480px) {
      height: 70vmin;
    }
    @media (max-width: 350px) {
      height: 80vmin;
    }
  }
  @media (max-width: 768px) {
    font-size: 2.5vmin;
  }
  @media (max-width: 480px) {
    font-size: 3vmin;
  }
`;

const DropDownButton = styled.button`
  display: none;
  padding: 15px;
  text-align: center;
  background: #111111;
  border: none;
  width: 25vmin;
  font-size: 2vmin;
  font-family: 'Bitter', serif;
  color: #eeeeee;
  @media (max-width: 1300px) {
    display: block;
    width: 22vmin;
  }
  @media (max-width: 868px) {
    width: 25vmin;
  }
  @media (max-width: 768px) {
    font-size: 2.5vmin;
    width: 30vmin;
  }
  @media (max-width: 650px) {
    width: 35vmin;
  }
  @media (max-width: 480px) {
    font-size: 3vmin;
  }
  @media (max-width: 350px) {
    width: 40vmin;
  }
`;

const DropDownMenu = () => {
  return (
    <>
      <DropDown>
        <DropDownButton>
          <i className='fa-solid fa-bars'></i> MENU
        </DropDownButton>
        <DropDownContent>
          <Link
            to='/'
            key={nanoid()}
            style={{
              width: '100%',
              display: 'block',
              padding: '15px',
              textDecoration: 'none',
              color: '#eeeeee',
            }}>
            Home
          </Link>
          <Link
            to='/Products'
            key={nanoid()}
            style={{
              width: '100%',
              display: 'block',
              padding: '15px',
              textDecoration: 'none',
              color: '#eeeeee',
            }}>
            Products
          </Link>
          <Link
            to='/ElectricGuitars'
            key={nanoid()}
            style={{
              width: '100%',
              display: 'block',
              padding: '15px',
              textDecoration: 'none',
              color: '#eeeeee',
            }}>
            Electric Guitars
          </Link>
          <Link
            to='/Basses'
            key={nanoid()}
            style={{
              width: '100%',
              display: 'block',
              padding: '15px',
              textDecoration: 'none',
              color: '#eeeeee',
            }}>
            Basses
          </Link>
          <Link
            to='/AcousticGuitars'
            key={nanoid()}
            style={{
              width: '100%',
              display: 'block',
              padding: '15px',
              textDecoration: 'none',
              color: '#eeeeee',
            }}>
            Acoustic Guitars
          </Link>
          <Link
            to='/Cart'
            key={nanoid()}
            style={{
              width: '100%',
              display: 'block',
              padding: '15px',
              textDecoration: 'none',
              color: '#eeeeee',
            }}>
            <i className='fa-solid fa-cart-shopping'></i> Cart
          </Link>
        </DropDownContent>
      </DropDown>
    </>
  );
};

export default DropDownMenu;
