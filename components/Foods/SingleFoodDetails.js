import React from 'react'
import Image from 'next/image'

const SingleFoodDetails = ({item, openItem}) => {
  return (
    <div>
        <div className="details grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center">
            <div className="info px-[15%]">
                <h2 className='text-4xl font-semibold py-5'>{item.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed rerum ex aliquid recusandae, soluta a quos ea! Voluptate, ut.</p>
                <h3 className='text-6xl font-mono mt-20'>${item.price}</h3>
                <button className='mt-10 inline-block shadow-lg bg-[#f91944] hover:bg-red-500 text-white font-bold rounded-full py-3 px-7'>Add</button>
            </div>
            <div className="image">
                <Image src={item.img} height={'400px'} width={'400px'} alt='' />
            </div>
        </div>
        <div className="buttons flex justify-center">
          <button className='mt-10 inline-block shadow-lg bg-[#f91944] hover:bg-red-500 text-white font-bold rounded-full py-5 px-10' onClick={()=> openItem(false)}>
              Go Back</button>
        </div>
      
    </div>
  )
}

export default SingleFoodDetails