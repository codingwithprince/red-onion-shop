import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserLogin } from '../../redux/actions/userActions'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebase/firebase.config';
import { useRouter } from 'next/router';


const LoginForm = () => {
    const myState = useSelector(state => state.cartReducer.cart);
    const userSate = useSelector(state => state.userReducer.loggedIn)
    const dispatch = useDispatch()
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const router = useRouter();

const [checked, setChecked] = useState(false)
const [newUser, setNewUser] =useState({
    name: '',
    email: '',
    pass: ''
})
console.log(newUser);
    const handleChange = () =>{
        if(checked){
            setChecked(false)
        }else{
            setChecked(true)
        }
    }

    const handleBlur = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
        setNewUser({
            ...newUser,
            [name] : value
        })
        e.preventDefault()
    }
   
    const signInHandler = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                dispatch(setUserLogin(user))
                routerCheck()
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }


  return (
    <div className='login-form'>
        <from >
            {
             checked && 
            <div>
                <input onBlur={handleBlur}  name='name' className='w-[350px] m-2 p-2 focus:outline-none border-2' type='text' placeholder='Name' />
                <br />
            </div>
         }
            <input  onBlur={handleBlur} name='email' className='w-[350px] m-2 p-2 focus:outline-none border-2' type='email' placeholder='Email' />
            <br />
            <input onBlur={handleBlur} name='pass' className='w-[350px] m-2 p-2 focus:outline-none border-2' type='password' placeholder='Password' />
            <br />
            <input onClick={()=> handleChange()} type="checkbox" name="login" id="" value=''/> Sign up 
            <br />
            <input  className='bg-[#f91944] hover:bg-red-500 text-white font-bold rounded-full py-2 px-7 mt-10' type="submit" value={checked ? 'Sign up' : 'Login'} />
        </from>
        <div className="direct-login mt-20">
         <button onClick={()=> signInHandler()} className='bg-indigo-500 text-white p-2 rounded-full'>Google</button>
        </div>
    </div>
  )
}

export default LoginForm