import React, {useRef} from 'react'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import firebase from 'firebase/compat/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';

const ChatRoom = () => {
  const dummy = useRef();
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  const [messages] = useCollectionData(query, { idField: 'id' });
  
  return (
    <div className='flex flex-col-reverse bg-gray-500 rounded-lg h-[calc(100vh-150px)] overflow-auto lg:rounded-tl-3xl'>
      <div className='flex flex-row-reverse items-center'>
        <div>
          {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}></ChatMessage>)}
          <div ref={dummy}></div>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom