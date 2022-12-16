import { useContext } from "react"
import {Context} from "UserContext"

export default function Connection(){

  console.log("dans logout")
    const {login} = useContext(Context)
    
    const onClickLogin = async (e) => {
        console.log("connection")
        login()
      }
    return (
      <div>
        <button onClick={onClickLogin}>Se connecter</button>
        
      </div>
    )
}