import React from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <div>
      {!isLoggedIn && <Page1 />}
      {isLoggedIn && <Page2 />}
    </div>
  );
}

export default App;
