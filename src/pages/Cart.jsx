import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);

  const increase = () => {

  }

  const decrease = () => {
    
  }
  return (
    <div className="my-4">
      <ul className="px-4 rounded">
        {cartItems.map((cart) => (
          <li
            key={cart.id}
            className="bg-violet-500 hover:bg-violet-600 w-full py-4 px-6 flex justify-between border rounded"
          >
            <p className="text-gray-100 text-center w-full text-lg">
              {cart.name}
            </p>
            <p className="text-gray-100 text-center w-full text-lg">
              {cart.price}
            </p>
            <p className="text-gray-100 text-center w-full text-lg">
              <button
                onClick={increase}
                className="text-2xl border py-2 px-3 bg-gray-100 text-gray-900 hover:bg-gray-300 rounded"
              >
                +
              </button>{" "}
              <span className="mx-4 text-xl">{cart.quantify}</span>{" "}
              <button
                onClick={decrease}
                className="text-2xl border py-2 px-4 bg-gray-100 text-gray-900 hover:bg-gray-300 rounded"
              >
                {" "}
                -
              </button>
            </p>
            <p className="text-gray-100 text-center w-full text-lg">
              {cart.totalPrice}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
