import React from 'react'
import { useSelector } from 'react-redux'
import SingleFoodItem from '../Foods/SingleFoodItem';

const CartItems = () => {
  const myState = useSelector(state => state.cartReducer.cart);
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {
        myState.map(item =>  <SingleFoodItem key={item.id} remove={true} item={item} /> )
      }
       
    </div>
  )
}

export default CartItems