import {
  selectCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from './cartSlice';
import { decrement } from '../counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { Table } from '@react-to-styled/table';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 12rem;
  margin-bottom: 12rem;
  display: flex;
  flex-direction: column;
  /* background-color: #f5c7a9; */
`;

const CardContainer = styled.div`
  padding: 0 5rem;
  width: 50vw;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  @media (max-width: 1670px) {
    grid-template-columns: repeat(1, 1fr);
    width: 40vw;
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

const Card = styled.div`
  max-width: 70vmin;
  height: 60vmin;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #eee9da;
  border: 2px solid black;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  overflow: hidden;
  object-fit: contain;
  @media (max-width: 800px) {
    max-width: 100vw;
    height: 65vmin;
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
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  font-size: 2vmin;
  color: #f00;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5vmin 1vmin;
  font-size: 2vmin;
  background-color: #b20600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.9);
  @media (max-width: 950px) {
    font-size: 1.8vmin;
  }
  @media (max-width: 650px) {
    font-size: 1.5vmin;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  font-size: 3vmin;
  color: #f00;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: 2px solid #f00;
  border-radius: 0.5rem;
`;

const ReceiptWrapper = styled.div`
  width: 60vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  /* z-index: 5; */
  /* background-color: #f5c7a9; */
  @media (max-width: 800px) {
    position: static;
    width: 100vw;
  }
`;

const Receipt = styled.div`
  width: 55vw;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background-color: #eee9da;
  border: 2px solid black;
  border-radius: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  @media (max-width: 800px) {
    width: 90vw;
  }
`;

const Subtotal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: right;
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
    title: {
      header: 'Title',
      Cell: ({ data: { name } }) => <span>{name}</span>,
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

  return (
    <Wrapper>
      <CardContainer>
        {cart.map((elem) => {
          return (
            <Card key={nanoid()} id={elem.id}>
              <ImageWrapper key={nanoid()}>
                <Image key={nanoid()} src={elem.src} alt={elem.name} />
              </ImageWrapper>
              <DescriptionWrapper>
                <Description
                  style={{
                    textDecoration: 'underline',
                    fontSize: '3vmin',
                  }}>
                  {elem.name}
                </Description>
                <Description>Price: ${elem.price}</Description>
                <TotalWrapper>
                  Total: ${elem.quantity * elem.price}
                </TotalWrapper>
                <ButtonGroup style={{ justifyContent: 'space-around' }}>
                  <Button key={nanoid()} onClick={handleDecrementQuantity}>
                    -
                  </Button>
                  <span style={{ fontSize: '2vmin' }}>{elem.quantity}</span>
                  <Button key={nanoid()} onClick={handleIncrementQuantity}>
                    +
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button key={nanoid()} onClick={handleRemoveItem}>
                    Delete item
                  </Button>
                  <Link to='/Products'>
                    <Button key={nanoid()}>Continue shopping</Button>
                  </Link>
                </ButtonGroup>
              </DescriptionWrapper>
            </Card>
          );
        })}
      </CardContainer>
      <ReceiptWrapper>
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
    </Wrapper>
  );
};

export default Cart;
