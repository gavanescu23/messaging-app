import React from 'react'
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  

const SignIn = () => {
    const auth = firebase.auth();
    
  return auth.currentUser && (
    <div className='flex flex-row-reverse pb-2'> 
    <button onClick={() => auth.signOut()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
  Sign out
</button>
</div>

  )
}

export default SignIn