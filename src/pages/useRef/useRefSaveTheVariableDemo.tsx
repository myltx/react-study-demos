import { Button } from "antd";
import { useRef, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const timerRef = useRef<number | null>(null);

  const start = () => {
    if (timerRef.current) return; // 已经在计时
    timerRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stop = () => {
    if (!timerRef.current) return;
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h2>计数: {count}</h2>
      <Button className="mt-2 mr-2" onClick={start}>
        开始
      </Button>
      <Button onClick={stop}>停止</Button>

      <div className="mt-10">
        <h6 className="my-4">🔍 解释</h6>
        <ul>
          <li className="my-2">
            • timerRef.current 保存定时器 id，不会因组件重新渲染而丢失。
          </li>
          <li> • 与 useState 不同，修改 ref 不会触发重新渲染。</li>
        </ul>
      </div>
    </div>
  );
}

export default Timer;
