# 个人主页项目说明文档

## 项目概述

这是一个使用 **v0.dev** 生成的现代化个人主页项目，基于 Next.js 15 和 React 19 构建。项目采用了现代化的技术栈和设计理念，展示了一个产品经理的个人信息、工作经历、兴趣爱好等内容。

## 技术栈

### 核心框架
- **Next.js 15** - React 全栈框架，提供 SSR/SSG 支持
- **React 19** - 前端 UI 库
- **TypeScript** - 类型安全的 JavaScript

### UI 组件库
- **Radix UI** - 无样式的可访问性组件库
- **shadcn/ui** - 基于 Radix UI 的现代化组件库
- **Lucide React** - 精美的图标库

### 样式系统
- **Tailwind CSS** - 原子化 CSS 框架
- **tailwindcss-animate** - Tailwind 动画插件
- **next-themes** - 主题切换支持

### 开发工具
- **pnpm** - 包管理器
- **PostCSS** - CSS 后处理器
- **ESLint** - 代码质量检查

## 项目结构详解

### 📁 根目录文件

#### `package.json`
- **作用**: 项目依赖管理和脚本配置
- **关键依赖**:
  - Next.js 15 和 React 19 作为核心框架
  - 大量 Radix UI 组件用于构建界面
  - Tailwind CSS 用于样式设计
  - 各种工具库如 `clsx`、`tailwind-merge` 等

#### `tailwind.config.ts`
- **作用**: Tailwind CSS 配置文件
- **特点**:
  - 支持暗色模式 (`darkMode: ["class"]`)
  - 定义了完整的颜色系统（包括 CSS 变量）
  - 配置了自定义动画和圆角
  - 集成了 `tailwindcss-animate` 插件

#### `components.json`
- **作用**: shadcn/ui 组件库配置文件
- **配置内容**:
  - 使用 TypeScript 和 React Server Components
  - 配置了路径别名 (`@/components`, `@/lib` 等)
  - 使用 Lucide 作为图标库
  - 启用 CSS 变量支持

#### `tsconfig.json`
- **作用**: TypeScript 配置文件
- **功能**: 定义编译选项、路径映射等

### 📁 `app/` 目录 (Next.js App Router)

#### `layout.tsx`
- **作用**: 根布局组件，定义页面的基本结构
- **功能**:
  - 设置页面元数据 (title, description)
  - 引入全局样式
  - 定义 HTML 结构

#### `page.tsx`
- **作用**: 主页面组件，包含整个个人主页的内容
- **特点**:
  - 使用 `"use client"` 指令，支持客户端交互
  - 实现了标签页切换功能
  - 包含五个主要模块：关于我、工作经历、兴趣爱好、个人项目、联系我
- **设计亮点**:
  - 渐变背景和毛玻璃效果
  - 响应式侧边栏导航
  - 现代化的卡片式布局

#### `globals.css`
- **作用**: 全局样式文件
- **内容**: Tailwind CSS 的基础样式和自定义 CSS 变量

### 📁 `components/` 目录

#### `ui/` 子目录
- **作用**: 存放所有 shadcn/ui 组件
- **组件类型**:
  - 基础组件：Button, Card, Badge, Input 等
  - 复合组件：Dialog, Dropdown, Navigation 等
  - 数据展示：Table, Chart, Progress 等
  - 反馈组件：Toast, Alert, Tooltip 等

#### `theme-provider.tsx`
- **作用**: 主题提供者组件
- **功能**: 管理明暗主题切换

### 📁 `lib/` 目录

#### `utils.ts`
- **作用**: 工具函数库
- **核心函数**: `cn()` - 用于合并 Tailwind CSS 类名
- **依赖**: `clsx` 和 `tailwind-merge`

### 📁 `hooks/` 目录
- **作用**: 自定义 React Hooks
- **文件**:
  - `use-mobile.tsx` - 移动端检测 Hook
  - `use-toast.ts` - Toast 通知 Hook

### 📁 `public/` 目录
- **作用**: 静态资源文件
- **内容**: 占位图片和图标文件
