import React from "react";
import MyComponent from "./useEffectDemoChange";
import myComponentCode from "./useEffectDemoChange?raw";
import DemoWithCode from "@/components/DemoWithCode";

const Page: React.FC = () => {
  return (
    <DemoWithCode
      title="💡 useEffect 实现 id 变化后调用 API"
      Component={MyComponent}
      code={myComponentCode}
    />
  );
};

export default Page;
