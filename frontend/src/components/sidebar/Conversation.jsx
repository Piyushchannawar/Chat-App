import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
          <img
            src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
            alt="user avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-300">John Doe</p>
            <span className="text-xl text-gray-400">🎃</span>
          </div>
          <p className="text-sm text-gray-500 truncate">Last message preview here...</p>
        </div>
      </div>

      <div className="h-px bg-gray-600 my-1" />
    </>
  )
}

export default Conversation
