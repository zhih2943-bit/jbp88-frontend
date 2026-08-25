# jbp88 游戏大厅前端

这是一个面向移动端的 jbp88 游戏大厅界面项目，采用深蓝、紫色与金色视觉风格，包含响应式首页、活动轮播、滚动公告、快捷入口、游戏分类卡片和底部导航。

> 本项目仅用于前端界面演示。登录、注册、充值、提现及游戏入口均不会提交账户或资金信息。

## 技术栈

- React 19
- TypeScript
- Vinext / Vite
- Tailwind CSS 4
- Cloudflare Worker 构建目标

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

开发服务器启动后，按照终端显示的本地地址打开页面。

## 构建

```bash
npm run build
```

主要页面代码位于：

- `app/page.tsx`：首页结构与交互
- `app/globals.css`：响应式布局和视觉样式
- `app/layout.tsx`：页面标题及分享信息
- `public/jbp88-logo.png`：品牌图片

## 已实现功能

- 手机与桌面响应式布局
- 顶部 jbp88 品牌区
- 自动轮播活动横幅
- 公告滚动效果
- 快捷功能入口
- 横向游戏分类与卡片列表
- 底部悬浮导航
- 演示模式提示弹窗
- 无障碍标签与减少动画适配

## 在线预览

[打开 jbp88 游戏大厅](https://jbp88-game-hall.zhiheng000.chatgpt.site)
