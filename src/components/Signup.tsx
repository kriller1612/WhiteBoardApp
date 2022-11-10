import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { useState } from 'react';
import '../styles/Signup.css'
import { Link } from 'react-router-dom';


export default function Signup() {
    const auth = getAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const logInWithEmailAndPassword = (email: string, password: string) => {
        try {
          createUserWithEmailAndPassword(auth, email, password).then((creds) => {
            console.log("logged in")
          })
        } catch (err) {
          console.error(err)
        }
      }
    return (
        <div className='login'>
            <h1>Signup</h1>
            <div className='loginform'>
                <input placeholder='Email' onChange={((e) => setEmail(e.target.value))}></input>
                <input placeholder='Password' type='password' onChange={((e) => setPassword(e.target.value))}></input>
                <button className='loginbutton' onClick={() => logInWithEmailAndPassword(email, password)}>Sign up</button>
                <Link to='/login'>Log in</Link>
            </div>
        </div>
    )
}