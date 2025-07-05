import React from "react";
import MyComponent from "./useEffectDemo";
import myComponentCode from "./useEffectDemo?raw";
import DemoWithCode from "@/components/DemoWithCode";

const UseEffectDemoPage: React.FC = () => {
  return (
    <DemoWithCode
      title="useEffect 示例 - 页面加载调用一次 API"
      Component={MyComponent}
      code={myComponentCode}
    />
  );
};

export default UseEffectDemoPage;
