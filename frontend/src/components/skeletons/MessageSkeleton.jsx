import React from 'react';

const MessageSkeleton = () => {
  return (
    <>
      <div className='flex gap-3 items-center animate-pulse'>
        <div className='bg-gray-300 w-10 h-10 rounded-full shrink-0'></div>
        <div className='flex flex-col gap-1'>
          <div className='bg-gray-300 h-4 w-40'></div>
          <div className='bg-gray-300 h-4 w-40'></div>
        </div>
      </div>
      <div className='flex gap-3 items-center justify-end animate-pulse'>
        <div className='flex flex-col gap-1'>
          <div className='bg-gray-300 h-4 w-40'></div>
        </div>
        <div className='bg-gray-300 w-10 h-10 rounded-full shrink-0'></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
