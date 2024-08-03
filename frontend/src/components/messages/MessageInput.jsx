import React from 'react'
import { BsSend } from "react-icons/bs"

const MessageInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input
        type='text'
        className='flex-1 border rounded-lg bg-gray-700 border-gray-600 text-gray-200 p-2.5'
        placeholder='Send a message'
      />
      <button type='submit' className='bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600'>
        <BsSend />
      </button>
    </form>
  )
}

export default MessageInput
