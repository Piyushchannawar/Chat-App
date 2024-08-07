import React, { useState } from 'react'
import { BsSend } from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const {loading,sendMessage} = useSendMessage();
   const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
   }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input
        type='text'
        className='flex-1 border rounded-lg bg-gray-700 border-gray-600 text-gray-200 p-2.5'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Send a message'
      />
      <button type='submit' className='bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600'>
        {loading ? <div className='loading loading-spinner'></div>:<BsSend/>}
      </button>
    </form>
  )
}

export default MessageInput
