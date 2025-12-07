import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex justify-center items-center  min-h-screen">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
