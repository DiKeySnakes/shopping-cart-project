import { useSelector } from 'react-redux';
import { selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);

  return (
    <div>
      <span style={{ color: '#eeeeee' }}>{count}</span>
    </div>
  );
}
