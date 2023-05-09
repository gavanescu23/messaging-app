import React from 'react'
import { useState } from 'react'
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  

const BottomBar = () => {
    // const dummy = useRef();
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');
    
    const [formValue, setFormValue] = useState('')

    const sendMessage = async(e) => {
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })
        setFormValue('');
        // dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <div>
            <form onSubmit={sendMessage} className="w-full  lg:w-2xl rounded-lg">
                <div className="flex items-center pt-4 pr-5">
                    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-0 px-5 leading-tight focus:outline-none " type="text" placeholder="Write your message" aria-label="txt-msg"/>
                        <button value={formValue} onClick={(e) => setFormValue(e.target.value)} className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-sm border-4 text-white px-3 rounded" type="submit">
                            Send message
                        </button>
                </div>
            </form>
        </div>
    )
}

export default BottomBar