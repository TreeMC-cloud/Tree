# 系统架构总览

本页从技术视角描述 TreeCore 当前的主要组成。

> 说明：这里的模块名和职责，按当前代码结构整理，不是营销层面的概念图。

---

## 核心模块

### 1. 性能优化引擎
主要入口与相关类：

- `io.papermc.paper.treecore.TreeCore`
- `io.papermc.paper.treecore.performance.TreeCoreOptimizer`
- `io.papermc.paper.treecore.performance.PaperConfigTuner`
- `io.papermc.paper.treecore.performance.ChunkPreloadEngine`
- `io.papermc.paper.treecore.performance.TeleportChunkPreloader`
- `io.papermc.paper.treecore.performance.PluginAuditor`

主要职责：

- 动态视距 / 模拟距离
- 自动分层预设
- 动态网络压缩
- 碰撞、漏斗、粒子、广播等压力感知优化
- 方向预测区块预载
- 远距离传送预热

---

### 2. Web 管理面板
相关类：

- `io.papermc.paper.treecore.web.TreeCoreWebServer`
- `io.papermc.paper.treecore.web.ModWebSocketHub`

前端资源目录：

- `treecore-web/`
- `paper-server/src/main/resources/treecore-web/`

主要职责：

- 对外提供管理面板
- 提供资源包、模型、备份、控制台、诊断、集成等 HTTP API
- 提供 Mod 侧认证与模型 / 资源哈希相关接口

---

### 3. 资源包与模型链路
相关类：

- `io.papermc.paper.treecore.pack.ResourcePackGenerator`
- `io.papermc.paper.treecore.model.ModelManager`
- `io.papermc.paper.treecore.model.ModelLibraryService`
- `io.papermc.paper.treecore.model.CraftEngineBridge`

主要职责：

- 管理模型文件与纹理资源
- 处理本地资源包托管与哈希刷新
- 配合 CraftEngine 做资源同步
- 支持在线玩家资源包推送链路

---

### 4. 生电与游戏辅助
相关类：

- `io.papermc.paper.treecore.redstone.FakePlayerService`
- `io.papermc.paper.treecore.effect.EffectManager`
- `io.papermc.paper.treecore.ui.TpsBarManager`

主要职责：

- 假人系统
- 红石热点数据与回放
- 粒子特效管理
- TPS BossBar 展示

---

### 5. 插件桥接层
相关类：

- `io.papermc.paper.treecore.integration.ItemsAdderBridge`
- `io.papermc.paper.treecore.integration.ItemsAdderMenuConfig`
- `io.papermc.paper.treecore.integration.MultiverseBridge`
- `io.papermc.paper.treecore.model.CraftEngineBridge`

主要职责：

- 对接 ItemsAdder
- 对接 Multiverse
- 对接 CraftEngine

---

## 运行时关系（简化理解）

```text
玩家 / 运维
   ↓
TreeCore 命令 + Web 面板
   ↓
TreeCore 核心服务
   ├─ 性能优化引擎
   ├─ 资源包 / 模型链路
   ├─ 假人 / 粒子 / BossBar
   ├─ 集成桥接层
   └─ 诊断 / 备份 / 控制台 API
```

---

## 技术阅读建议

如果你是偏技术维护者，建议阅读顺序：

1. `TreeCore`
2. `TreeCoreConfig`
3. `TreeCoreOptimizer`
4. `TreeCoreWebServer`
5. 模型 / 资源包 / 集成相关类

---

## 相关页面

- [配置参考](../reference/configuration.md)
- [Web 资源同步机制](../development/web-ui-pipeline.md)
