import { useContext,useEffect,useState } from 'react'
import Link from 'next/link';
import {Context} from './UserContext'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { data } from "autoprefixer";
export default function UserInfo () {
  const { user, logout,setUsername_contexte,username_contexte } = useContext(Context)
  const supabase = useSupabaseClient()
  if (user) {
    getUsername()
  }
  async function getUsername(){

    let { data, error, status } = await supabase
    .from('profiles')
    .select(`username`)
    .eq('id', user.id)
    .single()
    if (data) {
    setUsername_contexte(data.username)
    }else{
      setUsername_contexte("non defini")
    }  
  }

    
  
    return (
      <div>
        <Link href="/user">
        Username : {user ? <p>{username_contexte}</p> : <p>utilisateur non defini</p> }
        </Link>
        
          <button onClick={()=>{ logout() }}>se deconnecter</button>
        
      </div>
      
      )


}

  