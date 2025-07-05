import React from "react";
import MyComponent from "./useStateDemo";
import myComponentCode from "./useStateDemo?raw";
import DemoWithCode from "@/components/DemoWithCode";

const UseEffectDemoPage: React.FC = () => {
  return (
    <DemoWithCode
      title="这个是 useState 示例"
      Component={MyComponent}
      code={myComponentCode}
    />
  );
};

export default UseEffectDemoPage;
