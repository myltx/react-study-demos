import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 组件挂载后，自动聚焦 input
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} placeholder="自动聚焦输入框" />
      <div className="mt-10">
        <h6 className="my-4">🔍 解释</h6>
        <ul>
          <li className="my-2"> • inputRef.current 就是 input DOM 节点</li>
          <li> • 在 useEffect 中调用 .focus() 使 input 获得焦点</li>
        </ul>
      </div>
    </div>
  );
}

export default InputFocus;
