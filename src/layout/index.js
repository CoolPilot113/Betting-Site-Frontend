import { useState } from 'react';
import Header from '../components/header';
import Navbar from '../components/Navbar';
const Layout = () => {
  return (
    <div className="w-screen">
      <Header />
      <div className="flex mt-[67px]">
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
