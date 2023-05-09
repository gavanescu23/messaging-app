import React from "react";
import NavBar from "./components/NavBar";
import ChatBox from "./components/ChatBox";
import BottomBar from "./components/BottomBar";
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';  

import {useAuthState} from 'react-firebase-hooks/auth';
import ChatRoom from "./components/ChatRoom";

firebase.initializeApp({
  apiKey: "AIzaSyCRRvvgBks28w5-da-e2e5HVr7_U4eB8XU",
  authDomain: "messaging-app-dc555.firebaseapp.com",
  projectId: "messaging-app-dc555",
  storageBucket: "messaging-app-dc555.appspot.com",
  messagingSenderId: "739982368436",
  appId: "1:739982368436:web:fed3215d14d0dc030841e1",
  measurementId: "G-YXDMBF2JYJ"
})

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
    <NavBar></NavBar>
    <section>
    {user ? <ChatRoom></ChatRoom> : <ChatBox></ChatBox>}
    </section>
    {user ? <BottomBar></BottomBar> : '' }
    </>
  );
}

export default App;
