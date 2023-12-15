import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video mt-16 pt-[24%] px-14 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-3xl font-bold' cl="true">{title}</h1>
        <h2 className='text-lg w-1/2'>{overview}</h2>
        <div>
            <button className=" bg-gray-500  py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80"> ▶️ Play</button>
            <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
        </div>
    </div>
  )
}

export default VideoTitle