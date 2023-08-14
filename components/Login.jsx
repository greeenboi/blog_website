import React, { useState } from 'react'
import '../app/globals.css'

import { signOut } from "firebase/auth";
import {auth, provider} from '../util/firebase';
import { signInWithPopup } from 'firebase/auth';

import { BsGithub } from 'react-icons/bs';

const Login = () => {
    
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleGithubLogin = async () => {
    setError(null);
    setIsPending(true);
    try{
    const res = await signInWithPopup(auth, provider)
    if (!res) {
      throw new Error("Could not complete signup");
    }
    const user = res.user;
    setUser(user);
    setIsPending(false)
  } catch (error) {
    console.log(error);
    alert(error);
    setError(error.message);
    setIsPending(false);
  }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("user logged out")
      setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  }   
        
  return (
      <>
        {user ? ( 
            <button 
              href="/Login" 
              className='relative md:flex self-center ml-8 pl-6 pr-6 pt-1 pb-1 border border-emerald-300 rounded-md hover:bg-emerald-600 hover:opacity-75 md:cursor-pointer transition-opacity active:scale-105' 
              onClick={handleLogout}
              >  
            Logout ? {user.displayName}!
            </button> 
            
        ):( 
            <button 
              href="/Login" 
              className=' relative md:flex flex-row self-center ml-8 pl-6 pr-6 pt-1 pb-1 border border-emerald-300 rounded-md hover:bg-emerald-600 hover:opacity-75 md:cursor-pointer transition-opacity active:scale-105' 
              onClick={handleGithubLogin}
              >  
                 {isPending ? "Loading..." : (<p className='flex flex-row gap-1 md:gap-2 items-center'> <BsGithub/> Login With Github</p> )} 
            </button> 
        )}
    </>
  )
}

export default Login