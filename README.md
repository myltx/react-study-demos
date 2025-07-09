<!--
 * @Date: 2025-07-05 11:06:37
 * @LastEditTimes: Do not edit
 * @Descripttion: describe
-->

# react-study-demos

## 📌 项目介绍

这是我的 React 学习 Demo 仓库，主要用于：

- 练习 React 常用 hooks 的使用方式与场景
- 编写 React 组件练习与封装
- 记录学习过程中遇到的技巧、问题与解决方案

希望通过持续积累，形成自己的 React 知识库与练习库，帮助自己快速上手实际项目开发。

## ✨ 项目特色

- 📝 详细的代码注释和文档说明
- 🎯 每个 Hook 都有完整的使用示例
- 💻 实时代码展示与效果预览（使用 DemoWithCode 组件）
- 🔍 TypeScript 类型提示和检查
- 📱 响应式设计，支持移动端查看
- 🎨 基于 Ant Design 的优雅 UI 设计
- 🚀 基于 Vite 的快速开发体验
- 🎭 使用 UnoCSS 的原子化 CSS 方案
- 📦 模块化的代码组织结构

## 🔗 在线预览

- [在线演示地址](https://myltx.github.io/react-study-demos/)
<!-- - [文档地址](https://your-docs-url.com) -->

## 🛠 技术栈

- **[React v19.1.0](https://react.dev/)** - 最新版本的 React 框架
- **[TypeScript v5.8.3](https://www.typescriptlang.org/)** - 为项目提供类型安全
- **[Vite v7.0.0](https://vite.dev/)** - 现代化的构建工具，提供极速的开发体验
- **[UnoCSS](https://unocss.dev/)** - 即时的原子化 CSS 引擎
- **[Ant Design v5.26.3](https://ant.design/index-cn)** - 企业级 UI 组件库
- **[React Router DOM v7.6.3](https://reactrouter.com/)** - 路由管理
- **[React Syntax Highlighter v15.6.1](https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/)** - 代码高亮展示

## 📝 项目结构

```
src/
├── layout/        # 布局组件
├── pages/         # 页面组件
│   ├── Home.tsx   # 首页
│   ├── useState/  # useState Hook 示例
│   │   ├── useStateDemo.tsx
│   │   └── useStateDemoPage.tsx
│   ├── useReducer/  # useReducer Hook 示例
│   │   ├── UseReducerDemo.tsx
│   │   └── useReducerDemoPage.tsx
│   ├── useEffect/   # useEffect Hook 示例
│   │   ├── useEffectDemo.tsx
│   │   ├── useEffectDemoChange.tsx
│   │   ├── useEffectDemoChangePage.tsx
│   │   └── useEffectDemoPage.tsx
│   └── useMemo/    # useMemo Hook 示例
│       └── useMemoDemoPage.tsx
├── components/    # 公共组件
│   ├── DemoWithCode.tsx  # 代码展示组件
│   └── GiscusComments.tsx
├── router/        # 路由配置
└── assets/        # 静态资源
```

## 🚀 快速开始

### 环境要求

- Node.js (推荐使用最新 LTS 版本)
- pnpm (包管理工具)

### 安装依赖

```bash
pnpm install
```

### 开发服务器启动

```bash
pnpm dev
```

### 构建项目

```bash
pnpm build
```

### 代码检查

```bash
pnpm lint
```

## 📚 学习内容

### Hooks 示例

#### useState

- 基础状态管理（计数器示例）
- 状态更新与重渲染
- 函数式更新（updateCount 函数）
- 表单输入处理（Input 组件示例）

#### useReducer

- 复杂状态管理（计数器示例）
- Action 类型定义（increment/decrement）
- Reducer 函数实现
- 状态初始化与边界处理

#### useEffect

- 基础用法与生命周期
- 依赖项变化处理（id 变化触发请求）
- 清理函数使用
- 异步操作处理（模拟数据请求）
- 性能优化实践

#### useMemo

- 计算属性缓存
- 依赖项控制
- 性能优化示例

### 项目亮点

#### DemoWithCode 组件

- 集成代码展示与效果预览
- 支持代码高亮
- 支持代码复制
- Tab 切换展示效果

#### UnoCSS 原子化 CSS

- 零配置，即时生成
- 自定义预设和规则
- 按需生成，体积小
- 类型安全的样式编写

每个 Hook 示例都包含：

- 实际应用场景
- 完整的 TypeScript 类型定义
- 详细的代码注释
- 在线演示效果
- 最佳实践说明

## 🤝 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

### 贡献类型

- 🐛 Bug 修复
- ✨ 新功能
- 📝 文档更新
- 🎨 代码格式调整
- ♻️ 代码重构
- ⚡️ 性能优化

## 💡 备注

本仓库主要用于个人学习与练习，若对你有帮助欢迎 star ⭐️，也欢迎 issue 与 PR 交流。

## 📖 License

MIT
