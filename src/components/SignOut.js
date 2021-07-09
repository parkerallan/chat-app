import React from 'react'
import { auth } from '../firebase.js'
import { Button } from '@material-ui/core'

function SignOut() {
  return (
    <div style={{ display: 'flex'}}>
    <div style={{margin: '10px'}}>
      <div class="container-signout">
        <Button style={{  fontSize: '15px', borderRadius: '0', color: 'whitesmoke' }} onClick={() => auth.signOut()}>Sign Out</Button>
      </div>
    </div>
  </div>
)
}

export default SignOut
