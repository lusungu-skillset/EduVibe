import React, { useState } from "react";
import flyerImage from "../assets/eduvibe.jpeg";
import { FaGoogle, FaApple, FaEnvelope, FaLock, FaFacebook } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-[#D2E6E4] rounded-lg shadow-lg overflow-hidden">
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
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                <FaEnvelope className="mr-2" />
                User email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-1.5 mt-1 px-4 bg-gray-100 rounded border-t-1 border-b-1 border-gray-500 text-md pr-10 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 flex items-center"
              >
                <FaLock className="mr-2" />
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  className="bg-gray-100 p-1.5 px-4 w-full mt-1 rounded border-t-1 border-b-1 border-gray-500 text-md pr-10 focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-3.5 text-gray-700"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-[#3442D9] transition"
            >
              Log in
            </button>

            {/* Signup Link */}
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?
              <Link to="/signup" className="text-purple-700 font-semibold ml-1 cursor-pointer hover:underline">
                Sign up
              </Link>
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