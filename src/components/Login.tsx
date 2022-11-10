import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react';
import '../styles/Login.css'
import { Link } from 'react-router-dom';


export default function Login() {
    const auth = getAuth();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const logInWithEmailAndPassword = (email: string, password: string) => {
        try {
          signInWithEmailAndPassword(auth, email, password).then((creds) => {
            console.log("logged in")
          })
        } catch (err) {
          console.error(err)
        }
      }
    return (
        <div className='login'>
            <h1>Login</h1>
            <div className='loginform'>
                <input placeholder='Email' onChange={((e) => setEmail(e.target.value))}></input>
                <input placeholder='Password' type='password' onChange={((e) => setPassword(e.target.value))}></input>
                <button className='loginbutton' onClick={() => logInWithEmailAndPassword(email, password)}>Log in</button>
                <Link to='/signup'>Sign up</Link>
                <Link to='/forgot'>Forgot password?</Link>
            </div>
        </div>
    )
}