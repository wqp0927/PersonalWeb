# 部署指南

这个项目可以通过多种方式部署到互联网上。以下是推荐的部署方案：

## 方案一：Vercel 部署（推荐）

### 步骤：
1. 访问 [vercel.com](https://vercel.com) 并注册账号
2. 点击 "New Project"
3. 连接您的 GitHub 仓库或直接上传代码
4. Vercel 会自动检测 Next.js 项目并配置部署
5. 点击 "Deploy" 完成部署

### 优点：
- 完全免费
- 自动 HTTPS
- 全球 CDN
- 自动部署（连接 Git 仓库后）
- 最佳 Next.js 支持

## 方案二：Netlify 部署

### 步骤：
1. 访问 [netlify.com](https://netlify.com) 并注册账号
2. 将整个项目文件夹拖拽到 Netlify 的部署区域
3. 等待部署完成

### 优点：
- 免费计划
- 自动 HTTPS
- 全球 CDN
- 支持自定义域名

## 方案三：GitHub Pages 部署

### 步骤：
1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为部署源
4. 每次推送到 main 分支时会自动部署

### 优点：
- 完全免费
- 与 GitHub 集成
- 自动部署

## 本地测试

在部署前，您可以在本地测试构建：

```bash
npm install --legacy-peer-deps
npm run build
```

## 注意事项

- 项目已配置为静态导出，适合部署到任何静态托管服务
- 使用了 `--legacy-peer-deps` 来解决依赖冲突
- 图片已配置为未优化模式以支持静态导出 