import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useFirebase from "../hooks/useFirebase";

const Register = () => {
  const { setUser } = useAuth();

  const auth = getAuth();

  const handleAutoReload = (e) => {
    e.preventDefault();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const setDisplayName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).then((result) => {});
  };

  const handleEmailAndPassword = () => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      setUser(user);
      setDisplayName();
    });
  };

  return (
    <div className="mt-24 mb-24">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm relative lg:left-1/3 md:left-56">
        <form onSubmit={handleAutoReload}>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputName"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Your Name
            </label>
            <input
              type="name"
              onBlur={handleName}
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              onBlur={handleEmail}
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              onBlur={handlePassword}
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-group form-check mb-6">
            <input
              type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck1"
              required
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="exampleCheck1"
            >
              Accept the policy
            </label>
          </div>
          <button
            onClick={handleEmailAndPassword}
            className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Register
          </button>
          <p className="mt-3">
            Already Registered?
            <Link
              className="
              text-blue-600
            "
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
