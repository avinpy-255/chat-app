import React from 'react'

const ChatList = () => {
  return (
    <div className='chatList'>
    <div className='search'>
    <div className='searchBar'>
      <input type='text' placeholder='Search'/>
      <img src='./search.png' alt=""/>
    </div>
     <img src='./plus.png' alt=""/>
    </div>

    </div>
  )
}

export default ChatList