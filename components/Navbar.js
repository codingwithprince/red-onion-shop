/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getAuth, signOut } from "firebase/auth";
import { setSignOutUser } from '../redux/actions/userActions'


const Navbar = () => {
  const myState = useSelector((state) => state.cartReducer.cart)
  const router = useRouter()
  const userState = useSelector(state => state.userReducer)
  const {loggedIn, userInfo } = userState;
  const dispatch = useDispatch()


  const signOutHandler = () =>{
          const auth = getAuth();
          signOut(auth).then(() => {
            dispatch(setSignOutUser())
          }).catch((error) => {
            // An error happened.
      });
  }

  return (
    <div className='py-5 sticky top-0 z-50 bg-white shadow-sm flex flex-wrap justify-between px-5 sm:px-20'>
        <div className="logo grid justify-items-center">
          <Link href={'/'}>
            <Image src='/images/logo2.png' width={150} height={40} alt='logo' />
          </Link>
        </div>
        <div className='flex flex-row gap-5 items-center'>
          <Link href={`${myState.length > 0 ? '/cart' : '/' }`} passHref>
            <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {
              myState.length > 0 && <span className='bg-red-500 rounded-full px-2 text-white'>{myState.length}</span>
            } 
            </div>
          </Link>
          {
            loggedIn ? <div className='flex gap-3'>
              <img src={userInfo.photoURL} className='rounded-full h-7 w-7' alt='' />
              <button onClick={()=> signOutHandler()} className='text-red-500 font-bold'>Logout</button></div> 
              :
          
          <div className='flex gap-2 mx-5'>
            <button className='font-bold' onClick={()=> router.push('/login')}>Login</button>
            <button className='bg-[#f91944] hover:bg-red-500 text-white font-bold rounded-full py-2 px-7'>Sign up</button>
          </div>
}
        </div>
    </div>
  )
}

export default Navbar;