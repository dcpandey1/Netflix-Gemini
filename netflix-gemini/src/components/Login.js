import React, { useRef, useState } from 'react'
import Header from './Header'
import checkValidData from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NeflixBG, photoURL } from '../utils/constants';

const Login = () => {

    const dispath = useDispatch()

    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState("")

    // Toggle Sign In & Sign Up Form
    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    //Sign In / Sign Up Button Handler
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMsg(message);

        if (message) return;

        if (!isSignInForm) {
            //Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    //Update user profile
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: photoURL
                    }).then(() => {

                        const { uid, email, displayName, photoURL } = auth.currentUser;

                        dispath(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMsg(errorMsg);
                    });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + errorMessage);
                    // ..
                });

        }
        else {
            //Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + errorMessage);
                });
        }
    }

    return (
        <div >
            <Header />
            <div className='absolute'>
                <img src={NeflixBG} alt="bg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 w-3/12 bg-black my-36 mx-auto left-0 right-0 text-white   bg-opacity-80 rounded-md'>
                <h1 className='text-white font-bold text-2xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input ref={name} className='p-4 my-4 w-full rounded-md bg-gray-600' type='text' placeholder='Name' />
                )
                }
                <input ref={email} className='p-4 my-4 w-full rounded-md bg-gray-600' type='text' placeholder='Email Address' />
                <input ref={password} className='p-4 my-4 w-full rounded-md bg-gray-600' type='password' placeholder='Password' />
                <p className='text-red-700'>{errorMsg}</p>
                <button onClick={handleButtonClick} className='p-4 my-6 w-full bg-red-700 rounded-md' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Neflix ? Sign Up" : "Already a User ? Sign In"}</p>
            </form>
        </div>
    )
}
export default Login;