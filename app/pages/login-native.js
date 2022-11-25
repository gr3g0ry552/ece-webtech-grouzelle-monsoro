import { userAgent } from "next/server";
import { createContext, useState } from "react";
import Layout from "../components/Layout";

export default function LogFunc() {
  const [user, setUser] = useState("Jean");
  //fonction qui creer objet form data et affiche ses données
  const onSubmit = function  (e){
    e.preventDefault()
    const data = new FormData(e.target)

  }

  
  

  return (
    <Layout>
   
      <div>
      <div>
        <div >
          <form onSubmit={onSubmit}>
            <div>
            <label>
              <span>username</span>
              <input type="text" name="username" />
            </label>
            </div>
        <div>

            <label>
              <span>password</span>
              <input type="password" name="password" />
            </label>
            </div>
          
   
          <input type="submit" value="Submit"></input>
     </form>
        </div>
      </div>
    </div>
    </Layout>
  )
}


