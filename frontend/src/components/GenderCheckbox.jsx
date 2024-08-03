import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="male"
          className="checkbox border-gray-600"
        />
        <label htmlFor="male" className="ml-2 text-gray-300">Male</label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="female"
          className="checkbox border-gray-600"
        />
        <label htmlFor="female" className="ml-2 text-gray-300">Female</label>
      </div>
    </div>
  );
};

export default GenderCheckbox;






// starter code
// const GenderCheckbox = () => {
// 	return (
// 		<div className='flex'>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Male</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer`}>
// 					<span className='label-text'>Female</span>
// 					<input type='checkbox' className='checkbox border-slate-900' />
// 				</label>
// 			</div>
// 		</div>
// 	);
// };
// export default GenderCheckbox;