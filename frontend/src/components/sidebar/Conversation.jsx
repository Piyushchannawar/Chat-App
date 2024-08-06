import React from 'react'
import useConversation from '../../zustand/useConversation'

const Conversation = ({conversation,emoji,lastIdx}) => {
  const {selectedConversation,setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
      <div className={`flex items-center gap-2 p-2 rounded-lg hover:bg-sky-500 cursor-pointer transition-colors
        ${isSelected ? "bg-sky-500":""}
        `}
        onClick={()=> setSelectedConversation(conversation)}
        >
          <div className='avatar online'>
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
          <img
            src={conversation.profilepic}
            alt="user avatar"
            className="w-full h-full object-cover"
          />
        </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-300">{conversation.fullname}</p>
            <span className="text-xl text-gray-400">{emoji}</span>
          </div>
          <p className="text-sm text-gray-500 truncate">Last message preview here...</p>
        </div>
      </div>

    {!lastIdx &&  <div className="h-px bg-gray-600 my-1" />}
    </>
  )
}

export default Conversation
