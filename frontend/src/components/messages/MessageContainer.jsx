import React from 'react'
import MessageInput from "./MessageInput"
import Messages from "./Messages"

const MessageContainer = () => {
  return (
    <div className='flex flex-col flex-1 max-w-3xl w-full mx-auto bg-gray-900 text-gray-300'>
      <div className='bg-gray-800 px-4 py-2 border-b border-gray-700'>
        <span className='text-gray-300'>To:</span> <span className='text-white font-bold'>John Doe</span>
      </div>
      <div className='flex-1 overflow-y-auto p-4'>
        <Messages />
      </div>
      <div className='p-4 border-t border-gray-700'>
        <MessageInput />
      </div>
    </div>
  )
}

export default MessageContainer
