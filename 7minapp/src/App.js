import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCVtjqUweKo5uZq2t4DTSLA4i-sSM7y3LQ",
  authDomain: "minreact-b5c27.firebaseapp.com",
  databaseURL: "https://minreact-b5c27.firebaseio.com",
  projectId: "minreact-b5c27",
  storageBucket: "minreact-b5c27.appspot.com",
  messagingSenderId: "57757906093",
  appId: "1:57757906093:web:17c10074a81b164e704224"
})

const auth = firebase.auth()
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-Header">
        <h1>⚛️🔥💬</h1>  
        <SignOut/>  
      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  )
}

function SignIn(){

  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider);
  }

  return(
    <>
    <button className="sign-in" onClick={SignInWithGoogle}>Sign in with Google</button>
    <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )
}

function SignOut(){
  return auth.currentUser && (

    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>

  )
}

function ChatRoom(){
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query, {idField: 'id'})
  const [formValue, setFormValue] = useState('')

  const dummy = useRef()

  const sendMessage = async(e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
      
    })
    setFormValue('')
    dummy.current.scrollIntoView({ behavior:'smooth' })
  }

  return(
    <>
    <main>
    
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
    <div ref={dummy}></div>
    </main>
    <form onSubmit={sendMessage}>
      <input value={formValue} onChange={e => setFormValue(e.target.value)}/>
      <button type="submit">🕊️</button>
    </form>
    </>
  )

}

function ChatMessage(props){
  
  const {text, uid, photoURL} = props.message
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL}/>
      <p>{text}</p>
    </div>
  )
}


export default App;
