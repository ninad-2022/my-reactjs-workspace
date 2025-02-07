import { createSlice } from "@reduxjs/toolkit";

const ShoppingSlice = createSlice({
  name: "shopping",
  initialState: {
    cart: { userId: 0, products: [] },
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
    addToCart: (state, { payload: prod }) => {
      const index = state?.cart?.products?.findIndex(
        (pro) => pro.id == prod.id
      );
      if (index >= 0) {
        const p = state?.cart?.products[index];
        state.cart.products.splice(index, 1, {
          id: p.id,
          quantity: p.quantity + 1,
        });
      } else {
        state?.cart?.products.push({ id: prod.id, quantity: 1 });
      }
    },
  },

  removeFromCart: (state, { payload: prod }) => {
    const index = state?.cart?.products?.findIndex((pro) => pro.id == prod.id);
    const p = state?.cart?.products[index];
    if (index >= 0 && p.quantity > 1) {
      state.cart.products.splice(index, 1, {
        id: p.id,
        quantity: p.quantity - 1,
      });
    } else if (p?.quantity == 1) {
      state.cart.products.splice(index, 1);
    }
  },
});

export const { addProducts, addToCart, removeFromCart } = ShoppingSlice.actions;
export const selectCart = (state) => state.shopping.cart;
export const selectProducts = (state) => state.shopping.products;

export default ShoppingSlice.reducer;
