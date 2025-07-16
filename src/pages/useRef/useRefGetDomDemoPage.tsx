import React from "react";
import MyComponent from "./useRefGetDomDemo";
import myComponentCode from "./useRefGetDomDemo?raw";
import DemoWithCode from "@/components/DemoWithCode";

const Page: React.FC = () => {
  return (
    <DemoWithCode
      title="💡 2. 示例 1：获取 DOM 元素引用"
      Component={MyComponent}
      code={myComponentCode}
    />
  );
};

export default Page;
