import React from "react";
import MyComponent from "./useCallbackDemo";
import myComponentCode from "./useCallbackDemo?raw";
import DemoWithCode from "@/components/DemoWithCode";

const Page: React.FC = () => {
  return (
    <DemoWithCode
      title="💡 2. 使用 useCallback 优化"
      Component={MyComponent}
      code={myComponentCode}
    />
  );
};

export default Page;
