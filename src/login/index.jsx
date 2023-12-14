import React from "react";
import Header from "../common/components/Header";

const index = () => {
  return (
    <>
      <Header />
      {/* Login */}
      <div className="container mx-auto py-16 px-32">
        <div className="grid grid-cols-2 gap-24">
          <div>
            <h3 className="text-2xl font-semibold mb-[30px]">Login</h3>
            <div className="mb-[22px]">
              <label className="mb-[20px] block font-medium">
                Username Or Email Address
              </label>
              <input
                type="email"
                placeholder="Username/Email"
                className="border border-1 border-oliveGreen-500 px-6 w-full h-[60px]"
              />
            </div>
            <div className="mb-[22px]">
              <label className="mb-[20px] block font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border border-1 border-oliveGreen-500 px-6 w-full h-[60px]"
              />
            </div>
            <div className="flex justify-between items-center mb-[22px]">
              <p>
                <input type="checkbox" className="bg-primary mr-2" /> Remember
                me.
              </p>
              <a href="">Forgot Password</a>
            </div>
            <div>
              <button className="border-none bg-primary px-6 w-full h-[60px] text-white font-semibold">
                Login
              </button>
            </div>
          </div>

          {/* Register */}
          <div>
            <h3 className="text-2xl font-semibold mb-[30px]">Register</h3>
            <div className="mb-[22px]">
              <label className="mb-[20px] block font-medium">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="border border-1 border-oliveGreen-500 px-6 w-full h-[60px]"
              />
            </div>
            <div className="mb-[22px]">
              <label className="mb-[20px] block font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Password"
                className="border border-1 border-oliveGreen-500 px-6 w-full h-[60px]"
              />
            </div>
            <div className="mb-[22px]">
              <label className="mb-[20px] block font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="border border-1 border-oliveGreen-500 px-6 w-full h-[60px]"
              />
            </div>
            <div className="mb-[22px]">
              <p>
                <input type="checkbox" className="bg-primary mr-2" /> Accept
                terms & privacy policy
              </p>
            </div>
            <div className="mb-[22px]">
              <button className="border-none bg-primary px-6 w-full h-[60px] text-white font-semibold">
                Register
              </button>
            </div>
            <p className="text-center">
              Already have an account?
              <a href="" className="text-secondary pl-1">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
