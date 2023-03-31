import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    addMoreInfoItem: (state, action) => {
      state.push(action.payload);
    },
    clearMoreInfoItem: () => initialState,
  },
});

export const { addMoreInfoItem, clearMoreInfoItem } = infoSlice.actions;

export default infoSlice.reducer;

export const selectInfo = (state) => state.info;
