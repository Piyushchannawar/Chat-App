import React from 'react'
import Message from "./Message"
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
 const {messages,loading} =  useGetMessages();
 console.log("messages: ",messages);
 
  return (
    <div className='flex flex-col gap-2 max-h-[calc(100vh-200px)] overflow-y-auto'>
         {loading && [...Array(3).map((_, idx) => <MessageSkeleton key={idx} />)]}
    </div>
  )
}
export default Messages;