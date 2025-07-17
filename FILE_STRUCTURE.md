# 文件结构说明

## 📁 项目根目录

```
personal-website/
├── app/                    # Next.js App Router 目录
├── components/             # React 组件目录
├── lib/                    # 工具函数和配置
├── hooks/                  # 自定义 React Hooks
├── public/                 # 静态资源文件
├── styles/                 # 样式文件
├── package.json           # 项目依赖和脚本
├── tailwind.config.ts     # Tailwind CSS 配置
├── components.json        # shadcn/ui 配置
├── tsconfig.json          # TypeScript 配置
└── README.md              # 项目说明文档
```

## 📁 app/ 目录 (Next.js App Router)

| 文件 | 作用 | 说明 |
|------|------|------|
| `layout.tsx` | 根布局组件 | 定义页面基本结构，设置元数据 |
| `page.tsx` | 主页面组件 | 个人主页的核心内容，包含5个标签页 |
| `globals.css` | 全局样式 | Tailwind CSS 基础样式和CSS变量 |

## 📁 components/ 目录

| 子目录/文件 | 作用 | 说明 |
|------------|------|------|
| `ui/` | shadcn/ui 组件库 | 包含50+个可复用UI组件 |
| `theme-provider.tsx` | 主题管理 | 明暗主题切换功能 |

### ui/ 子目录组件分类

**基础组件**
- `button.tsx` - 按钮组件
- `card.tsx` - 卡片容器
- `badge.tsx` - 标签组件
- `input.tsx` - 输入框
- `label.tsx` - 标签

**复合组件**
- `dialog.tsx` - 对话框
- `dropdown-menu.tsx` - 下拉菜单
- `navigation-menu.tsx` - 导航菜单
- `tabs.tsx` - 标签页

**数据展示**
- `table.tsx` - 表格
- `chart.tsx` - 图表
- `progress.tsx` - 进度条

**反馈组件**
- `toast.tsx` - 通知提示
- `alert.tsx` - 警告提示
- `tooltip.tsx` - 工具提示

## 📁 lib/ 目录

| 文件 | 作用 | 说明 |
|------|------|------|
| `utils.ts` | 工具函数 | 包含 `cn()` 函数用于合并CSS类名 |

## 📁 hooks/ 目录

| 文件 | 作用 | 说明 |
|------|------|------|
| `use-mobile.tsx` | 移动端检测 | 检测设备类型 |
| `use-toast.ts` | Toast通知 | 管理通知状态 |

## 📁 public/ 目录

| 文件 | 作用 | 说明 |
|------|------|------|
| `placeholder-*.png` | 占位图片 | 各种尺寸的占位图片 |
| `placeholder-*.svg` | 占位图标 | SVG格式的占位图标 |

## 📄 配置文件

| 文件 | 作用 | 关键配置 |
|------|------|----------|
| `package.json` | 项目依赖管理 | Next.js 15, React 19, Radix UI |
| `tailwind.config.ts` | Tailwind配置 | 颜色系统、动画、暗色模式 |
| `components.json` | shadcn/ui配置 | 路径别名、图标库、CSS变量 |
| `tsconfig.json` | TypeScript配置 | 编译选项、路径映射 |
| `next.config.mjs` | Next.js配置 | 构建和部署选项 |

## 🎨 设计系统

### 颜色主题
- **主色调**: amber (琥珀色)
- **辅助色**: orange (橙色), rose (玫瑰色)
- **背景**: 渐变背景 (amber-50 → orange-50 → rose-50)

### 视觉效果
- **毛玻璃**: `backdrop-blur-xl`
- **渐变**: 多层次的渐变背景
- **阴影**: 柔和的阴影效果
- **圆角**: 统一的圆角设计

### 响应式设计
- **桌面端**: 侧边栏 + 主内容区
- **移动端**: 自适应布局
- **断点**: Tailwind CSS 默认断点

## 🔧 开发工具

### 包管理器
- **pnpm**: 快速、节省空间的包管理器

### 代码质量
- **TypeScript**: 类型安全
- **ESLint**: 代码规范检查

### 样式处理
- **Tailwind CSS**: 原子化CSS
- **PostCSS**: CSS后处理
- **tailwindcss-animate**: 动画插件
