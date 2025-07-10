import { Table, Typography } from "antd";
import React from "react";
const { Title, Paragraph } = Typography;
const Page = React.memo(() => {
  const dataSource = [
    {
      key: "1",
      useCallback: "缓存函数引用",
      useMemo: "缓存计算结果",
    },
    {
      useMemo: "useMemo(() => value, deps) 返回值",
      useCallback: "useCallback(fn, deps) 返回函数",
    },
  ];

  const columns = [
    {
      title: "useCallback",
      dataIndex: "useCallback",
      key: "useCallback",
    },
    {
      title: "useMemo",
      dataIndex: "useMemo",
      key: "useMemo",
    },
  ];

  return (
    <div>
      <Typography>
        <Title level={3}>💡 3. useCallback 与 useMemo 的区别</Title>
        <Paragraph>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Paragraph>
        <Title level={3}>💡 4. Vue 中对应场景</Title>
        <Paragraph>
          Vue 由于模板绑定的是方法引用，且虚拟 DOM diff
          不比较函数引用，因此一般不需要 useCallback 这种模式。Vue 的 computed
          类似 useMemo，用于计算属性缓存。
        </Paragraph>
        <Title level={3}>✅ 5. 总结</Title>
        <Paragraph>
          • useCallback 主要用于： <br />
          <Title level={5}>避免由于函数重新定义导致的子组件不必要渲染</Title>
          • 使用场景： <br />
          • 传递给 React.memo 包裹的子组件 <br />• 作为依赖传递给 useEffect
          时避免误触发
        </Paragraph>
      </Typography>
    </div>
  );
});

export default Page;
