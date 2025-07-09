import React from "react";
import MyComponent from "./unUseCallbackDemo";
import myComponentCode from "./unUseCallbackDemo?raw";
import DemoWithCode from "@/components/DemoWithCode";

const Page: React.FC = () => {
  return (
    <DemoWithCode
      title="🔬 示例：未使用 useCallback"
      Component={MyComponent}
      code={myComponentCode}
    />
  );
};

export default Page;
