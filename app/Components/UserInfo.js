import { useContext,useEffect,useState } from 'react'
import {Context} from './UserContext'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { data } from "autoprefixer";
export default function UserInfo () {

  const {user, logout,username_contexte} = useContext(Context)
  
    
  
    return (
      <div>
        <li>
        Username : {user ? <p>{username_contexte}</p> : <p>utilisateur non defini</p> }
        </li>
        <div>
          <button onClick={()=>{ logout() }}>se deconnecter</button>
        </div>
      </div>
      
      )


}

  