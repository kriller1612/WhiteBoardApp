import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEFIdkxCK9yeVb9Z3y3PWLC39sLCaYphg",
  authDomain: "whiteboard-9078b.firebaseapp.com",
  projectId: "whiteboard-9078b",
  storageBucket: "whiteboard-9078b.appspot.com",
  messagingSenderId: "1086593341062",
  appId: "1:1086593341062:web:e6573a6f968327ed42a307"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


function App() {
  console.log(collection(firestore, "notes"))
  return (
    <div className="App">
        <Board firestore={firestore} />
    </div>
  );
}

export default App;
