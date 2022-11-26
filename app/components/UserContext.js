import {createContext, useState} from 'react'
//creer l'objet conctext
const Context = createContext()
//export l'objet par défaut

export default Context
//exporter la fonction qui va englober nos page
export const ContextProvider = ({children}) => {
const [user, setUser] = useState(null)
return (<Context.Provider value={{user: user,login: (usera) => {setUser(usera)},logout: () => {setUser(null)}}}>
      {children}
    </Context.Provider>
  )
}