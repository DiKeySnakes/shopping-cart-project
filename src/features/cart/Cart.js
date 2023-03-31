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

const Wrapper = styled.div`
  width: 100%;
  /* height: 83vh; */
  margin-top: 12rem;
  margin-bottom: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f5c7a9;
`;

const CardContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 330px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  max-width: 80vmin;
  height: 60vmin;
  /* margin-left: 5rem; */
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  background-color: #eee9da;
  border: 2px solid black;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  overflow: hidden;
  object-fit: contain;
`;

const ImageWrapper = styled.div`
  width: 30rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  padding: 2rem;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const DescriptionWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  font-size: calc(0.5rem + 2vmin);
  color: #f00;
  position: relative;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: calc(0.3rem + 2vmin);
  background-color: #b20600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.9);
  @media (max-width: 950px) {
    font-size: calc(0.2rem + 1.5vmin);
  }
  @media (max-width: 650px) {
    font-size: calc(0.2rem + 1vmin);
  }
  @media (max-width: 430px) {
    font-size: calc(0.1rem + 1vmin);
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
  font-size: calc(2rem + 2vmin);
  color: #f00;
  position: relative;
  margin-top: 3rem;
  margin-bottom: 3rem;
  border: 2px solid #f00;
  border-radius: 0.5rem;
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

  return (
    <Wrapper>
      <CardContainer>
        {cart.map((elem) => {
          return (
            <Card key={elem.id} id={elem.id}>
              <ImageWrapper key={nanoid()}>
                <Image key={elem.id} src={elem.src} alt={elem.name} />
              </ImageWrapper>
              <DescriptionWrapper>
                <Description
                  style={{
                    textDecoration: 'underline',
                    fontSize: 'calc(1.5rem + 2vmin)',
                  }}>
                  {elem.name}
                </Description>
                <Description>Price: ${elem.price}</Description>
                <TotalWrapper>Total: {elem.quantity * elem.price}</TotalWrapper>
                <ButtonGroup style={{ justifyContent: 'space-around' }}>
                  <Button key={nanoid()} onClick={handleDecrementQuantity}>
                    -
                  </Button>
                  <span style={{ fontSize: '2rem' }}>{elem.quantity}</span>
                  <Button key={nanoid()} onClick={handleIncrementQuantity}>
                    +
                  </Button>
                </ButtonGroup>
                <ButtonGroup>
                  <Button key={nanoid()} onClick={handleRemoveItem}>
                    Delete item
                  </Button>
                  <Link to='/Products'>
                    <Button key={nanoid()}>Shop again</Button>
                  </Link>
                </ButtonGroup>
              </DescriptionWrapper>
            </Card>
          );
        })}
      </CardContainer>
    </Wrapper>
  );
};

export default Cart;
