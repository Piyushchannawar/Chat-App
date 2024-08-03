import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import MessageContainer from '../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className='flex-1 flex flex-col'>
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home
