import React from "react";
import Page1 from "./pages/Page1";
import { useSelector } from "react-redux";
import AllProducts from "./pages/AllProducts";
import Header from "./pages/Header";
import Cart from "./pages/Cart";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div className="container mx-auto">
      <Header />
      {!isLoggedIn && <Page1 />}
      {isLoggedIn && <AllProducts />}
      <Cart />
    </div>
  );
}

export default App;
