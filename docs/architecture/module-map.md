# 模块地图

这页按代码目录视角，快速梳理 TreeCore 当前有哪些主要模块。

---

## 主要包结构

### 核心入口
- `io.papermc.paper.treecore.TreeCore`
- `io.papermc.paper.treecore.TreeCoreConfig`

### 命令
- `io.papermc.paper.treecore.command.TreeCoreCommand`
- `io.papermc.paper.treecore.command.PerfTestCommand`

### 性能优化
- `io.papermc.paper.treecore.performance.TreeCoreOptimizer`
- `io.papermc.paper.treecore.performance.PaperConfigTuner`
- `io.papermc.paper.treecore.performance.ChunkPreloadEngine`
- `io.papermc.paper.treecore.performance.TeleportChunkPreloader`
- `io.papermc.paper.treecore.performance.PluginAuditor`
- `io.papermc.paper.treecore.performance.JvmFlagsGenerator`

### Web 与通信
- `io.papermc.paper.treecore.web.TreeCoreWebServer`
- `io.papermc.paper.treecore.web.ModWebSocketHub`

### 模型与资源包
- `io.papermc.paper.treecore.model.ModelManager`
- `io.papermc.paper.treecore.model.ModelLibraryService`
- `io.papermc.paper.treecore.model.CraftEngineBridge`
- `io.papermc.paper.treecore.pack.ResourcePackGenerator`

### 集成桥接
- `io.papermc.paper.treecore.integration.MultiverseBridge`
- `io.papermc.paper.treecore.integration.ItemsAdderBridge`
- `io.papermc.paper.treecore.integration.ItemsAdderMenuConfig`

### 游戏辅助
- `io.papermc.paper.treecore.redstone.FakePlayerService`
- `io.papermc.paper.treecore.effect.EffectManager`
- `io.papermc.paper.treecore.ui.TpsBarManager`
- `io.papermc.paper.treecore.ui.HealthBarImpl`
- `io.papermc.paper.treecore.ui.HtmlUiRenderer`

---

## 前端资源位置

### 源文件
- `treecore-web/`

### JAR 内嵌资源
- `paper-server/src/main/resources/treecore-web/`

### 运行时资源目录
- 服务器运行目录下的 `treecore-web/`

---

## 读代码建议

### 如果你要看性能部分
从这里开始：

1. `TreeCore`
2. `TreeCoreOptimizer`
3. `PaperConfigTuner`
4. `ChunkPreloadEngine` / `TeleportChunkPreloader`

### 如果你要看 Web 部分
从这里开始：

1. `TreeCoreWebServer`
2. `treecore-web/index.html`
3. `treecore-web/treecore-core.js`
4. `paper-server/src/main/resources/treecore-web/`

### 如果你要看内容链路
从这里开始：

1. `ModelManager`
2. `ResourcePackGenerator`
3. `CraftEngineBridge`
4. `ItemsAdderMenuConfig`

---

## 相关页面

- [系统架构总览](./system-overview.md)
- [Web 资源同步机制](../development/web-ui-pipeline.md)
