import { createSlice } from '@reduxjs/toolkit';


export interface CartState {
    id: string;
    createdOn: string;
    items: CartItem[];
}

export interface CartItem {
    id: string;
    productName: string;
    price: number;
    sizeVariant: string;
    colorvarinat: string;
    imageUrl: string;
    quantity: number;
}

const carInitailState: CartState = {
    id: '',
    createdOn: '',
    items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: carInitailState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    updateQuatity: (state, action) => {
      const idx = state.items.findIndex(a => a.id == action.payload.id && a.colorvarinat == action.payload.colorvarinat && a.sizeVariant == action.payload.sizeVariant);
      state.items[idx].quantity = action.payload.quantity;
    },
    removeItem: (state, action) => {
      const idx = state.items.findIndex(a => a.id == action.payload.id && a.colorvarinat == action.payload.colorvarinat && a.sizeVariant == action.payload.sizeVariant);
      state.items.splice(idx, 1);
    }
  },
});

export const { addToCart, updateQuatity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;