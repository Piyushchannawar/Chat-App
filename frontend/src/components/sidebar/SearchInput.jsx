import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5"
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search,setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations}= useGetConversations();
   
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error('Search term must at least 3 character long')
    }

    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error(`No user fount with name ${search}`)

  }


  return (
    <form onSubmit={handleSubmit} className='flex items-center gap-2 bg-gray-800 p-2 rounded-full'>
      <input
        type='text'
        placeholder='Search…'
        className='bg-gray-700 text-gray-300 border border-gray-600 rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
      <button
        type='submit'
        className='bg-blue-600 text-white rounded-full p-2 hover:bg-blue-500 transition-colors'
      >
        <IoSearchSharp className='w-6 h-6' />
      </button>
    </form>
  )
}

export default SearchInput
