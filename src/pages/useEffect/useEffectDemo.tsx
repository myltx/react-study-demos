import { useEffect, useState } from "react";

function MyComponent() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 定义异步函数
    const fetchData = async () => {
      setTimeout(() => {
        setData("我只被请求了一次");
        setLoading(false);
      }, 2000); // 模拟请求
    };

    // 调用
    fetchData();
  }, []); // 依赖数组为空 => 仅页面加载（首次挂载）时调用一次

  return (
    <div>
      {/* <h1>💡 1. useEffect 实现页面加载后调用一次 API</h1> */}
      <h2>API 数据:</h2>
      <div>{loading ? <p>Loading...</p> : <p>数据加载完成: {data}</p>}</div>
      <h2>🔑 解释</h2>
      <p>
        1. <code>useEffect</code> 在组件挂载时执行一次。
        <br />
        2. <code>useEffect</code> •
        第二个参数是空数组，代表仅在组件挂载（页面加载）时执行一次。。
        <br />
        3. 如果不传依赖数组，每次渲染都会执行（通常会导致无限请求）
        <br />
      </p>
    </div>
  );
}

export default MyComponent;
