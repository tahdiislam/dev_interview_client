import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/CartSlice";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartAction.setShowCart());
  };
  return (
    <div className="w-full py-2 shadow-md flex justify-end px-8 mb-4">
      <button
        onClick={showCart}
        className="py-4 px-6 border-2 rounded-full hover:bg-gray-200"
      >
        Cart: {totalQuantity} Items
      </button>
    </div>
  );
};

export default Header;
