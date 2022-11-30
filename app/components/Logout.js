import { useContext } from "react"
import Context from "UserContext"

export default function Logout(){

  console.log("dans logout")
    const {login} = useContext(Context)
    
    const onClickLogin = async (e) => {
        console.log("connection")
        const response = await fetch('https://my-json-server.typicode.com/yGrouzelle/Webtech-User/posts')
        const user = await response.json()
        console.log(user)
        login(user)
      }
    return (
      <div>
        <button onClick={onClickLogin}>Se connecter</button>
      </div>
    )
}