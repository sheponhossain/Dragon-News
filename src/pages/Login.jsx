import React, { use } from 'react';
import { Link } from 'react-router';
import AuthProvider, { AuthContext } from '../Routers/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const { signinEmailPass, setUser } = use(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signinEmailPass(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        toast.success('Sign-In successful.');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Email or Password Invalid');
      });
  };

  return (
    <div>
      <div className="card bg-base-100  min-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <legend className="text-2xl text-center font-semibold">
            Login your account
          </legend>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4">Login</button>
            <p className="text-center font-semibold mt-3">
              Don't have an account{' '}
              <Link
                className="link link-hover text-orange-500"
                to={'/auth/register'}
              >
                Register
              </Link>{' '}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
