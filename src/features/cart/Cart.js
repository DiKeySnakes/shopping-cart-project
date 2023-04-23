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
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  padding: 0 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 16px;
  }
`;

const Card = styled.div`
  max-width: 70vmin;
  min-height: 60vmin;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 2px solid black;
  border-radius: 1rem;
  overflow: hidden;
  object-fit: contain;
  @media (max-width: 768px) {
    max-width: 100%;
    min-height: 80vmin;
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
  @media (max-width: 768px) {
    font-size: 4vmin;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
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
  justify-content: space-around;
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
`;

const ReceiptWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 3rem;
  padding: 0 16px;
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
  border: 2px solid black;
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

  return (
    <Wrapper>
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
                    style={{ marginBottom: '16px' }}>
                    <i className='fa-regular fa-trash-can'></i>
                    <nbsp /> Delete item
                  </Button>
                  <Link to='/Products'>
                    <Button key={nanoid()} style={{ marginBottom: '16px' }}>
                      <i className='fa-solid fa-angles-right fa-sm'></i>{' '}
                      Continue shopping
                    </Button>
                  </Link>
                </ButtonWrapper>
              </DescriptionWrapper>
            </Card>
          );
        })}
      </CardContainer>
    </Wrapper>
  );
};

export default Cart;
