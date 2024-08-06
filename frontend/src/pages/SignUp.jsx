import React, { useState } from "react";
import GenderCheckbox from "../components/GenderCheckbox";
import { Link } from "react-router-dom";
import useSignup from '../hooks/userSignup.js'

const SignUp = () => {
// fullname,username,password,conformpassword,gender
  const [inputs,setInput] = useState({
    fullname: "",
    username: "",
    password: "",
    conformpassword: "",
    gender: "",
  });
   
  const  {loading, signup} = useSignup();

  const handleCheckboxChange = (gender) => {
     setInput({...inputs,gender})
  }

  const handleSubmit = async (e)=>{
       e.preventDefault();
       console.log(inputs);
       await signup(inputs);
  }



  return (
    <div className="w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-300 mb-6">
        Sign Up <span className="text-blue-500">ChatApp</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            value={inputs.fullname}
            onChange={(e) => setInput({ ...inputs, fullname: e.target.value})}
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
            value={inputs.username}
            onChange={(e) => setInput({ ...inputs, username: e.target.value})}
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
            value={inputs.password}
            onChange={(e) => setInput({ ...inputs, password: e.target.value})}
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
            value={inputs.conformpassword}
            onChange={(e) => setInput({ ...inputs, conformpassword: e.target.value})}
            className="mt-2 block w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

        <Link
          className="text-sm text-blue-500 hover:underline hover:text-blue-400 mt-4 block text-center"
          to='/login'
        >
          Already have an account?
        </Link>

        <div>
          <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
          >
          {loading ? <span className="loading loading-spinner"></span>:"Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
