import { NavLink } from "react-router-dom";
import { Google } from "../../components/svgs/extras";

const Login = () => {
  return (
    <div className="bg-[#eaecf0] min-h-screen relative flex lg:items-center lg:justify-center">
      <NavLink to="/" className="absolute top-4 right-10">
        X
      </NavLink>
      <div className="bg-[#fff] lg:min-w-[30%] min-w-[100%] lg:p-10 p-6">
        <div className="flex flex-col items-center justify-center">
          <img src="/assets/logo.png" alt="img" />
          <h2 className="text-[30px] font-semibold py-6">
            Log in to your account
          </h2>
          <p className="text-[#808080]">
            Welcome back! Please enter your details
          </p>
        </div>
        <div className="space-y-6 mt-6">
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
          <div className="flex items-center space-x-3 w-[100%]">
            <input type="checkbox" />
            <label htmlFor="password" className="text-[#333] text-[14px]">
              Remember for 30 days
            </label>
          </div>
          <p className="text-[#6941C6]">
            Forgot Password?
          </p>
          <button className="bg-[#000] w-[100%] text-[#fff] lg:mt-6 mt-8 py-3 rounded-lg">
            Get Started
          </button>
          <button className="border-[#ccc] border w-[100%] text-[#000] lg:mt-6 mt-8 py-2 rounded-lg flex items-center justify-center space-x-3">
            <Google /> <span>Sign in With Google</span>
          </button>

          <div className="flex space-x-3 text-[14px] justify-center">
            <p className="text-[#404040]">Already have an account?</p>
            <NavLink to="/auth/signup" className="text-[#6941C6]">
               Sign up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
