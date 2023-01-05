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
    },
    removeFromCart() {},
    setShowCart(state) {
      state.showCart = true;
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
