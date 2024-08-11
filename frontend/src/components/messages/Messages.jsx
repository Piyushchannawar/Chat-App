import React, { useEffect, useRef } from 'react';
import Message from "./Message";
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(()=>{
   setTimeout(()=>{
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth"})
   },100)
  },[messages])

  return (
    <div className='flex flex-col gap-2 max-h-[calc(100vh-200px)] overflow-y-auto'>
      {/* Render Skeletons when loading */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {/* Render Messages when loading is complete and messages are available */}
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}

      {/* Render a message prompt when no messages are available */}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
