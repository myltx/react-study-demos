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

- React 19 - 最新版本的 React 框架
- TypeScript - 为项目提供类型安全
- Vite 7 - 现代化的构建工具，提供极速的开发体验
- Ant Design 5 - 企业级 UI 组件库
- React Router DOM 7 - 路由管理

## 📝 项目结构

```
src/
├── layout/        # 布局组件
├── pages/         # 页面组件
│   ├── Home.tsx   # 首页
│   ├── UseStateDemo.tsx
│   ├── UseReducerDemo.tsx
│   ├── useEffectDemo.tsx
│   └── useEffectDemoChange.tsx
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

- useState - 状态管理基础
- useReducer - 复杂状态管理
- useEffect - 副作用处理
  - 基础用法
  - 依赖项变化处理

### 项目特点

- 使用 TypeScript 确保类型安全
- 集成 ESLint 进行代码规范检查
- 采用 Vite 实现快速的开发体验
- 使用 Ant Design 提供美观的 UI 组件
- 模块化的路由配置

## 💡 备注

本仓库主要用于个人学习与练习，若对你有帮助欢迎 star ⭐️，也欢迎 issue 与 PR 交流。

## 📖 License

MIT
