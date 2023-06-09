import ScrollToTop from 'react-scroll-to-top';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';
import { ReactComponent as MySVG } from '/home/dikeysnakes/repos/shopping-cart-project/src/assets/ScrollIcon.svg';
import CustomHeader from '../../components/CustomHeader';
import Acoustic_Guitars_Header from '/home/dikeysnakes/repos/shopping-cart-project/src/assets/images/Acoustic_Guitars_Header.jpg';
import {
  selectCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from './cartSlice';
import { decrement } from '../counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { Table } from '@react-to-styled/table';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
`;

const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 2vmin;
  font-weight: 400;
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

const IntroBackground = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: url(${Acoustic_Guitars_Header});
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

const CardContainer = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  @media (max-width: 1650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  max-width: 70vmin;
  min-height: 60vmin;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 2px dotted #111111;
  border-radius: 1rem;
  overflow: hidden;
  object-fit: contain;
  @media (max-width: 1024px) {
    max-width: 100%;
    min-height: 60vmin;
  }
`;

const ImageWrapper = styled.div`
  width: 25vmin;
  height: 50vmin;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  font-family: 'Signika Negative', sans-serif;
  font-size: 2.5vmin;
  color: #333333;
  @media (max-width: 1024px) {
    font-size: 3.2vmin;
  }
  @media (max-width: 768px) {
    font-size: 4vmin;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

const ProductsButtonWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  font-family: 'Bitter', serif;
  font-weight: 400;
  font-size: 3vmin;
  color: #333333;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: 1px dotted #333333;
  border-radius: 0.5rem;
  @media (max-width: 1024px) {
    font-size: 3.5vmin;
  }
  @media (max-width: 768px) {
    font-size: 4vmin;
  }
`;

const ReceiptWrapper = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Receipt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  border: 2px dotted #111111;
  border-radius: 1rem;
  overflow-x: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Subtotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: right;
`;

const PrintButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  p {
    font-size: calc(0.5rem + 2vmin);
    @media (max-width: 650px) {
      font-size: calc(1rem + 2vmin);
    }
    @media (max-width: 430px) {
      font-size: calc(0.5rem + 2vmin);
    }
  }
`;

const PrintButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: calc(0.5rem + 2vmin);
  background-color: transparent;
  font-family: 'Bitter', serif;
  border: none;
  cursor: pointer;
  color: #333333;
  @media (max-width: 650px) {
    font-size: calc(1rem + 2vmin);
  }
  @media (max-width: 430px) {
    font-size: calc(0.5rem + 2vmin);
  }
`;

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  console.log('cart:', cart);

  const handleRemoveItem = (e) => {
    const target = e.target;
    const itemId = target.parentNode.parentNode.parentNode.id;
    console.log('itemId:', itemId);
    dispatch(removeItem(itemId));
    dispatch(decrement());
  };

  const handleIncrementQuantity = (e) => {
    const target = e.target;
    const itemId = target.parentNode.parentNode.parentNode.id;
    console.log('itemId:', itemId);
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrementQuantity = (e) => {
    const target = e.target;
    const itemId = target.parentNode.parentNode.parentNode.id;
    console.log('itemId:', itemId);
    dispatch(decrementQuantity(itemId));
  };

  const columns = {
    brand: {
      header: 'Brand',
      Cell: ({ data: { brand } }) => <span>{brand}</span>,
    },
    model: {
      header: 'Model',
      Cell: ({ data: { name } }) => <span>{name}</span>,
    },
    color: {
      header: 'Color',
      Cell: ({ data: { color } }) => <span>{color}</span>,
    },
    quantity: {
      header: 'Quantity',
      Cell: ({ data: { quantity } }) => <span>{quantity}</span>,
    },
    price: {
      header: 'Unit Price',
      Cell: ({ data: { price } }) => <span>${price}</span>,
    },
    total: {
      header: 'Total Price',
      Cell: ({ data: { quantity }, data: { price } }) => (
        <span>${quantity * price}</span>
      ),
    },
  };

  const data = cart;

  const columns2 = {
    title: {
      header: 'Title',
      Cell: ({ data: { title } }) => <span>{title}</span>,
    },
    price: {
      header: 'Price',
      Cell: ({ data: { price } }) => <span>${price}</span>,
    },
  };

  const data2 = [
    { title: 'Sales tax (Montana, US)', price: 0.0 },
    { title: 'Shipping', price: 0.0 },
  ];

  const componentRef = useRef();
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Wrapper>
      <IntroBackground>
        <IntroTitle>HAGSTROM GUITARS</IntroTitle>
      </IntroBackground>
      <NavContainer>
        <NavWrapper>
          <NavLinks>
            <NavLink to='/'>Home</NavLink>
            <span>/</span>
            <NavLink>Cart</NavLink>
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
      <CustomHeader />
      <PrintButtonWrapper>
        <p>Click the button to print your Receipt</p>
        <PrintButton onClick={handlePrintClick}>
          <i className='fa-solid fa-print'></i> Print
        </PrintButton>
      </PrintButtonWrapper>
      <ReceiptWrapper ref={componentRef}>
        <Receipt>
          <h1 style={{ fontSize: '5vmin' }}>Order № {Date.now()}</h1>
          <Table data={data} columns={columns} style={{ fontSize: '2vmin' }} />
          <Subtotal>
            <h1 style={{ fontSize: '5vmin' }}>
              Subtotal: $
              {cart.reduce((result, item) => {
                return result + item.price * item.quantity;
              }, 0)}
            </h1>
          </Subtotal>
          <Table
            data={data2}
            columns={columns2}
            style={{ fontSize: '2vmin' }}
          />
          <Subtotal>
            <h1 style={{ fontSize: '5vmin' }}>
              Order total: $
              {cart.reduce((result, item) => {
                return result + item.price * item.quantity;
              }, 0)}
            </h1>
          </Subtotal>
        </Receipt>
      </ReceiptWrapper>
      <CustomHeader />
      <CardContainer>
        {cart.map((elem) => {
          return (
            <Card key={nanoid()} id={elem.id}>
              <ImageWrapper key={nanoid()}>
                <Image key={nanoid()} src={elem.src} alt={elem.name} />
              </ImageWrapper>
              <DescriptionWrapper>
                <Description>Brand: {elem.brand}</Description>
                <Description>Model: {elem.name}</Description>
                <Description>Color: {elem.color}</Description>
                <Description>Price: ${elem.price}</Description>
                <TotalWrapper>
                  Total: ${elem.quantity * elem.price}
                </TotalWrapper>
                <ButtonGroup>
                  <Button key={nanoid()} onClick={handleDecrementQuantity}>
                    -
                  </Button>
                  <span style={{ fontSize: '3vmin' }}>{elem.quantity}</span>
                  <Button key={nanoid()} onClick={handleIncrementQuantity}>
                    +
                  </Button>
                </ButtonGroup>
                <ButtonWrapper>
                  <Button
                    key={nanoid()}
                    onClick={handleRemoveItem}
                    style={{ width: '100%', marginBottom: '16px' }}>
                    <i className='fa-regular fa-trash-can'></i>
                    <nbsp /> Delete item
                  </Button>
                </ButtonWrapper>
              </DescriptionWrapper>
            </Card>
          );
        })}
      </CardContainer>
      <CustomHeader />
      <ProductsButtonWrapper>
        <Link to='/Products'>
          <Button>
            <i className='fa-solid fa-angles-right fa-sm'></i> Continue shopping
          </Button>
        </Link>
      </ProductsButtonWrapper>
      <ProductsButtonWrapper>
        <Button style={{ marginTop: '3rem', backgroundColor: 'green' }}>
          <i className='fa-solid fa-angles-right fa-sm'></i> Check out{' '}
          <i className='fa-solid fa-angles-right fa-sm'></i>
        </Button>
      </ProductsButtonWrapper>
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

export default Cart;
