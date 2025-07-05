import React from "react";
import MyComponent from "./UseReducerDemo";
import myComponentCode from "./UseReducerDemo?raw";
import DemoWithCode from "@/components/DemoWithCode";

const UseEffectDemoPage: React.FC = () => {
  return (
    <DemoWithCode
      title="这个展示的是 useReducer 示例"
      Component={MyComponent}
      code={myComponentCode}
    />
  );
};

export default UseEffectDemoPage;
