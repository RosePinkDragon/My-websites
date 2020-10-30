import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTzlX_eaKyodCt_9IKiL2T2Z07I0GtrZk",
  authDomain: "todoapp-b6e4d.firebaseapp.com",
  databaseURL: "https://todoapp-b6e4d.firebaseio.com",
  projectId: "todoapp-b6e4d",
  storageBucket: "todoapp-b6e4d.appspot.com",
  messagingSenderId: "464145114558",
  appId: "1:464145114558:web:882971037549dcf2d105ef"
})
  
const db = firebaseApp.firestore()

export { db }
