# 命令与日常运维

当前命令前缀为：

- `/treecore`
- 别名：`/tc`

所需权限：

- `treecore.admin`

> 本页内容按当前 `TreeCoreCommand` 实际实现整理。

---

## 核心命令

| 命令 | 说明 |
|---|---|
| `/tc` | 显示帮助列表 |
| `/tc perf` | 查看性能监控与优化状态 |
| `/tc reload` | 重载配置，并在本地资源包模式下重新处理资源包 |
| `/tc tpsbar` | 给玩家切换 TPS/MSPT BossBar |
| `/tc jvmflags` | 输出推荐 JVM 启动参数 |
| `/tc startscript` | 生成 `start.sh` 与 `start.bat` |
| `/tc tuner` | 查看 PaperConfigTuner 当前档位 |
| `/tc audit` | 执行插件性能审计 |
| `/tc perftest` | 进行性能压测 |

---

## 内容相关命令

| 命令 | 说明 |
|---|---|
| `/tc spawn <模型名>` | 在玩家当前位置生成模型 |
| `/tc effect <blizzard\|nova\|helix>` | 播放内置粒子特效 |

---

## 假人系统命令

| 命令 | 说明 |
|---|---|
| `/tc bot list` | 查看所有假人 |
| `/tc bot create [名] [皮肤]` | 在当前位置创建假人 |
| `/tc bot summon [名] [皮肤]` | `create` 的同义入口 |
| `/tc bot attack <名>` | 令假人攻击最近实体 |
| `/tc bot break <名>` | 令假人破坏面前方块 |
| `/tc bot face <名> <yaw> <pitch>` | 设置假人朝向 |
| `/tc bot clear [名/all]` | 清理指定假人或全部假人 |

---

## 日常使用建议

### 日常巡检
推荐组合：

- `/tps`
- `/tc perf`
- `/tc tpsbar`

### 上线前准备
推荐组合：

- `/tc jvmflags`
- `/tc startscript`
- `/tc audit`

### 内容维护
推荐组合：

- `/tc spawn <模型名>`
- Web 面板里的模型管理、资源包、ItemsAdder 编辑器

---

## 相关页面

- [资源包 / 模型链路](./resource-pack.md)
- [诊断与备份](./diagnostics-and-backups.md)
- [系统架构总览](../architecture/system-overview.md)
