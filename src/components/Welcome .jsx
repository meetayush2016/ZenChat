import React from 'react'
import GoogleSignin from "../img/google_logo.png";
import backgroundImg from "../img/chat.jpg"; 

import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome  = () => {
  const googleSignIn = ()=>{
    const provider = new GoogleAuthProvider(); 
    signInWithRedirect(auth , provider); 

  }
  return (
    <>
      <main style={{  backgroundImage: `url(${backgroundImg})`,   backgroundColor:'black' , height:'585px'}} className='welcome'>
        <h style={{fontSize:'50px'}}>Welcome to</h>
        <h1 style={{fontSize:'90px'}}>
          <span style={{color:'yellow'}}>Zen</span>
          <span style={{color:'white'}}>Chat</span>
        </h1>
        {/* <img src='/logo512.png' alt='Reactj logo' width={50} height={50}/> */}
        <p style={{margin:'20px'}}>Sign in with Google</p>
        <button className='sign-in'>
        <img
          onClick={googleSignIn} 
          src={GoogleSignin}
          alt='Sign in with google'
          type = "button"
          style={{height:'200px'}}
        />

        </button>
      </main>
    </>
  )
}

export default Welcome 
