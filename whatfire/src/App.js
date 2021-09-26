import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Chat from './Chat'
import { SearchOutlined } from '@material-ui/icons'
import "./styles/Sidebar.css"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChatIcon from "@material-ui/icons/Chat"

import 'firebase/firestore'

import './styles/SidebarChat.css'

import db from './firebase'

function App() {

    const [chatId, setChatId] = useState('')

    

   useEffect(() => {

        const cafeList = document.querySelector('#cafe-list');
        
        function renderCafe(doc){

            setChatId(doc.id)
            let sidebarChat = document.createElement('div');
            sidebarChat.className = "sidebarChat";
            
            let sidebarChat__info = document.createElement('div');
            sidebarChat__info.className = "sidebarChat__info";

            let h2 = document.createElement('h2');
    
            sidebarChat.setAttribute('data-id', doc.id);
            sidebarChat__info.textContent = doc.data().UserName;
            h2.textContent = 'This is the last message';
    
            sidebarChat.appendChild(sidebarChat__info);
            sidebarChat__info.appendChild(h2);
    
            cafeList.appendChild(sidebarChat);
    
            sidebarChat.addEventListener('click', (e) => {
                e.stopPropagation();
                setChatId(sidebarChat.getAttribute('data-id'))
            });
           
        }

         db.collection('messages').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    renderCafe(doc)
                });
            });
    }, [])


  return (
    <div className="app">
      {/* Sidebar component */}
      <div className="app__body">
      <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://avatars2.githubusercontent.com/u/2471956?s=400%&u=b71527e605ae1b798fc2d4157a842e57e427ad44&v=4" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats" id="cafe-list"></div>
        </div>

        {/* Chat Component */}
        <Chat chatId={chatId} />
      </div>
    </div>
  );
}

export default App;
