import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import "./styles/Chat.css"
import 'firebase/firestore'
import styled from 'styled-components'
import firebase from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import db from './firebase'

const ErrorInput = styled.input`
  border: none;
  outline: none;
  background: none;
  color: #111;
  font-size: 18px;
  width: 100%;
  padding: 0.5rem 0.5rem;
  border-radius: 5px;
  background: whitesmoke;

  &::placeholder{
    color : ${({ correct }) => (!correct ? '#c4c4c4' : 'red')}
  }
`

function Chat(props) {

  const [formValue, setFormValue] = useState('');


  const messagesRef = db.collection('messages').doc('601c48e02c39c60dc81f4dc1').collection('message')
  const query = messagesRef.orderBy('createdAt');
  const [messages] = useCollectionData(query, { idField: 'id' })
    
  const dummy = useRef();
  const [empty, setEmpty] = useState(false)
  const [placeholder, setPlaceholder] = useState('Enter A Message')




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
      dummy.current.scrollIntoView({ behavior: 'smooth' });

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
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat__Body">
                {messages && messages.map((message) => (
                    
                    <div key={message.id} className={message.sent ? 'chat chat__sender' : 'chat chat__reciever'}>
                        <p className="text">{message.text}</p>
                        <span className="chat__timestamp">
                            {message.createdAt.toDate().toDateString()}
                        </span>
                    </div>
                ))}
              <span ref={dummy} />

            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form onSubmit={chatSubmitHandler}>
                    <ErrorInput
                        correct={empty}
                        value={formValue}
                        onChange={(e)=>setFormValue(e.target.value)}
                        placeholder={placeholder} type="text" />
                    <button type="submit">Send</button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>

    )
}

export default Chat
