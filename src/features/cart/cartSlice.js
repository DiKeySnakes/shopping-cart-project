import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state.filter((elem) => elem.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.find((elem) => elem.id === action.payload);
      if (item) {
        item.quantity = item.quantity + 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find((elem) => elem.id === action.payload);
      if (item && item.quantity !== 1) {
        item.quantity = item.quantity - 1;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectCart = (state) => state.cart;
