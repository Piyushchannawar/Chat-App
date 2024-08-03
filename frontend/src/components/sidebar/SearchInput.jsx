import React from 'react'
import { IoSearchSharp } from "react-icons/io5"

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 bg-gray-800 p-2 rounded-full'>
      <input
        type='text'
        placeholder='Search…'
        className='bg-gray-700 text-gray-300 border border-gray-600 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600'
      />
      <button
        type='submit'
        className='bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500 transition-colors'
      >
        <IoSearchSharp className='w-6 h-6' />
      </button>
    </form>
  )
}

export default SearchInput
