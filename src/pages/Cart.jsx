import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);

  return (
    <div className="my-4">
      <ul className="px-4 rounded">
        {cartItems.map((cart) => (
          <CartItem cart={cart} key={cart.id} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
