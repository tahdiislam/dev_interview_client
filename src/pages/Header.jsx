import React from 'react';

const Header = () => {
  return (
    <div className='w-full py-2 shadow-md flex justify-end px-8 mb-4'>
      <button className='py-4 px-6 border-2 rounded-full hover:bg-gray-200'>Cart: 5 Items</button>
    </div>
  );
};

export default Header;