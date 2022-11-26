import { useContext } from 'react'
import {Context} from './UserContext'
export default function Login () {
 
    const {user, logout} = useContext(Context)
    return (
      <div>
        Welcome {user.name}
        <div>
          <button onClick={()=>{ logout() }}>se deconnecter</button>
        </div>
      </div>
      
      )


}

  