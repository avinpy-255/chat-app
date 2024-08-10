import React from 'react'
import './userinfo.css'

const Userinfo = () => {
  return (
    <div className='userInfo'>
      <div className='user'>
      <img src='./avatar.png' alt=''/>
        <p>John Doe</p>
      </div>
      <div className='icons'>
         <img src='./set2.png' alt=''/>
      </div>
    </div>
  )
}

export default Userinfo