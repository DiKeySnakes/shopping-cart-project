import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import infoReducer from '../features/info/infoSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    info: infoReducer,
  },
});
