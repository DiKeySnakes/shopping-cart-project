import { selectInfo } from './infoSlice';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  /* height: 80%; */
  /* margin-top: 2rem; */
  /* margin-bottom: 8rem; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #f5c7a9;
`;

// const CardContainer = styled.div`
//   margin-top: 4rem;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   justify-content: space-between;
//   align-items: center;
//   gap: 3rem;
//   @media (max-width: 1300px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   @media (max-width: 870px) {
//     grid-template-columns: repeat(3, 1fr);
//   }
//   @media (max-width: 650px) {
//     grid-template-columns: repeat(2, 1fr);
//   }
//   @media (max-width: 330px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

const Card = styled.div`
  /* width: 60rem; */
  /* height: 65rem; */
  margin-left: 5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee9da;
  border: 2px solid black;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  overflow: hidden;
  object-fit: contain;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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
  font-size: calc(0.5rem + 2vmin);
  color: #f00;
  position: relative;
  margin-top: 1rem;
`;

const Info = () => {
  const info = useSelector(selectInfo);
  console.log('info:', info);
  const elem = info[0];
  return (
    <Wrapper>
      <Card>
        <Image key={elem.id} src={elem.src} alt={elem.name} />
      </Card>
      <Description>Price: $ {elem.price}</Description>
      <Description>{elem.name}</Description>
    </Wrapper>
  );
};

export default Info;
