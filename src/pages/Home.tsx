import { Card, Typography, Button, Space } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
        padding: "40px",
      }}>
      <Card
        style={{
          maxWidth: 600,
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={2} style={{ textAlign: "center", marginBottom: 0 }}>
            🚀 欢迎来到 <Text type="success">React 学习模块</Text>
          </Title>
          <Paragraph style={{ fontSize: "16px", textAlign: "center" }}>
            本模块包含丰富的 React Hooks 与组件示例，帮助你系统掌握 React
            开发。点击左侧导航，开始探索吧！
          </Paragraph>

          <div style={{ textAlign: "center" }}>
            <Button
              type="primary"
              size="large"
              icon={<PlayCircleOutlined />}
              href="/useState">
              立即开始学习
            </Button>
          </div>
        </Space>
      </Card>
    </div>
  );
}

export default Home;
