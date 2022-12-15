import { createContext, useState, useEffect } from 'react'
import { useSupabaseClient, useUser} from '@supabase/auth-helpers-react'

//creer l'objet conctext et l'exporter
export const Context = createContext(null)

//exporter la fonction qui va englober nos page
export const ContextProvider = ({children}) => { 
const [user, setUser] = useState()
const supabaseClient = useSupabaseClient()
const supabaseUser = useUser()
const [loading, setLoading] = useState(true)
const [username_contexte,setUsername_contexte]=useState()
useEffect(function (){

    if (supabaseUser) {
      
      setUser(supabaseUser)
    
      setLoading(false)
    } 
  }, [supabaseUser]) 
/*async function login() {
  const response = await fetch('https://my-json-server.typicode.com/yGrouzelle/Webtech-User/posts')
  const data = await response.json()
 setUser(data)
}*/

async function logout() {
  await supabaseClient.auth.signOut()
  setUser(null)

}

return (<Context.Provider value={{user,logout,username_contexte,setUsername_contexte}}>
      {children}
    </Context.Provider>
  )
}