import React, {useState} from 'react'
import { Link } from 'react-router-dom'

export const Join = () => {
    const [ name, setName ] = useState ('')
    const [ room, setRoom ] = useState ('')
  return (
    <div className='bg-black'>
        <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-sm bg-white rounded-md shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Join a Room</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              RoomID
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white"
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
        </form>
        <Link>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Join
            </button>
        </Link>
       </div>
       </div>


    </div>
  )
}

