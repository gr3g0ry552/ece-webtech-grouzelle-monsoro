import { useState } from "react";

export default function Test() {
  const [name, setName] = useState("Jean");
  const [count, setCount] = useState(0);

  return (
    <div>
      <p class="text-xl">A CONTINER ..</p>
      <h1 class="">Bienvenue {name} </h1>
      <button
        onClick={() => setCount(count + 1)}
        class="bg-blue-400 rounded-md"
      >
        Click here to increment
      </button>
      <p>{count}</p>
    </div>
  );
}
