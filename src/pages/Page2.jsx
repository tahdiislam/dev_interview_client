import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";

const Page2 = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authActions.logOut());
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/3 h-72 bg-indigo-400  text-gray-50 flex justify-center items-center">
        <button
          onClick={handleLogOut}
          className="py-3 px-6 bg-cyan-400 hover:bg-cyan-500 rounded shadow"
        >
          LOG OUT
        </button>
      </div>
    </div>
  );
};

export default Page2;
