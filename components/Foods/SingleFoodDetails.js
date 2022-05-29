import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions'

const SingleFoodDetails = ({item, openItem}) => {
  const dispatch = useDispatch()
  return (
    <div>
        <div className="details grid grid-cols-1 sm:grid-cols-2 items-center justify-items-center">
            <div className="info px-[15%]">
                <h2 className='text-4xl font-semibold py-5'>{item.name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sed rerum ex aliquid recusandae, soluta a quos ea! Voluptate, ut.</p>
                <h3 className='text-6xl font-mono mt-20'>${item.price}</h3>
                <button 
                onClick={()=> { dispatch(addToCart(item)) 
                  openItem(false)}}
                className='mt-10 inline-block shadow-lg bg-[#f91944] hover:bg-red-500 text-white font-bold rounded-full py-3 px-7' >Add to cart</button>
            </div>
            <div className="image">
                <Image src={item.img} height={'400px'} width={'400px'} alt='' />
            </div>
        </div>
        <div className="buttons flex justify-center items-center">
          <button className='mt-10 inline-block shadow-lg bg-[#f91944] hover:bg-red-500 text-white font-bold rounded-full py-3 px-10' onClick={()=> openItem(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>
          </button>
        </div>
      
    </div>
  )
}

export default SingleFoodDetails