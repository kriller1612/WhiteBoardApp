import './App.css';
import Board from './components/Board';
import {initializeApp} from 'firebase/app'
import {getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import {getFirestore, collection, getDocs} from 'firebase/firestore'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

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
const auth = getAuth(app)


function App() {
  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Board firestore={firestore}/>} />
          <Route path='/login' element={<Login auth={auth} />} />
          <Route path='/signup' element={<Signup auth={auth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
