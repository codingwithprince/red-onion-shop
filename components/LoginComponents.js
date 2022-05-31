import React from 'react'
import { setUserLogin } from '../redux/actions/userActions'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import CheckOut from './CheckOut/CheckOut';

const LoginComponents = () => {

    const userSate = useSelector(state => state.userReducer.loggedIn)
    const dispatch = useDispatch()
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const signInHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(setUserLogin(user))
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


  return (
    <div className='text-center mt-20'>
    
        { !userSate ?   
         <button onClick={()=> signInHandler()} className='bg-indigo-500 text-white p-2 rounded-full'>Login</button>
         :
         <CheckOut />
        }

         </div>
  )
}

export default LoginComponents