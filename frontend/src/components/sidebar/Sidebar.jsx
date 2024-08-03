import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className="w-80 bg-gray-800 text-gray-300 p-4 flex flex-col h-full">
      <SearchInput />
      <div className='my-4 border-t border-gray-700'></div>
      <div className='flex-1 overflow-y-auto'>
        <Conversations />
      </div>
      <LogoutButton />
    </div>
  )
}

export default Sidebar
