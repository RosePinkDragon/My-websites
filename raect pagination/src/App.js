import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const bill = (count) => {
    let total = count;
    if (total>0) {
      return(
        <p>Hello</p>
      )
    } else {
      return(
        <p>not hello</p>
      )
    }
}

  return (
    <div className="App" id="root">
      <header className="App-header">
        
        <h1>Day of the week</h1>
        <div>
          <button onClick={() => setCount(count-1)}>Minus</button>
            &nbsp; {count} &nbsp;
          <button onClick={() => setCount(count+1)}>Plus</button>
        </div>
       {bill}
      </header>
    </div>
  );
}

export default App;
