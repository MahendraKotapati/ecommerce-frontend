import { createSlice } from '@reduxjs/toolkit';


export interface CartState {
    count: number;
}

const carInitailState: CartState = {
    count: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: carInitailState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;