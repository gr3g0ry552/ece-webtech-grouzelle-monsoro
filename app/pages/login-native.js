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
    <div class="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <p class="static h-80"></p>
      <div>
        <div class="text-center">
          <form class="flex flex-col" onSubmit={onSubmit}>
            <div>
            <label>
              <span>username</span>
              <input type="text" name="username" />
            </label>
            </div>
        <div>

            <label>
              <span>password</span>
              <input type="text" name="password" />
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


