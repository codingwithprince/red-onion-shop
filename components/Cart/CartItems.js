import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import SingleFoodItem from '../Foods/SingleFoodItem';

const CartItems = () => {
  const myState = useSelector(state => state.cartReducer.cart);
  const router = useRouter()

  useEffect(()=>{
    if(myState.length === 0){
      router.push('/')
    }
    
  },[myState.length, router])

  const userState = useSelector(state => state.userReducer)
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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
  {
    myState.map(item =>  <SingleFoodItem key={item.id} remove={true} item={item} /> )
  }
   
</div>
    </div>
</div>
  )
}

export default CartItems