import React, { useState } from "react";
import {
  Card,
  Typography,
  Button,
  Space,
  Row,
  Col,
  Steps,
  Tag,
  Divider,
  List,
  Progress,
  Collapse,
} from "antd";
import {
  RocketOutlined,
  CodeOutlined,
  BookOutlined,
  SolutionOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  FileTextOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;
const { Panel } = Collapse;
type Status = "finish" | "process" | "wait";

interface LearningStage {
  title: string;
  status: Status;
  icon: React.ReactNode;
  tasks: { name: string; done: boolean }[];
}

const Home = () => {
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState(0);

  // 学习阶段数据
  const learningStages: LearningStage[] = [
    {
      title: "React 思维迁移",
      status: "finish",
      icon: <CheckCircleOutlined />,
      tasks: [
        { name: "重构Vue组件", done: true },
        { name: "掌握6大Hooks", done: true },
        { name: "生命周期对比", done: true },
        { name: "阅读官方文档", done: true },
      ],
    },
    {
      title: "实战项目开发",
      status: "process",
      icon: <CodeOutlined />,
      tasks: [
        { name: "技术栈选型", done: false },
        { name: "项目初始化", done: false },
        { name: "核心功能开发", done: false },
        { name: "部署上线", done: false },
      ],
    },
    {
      title: "面试准备",
      status: "wait",
      icon: <SolutionOutlined />,
      tasks: [
        { name: "概念复盘", done: false },
        { name: "Next.js重点", done: false },
        { name: "项目亮点整理", done: false },
      ],
    },
  ];

  // 推荐资源
  const resources = [
    {
      title: "React官方文档",
      url: "https://react.dev/learn",
      type: "document",
    },
    {
      title: "Next.js学习指南",
      url: "https://nextjs.org/learn",
      type: "tutorial",
    },
    {
      title: "React TypeScript备忘单",
      url: "https://react-typescript-cheatsheet.netlify.app/",
      type: "cheatsheet",
    },
  ];

  // 计算进度
  const totalTasks = learningStages.reduce(
    (sum, stage) => sum + stage.tasks.length,
    0
  );
  const doneTasks = learningStages.reduce((sum, stage) => {
    return sum + stage.tasks.filter((task) => task.done).length;
  }, 0);
  const progressPercent = Math.round((doneTasks / totalTasks) * 100);

  return (
    <div className="overflow-y-auto h-80vh">
      {/* 头部区域 */}
      <Space
        direction="vertical"
        size="large"
        style={{ width: "100%", marginBottom: 40 }}>
        <Title level={2} style={{ textAlign: "center", marginBottom: 8 }}>
          <RocketOutlined /> React全栈成长路线
        </Title>
        <Text
          type="secondary"
          style={{ display: "block", textAlign: "center" }}>
          从Vue迁移到React的体系化学习计划
        </Text>

        {/* 整体进度 */}
        <Card bordered={false} style={{ borderRadius: 12 }}>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Text strong>整体进度</Text>
            <Progress
              percent={progressPercent}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              status="active"
            />
            <Text type="secondary">
              已完成 {doneTasks}/{totalTasks} 个任务 ({progressPercent}%)
            </Text>
          </Space>
        </Card>
      </Space>

      {/* 学习阶段导航 */}
      <Card
        title={
          <>
            <DeploymentUnitOutlined /> 学习阶段导航
          </>
        }
        style={{ marginBottom: 24, borderRadius: 12 }}
        bodyStyle={{ paddingTop: 0 }}>
        <Steps
          current={activeStage}
          onChange={setActiveStage}
          direction="vertical">
          {learningStages.map((stage, index) => (
            <Step
              key={index}
              title={stage.title}
              status={stage.status}
              icon={stage.icon}
              description={
                <List
                  size="small"
                  dataSource={stage.tasks}
                  renderItem={(task) => (
                    <List.Item>
                      <Space>
                        {task.done ? (
                          <CheckCircleOutlined style={{ color: "#52c41a" }} />
                        ) : (
                          <ClockCircleOutlined style={{ color: "#faad14" }} />
                        )}
                        <Text delete={task.done}>{task.name}</Text>
                      </Space>
                    </List.Item>
                  )}
                />
              }
            />
          ))}
        </Steps>
      </Card>

      {/* 当前阶段重点 */}
      <Row gutter={24} style={{ marginBottom: 24 }}>
        <Col span={24}>
          <Card
            title={
              <>
                <CodeOutlined /> 阶段 {activeStage + 1}：
                {learningStages[activeStage].title}
              </>
            }
            style={{ borderRadius: 12, height: "100%" }}>
            {activeStage === 0 && (
              <Space direction="vertical" size="middle">
                <Title level={4} style={{ marginTop: 0 }}>
                  ✅ 已完成
                </Title>
                <Paragraph>
                  <Tag color="green">useState</Tag>
                  <Tag color="green">useEffect</Tag>
                  <Tag color="green">useMemo</Tag>
                  <Tag color="green">useCallback</Tag>
                  <Tag color="green">useRef</Tag>
                  <Tag color="green">useContext</Tag>
                </Paragraph>
                <Button
                  type="primary"
                  className="color-primary"
                  onClick={() => navigate("/hooks")}>
                  查看Hooks笔记
                </Button>
              </Space>
            )}

            {activeStage === 1 && (
              <Space direction="vertical" size="middle">
                <Title level={4}>🎯 项目选型</Title>
                <Paragraph>
                  <Tag icon={<FileTextOutlined />}>技术博客平台</Tag>
                  <Tag icon={<FileTextOutlined />}>SaaS管理后台</Tag>
                </Paragraph>

                <Title level={4}>🔧 技术栈</Title>
                <Paragraph>
                  <Tag color="blue">Next.js</Tag>
                  <Tag color="cyan">Tailwind CSS</Tag>
                  <Tag color="purple">TypeScript</Tag>
                  <Tag color="orange">Zustand</Tag>
                  <Tag color="red">React Query</Tag>
                </Paragraph>

                <Collapse ghost>
                  <Panel header="查看详细开发流程" key="1">
                    <Steps direction="vertical" size="small">
                      <Step
                        title="项目初始化"
                        description="Next.js + TS + Tailwind"
                      />
                      <Step title="页面开发" description="首页/详情页布局" />
                      <Step
                        title="组件开发"
                        description="Layout/Header/Card组件"
                      />
                      <Step title="进阶功能" description="认证/CRUD/SEO" />
                      <Step title="部署上线" description="Vercel + Railway" />
                    </Steps>
                  </Panel>
                </Collapse>
              </Space>
            )}

            {activeStage === 2 && (
              <Space direction="vertical" size="middle">
                <Title level={4}>📚 重点复习</Title>
                <List size="small">
                  <List.Item>- Props drilling解决方案</List.Item>
                  <List.Item>- React性能优化策略</List.Item>
                  <List.Item>- Fiber架构核心思想</List.Item>
                  <List.Item>- Next.js渲染模式对比</List.Item>
                </List>

                <Button type="dashed" block>
                  生成面试问题清单
                </Button>
              </Space>
            )}
          </Card>
        </Col>

        <Col span={24} className="mt-6">
          <Card
            title={
              <>
                <BookOutlined /> 学习资源
              </>
            }
            style={{ borderRadius: 12, height: "100%" }}>
            <List
              dataSource={resources}
              renderItem={(item) => (
                <List.Item>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.type === "document" && <FileTextOutlined />}
                    {item.type === "tutorial" && <SolutionOutlined />}
                    {item.type === "cheatsheet" && <CodeOutlined />}
                    {" " + item.title}
                  </a>
                </List.Item>
              )}
            />
            <Divider dashed />
            <Text strong>今日推荐：</Text>
            <Paragraph>
              <a
                href="https://react.dev/learn"
                target="_blank"
                rel="noopener noreferrer">
                React官方新文档 (react.dev)
              </a>
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {/* 快捷入口 */}
      <Card title="🚀 快捷入口" style={{ borderRadius: 12 }}>
        <Space wrap>
          <Button onClick={() => navigate("/hooks/useState")}>Hooks笔记</Button>
          <Button onClick={() => navigate("/projects")}>项目实践</Button>
          <Button onClick={() => navigate("/interview")}>面试准备</Button>
          {/* <Button type="dashed">添加学习记录</Button> */}
        </Space>
      </Card>
    </div>
  );
};

export default Home;
