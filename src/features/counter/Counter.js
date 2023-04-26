import { useSelector } from 'react-redux';
import { selectCount } from './counterSlice';
import styled from 'styled-components';

const CounterDiv = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  border-radius: 50%;
`;

const CounterSpan = styled.span`
  font-size: 2.5vmin;
  color: #111111;
  @media (max-width: 768px) {
    font-size: 3vmin;
  }
  @media (max-width: 480px) {
    font-size: 3.5vmin;
  }
`;

export function Counter() {
  const count = useSelector(selectCount);

  return (
    <CounterDiv>
      <CounterSpan>{count}</CounterSpan>
    </CounterDiv>
  );
}
