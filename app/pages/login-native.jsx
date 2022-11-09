import { userAgent } from "next/server";
import { createContext, useState } from "react";

export default function LogFunc() {
  const [user, setUser] = useState("Jean");

  //   export default function handleState() {

  //   }

  return (
    <>
      <form class="flex space-x-10 text-center">
        <label>
          <span>username</span>
          <input type="text" name="username" />
        </label>
        <label>
          <span>password</span>
          <input type="text" name="password" />
        </label>
      </form>
      <p class="static h-10"></p>
      <button
        onClick={() => setUser("username")}
        class="bg-blue-400 rounded-md"
      >
        Button
      </button>
      <p>{user}</p>
    </>
  );
}
