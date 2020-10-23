import React from 'react';
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

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth);

  

  return (
    <div className="App">
      <header>



      </header>

      <section>

        {user ? <ChatRoom /> : <SignIn />}

        </section>
    </div>
  );
}


function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
    <button onClick={signInWithGoogle}>Sign In With Google</button>
  )
}

function SignOut(){
  return auth.currentUser &&(
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom(){
  const messagesRef= firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'});

  const [formValue, setFormValue] = useState('');

  const sendMessage = async(e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

  }

  return(
    <>
    <div>
      {messages &&messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}

    </div>

    <div>
      </div>
      </>
  )
}

function ChatMessage(props){
  const {text, uid, photoURL} = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return(
    <div classNmae={`message ${messageClass}`}>
      <img src={photoURL}/>
      <p>{text}</p>

      <form onSubmit={sendMessage}>

        <input calu={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">🐲 </button>

      </form>

    </div>

   


  
  )
}



export default App;
