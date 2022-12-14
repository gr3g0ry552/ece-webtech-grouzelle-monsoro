import { useContext } from 'react'
import {Context} from './UserContext'
export default function UserInfo () {
 
    const {user, logout} = useContext(Context)

    return (
      <div>
        <li>
        Username :
        </li>
        <div>
          <div>
            <li>
              Email : 
            </li>
          </div>
          <button onClick={()=>{ logout() }}>se deconnecter</button>
        </div>
      </div>
      
      )


}

  