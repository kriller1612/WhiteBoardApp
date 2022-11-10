import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import { useState } from 'react';
import '../styles/Forgot.css'
import { Link } from 'react-router-dom';


export default function Forgot() {
    const auth = getAuth();
    const [email, setEmail] = useState("")

    const resetPassword = (email: string) => {
        try {
          sendPasswordResetEmail(auth, email).then(() => {
            window.alert("If this email is registered in our system, we will send a password reset email to your email address")
          })
        } catch (err) {
          console.error(err)
        }
      }
    return (
        <div className='forgot'>
            <h1>Forgot password</h1>
            <div className='forgotform'>
                <input placeholder='Email' onChange={((e) => setEmail(e.target.value))}></input>
                <button className='forgotbutton' onClick={() => resetPassword(email)}>Reset password</button>
                <Link to='/login'>Log in</Link>
            </div>
        </div>
    )
}