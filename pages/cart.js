import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import CartItems from '../components/Cart/CartItems'

const cart = () => {
    const userState = useSelector(state => state.userReducer)
    const router = useRouter()

    const checkoutHandler =()=>{
        router.push('/login')
    }
  return (
    <div className='px-[15%]'>
        <div className='flex flex-wrap justify-between items-center'>
          <h2 className='block text-4xl font-semibold text-[#444] py-10'>Your cart</h2>
          <button onClick={()=> checkoutHandler()} className='inline-block shadow-lg bg-[#f91944] hover:bg-red-500 text-white font-bold rounded-full py-2 px-5'>Checkout</button>
        </div>
        
        <div className="cart-items">
            <CartItems />
        </div>
    </div>
  )
}

export default cart