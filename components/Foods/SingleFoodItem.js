import React from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/actions'

const SingleFoodItem = ({item, setItem, setOpen, remove}) => {

  const setItemHandler = () =>{
    setOpen(true);
    setItem({...item})
  }

  const removeChecker =()=>{
    if(!remove){
      setItemHandler()
    }
  }

  const dispatch = useDispatch()
  return (
      <div
      onClick={() => removeChecker()} 
      className='bg-white hover:shadow-lg p-10 w-[400px] m-5'>
          <div className="img flex justify-center">
              <Image src={item.img} width={'250px'} height={'250px'} alt="ff" />
          </div>
          <h3 className='text-center pt-5 text-lg font-semibold'>{item.name}</h3>
          <p className='text-[#555] text-sm text-center'>Lorem ipsum dolor sit amet.</p>
          <p className='text-2xl text-center font-bold pt-2'>${item.price}</p>
          {
            remove && <button 
            onClick={()=> dispatch(removeFromCart(item.id))}
            className='bg-red-500 py-1 rounded-full px-3 text-white font-bold'>-</button>
          }
          
      </div>

  )
}

export default SingleFoodItem