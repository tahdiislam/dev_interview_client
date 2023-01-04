import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/AuthSlice';

const Page1 = () => {
  const dispatch = useDispatch()
  // login handler
  const handleLogin = () => {
    dispatch(authActions.login())
  }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-1/3 h-72 bg-violet-500 text-gray-50 flex justify-center items-center'>
        <button onClick={handleLogin} className='py-3 px-6 bg-cyan-400 hover:bg-cyan-500 rounded shadow'>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Page1;