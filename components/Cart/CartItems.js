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

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
      {
        myState.map(item =>  <SingleFoodItem key={item.id} remove={true} item={item} /> )
      }
       
    </div>
  )
}

export default CartItems