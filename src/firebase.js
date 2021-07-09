import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXYjJGDh4G72bRDgmnz2RCZP0wDkk4npA",
  authDomain: "twitchchat-82407.firebaseapp.com",
  projectId: "twitchchat-82407",
  storageBucket: "twitchchat-82407.appspot.com",
  messagingSenderId: "746060905507",
  appId: "1:746060905507:web:e80372f64132fd17f7c596",
  measurementId: "G-CWC559109Z"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
