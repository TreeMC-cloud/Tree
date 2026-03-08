# Tree 官方网站源码

这是 `Tree` 公开仓库里的站点源码目录，定位为：

- 官网首页
- 功能展示站
- 下载入口
- 技术文档导航页
- 社区入口

当前技术栈：

- Vue 3
- Vue Router
- Vite

---

## 本地开发

```bash
npm install
npm run dev
```

默认本地预览地址通常为：

- `http://localhost:5173`

---

## 构建

```bash
npm run build
```

---

## 部署建议

### 方案 A：GitHub Pages
当前仓库已可继续接 GitHub Pages 工作流。

如果暂时没有自定义域名，构建时可以使用：

```bash
TREE_SITE_BASE=Tree
```

如果后续绑定独立域名，则建议：

```bash
TREE_SITE_BASE=root
```

### 方案 B：Cloudflare Pages
如果后续你要更正式的官网体验，推荐把这个目录作为 Cloudflare Pages 项目源：

- Build command: `npm run build`
- Output directory: `site/dist`
- Base path: `/`

然后绑定：

- `treecore.your-domain.com`
- 或主域名 `your-domain.com`

---

## 站点与文档的关系

- 官网源码：`site/`
- 技术 Wiki：`docs/`

当前网站里的“技术文档”页，主要是对 `docs/` 下的 GitBook 风格 Wiki 做导航。
