import React from "react";
import flyerImage from "../assets/eduvibe.jpeg";
import { FaGoogle, FaApple, FaEye, FaEnvelope, FaLock, FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={flyerImage}
            alt="Education"
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-1">EduVibe</h2>
          <h3 className="text-xl text-center text-orange-500 font-semibold mb-6">Log in</h3>

          <form>
            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <FaEnvelope className="mr-2" />
                User email
              </label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 flex items-center">
                <FaLock className="mr-2" />
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
                  placeholder="Enter your password"
                />
                <FaEye className="absolute top-3 right-3 text-gray-500 cursor-pointer" />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Log in
            </button>

            {/* Signup Link */}
            <p className="mt-4 text-center text-sm text-gray-600">
              Don’t have an account?
              <span className="text-purple-700 font-semibold ml-1 cursor-pointer hover:underline">
                Sign up
              </span>
            </p>
          </form>

          {/* Social Buttons */}
          <div className="mt-6 flex justify-center space-x-6">
            <button className="p-3 border rounded-full hover:bg-gray-100 transition">
              <FaGoogle size={20} />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100 transition">
              <FaFacebook size={20} />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100 transition">
              <FaApple size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
