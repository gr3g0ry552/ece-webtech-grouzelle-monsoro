
import React, { useState, useEffect,useContext } from "react"
import Link from 'next/link'
import Image from 'next/image'
import Login from './Login';
import logout from './Logout';
import Logout from './Logout';
import Context from "UserContext";

export default function Header() {
 

  const [log, setlog] = useState(false);
 const {user}=useContext(Context)
  return (
    <header class="bg-slate-300">
      <title>Create Next App</title>
      <Link href={`/`}>
          <a>
            <span class="text-3xl box-border w-50">
              <svg class="h-10 w-10" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path>
              </svg>
            </span>
          </a>
        </Link> 
      <div class="container mx-auto px-4 columns-3 gap-4">

        
        
          <div class="bg-slate-200 rounded-md">
          <Link href="/articles_general">
              Articles
            </Link>
          </div>
          <div class="bg-red-400 rounded-md">
            <Link href="/about">
              About us
            </Link>
          </div>
          <div class="bg-slate-500 rounded-md">
            <Link href="/contacts">
              Contact us
            </Link>
          </div>
          <div class="bg-slate-420 rounded-md">
         {user ? <Login/>: <Logout/>}
         
          
          

          
          </div>

          
       
      </div>
    </header>
  )
}
