import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, actions) {
      const newItem = actions.payload;
      // to check if the item is already available in cart
      const existingProduct = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingProduct) {
        existingProduct.quantify++;
        existingProduct.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantify: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, actions) {
      const id = actions.payload;
      const existingItems = state.itemsList.find((item) => item.id === id);

      if (existingItems.quantify === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      } else {
        existingItems.quantify--;
        existingItems.totalPrice -= existingItems.price;
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
