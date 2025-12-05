import React from 'react';
import { NavLink } from 'react-router';
import navLogo from '../assets/user.png';

const Navbar = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between mt-6">
      <div className=""></div>
      <div className="flex gap-4 text-accent">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/career'}>Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img src={navLogo} alt="" />
        <button className="btn btn-primary px-8">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
