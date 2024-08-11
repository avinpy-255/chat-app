import React from 'react'
import { useState } from 'react'
import './chatlist.css'

const ChatList = () => {
  const [addNode, setAddNode] = useState(false)
  return (
    <div className='chatList'>
    <div className='search'>
    <div className='searchBar'>
    <img src='./srch.png' alt=""/>
      <input type='text' placeholder='Search'/>
    </div>
     <img src={addNode ? './minus.png' :'./plus.png'} alt="" className='add'
       onClick={() => setAddNode((perv) => !perv)}
     />
    </div>
       <div className='item'>
       <img src='./avatar.png' alt=""/>
       <div className='texts'>
           <span>sexy</span>
           <p>Hello</p>
       </div>
       </div>
       <div className='item'>
       <img src='./avatar.png' alt=""/>
       <div className='texts'>
           <span>sexy</span>
           <p>Hello</p>
       </div>
       </div>
       <div className='item'>
       <img src='./avatar.png' alt=""/>
       <div className='texts'>
           <span>sexy</span>
           <p>Hello</p>
       </div>
       </div>
       <div className='item'>
       <img src='./avatar.png' alt=""/>
       <div className='texts'>
           <span>sexy</span>
           <p>Hello</p>
       </div>
       </div>
    </div>
  )
}

export default ChatList