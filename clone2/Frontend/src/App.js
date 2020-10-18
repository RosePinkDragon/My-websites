import React from 'react';
import './styles/App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'

function App() {
  return (
    <div className="app">
      {/* Sidebar component */}
      <div className="app__body">
        <Sidebar />

        {/* Chat Component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
