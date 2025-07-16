import React from "react";
import MyComponent from "./useRefSaveNewStateDemo";
import myComponentCode from "./useRefSaveNewStateDemo?raw";
import DemoWithCode from "@/components/DemoWithCode";

const Page: React.FC = () => {
  return (
    <DemoWithCode
      title="💡 4. 示例 3：在闭包中保存最新 state"
      Component={MyComponent}
      code={myComponentCode}
    />
  );
};

export default Page;
