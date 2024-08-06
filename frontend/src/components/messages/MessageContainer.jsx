import React, { useEffect } from 'react'
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';

const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();

   useEffect(()=>{
    // cleanup function (unmounts)
     return ()=> setSelectedConversation(null);
   },[setSelectedConversation])


  return (
    <div className='flex flex-col flex-1 max-w-3xl w-full mx-auto bg-gray-900 text-gray-300'>
      { !selectedConversation ? (
        <NoChatSelected />
      ): (
        <>
      <div className='bg-gray-800 px-4 py-2 border-b border-gray-700'>
        <span className='text-gray-300'>To:</span> <span className='text-white font-bold'>{selectedConversation.fullname}</span>
      </div>
      <div className='flex-1 overflow-y-auto p-4'>
        <Messages />
      </div>
      <div className='p-4 border-t border-gray-700'>
        <MessageInput />
       
      </div>
      </>
        )}
    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 john ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
