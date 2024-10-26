import { NavLink } from "react-router-dom";
import { Google } from "../../components/svgs/extras";
import React from "react";

const Signup = () => {
  return (
    <div className="bg-[#eaecf0] min-h-screen relative flex lg:items-center lg:justify-center">
      <NavLink to="/" className="absolute top-4 right-10">
        X
      </NavLink>
      <div className="bg-[#fff] lg:min-w-[30%] min-w-[100%] lg:p-10 p-6">
        <div className="flex flex-col items-center justify-center">
          <img src="/assets/logo.png" alt="img" />
          <h2 className="text-[30px] font-semibold py-6">Create an account</h2>
          <p className="text-[#808080]">Start your 30-day free trial</p>
        </div>
        <div className="space-y-6 mt-6">
          <div className="flex flex-col space-y-2 w-[100%]">
            <label htmlFor="name" className="text-[#333] text-[14px]">
              Name *
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="py-2 px-6 border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
            />
          </div>
          <div className="flex flex-col space-y-2 w-[100%]">
            <label htmlFor="email" className="text-[#333] text-[14px]">
              Email *
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-6 border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
            />
          </div>
          <div>
            <div className="flex flex-col space-y-2 w-[100%]">
              <label htmlFor="password" className="text-[#333] text-[14px]">
                Password *
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="py-2 px-6 border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
              />
            </div>
            <p className="text-[12px] mt-2 text-[#808080]">
              Password must be at lest 6 characters
            </p>
          </div>
          <button className="bg-[#000] w-[100%] text-[#fff] lg:mt-6 mt-8 py-3 rounded-lg">
            Get Started
          </button>
          <button className="border-[#ccc] border w-[100%] text-[#000] lg:mt-6 mt-8 py-2 rounded-lg flex items-center justify-center space-x-3">
            <Google /> <span>Sign up With Google</span>
          </button>

          <div className="flex space-x-3 text-[14px] justify-center">
            <p className="text-[#404040]">Already have an account?</p>
            <NavLink to="/auth/login" className="text-[#6941C6]">Log In</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
