import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import '../index.css';


const ChatMessage = (props) => {
    const { text, uid } = props.message;
    const auth = firebase.auth();
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`text-white bg-blue-700 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 message ${messageClass} `}>
                <div className='flex flex-row-reverse '><p>{text}</p></div>
            </div>
            )
}

            export default ChatMessage