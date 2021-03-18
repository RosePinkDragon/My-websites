import React, { useState, useEffect } from 'react';

import './styles/App.css';
import Chat from './Chat'
import { SearchOutlined } from '@material-ui/icons'
import "./styles/Sidebar.css"
import DonutLargeIcon from "@material-ui/icons/DonutLarge"
import { Avatar, IconButton } from '@material-ui/core'
import MoreVertIcon from "@material-ui/icons/MoreVert"
import ChatIcon from "@material-ui/icons/Chat"
import SidebarChat from './SidebarChat'

import 'firebase/firestore'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import db from './firebase'

function App() {




let users = []

  db.collection("messages").onSnapshot((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    users.push({
      id : doc.id,
      name : doc.data().UserName
    })
  })
})

users.forEach((user) => {
  console.log(user)
})




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
            <div className="sidebar_chats">
            </div>
            
        </div>

        {/* Chat Component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
