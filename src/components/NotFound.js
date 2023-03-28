import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 83vh;
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5c7a9;
  h1 {
    font-size: calc(3.5rem + 2vmin);
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: calc(1.5rem + 2vmin);
  background-color: #b20600;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #eeeeee;
  text-shadow: 4px 3px 0px rgba(0, 0, 0, 0.9);
  @media (max-width: 650px) {
    font-size: calc(1rem + 2vmin);
  }
  @media (max-width: 430px) {
    font-size: calc(0.5rem + 2vmin);
  }
`;

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <h1>404</h1>
        <h1>Not Found</h1>
        <Link to='/'>
          <Button>Back Home</Button>
        </Link>
      </Wrapper>
    </>
  );
};

export default NotFound;
