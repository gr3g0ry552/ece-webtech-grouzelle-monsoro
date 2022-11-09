import { userAgent } from "next/server";
import { createContext, useState } from "react";

export default function LogFunc() {
  const [user, setUser] = useState("Jean");

  return (
    <div class="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <p class="static h-80"></p>
      <div>
        <div class="text-center">
          <form class="flex flex-col">
            <label>
              <span>username</span>
              <input type="text" name="username" />
            </label>
            <p class="static h-10"></p>
            <label>
              <span>password</span>
              <input type="text" name="password" />
            </label>
          </form>
          <p class="static h-10"></p>
          <button
            onClick={() => setUser("username")}
            class="bg-green-400 rounded-md"
          >
            Login
          </button>
          <p>Welcome {user}</p>
        </div>
      </div>
    </div>
  );
}

// export default function handleState() {
//   return (
//     () => setUser("username")
//   )
// }
