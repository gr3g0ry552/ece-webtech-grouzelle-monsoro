import { useContext } from 'react'
import {Context} from './UserContext'
export default function UserInfo () {
 
    const {user, logout} = useContext(Context)

    return (
      <div>
        <li>
        Username : {user[0].name}
        </li>
        <div>
          <div>
            <li>
              Email : {user[0].mail}
            </li>
          </div>
          <button onClick={()=>{ logout() }}>se deconnecter</button>
        </div>
      </div>
      
      )


}

  