import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full max-w-md p-8 bg-gray-900 rounded-lg shadow-lg">
      <div className="w-full">
        <h1 className="text-4xl font-semibold text-center text-gray-300 mb-8">
          Login to <span className="text-blue-500">ChatApp</span>
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
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
          <div className="flex items-center justify-between">
            <Link
              to='/signup'
              className="text-sm text-blue-500 hover:underline hover:text-blue-400"
            >
              {"Don't"} have an account?
            </Link>
          </div>
          <div>
            <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;









// starter code
// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg ">
//         <h1 className="text-3xl text-center text-gray-300">
//           Login
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-white label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label">
//               <span className="text-white label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <a href='#' className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>{"Don't"} have an account?</a>
//           <div>
//           <button className='btn btn-block btn-sm mt-2'>Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
