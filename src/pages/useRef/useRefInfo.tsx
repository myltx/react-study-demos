import React from "react";
import { Table, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;
const dataSource = [
  {
    key: "1",
    reactUseRef: "返回 { current: value }，.current 保存 DOM 或变量",
    vueRef: "返回响应式对象，直接访问 .value",
  },
  {
    key: "2",
    reactUseRef: "修改 .current 不会触发渲染",
    vueRef: "修改 .value 会触发模板更新",
  },
  {
    key: "3",
    reactUseRef: "多用于获取 DOM、保存变量",
    vueRef: "用于声明响应式数据",
  },
];

const columns = [
  {
    title: "React useRef",
    dataIndex: "reactUseRef",
    key: "reactUseRef",
  },
  {
    title: "Vue ref",
    dataIndex: "vueRef",
    key: "vueRef",
  },
];
const App: React.FC = () => (
  <div>
    <Typography>
      <Title level={5} className="my-2">
        💡 1. useRef 是什么？
      </Title>
      <Text code>const ref = useRef(initialValue);</Text>
      <Paragraph className="my-2">
        ✅ 返回一个 可变的 ref 对象，其 .current 属性可以修改。
      </Paragraph>

      <Title level={5}>🔑 常用场景</Title>

      <Paragraph>
        <ul>
          <li>1. 获取 DOM 元素引用 （最常用场景）</li>
          <li>2. 保存可变变量而不引起重新渲染</li>
          <li>3. 在 setInterval/setTimeout 等闭包中保存最新值</li>
        </ul>
      </Paragraph>
      <Title level={5}>💡 2. useRef 与 Vue ref 的区别</Title>

      <Table dataSource={dataSource} columns={columns} className="mt-2" />

      <Title level={5}>✅ 3. 总结</Title>
      <Paragraph>
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
      </Paragraph>
    </Typography>
  </div>
);

export default App;
