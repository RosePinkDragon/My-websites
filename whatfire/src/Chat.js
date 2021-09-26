import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Send, Delete, SearchOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import "./styles/Chat.css"
import 'firebase/firestore'
import styled from 'styled-components'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import db from './firebase'
import { useEffect } from 'react'

const ErrorInput = styled.input`
  border: none;
  outline: none;
  background: none;
  color: #111;
  font-size: 18px;
  width: 200px;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  background: whitesmoke;

  &::placeholder{
    color : ${({ correct }) => (!correct ? '#c4c4c4' : 'red')}
  }
`

function Chat({chatId}) {


    if(chatId === "" || chatId === null){
        chatId = "hey"
    } 
  const [formValue, setFormValue] = useState('');

  const messagesRef = db.collection('messages').doc(chatId).collection('message')
  const query = messagesRef.orderBy('createdAt');
  const [messages] = useCollectionData(query, { idField: 'id' })
  
  const dummy = useRef();
  const [empty, setEmpty] = useState(false)
  const [placeholder, setPlaceholder] = useState('Enter A Message')

  useEffect(() => {



    const cross = document.getElementById("dlete")

    cross.addEventListener('click', (e) => {
        db.collection('messages').doc(chatId).delete().then(() => {
            console.log("Document successfully deleted!");
            // eslint-disable-next-line react-hooks/exhaustive-deps
            chatId = null
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    });
    
    messages && dummy.current.scrollIntoView({ behavior: 'smooth' });
    
  }, [messages, chatId])

  const chatSubmitHandler = async (e) => {
    e.preventDefault()
    if (formValue.trim().length === 0) {
      setEmpty(true)
    } else {
        setFormValue('')
        setPlaceholder('sending')
        await messagesRef.add({
          name: "Admin",
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          sent: true
        })
      }
      setPlaceholder('Enter A Message')
      setEmpty(false)
    }

    
   
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Chatto Name</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <Delete id="dlete"/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__Body">
                {messages && messages.map((message) => (
                 
                    <div key={message.id} className={message.sent ? 'chat chat__sender' : 'chat chat__reciever'}>
                        <p className="text">{message.text}</p>
                        <span className="chat__timestamp">
                            {message.createdAt && message.createdAt.toDate().toDateString()}
                        </span>
                    </div>

                ))}
                <span ref={dummy}/>
            </div>
            <div className="chat__footer">
                <form onSubmit={chatSubmitHandler}>
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                    <ErrorInput
                        correct={empty}
                        value={formValue}
                        onChange={(e)=>setFormValue(e.target.value)}
                        placeholder={placeholder} type="text" />
                    <IconButton>
                        <Send/>
                    </IconButton>
                </form>
            </div>
        </div>

    )
}

export default Chat
