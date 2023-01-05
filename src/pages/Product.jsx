import React from "react";

const Product = ({ product }) => {
  const { name, price } = product;
  // add to cart handler
  const handleAddToCart = () => {
    console.log(`${name} add to cart`);
  }
  return (
    <div className="border rounded p-4 text-center bg-gray-100">
      <img
        className="mx-auto rounded h-2/3 w-auto"
        src="https://m.media-amazon.com/images/I/61Dw5Z8LzJL.jpg"
        alt=""
      />
      <h3 className="text-3xl font-semibold">{name}</h3>
      <h4 className="text-2xl font-bold">{price}</h4>
      <button onClick={handleAddToCart} className="bg-violet-500 hover:bg-violet-600 py-2 px-5 rounded text-gray-100">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
