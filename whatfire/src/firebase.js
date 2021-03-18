import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


firebase.initializeApp({
  apiKey: "AIzaSyDYg570M7WNJc3lrTzQLsSUdQSPLgfwm3w",
  authDomain: "foodninjas-78572.firebaseapp.com",
  projectId: "foodninjas-78572",
  storageBucket: "foodninjas-78572.appspot.com",
  messagingSenderId: "405053172606",
  appId: "1:405053172606:web:b34d8153e7f91b63e7612f",
  measurementId: "G-2ZL8LBTP4Z",
})

const db = firebase.firestore();

export default db