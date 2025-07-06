import React from "react";
import MyComponent from "./useMemoDemo";
import myComponentCode from "./useMemoDemo?raw";
import DemoWithCode from "@/components/DemoWithCode";

const UseEffectDemoPage: React.FC = () => {
  return (
    <DemoWithCode
      title="useMemo 在列表渲染中缓存计算总和"
      Component={MyComponent}
      code={myComponentCode}
    />
  );
};

export default UseEffectDemoPage;
