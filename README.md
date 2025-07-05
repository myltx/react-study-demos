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

## 🛠 技术栈

- React v19.1.0 - 最新版本的 React 框架
- TypeScript v5.8.3 - 为项目提供类型安全
- Vite v7.0.0 - 现代化的构建工具，提供极速的开发体验
- Ant Design v5.26.3 - 企业级 UI 组件库
- React Router DOM v7.6.3 - 路由管理
- React Syntax Highlighter v15.6.1 - 代码高亮展示

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
│   └── useEffect/   # useEffect Hook 示例
│       ├── useEffectDemo.tsx
│       ├── useEffectDemoChange.tsx
│       ├── useEffectDemoChangePage.tsx
│       └── useEffectDemoPage.tsx
├── components/    # 公共组件
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

- 基础状态管理
- 状态更新与重渲染
- 函数式更新
- 对象状态处理

#### useReducer

- 复杂状态管理
- Action 类型定义
- Reducer 函数实现
- 状态初始化

#### useEffect

- 基础用法与生命周期
- 依赖项变化处理
- 清理函数使用
- 异步操作处理
- 性能优化实践

每个 Hook 示例都包含：

- 实际应用场景
- 完整的 TypeScript 类型定义
- 详细的代码注释
- 在线演示效果
- 最佳实践说明

### 项目特点

- 使用 TypeScript v5.8.3 确保类型安全
- 集成 ESLint v9.29.0 进行代码规范检查
- 采用 Vite v7.0.0 实现快速的开发体验
- 使用 Ant Design v5.26.3 提供美观的 UI 组件
- 模块化的路由配置
- 代码示例展示功能，支持语法高亮
- 完整的 TypeScript 类型支持
- 响应式布局设计
- 组件演示与代码同步展示

## 💡 备注

本仓库主要用于个人学习与练习，若对你有帮助欢迎 star ⭐️，也欢迎 issue 与 PR 交流。

## 📖 License

MIT
