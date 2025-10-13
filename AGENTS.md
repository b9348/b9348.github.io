# Repository Guidelines

## 项目结构与模块组织
- 站点源码：`src/`（React/主题扩展、组件）。
- 文档与页面：`docs/`（MD/MDX），静态资源：`static/`、公共文件：`public/`。
- 构建产物：`build/`；站点配置：`docusaurus.config.js`；侧边栏：`sidebars.js`。
- 环境变量示例：`.env.example`，实际变量：`.env`（勿提交）。

## 构建、测试与开发命令
- 本地开发：`npm run start` 或 `npm run start:env`（加载 `.env`）。
- 生产构建：`npm run build` 或 `npm run build:env`。
- 预览已构建站点：`npm run dev`（serve build）。
- 提取多语言文案/标题：`npm run write-translations` / `npm run write-heading-ids`。
- 部署到 GitHub Pages：`npm run deploy`（使用 `gh-pages` 推送 `build/`）。

## 编码风格与命名约定
- 缩进 2 空格；行宽建议 100～120；UTF-8。
- 文档文件名使用短横线小写：`docs/getting-started.md`；每页仅一个 `#` 标题。
- 组件/模块采用 PascalCase：`src/components/MyCard.tsx`；变量/函数 camelCase。
- 图片存放 `static/img/` 或与文档同层，并使用相对路径引用。
- 未强制格式化工具，建议启用 Prettier 并在提交前格式化。

## 测试指南
- 本仓库无单元测试框架要求；以“能本地启动且构建通过”为基本标准。
- 自检清单：构建无错误、控制台无报错、导航与链接可达、移动端视图可读。

## 提交与 Pull Request 规范
- 提交信息简洁、祈使句，中英皆可：如 `fix: 修复侧边栏链接`、`docs: 更新部署说明`。
- 推荐前缀：`feat|fix|docs|chore|refactor|perf|build`。
- PR 需包含：变更目的/影响、截图或预览地址（如适用）、关联 Issue、回滚方式。
- 请保持 PR 聚焦单一主题；通过 `npm run build` 验证再提交。

## 安全与配置
- 使用 `.env` 管理敏感配置；切勿提交密钥。CI/CD 或本地部署请配置只读 Token。
- Node 版本要求：`>=18`。如遇依赖安装问题，先清理缓存后重试。

## 架构简述
- 基于 Docusaurus 3（preset-classic）。内容在 `docs/`，站点行为由 `docusaurus.config.js` 控制，侧边栏由 `sidebars.js` 生成；静态资源走 `static/` 映射到根路径。
