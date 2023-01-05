import React from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    name: "Dell Lattitude",
    price: 25,
  },
  {
    id: 2,
    name: "HP Pavilion",
    price: 39,
  },
  {
    id: 3,
    name: "Lenevo Yoga",
    price: 25,
  },
  {
    id: 4,
    name: "Dell Inspairation",
    price: 30,
  },
  {
    id: 5,
    name: "Macbook Air",
    price: 40,
  },
];

const AllProducts = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
