import styled from 'styled-components';
import productsList from './productsList';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/counter/counterSlice';
import { addItem, selectCart } from '../features/cart/cartSlice';
import {
  addMoreInfoItem,
  clearMoreInfoItem,
  selectInfo,
} from '../features/info/infoSlice';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid black',
    borderRadius: '1rem',
    backgroundColor: '#eee9da',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space around',
    alignItems: 'center',
    fontSize: '2rem',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

const Wrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* background-color: #f5c7a9; */
`;

const CardContainer = styled.div`
  margin-top: 4rem;
  margin-bottom: 8rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  max-width: 40vmin;
  height: 70vmin;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee9da;
  border: 2px solid black;
  border-radius: 1rem;
  margin: 0 2rem;
  margin-top: 4rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  &:hover {
    transform: scale(1.1);
  }
  overflow: hidden;
  @media (max-width: 650px) {
    max-width: 60vmin;
    height: 80vmin;
  }
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  padding: 2rem;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  font-size: 2.5vmin;
  color: #f00;
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  color: #f00;
  font-size: 2rem;
  line-height: 1.6rem;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 2vmin;
  background-color: #b20600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.9);
  @media (max-width: 950px) {
    font-size: 1.5vmin;
  }
  @media (max-width: 650px) {
    font-size: 1.2vmin;
  }
  @media (max-width: 430px) {
    font-size: 1vmin;
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const Products = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
    subtitle.style.fontSize = 'calc(1.5rem + 2vmin)';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const info = useSelector(selectInfo);

  const handleAddToCartClick = (e) => {
    const target = e.target;
    const itemId = target.parentNode.parentNode.id;
    console.log('itemId:', itemId);
    const item = productsList.find((elem) => elem.id === itemId);
    console.log('item:', item);
    if (cart.includes(item) === false) {
      dispatch(addItem(item));
      dispatch(increment());
      setMessage('Success!');
      openModal();
    } else {
      setMessage('The item is already in the cart');
      openModal();
      return;
    }
    console.log('cart:', cart);
  };

  const handleMoreInfoClick = (e) => {
    const target = e.target;
    const itemId = target.parentNode.parentNode.parentNode.id;
    console.log('itemId:', itemId);
    const item = productsList.find((elem) => elem.id === itemId);
    console.log('item:', item);
    dispatch(clearMoreInfoItem());
    dispatch(addMoreInfoItem(item));
    console.log('info:', info);
  };

  return (
    <>
      <Wrapper>
        <CardContainer>
          {productsList.map((elem) => {
            return (
              <Card key={elem.id} id={elem.id}>
                <Image key={elem.id} src={elem.src} alt={elem.name} />
                <Description>${elem.price}</Description>
                <Description>{elem.name}</Description>
                <ButtonGroup>
                  <Button key={nanoid()} onClick={handleAddToCartClick}>
                    Add to cart
                  </Button>
                  <Link to='/MoreInfo'>
                    <Button key={nanoid()} onClick={handleMoreInfoClick}>
                      More info
                    </Button>
                  </Link>
                </ButtonGroup>
              </Card>
            );
          })}
        </CardContainer>
      </Wrapper>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Modal'>
        <h1 ref={(_subtitle) => (subtitle = _subtitle)}>{`${message}`}</h1>
        <Paragraph>Product successfully added to your shopping cart</Paragraph>
        <ButtonGroup>
          <Link to='/Cart'>
            <Button>View Cart</Button>
          </Link>
          <Button onClick={() => closeModal()}>Close</Button>
        </ButtonGroup>
      </Modal>
    </>
  );
};

export default Products;
