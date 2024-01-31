import React from 'react'
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";


import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome  = () => {
  const googleSignIn = ()=>{
    const provider = new GoogleAuthProvider(); 
    signInWithRedirect(auth , provider); 

  }
  return (
    <>
      <main className='welcome'>
        <h2>Welcome to chat</h2>
        <img src='/logo512.png' alt='Reactj logo' width={50} height={50}/>
        <p>Sign in with Google to chat with with your fellow React Developers.</p>
        <button className='sign-in'>
        <img
          onClick={googleSignIn} 
          src={GoogleSignin}
          alt='Sign in with google'
          type = "button"
        />

        </button>
      </main>
    </>
  )
}

export default Welcome 
