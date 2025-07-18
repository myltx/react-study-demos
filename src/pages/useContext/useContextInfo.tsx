import React from "react";
import { Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const App: React.FC = () => (
  <div>
    <Typography>
      <Title level={4} className="my-2">
        💡 1. useContext 是什么？
      </Title>
      <Text code>const value = useContext(SomeContext)</Text>
      <Paragraph className="my-2">
        useContext 是一个 React Hook，可以让你读取和订阅组件中的 context。
      </Paragraph>
      <Title level={4}>💡 2. 实现目标</Title>

      <ul>
        <li>1. ✅ 全局切换主题色（light / dark）</li>
        <li>2. ✅ 使用 Context Provider 提供值</li>
        <li>3. ✅ 使用 useContext 在子组件消费</li>
      </ul>
      <Title level={4}>✅ 3. 总结</Title>
      <Title level={5}>🔑 useContext 场景</Title>
      <Paragraph>
        <ul>
          <li>1. 全局主题</li>
          <li>2. 国际化语言</li>
          <li>3. 用户信息</li>
          <li>4. 全局配置</li>
        </ul>
      </Paragraph>
      {/* <Paragraph>
        <ul>
          <li>
            获取 DOM: 使用 <Text code> input ref={} </Text> 获取 DOM
            元素引用,具体可以看示例1
          </li>
          <li>
            保存可变变量: <Text code>ref.current = value</Text> 不会导致渲染
          </li>
          <li>
            避免闭包陷阱: 在 <Text mark>interval、event listener</Text> 中使用
            ref 保存最新值
          </li>
        </ul>
      </Paragraph> */}
    </Typography>
  </div>
);

export default App;
