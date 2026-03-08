# 快速开始

## 运行要求

- **Minecraft**：1.21.x
- **Java**：21+
- **建议内存**：8GB 起步

---

## 1. 下载

从公开仓库的 Releases 获取构建产物：

- [Tree Releases](https://github.com/TreeMC-cloud/Tree/releases)

常见文件名示例：

- `treecore-paperclip.jar`

---

## 2. 启动

```bash
java -Xms8G -Xmx8G -jar treecore-paperclip.jar --nogui
```

首次启动后会自动生成：

- `treecore.json`
- `treecore-web/`（运行时网页目录）

如果端口未被占用，Web 面板默认监听：

- `127.0.0.1:8080`

---

## 3. 生成推荐启动脚本

启动后建议在游戏内执行：

```text
/tc startscript
```

它会在服务器目录生成：

- `start.sh`
- `start.bat`

用于保存当前推荐的 JVM 启动参数。

如果你只想查看参数而不生成脚本，可以使用：

```text
/tc jvmflags
```

---

## 4. 首次检查建议

首次启动建议按下面顺序确认：

1. `/tc perf` 是否能正常输出性能状态
2. `/tc tpsbar` 是否能正常显示 BossBar
3. 本机浏览器是否能打开 `http://127.0.0.1:8080`
4. `treecore.json` 是否已生成

---

## 5. 如果你准备正式上服

建议先做这些事：

- 先在测试服验证关键插件
- 确认代理链路（Velocity / BungeeCord）是否符合你的现网环境
- 如果要开放远程 Web，先配置 `webRequireAuth` 与 `webAdminToken`
- 如果要启用本地资源包托管，先看：[资源包 / 模型链路](../operations/resource-pack.md)

---

## 下一步阅读

- [Web 面板访问](./web-panel.md)
- [命令与日常运维](../operations/commands.md)
- [配置参考](../reference/configuration.md)
