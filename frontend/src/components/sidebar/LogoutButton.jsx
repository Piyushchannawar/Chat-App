// import { BiLogOut } from "react-icons/bi";
// import useLogout from "../../hooks/useLogout";

// const LogoutButton = () => {
// 	const { loading, logout } = useLogout();

// 	return (
// 		<div className='mt-auto'>
// 			{!loading ? (
// 				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
// 			) : (
// 				<span className='loading loading-spinner'></span>
// 			)}
// 		</div>
// 	);
// };
// export default LogoutButton;

import React from "react";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/userLogout";

const LogoutButton = () => {
  const {loading , logout} = useLogout();
  return (
    <div className="mt-auto flex justify-center">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-gray-400 hover:text-gray-300 cursor-pointer transition-colors"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
