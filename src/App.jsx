import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {action} from "./store/index"

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(action.increment());
  };
  const decrement = () => {
    dispatch(action.decrement());
  };

  const Add = () => {
    dispatch(action.add(10));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={Add}>Add</button>
    </div>
  );
}

export default App;
