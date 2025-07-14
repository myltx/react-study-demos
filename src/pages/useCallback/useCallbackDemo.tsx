import { Button, Typography } from "antd";
import React, { useCallback, useState } from "react";

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
  const handleClick = useCallback(() => {
    console.log("子组件按钮点击");
  }, []);

  return (
    <div>
      <h2>Parent count: {count}</h2>
      <Button onClick={() => setCount(count + 1)} className="my-2 mr-2">
        +1
      </Button>
      <Child onClick={handleClick} />

      <Typography className="mt-2">
        <Title level={5}>🔍 运行效果</Title>
        <Paragraph>1. 点击 +1 按钮：</Paragraph>
        <Paragraph>
          • Parent 重新渲染
          <br /> • handleClick 引用不变
          <br /> • Child 的 props 未变化，不重新渲染
        </Paragraph>
        <Title level={5}>✅ 性能优化目标达成。</Title>
      </Typography>
    </div>
  );
}

export default Parent;
