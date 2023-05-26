import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySVG } from '../assets/ScrollIcon.svg';
import styled from 'styled-components';
import productsList from './productsList';
import productsListElectricGuitars from './productsListElectricGuitars';
import productsListAcousticGuitars from './productsListAcousticGuitars';
import productsListBasses from './productsListBasses';
import productsListInstrumentArchive from './productsListInstrumentArchive';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/counter/counterSlice';
import { addItem, selectCart } from '../features/cart/cartSlice';
import {
  addMoreInfoItem,
  clearMoreInfoItem,
  selectInfo,
} from '../features/info/infoSlice';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import Frame_products from '../assets/images/Frame_products.png';
import Electric_Guitars_Header from '../assets/images/Electric_Guitars_Header.jpg';
import CustomHeader from '../components/CustomHeader';

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
    padding: '16px',
  },
};

Modal.setAppElement('#root');

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-image: url(${Electric_Guitars_Header});
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
  width: 100%;
  display: grid;
  gap: 2rem;
  padding-left: 10%;
  padding-right: 10%;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 810px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dotted #333333;
  border-radius: 1rem;
`;

const Card = styled.div`
  max-width: 80vmin;
  min-height: 80vmin;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin: 0 2rem;
  margin-top: 4rem;
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

const ImageWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
`;

const FrameImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: stretch;
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
  font-family: 'Bitter', serif;
  font-size: 2.5vmin;
  color: #333333;
  @media (max-width: 1400px) {
    font-size: 3.5vmin;
  }
  @media (max-width: 768px) {
    font-size: 4.5vmin;
  }
`;

const DescriptionSecondary = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  font-family: 'Signika Negative', sans-serif;
  font-size: 2vmin;
  color: #333333;
  @media (max-width: 1400px) {
    font-size: 3.5vmin;
  }
  @media (max-width: 768px) {
    font-size: 4.5vmin;
  }
`;

const Paragraph = styled.p`
  color: #333333;
  font-size: 2rem;
  line-height: 1.6rem;
  font-weight: 600;
  font-family: 'Signika Negative', sans-serif;
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
  margin: 2rem;
`;

const RadioButtonGroupWrapper = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 2vmin;
  color: #111111;
  font-family: 'Signika Negative', sans-serif;
  @media (max-width: 768px) {
    font-size: 3vmin;
  }
  @media (max-width: 430px) {
    font-size: 3.5vmin;
  }
`;

const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RadioButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  label {
    margin-left: 16px;
  }
`;

const Products = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#333333';
    subtitle.style.fontSize = 'calc(1.5rem + 2vmin)';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const info = useSelector(selectInfo);

  const [category, setCategory] = useState('All Products');
  const [list, setList] = useState(productsList);

  const onOptionChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    if (category === 'All Products') {
      setList(productsList);
    }
    if (category === 'Electric Guitars') {
      setList(productsListElectricGuitars);
    }
    if (category === 'Acoustic Guitars') {
      setList(productsListAcousticGuitars);
    }
    if (category === 'Basses') {
      setList(productsListBasses);
    }
    if (category === 'Instrument Archive') {
      setList(productsListInstrumentArchive);
    }
  }, [list, category]);

  const handleAddToCartClick = (e) => {
    const target = e.target;
    const itemId = target.parentNode.parentNode.firstChild.id;
    console.log('itemId:', itemId);
    const item = list.find((elem) => elem.id === itemId);
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
    const itemId = target.parentNode.parentNode.parentNode.firstChild.id;
    console.log('itemId:', itemId);
    const item = list.find((elem) => elem.id === itemId);
    console.log('item:', item);
    dispatch(clearMoreInfoItem());
    dispatch(addMoreInfoItem(item));
    console.log('info:', info);
  };

  return (
    <>
      <Wrapper>
        <IntroBackground>
          <IntroTitle>HAGSTROM GUITARS</IntroTitle>
        </IntroBackground>
        <NavContainer>
          <NavWrapper>
            <NavLinks>
              <NavLink to='/'>Home</NavLink>
              <span>/</span>
              <NavLink>Products</NavLink>
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
        <RadioButtonGroupWrapper>
          <h3 style={{ marginBottom: '1rem' }}>Select category</h3>

          <RadioButtonGroup>
            <RadioButtonWrapper>
              <input
                type='radio'
                name='category'
                value='All Products'
                id='allProducts'
                checked={category === 'All Products'}
                onChange={onOptionChange}
              />
              <label htmlFor='allProducts'>All Products</label>
            </RadioButtonWrapper>

            <RadioButtonWrapper>
              <input
                type='radio'
                name='category'
                value='Electric Guitars'
                id='electricGuitars'
                checked={category === 'Electric Guitars'}
                onChange={onOptionChange}
              />
              <label htmlFor='electricGuitars'>Electric Guitars</label>
            </RadioButtonWrapper>

            <RadioButtonWrapper>
              <input
                type='radio'
                name='category'
                value='Acoustic Guitars'
                id='acousticGuitars'
                checked={category === 'Acoustic Guitars'}
                onChange={onOptionChange}
              />
              <label htmlFor='acousticGuitars'>Acoustic Guitars</label>
            </RadioButtonWrapper>

            <RadioButtonWrapper>
              <input
                type='radio'
                name='category'
                value='Basses'
                id='basses'
                checked={category === 'Basses'}
                onChange={onOptionChange}
              />
              <label htmlFor='basses'>Basses</label>
            </RadioButtonWrapper>

            <RadioButtonWrapper>
              <input
                type='radio'
                name='category'
                value='Instrument Archive'
                id='instrumentArchive'
                checked={category === 'Instrument Archive'}
                onChange={onOptionChange}
              />
              <label htmlFor='instrumentArchive'>Instrument Archive</label>
            </RadioButtonWrapper>
          </RadioButtonGroup>
        </RadioButtonGroupWrapper>
        <CustomHeader />
        <CardContainer>
          {list.map((elem) => {
            return (
              <CardWrapper key={nanoid()}>
                <Card key={elem.id} id={elem.id}>
                  <ImageWrapper key={nanoid()}>
                    <FrameImage key={nanoid()} src={Frame_products} alt='' />
                    <ImageWrapper key={nanoid()}>
                      <Image key={elem.id} src={elem.src} alt={elem.name} />
                    </ImageWrapper>
                  </ImageWrapper>
                </Card>
                <Description>${elem.price}</Description>
                <Description>{elem.name}</Description>
                <DescriptionSecondary>{elem.color}</DescriptionSecondary>
                <ButtonGroup>
                  <Button key={nanoid()} onClick={handleAddToCartClick}>
                    Add to cart
                  </Button>
                  <Link key={nanoid()} to={elem.info}>
                    <Button key={nanoid()} onClick={handleMoreInfoClick}>
                      <i className='fa-solid fa-angles-right fa-sm'></i> More
                      info
                    </Button>
                  </Link>
                </ButtonGroup>
              </CardWrapper>
            );
          })}
        </CardContainer>
      </Wrapper>
      <CustomHeader />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Modal'>
        <h1 ref={(_subtitle) => (subtitle = _subtitle)}>{`${message}`}</h1>
        <Paragraph>Product successfully added to your shopping cart</Paragraph>
        <ButtonGroup style={{ width: '60%', justifyContent: 'space-between' }}>
          <Link to='/Cart'>
            <Button>View Cart</Button>
          </Link>
          <Button onClick={() => closeModal()}>Close</Button>
        </ButtonGroup>
      </Modal>
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
    </>
  );
};

export default Products;
