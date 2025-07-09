import React from "react";
import { Tabs, type TabsProps } from "antd";
import UnUseCallbackDemoPage from "./unUseCallbackDemoPage";
import UseCallBackDemoPage from "./useCallbackDemoPage";
import OtherPage from "./other";

const Page: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "未使用 useCallback",
      children: <UnUseCallbackDemoPage />,
    },
    {
      key: "2",
      label: "使用 useCallback 优化",
      children: <UseCallBackDemoPage />,
    },
    {
      key: "3",
      label: "其他信息",
      children: <OtherPage />,
    },
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
