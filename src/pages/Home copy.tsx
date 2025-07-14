import React from "react";
import { Card, Typography, Button, Space, Row, Col, List } from "antd";
import {
  PlayCircleOutlined,
  BookOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

// 个人学习路线
const myLearningPath = [
  {
    name: "useState",
    path: "/hooks/useState",
    description: "学习组件状态管理",
    emoji: "📌",
  },
  {
    name: "useEffect",
    path: "/hooks/useEffect",
    description: "掌握副作用处理",
    emoji: "🔄",
  },
  {
    name: "useReducer",
    path: "/hooks/useReducer",
    description: "管理复杂状态逻辑",
    emoji: "♻️",
  },
  {
    name: "useMemo",
    path: "/hooks/useMemo",
    description: "性能优化技巧",
    emoji: "⚡",
  },
  {
    name: "useCallback",
    path: "/hooks/useCallback",
    description: "函数记忆化方法",
    emoji: "🧠",
  },
];

// 学习心得区域
const tips = [
  "React更注重JavaScript本身，Vue更注重模板",
  "Hooks让函数组件也能管理状态",
  "每次渲染都有独立的props和state",
  "useEffect依赖数组要写完整",
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "80vh",
        background: "#fafafa",
        padding: "24px",
      }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* 个人学习标题 */}
        <Space
          direction="vertical"
          size="middle"
          style={{ width: "100%", textAlign: "center", marginBottom: 32 }}>
          <Title level={2} style={{ color: "#1890ff" }}>
            <SmileOutlined /> 我的React学习笔记
          </Title>
          <Paragraph style={{ fontSize: 16 }}>
            记录从Vue转向React的学习历程，重点攻克Hooks的使用技巧
          </Paragraph>
          <Button
            icon={<PlayCircleOutlined />}
            onClick={() => navigate("/hooks/useState")}>
            开始学习
          </Button>
        </Space>

        {/* 学习路线卡片 */}
        <Card
          title={
            <>
              <BookOutlined /> 当前学习路线
            </>
          }
          style={{ marginBottom: 24, borderRadius: 8 }}>
          <Row gutter={[16, 16]}>
            {myLearningPath.map((item) => (
              <Col xs={24} sm={12} md={8} key={item.name}>
                <Card
                  hoverable
                  onClick={() => navigate(item.path)}
                  style={{ borderRadius: 8, cursor: "pointer" }}>
                  <Space>
                    <span style={{ fontSize: 20 }}>{item.emoji}</span>
                    <div>
                      <Text strong>{item.name}</Text>
                      <div style={{ color: "#666" }}>{item.description}</div>
                    </div>
                  </Space>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* 学习心得 */}
        <Card title="📝 学习心得记录" style={{ borderRadius: 8 }}>
          <List
            dataSource={tips}
            renderItem={(item) => (
              <List.Item>
                <Text>- {item}</Text>
              </List.Item>
            )}
          />
          <div style={{ marginTop: 16, textAlign: "right" }}>
            <Button type="dashed" size="small">
              添加新心得
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
