import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 bg-gray-800 rounded-xl">
      <p>You clicked {count} times</p>
      <button 
        onClick={() => setCount(count + 1)} 
        className="px-3 py-1 bg-indigo-600 text-white rounded-lg mt-2"
      >
        Click me
      </button>
    </div>
  );
}
