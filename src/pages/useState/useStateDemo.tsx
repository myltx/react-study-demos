import { useState } from "react";
import { Button, Flex, Input } from "antd";

function App() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      {/* <h1>这个是 useState 示例</h1> */}
      <Flex gap="middle" vertical className="card">
        <Button onClick={updateCount}>count is {count}</Button>
        <Input
          type="text"
          placeholder="Type something..."
          value={count}
          onChange={(e) => {
            setCount(Number(e.target.value));
          }}
        />
      </Flex>
    </>
  );
}

export default App;
