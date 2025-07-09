import { Button, Typography } from "antd";
import React, { useState } from "react";

const { Title, Paragraph } = Typography;

interface ChildProps {
  onClick: () => void;
}

const Child: React.FC<ChildProps> = React.memo(({ onClick }) => {
  console.log("🔄 Child 渲染");
  return <Button onClick={onClick}>点击子组件按钮</Button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  // 每次 render 时，handleClick 都是一个新函数
  const handleClick = () => {
    console.log("子组件按钮点击");
  };

  return (
    <div>
      <h2>Parent count: {count}</h2>
      <Button onClick={() => setCount(count + 1)} className="my-2">
        +1
      </Button>
      <Child onClick={handleClick} />

      <Typography className="mt-2">
        <Title level={5}>✅ 问题背景</Title>
        <Paragraph>
          当父组件向子组件传递函数 props 时，如果函数在每次 render
          时都重新定义，会导致：
        </Paragraph>
        <Paragraph>
          • 子组件即使没有其他 props 变化，也会被重新渲染（如果子组件使用
          React.memo 时）。
        </Paragraph>
      </Typography>
      <Typography className="mt-2">
        <Title level={5}>🔍 运行效果</Title>
        <Paragraph>1. 点击 +1 按钮：</Paragraph>
        <Paragraph>
          • Parent 重新渲染
          <br />• handleClick 重新定义
          <br />• Child 的 props onClick 变化，导致 Child 也重新渲染
        </Paragraph>
      </Typography>
    </div>
  );
}

export default Parent;
