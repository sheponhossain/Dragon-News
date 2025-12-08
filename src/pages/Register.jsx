import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthProvider, { AuthContext } from '../Routers/AuthProvider';

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = use(AuthContext);
  const handleResigter = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="card bg-base-100  min-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleResigter} className="card-body">
          <legend className="text-2xl text-center font-semibold">
            Register your account
          </legend>
          <hr className="bg-accent" />
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter your name"
            />
            <label className="label">Photo URL</label>
            <input
              type="photo"
              name="photo"
              className="input"
              placeholder="Enter your Photo URL"
            />

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
            <div className="flex items-center gap-2">
              <input type="checkbox" name="checkbox" id="" required />
              <a className="link link-hover">Accept Term & Conditions</a>
            </div>

            <button className="btn btn-primary mt-4">Register</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
