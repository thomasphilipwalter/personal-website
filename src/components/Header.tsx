import React from 'react';
import HeaderLinks from './HeaderLinks';

const Header: React.FC = () => {
  return (
    <>
      <HeaderLinks />
      <div className="w-full bg-blue-100 text-black text-center py-4">
        <h1 className="text-4xl font-bold mb-2">Thomas Walter</h1>
        <p className="text-xl text-gray-700">Software Engineer, Data Analyst, and Musician @ Yale</p>
      </div>
    </>
  );
};

export default Header;
