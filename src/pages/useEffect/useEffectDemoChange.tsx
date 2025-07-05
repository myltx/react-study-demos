import { useEffect, useState } from "react";

function MyComponent() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      setTimeout(() => {
        setData(`我被请求了 ${id} 次`);
        setLoading(false);

        if (id < 3) {
          setTimeout(() => {
            setId((prevId) => prevId + 1);
          }, 1000);
        }
      }, 2000);
    };

    fetchData();
  }, [id]);

  // 监听 id 更新
  useEffect(() => {
    console.log("ID 实际更新为:", id);
  }, [id]);

  return (
    <div>
      {/* <h1>💡 useEffect 实现 id 变化后调用 API</h1> */}
      <h2>API 数据:</h2>
      <div>{loading ? <p>Loading...</p> : <p>数据加载完成: {data}</p>}</div>
    </div>
  );
}

export default MyComponent;
