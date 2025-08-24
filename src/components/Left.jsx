import React from 'react'
import Search from './Search';
import User from"./User";

const Left = () => {
  return (
    <>
      <div className="left w-[30%] bg-black text-white">
      <h2 className='text-4xl  p-[20px]'>Chats</h2>
        <Search/>
        <hr className='text-gray-800' />
        <User/>
      </div>
    </>
  );
}

export default Left;