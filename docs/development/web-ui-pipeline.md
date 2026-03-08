# Web 资源同步机制

本页说明 TreeCore 的 Web 前端资源是如何进入运行目录并自动更新的。

这部分适合：

- 想改前端页面的人
- 想确认“为什么我换了 JAR 页面还没变”的人
- 想理解 `treecore-web/`、内嵌资源、运行目录三者关系的人

---

## 三层资源位置

当前前端资源主要有三层：

### 1. 源文件目录

- `treecore-web/`

这是本地修改最直接的地方，通常先改这里。

### 2. JAR 内嵌资源目录

- `paper-server/src/main/resources/treecore-web/`

这部分会被打进 JAR，运行时 WebServer 会从这里把文件释放到运行目录。

### 3. 运行时 webRoot

- 服务器运行目录下的 `treecore-web/`

浏览器真正访问到的是这里面的文件。

---

## 当前会自动同步的文件

当前核心同步逻辑会重点处理：

- `index.html`
- `treecore-core.js`

同时：

- `admin-ext.js` 会在运行时由服务端动态生成
- `ui_theme.html` 会在需要时初始化

也就是说：

> 不是所有前端文件都完全按静态资源复制；其中一部分是运行时生成或补全的。

---

## 版本标记机制

相关类：

- `io.papermc.paper.treecore.web.TreeCoreWebServer`

关键字段：

- `UI_VERSION`

运行时逻辑大致是：

1. 服务端启动 WebServer
2. 检查 webRoot 下的 `.ui_version`
3. 如果版本不一致，就从 JAR 里的 `treecore-web/` 释放新文件
4. 写回新的 `.ui_version`

因此：

- **新 JAR + 完整重启** 才会触发这轮自动覆盖
- 只改本地源码、不重新构建运行包，不会让线上页面自动变新

---

## 常见误区

### 1. “源码里明明有，浏览器里为什么没有？”
通常优先排查：

- 当前运行的是否是新 JAR
- 服务端是否完整重启
- 浏览器是否仍然使用缓存
- 运行目录 `treecore-web/` 里是否还是旧文件

### 2. “为什么 `admin-ext.js` 不在所有目录里一致？”
因为它不是单纯的静态拷贝文件，当前设计里会由服务端运行时生成。

### 3. “为什么默认远程打不开？”
因为默认绑定到：

- `127.0.0.1`

并且未主动开启远程访问。

---

## 推荐修改流程

如果你要改 Web：

1. 先改 `treecore-web/`
2. 同步到 `paper-server/src/main/resources/treecore-web/`
3. 构建新的 JAR
4. 完整重启服务端
5. 强刷浏览器缓存验证

---

## 相关页面

- [Web 面板访问](../getting-started/web-panel.md)
- [系统架构总览](../architecture/system-overview.md)
