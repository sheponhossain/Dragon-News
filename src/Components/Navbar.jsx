import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import navLogo from '../assets/user.png';
import { AuthContext } from '../Routers/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, signinOut } = use(AuthContext);
  const handleSignInOut = () => {
    signinOut()
      .then(() => {
        toast.success('Sign-out successful.');
      })
      .catch((error) => {
        toast(error);
      });
  };
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
        {user ? (
          <button onClick={handleSignInOut} className="btn btn-primary px-8">
            LogOut
          </button>
        ) : (
          <Link to={'/auth/login'} className="btn btn-primary px-8">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
