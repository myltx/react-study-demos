import React, { useState } from "react";
import { Button, Tabs, message } from "antd";
import {
  CopyOutlined,
  CodeOutlined,
  EyeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import GiscusComments from "./GiscusComments";

interface Props {
  title: string;
  Component: React.FC;
  code: string;
}

const DemoWithCode: React.FC<Props> = ({ title, Component, code }) => {
  const [activeTab, setActiveTab] = useState("preview");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      message.success("代码已复制到剪贴板");
    } catch (err) {
      console.log(err, "err");
      message.error("复制失败");
    }
  };

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "8px",
        marginBottom: "24px",
        overflow: "hidden",
      }}>
      <div
        style={{
          background: "#fafafa",
          borderBottom: "1px solid #eee",
          padding: "8px 16px",
          fontWeight: 500,
          display: "flex",
          justifyContent: "space-between",
        }}>
        <span>{title}</span>
        <Button
          type="text"
          icon={<CopyOutlined />}
          onClick={handleCopy}
          size="small">
          复制代码
        </Button>
      </div>

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        style={{ paddingLeft: "16px" }}
        items={[
          {
            key: "preview",
            label: (
              <span>
                <EyeOutlined /> 预览
              </span>
            ),
            children: (
              <div style={{ padding: "16px" }}>
                <Component />
              </div>
            ),
          },
          {
            key: "code",
            label: (
              <span>
                <CodeOutlined /> 代码
              </span>
            ),
            children: (
              <SyntaxHighlighter
                language="tsx"
                style={oneLight}
                wrapLines={true}
                customStyle={{
                  margin: 0,
                  padding: "16px",
                  background: "#f5f5f5",
                  borderRadius: "8px",
                }}>
                {code}
              </SyntaxHighlighter>
            ),
          },
          {
            key: "comment",
            label: (
              <span>
                <MessageOutlined /> 评论
              </span>
            ),
            children: <GiscusComments title={title} />,
          },
        ]}
      />
    </div>
  );
};

export default DemoWithCode;
