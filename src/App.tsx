import './App.css';
import Board from './components/Board';
import {initializeApp} from 'firebase/app'
import {getAuth, onAuthStateChanged, User} from 'firebase/auth'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';
import Forgot from './components/Forgot';

const firebaseConfig = {
  apiKey: "AIzaSyAEFIdkxCK9yeVb9Z3y3PWLC39sLCaYphg",
  authDomain: "whiteboard-9078b.firebaseapp.com",
  projectId: "whiteboard-9078b",
  storageBucket: "whiteboard-9078b.appspot.com",
  messagingSenderId: "1086593341062",
  appId: "1:1086593341062:web:e6573a6f968327ed42a307"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

function App() {
  const [user, setUser] = useState<User | undefined | null>(auth.currentUser)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [])

    return (
      <div className="App">
      <Router>
          <Routes>
              <Route path='/' element={user === null ? <Navigate to='/login' /> : <Board />} />
              <Route path='/login' element={user !== null ? <Navigate to='/' /> : <Login />} />
              <Route path='/signup' element={user !== null ? <Navigate to='/' /> : <Signup />} />
              <Route path='/forgot' element={user !== null ? <Navigate to='/' /> : <Forgot />} />
          </Routes>
      </Router>
      </div>
    );
  }

export default App;
