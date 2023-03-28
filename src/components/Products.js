import styled from 'styled-components';
import productsList from './productsList';
import { useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
  /* height: 83vh; */
  margin-top: 8rem;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f5c7a9;
`;

const CardContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 870px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 330px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  width: 40vmin;
  height: 55vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee9da;
  border: 2px solid black;
  border-radius: 1rem;
  margin: 0 1rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  &:hover {
    transform: scale(1.1);
  }
  overflow: hidden;
  @media (max-width: 430px) {
    width: 15rem;
    height: 20rem;
  }
`;

const Image = styled.img`
  width: 85%;
  height: 85%;
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
  font-size: calc(0.5rem + 2vmin);
  color: #f00;
  position: relative;
`;

const Products = () => {
  const [products, setProducts] = useState(productsList);
  return (
    <>
      <Wrapper>
        <CardContainer>
          {products.map((elem) => {
            return (
              <Card key={elem.id} id={elem.id}>
                <Image key={elem.id} src={elem.src} alt={elem.name} />
                <Description>{elem.name}</Description>
              </Card>
            );
          })}
        </CardContainer>
      </Wrapper>
    </>
  );
};

export default Products;
