import {createContext, useState} from 'react'
//creer l'objet conctext et l'exporter
export const Context = createContext(null)

//exporter la fonction qui va englober nos page
export const ContextProvider = ({children}) => {
const [user, setUser] = useState(null)

async function login() {
  const response = await fetch('https://my-json-server.typicode.com/yGrouzelle/Webtech-User/posts')
  const data = await response.json()
  setUser(data)
}

function logout() {
setUser(null)
}

return (<Context.Provider value={{user, login, logout}}>
      {children}
    </Context.Provider>
  )
}