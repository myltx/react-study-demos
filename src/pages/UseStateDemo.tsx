import { useState } from "react";
import "../App.css";

function App() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <h1>这个是 useState 示例</h1>
      <div className="card">
        <button onClick={updateCount}>count is {count}</button>
        <input
          type="text"
          placeholder="Type something..."
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        />
      </div>
    </>
  );
}

export default App;
