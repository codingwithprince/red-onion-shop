import React from 'react'
import { useSelector } from 'react-redux';
import CheckOut from '../CheckOut/CheckOut';
import LoginForm from './LoginForm';

const LoginComponents = () => {
    const userSate = useSelector(state => state.userReducer.loggedIn)

  return (
    <div className='text-center mt-10'>
    
        { !userSate ?   
         <LoginForm />
         :
         <CheckOut />
        }

         </div>
  )
}

export default LoginComponents