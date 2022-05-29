import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const myState = useSelector((state) => state.cartReducer.cart)
  return (
    <div className='py-5 sticky top-0 z-50 bg-white shadow-sm flex flex-wrap justify-between px-5 sm:px-20'>
        <div className="logo grid justify-items-center">
          <Link href={'/'}>
            <Image src='/images/logo2.png' height={'40px'} width={'150px'} alt='logo' />
          </Link>
        </div>
        <div className='flex flex-row gap-5 items-center'>
          <Link href={'/cart'} passHref>
            <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className='bg-red-500 rounded-full px-2 text-white'>{myState.length}</span>
            </div>
          </Link>
          <button className='font-bold'>Login</button>
          <button className='bg-[#f91944] hover:bg-red-500 text-white font-bold rounded-full py-2 px-7'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar;