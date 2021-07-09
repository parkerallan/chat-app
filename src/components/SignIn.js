import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div style={{
        justifyContent: 'center', position: 'fixed', width: '100%', height: '100%', backgroundColor: '#18181B'}}>
        <div class="bar-container">
          <p class="title">Welcome To My Chat Room!</p>
        </div>  
      <section>
        <div class="intro-text-box">
          <p class="text-styling">
            Hello! This is a fully functioning chat room. It was made using React and Firebase.
            Firebase if you dont know, is a great backend database that includes auth by signing in with a Google account. Click the button below to get started.
          </p>
        </div>
        <div class="spacing">
          <div class="container">
            <Button style={{ fontSize: '15px', color: 'whitesmoke', fontWeight: '400' }} onClick={signInWithGoogle} >Sign In With Google</Button>
          </div>
        </div>
      </section>
      <section>
        <footer>
          <div class="footer-bar"> 
          </div>
        </footer>
      </section>
    </div>
    )
  }

export default SignIn