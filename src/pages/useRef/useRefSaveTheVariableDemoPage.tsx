import React from "react";
import MyComponent from "./useRefSaveTheVariableDemo";
import myComponentCode from "./useRefSaveTheVariableDemo?raw";
import DemoWithCode from "@/components/DemoWithCode";

const Page: React.FC = () => {
  return (
    <DemoWithCode
      title="💡 3. 示例 2：保存可变变量而不引起重新渲染"
      Component={MyComponent}
      code={myComponentCode}
    />
  );
};

export default Page;
