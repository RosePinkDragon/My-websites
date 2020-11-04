import React, { useState, useEffect } from "react";
import './styles/App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import ToDo from './ToDo'
import db from './firebase'
import firebase from 'firebase'


function App() {

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState('');


  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id, todo: doc.data().todo})))
    })
  }, []);


  const addTodo = e => {
    e.preventDefault();
      db.collection('todos').add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

      setTodos([...todos, input])
      setInput('')
  }




  return (
    <div className="App">
     
     <h1 className="app_Heading">Hello Moheb</h1>
      
      <div className="app_Form">
        <div className="form">
      <FormControl>
        <InputLabel>Enter Data Here </InputLabel>
        <Input value={input} onChange={e =>setInput(e.target.value)}/>
        <br/>
        <Button disabled={!input} onClick={addTodo} variant="contained" color="primary">
        To Do
        </Button>
      </FormControl>
      </div>
      
      <ul>
        {todos.map(todo => (
          <ToDo todo={todo}/>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
