import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface cartItem {
  id: number; image: string; name: string; count: number; price: number
}
// Define a type for the slice state
interface CartState {
  cart: cartItem[] | any[];
}

// Define the initial state using that type
const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartItem>) => {
      state.cart.push(action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    }
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer