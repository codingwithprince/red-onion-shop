import React from 'react'
import { useRouter } from 'next/router';
import { setUserLogin } from '../../redux/actions/userActions'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebase/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import CheckOut from '../CheckOut/CheckOut';
import LoginForm from './LoginForm';

const LoginComponents = () => {
    const myState = useSelector(state => state.cartReducer.cart);
    const userSate = useSelector(state => state.userReducer.loggedIn)
    const dispatch = useDispatch()
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const router = useRouter();

// push user to home if user came from direct login
    const routerCheck = () =>{
        if(myState.length == 0){
            router.push('/')
        }
    }


   

  return (
    <div className='text-center mt-20'>
    
        { !userSate ?   
         <LoginForm />
         :
         <CheckOut />
        }

         </div>
  )
}

export default LoginComponents