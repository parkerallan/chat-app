import React, { useState } from 'react'
import { db, auth } from '../firebase'
import firebase from 'firebase'
import { Input, Button } from '@material-ui/core'

function SendMessage({scroll}) {
  const [msg, setMsg] = useState('')

  async function sendMessage(e) {
    e.preventDefault()
    const { uid, photoURL } = auth.currentUser

    await db.collection('messages').add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setMsg('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div style={{ margin: '20px 20px 0px 0px', float: 'right' }} class="send-button">
          <Button style={{ color:'whitesmoke', fontSize: '15px', fontWeight: '500'}} type="submit">Chat</Button>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start'}}>
          <Input style={{margin:'25px 10px 0px 0px', width: '90%', fontSize: '15px', fontWeight: '400'}} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Send a message" />
        </div>
        <div class="chat-lift">
        </div>
      </form>
    </div>
  )
}

export default SendMessage
