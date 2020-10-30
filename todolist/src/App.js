import React, { useState } from "react";
import './styles/App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import ToDo from './ToDo'

function App() {

  const [todos, setTodos] = useState(['Take Doggo for walko', 'Take rubbish out', 'Take manin out']);

  const [input, setInput] = useState('');

  const addTodo = e => {
    e.preventDefault();
      setTodos([...todos, input])
      setInput('')
  }


  return (
    <div className="App">
     
     <h1 class="app_Heading">Hello Moheb</h1>
      
      <div class="app_Form">
        <div class="form">
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
          <ToDo text={todo}/>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
