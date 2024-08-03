import React from "react";
import GenderCheckbox from "../components/GenderCheckbox";

const SignUp = () => {
  return (
    <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-300 mb-6">
        Sign Up <span className="text-blue-500">ChatApp</span>
      </h1>

      <form className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="mt-2 block w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-300">
            Username
          </label>
          <input
            type="text"
            placeholder="johndoe"
            className="mt-2 block w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-300">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="mt-2 block w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-300">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="mt-2 block w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <GenderCheckbox />

        <a
          className="text-sm text-blue-500 hover:underline hover:text-blue-400 mt-4 block text-center"
          href="#"
        >
          Already have an account?
        </a>

        <div>
          <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
