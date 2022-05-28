import React from 'react'

const Hero = () => {
  return (
    <div
    className='h-[70vh] items-center flex flex-col justify-center'
    style={{
        backgroundImage: `url('/images/bannerbackground.png')`,
        backgroundSize: 'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    }}>
        <h2 className='text-center text-[#333] text-2xl sm:text-4xl lg:text-6xl font-bold my-10'>Best food waiting for your belly</h2>
        <div className="search-box w-full flex flex-col justify-center items-center">
            <input className='p-5 mt-10 focus:outline-none  rounded-full w-[60%] shadow-lg' placeholder='Search food items ...' type='text' />
            <button className='mt-10 shadow-lg bg-[#f91944] hover:bg-red-500 text-white font-bold rounded-full py-5 px-10'>Search</button>
        </div>
      
    </div>
  )
}

export default Hero