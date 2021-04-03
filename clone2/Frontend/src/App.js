import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js'
import './styles/App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import instance from './axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    instance.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('2841a53a2f059ddc211e', {
      cluster: 'eu'
    })

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    })

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  console.log(messages)


  return (
    <div className="app">
      {/* Sidebar component */}
      <div className="app__body">
        <Sidebar />

        {/* Chat Component */}
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
