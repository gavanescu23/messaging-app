import React from 'react'
import SignOut from './SignOut'
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  

import {useAuthState} from 'react-firebase-hooks/auth';

const SignIn = () => {
    const auth = firebase.auth();
    const [user] = useAuthState(auth);
    const useSignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div className='flex flex-row-reverse pb-2'>
        {user ? <SignOut></SignOut> : <button onClick={useSignInWithGoogle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Sign in with Google
</button>} 
    
</div>

  )
}

export default SignIn