import React from 'react'
import Image from 'next/image'


const SingleFoodItem = ({item, setItem, setOpen}) => {

  const setItemHandler = () =>{
    setOpen(true);
    setItem({...item})
  }
  return (
      <div className='bg-white hover:shadow-lg p-10 w-[400px] m-5' onClick={() => setItemHandler()}>
          <div className="img flex justify-center">
              <Image src={item.img} width={'250px'} height={'250px'} alt="ff" />
          </div>
          <h3 className='text-center pt-5 text-lg font-semibold'>{item.name}</h3>
          <p className='text-[#555] text-sm text-center'>Lorem ipsum dolor sit amet.</p>
          <p className='text-2xl text-center font-bold pt-2'>${item.price}</p>
      </div>

  )
}

export default SingleFoodItem