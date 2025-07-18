import React from "react";
import { Tabs, type TabsProps } from "antd";
import UseRefInfo from "./useContextInfo";
// import UseRefGetDomDemoPage from "./useRefGetDomDemoPage";
// import UseRefSaveTheVariableDemoPage from "./useRefSaveTheVariableDemoPage";
// import UseRefSaveNewStateDemoPage from "./useRefSaveNewStateDemoPage";

const Page: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "useRef介绍",
      children: <UseRefInfo />,
    },
    //     {
    //       key: "2",
    //       label: "💡 示例 1：获取 DOM 元素引用",
    //       children: <UseRefGetDomDemoPage />,
    //     },
    //     {
    //       key: "3",
    //       label: "💡 示例 2：保存可变变量而不引起重新渲染",
    //       children: <UseRefSaveTheVariableDemoPage />,
    //     },
    //     {
    //       key: "4",
    //       label: "💡 示例 3：在闭包中保存最新 state",
    //       children: <UseRefSaveNewStateDemoPage />,
    //     },
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        💡 1. useCallback 的核心使用场景
      </h1>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default Page;
