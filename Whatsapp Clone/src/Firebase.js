import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBT-ES_5rUtKliM4oa-inVzLGznqG9nqGM",
  authDomain: "amijan-clone.firebaseapp.com",
  databaseURL: "https://amijan-clone.firebaseio.com",
  projectId: "amijan-clone",
  storageBucket: "amijan-clone.appspot.com",
  messagingSenderId: "640582386606",
  appId: "1:640582386606:web:c4babebef5fa655514be3f"
})




const auth =  firebase.auth()

export { auth }