# Tree 技术文档 / Wiki

这套文档用于整理 TreeCore 当前对外可用的技术信息，结构按 **GitBook / Wiki** 风格组织。

如果你要把这份文档导入 GitBook，可以直接使用本目录下的：

- `README.md`
- `SUMMARY.md`

作为文档入口与目录。

---

## 文档导航

### 入门
- [快速开始](./getting-started/quick-start.md)
- [Web 面板访问](./getting-started/web-panel.md)

### 运维
- [命令与日常运维](./operations/commands.md)
- [资源包 / 模型链路](./operations/resource-pack.md)
- [集成与世界管理](./operations/integrations-and-worlds.md)
- [诊断与备份](./operations/diagnostics-and-backups.md)

### 参考
- [配置参考](./reference/configuration.md)

### 技术视角
- [系统架构总览](./architecture/system-overview.md)
- [Web 资源同步机制](./development/web-ui-pipeline.md)

---

## 这份 Wiki 适合谁？

### 服主 / 运维
适合快速确认：

- 怎么启动
- Web 怎么开
- 资源包怎么上传
- 备份怎么做
- 出问题怎么诊断

### 综合服内容维护者
适合快速确认：

- 模型与纹理如何上传
- 资源包如何本地托管与下发
- ItemsAdder / CraftEngine / Multiverse 怎么接

### 技术向维护者
适合快速确认：

- 当前核心由哪些模块构成
- Web 资源为什么会自动更新
- 哪些前端资源是静态内嵌、哪些是运行时生成

---

## 当前文档范围

这份 Wiki 只记录**当前代码里已经存在并可核对的功能**。

也就是说：

- 已经移除的内容不会再写回文档
- 只存在后端、但前端未暴露的能力不会被当成“主功能”宣传
- 所有页面尽量和当前 `TreeCoreCommand`、`TreeCoreConfig`、`TreeCoreWebServer`、`treecore-web/` 对齐

---

## 建议阅读顺序

1. 先看 [快速开始](./getting-started/quick-start.md)
2. 再看 [Web 面板访问](./getting-started/web-panel.md)
3. 如果你要日常运维，看 [命令与日常运维](./operations/commands.md)
4. 如果你要做内容管线，看 [资源包 / 模型链路](./operations/resource-pack.md)
5. 如果你需要理解底层机制，看 [系统架构总览](./architecture/system-overview.md)
