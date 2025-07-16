import { Button } from "antd";
import { useEffect, useRef, useState } from "react";

function LatestValue() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count; // 每次渲染时更新 ref
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("最新 count:", countRef.current);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div>
        当你在定时器、监听器中使用 state，容易遇到闭包陷阱（引用了旧值），可用
        useRef 保存最新值：
      </div>
      <h2 className="my-2">{count}</h2>
      <Button onClick={() => setCount((c) => c + 1)}>+1</Button>
      <div className="mt-10">
        <h6 className="my-4">🔍 解释</h6>
        <ul>
          <li className="my-2">
            • 如果直接使用 count，定时器里会引用到初始化时的旧 count。
          </li>
          <li>
            • 使用 countRef.current，每次渲染都更新 ref，定时器中可拿到最新值。
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LatestValue;
