import React from 'react'
import Sergiu from './sergiuPaperJpg.jpg'

const ChatBox = () => {
  return (
    <div className='bg-gray-500 rounded-lg h-[calc(100vh-64px)] overflow-auto lg:rounded-tl-3xl'>
      <div className='flex justify-center items-center pt-32'>
        <img src={Sergiu} alt='/'></img>
      </div>
    </div>
  )
}

export default ChatBox