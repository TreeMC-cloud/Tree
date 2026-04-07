<div align="center">

<img src="./docs/images/控制台预览.png" alt="TreeCore 控制台预览" width="760"/>

<h1>TreeCore / Tree</h1>

<p><strong>高性能 Minecraft 服务端核心 | 基于 Paper 1.21.x 深度优化</strong></p>

<p><em>以树根的稳定性承载底座，以树干的承压力应对高并发，以树冠的扩展性连接插件生态</em></p>

<p>
  <a href="https://github.com/TreeMC-cloud/Tree/stargazers"><img src="https://img.shields.io/github/stars/TreeMC-cloud/Tree?style=for-the-badge&logo=github&color=4F6EF7&labelColor=0B0F1A" alt="Stars"></a>
  <a href="https://github.com/TreeMC-cloud/Tree/network/members"><img src="https://img.shields.io/github/forks/TreeMC-cloud/Tree?style=for-the-badge&logo=github&labelColor=0B0F1A" alt="Forks"></a>
  <a href="https://github.com/TreeMC-cloud/Tree/commits/main"><img src="https://img.shields.io/github/last-commit/TreeMC-cloud/Tree?style=for-the-badge&logo=github&labelColor=0B0F1A" alt="Last Commit"></a>
  <a href="https://papermc.io"><img src="https://img.shields.io/badge/Minecraft-1.21.x-16A34A?style=for-the-badge&logo=mojang-studios&logoColor=white&labelColor=0B0F1A" alt="Minecraft"></a>
  <a href="https://adoptium.net"><img src="https://img.shields.io/badge/Java-21+-F97316?style=for-the-badge&logo=openjdk&logoColor=white&labelColor=0B0F1A" alt="Java"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-GPLv3-blue?style=for-the-badge&labelColor=0B0F1A" alt="License"></a>
  <a href="https://bstats.org/plugin/server-implementation/TreeCore"><img src="https://img.shields.io/bstats/servers/29949?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTggMjBWMTBoMnYxMGgtMnptLTYgMFY0aDJ2MTZoLTJ6TTYgMjB2LTZoMnY2SDZ6Ii8+PC9zdmc+&label=%E6%9C%8D%E5%8A%A1%E5%99%A8&color=8B5CF6&labelColor=0B0F1A" alt="bStats Servers"></a>
</p>

<p>
  <strong><a href="#快速开始">快速开始</a></strong> ·
  <strong><a href="#核心功能">功能概览</a></strong> ·
  <strong><a href="#为什么选择-treecore">性能对比</a></strong> ·
  <strong><a href="#web-管理面板">Web 面板</a></strong> ·
  <strong><a href="#技术文档--wiki">技术文档</a></strong> ·
  <strong><a href="#游戏内命令">命令参考</a></strong> ·
  <strong><a href="#常见问题">常见问题</a></strong> ·
  <strong><a href="#反馈与交流">社区交流</a></strong>
</p>

<p>
  <a href="https://github.com/TreeMC-cloud/Tree/releases"><img src="https://img.shields.io/badge/立即下载-Releases-2563EB?style=for-the-badge&labelColor=0B0F1A" alt="立即下载"></a>
  <a href="#快速开始"><img src="https://img.shields.io/badge/3分钟上手-快速开始-16A34A?style=for-the-badge&labelColor=0B0F1A" alt="快速开始"></a>
  <a href="#web-管理面板"><img src="https://img.shields.io/badge/查看功能-Web%20Panel-7C3AED?style=for-the-badge&labelColor=0B0F1A" alt="查看 Web 面板"></a>
  <a href="./docs/README.md"><img src="https://img.shields.io/badge/阅读文档-GitBook%20Wiki-F59E0B?style=for-the-badge&labelColor=0B0F1A" alt="阅读文档"></a>
</p>

</div>

> **⚠️ 早期开发阶段**
>
> TreeCore 当前处于前期开发阶段，发布的所有构建包（包括正式版和预发布版）**仅供测试与体验，不适合实际生产环境使用**。
>
> 使用本软件可能导致但不限于：服务器崩溃、存档损坏、插件不兼容、配置丢失、玩家数据异常等问题。**开发者不对因使用本软件造成的任何直接或间接损失承担责任。**
>
> 使用即表示你已了解并接受以上风险。建议在测试环境中充分验证，并始终保持完整备份。

---

## 产品定位

TreeCore 是一个面向 **高并发、长时间运行、强调运维可视化** 的 Minecraft 服务端核心。

它不只是在 `paper.yml` 里多塞几项配置，而是把这些能力做成一套完整产品：

- **运行时性能调优**：根据 TPS / MSPT / 玩家数 / 压力自动收敛参数
- **内置 Web 运维面板**：控制台、诊断、资源包、模型、备份、集成都能直接管
- **偏实战的服务器工具链**：假人、红石热点分析、启动脚本、JVM 参数、插件审计
- **保持生态兼容**：继续站在 Paper 插件生态上工作，而不是另起一套体系

### 适合哪些服务器？

<table>
<tr>
<td width="33%" valign="top">

#### 生存 / 长周目服
需要长期稳定运行，同时不想频繁手改大量配置。

</td>
<td width="33%" valign="top">

#### 多世界 / 综合服
需要世界管理、资源包、模型、ItemsAdder、第三方桥接一起协同。

</td>
<td width="33%" valign="top">

#### 运维要求高的团队服
希望把控制台、诊断、备份、配置调整放到统一面板里完成。

</td>
</tr>
</table>

### 你会得到什么？

<table>
<tr>
<td width="33%" valign="top">

**更稳的高峰表现**  
动态视距、自动分层、网络压缩、传送预热、区块预载共同工作，优先稳定 TPS。

</td>
<td width="33%" valign="top">

**更低的日常运维成本**  
不再频繁 SSH、翻日志、手写脚本，很多操作直接在 Web 面板里完成。

</td>
<td width="33%" valign="top">

**更完整的管理链路**  
从模型、资源包、粒子特效，到世界、备份、控制台和诊断，形成统一入口。

</td>
</tr>
</table>

## 一眼看懂 TreeCore

| 方向 | 你能直接用到的能力 |
|---|---|
| **性能** | 动态视距 / 模拟距离、4 档自动分层、Paper 配置热调、动态网络压缩 |
| **运维** | Web 控制台、线程转储、内存快照、GC、备份、启动脚本、JVM 参数建议 |
| **内容生产** | 模型上传、纹理上传、资源包 ZIP 托管、在线玩家资源包下发、粒子特效编辑 |
| **生态集成** | CraftEngine、Multiverse、ItemsAdder 状态查看与操作入口 |
| **生电支持** | 假人系统、红石热点分析 / 回放、TNT / 地毯复制开关 |

## 技术文档 / Wiki

为了让这个仓库不只是“展示页”，我把技术文档整理成了 **GitBook 友好的 Wiki 结构**。

> 文档入口：[`docs/README.md`](./docs/README.md)
>
> 目录入口：[`docs/SUMMARY.md`](./docs/SUMMARY.md)
>
> 如果你之后要导入 GitBook，仓库里已经准备了 `docs/README.md + docs/SUMMARY.md` 的标准结构。

<table>
<tr>
<td width="33%" valign="top">

### 部署与接入
- [快速开始](./docs/getting-started/quick-start.md)
- [Web 面板访问](./docs/getting-started/web-panel.md)
- [首次上线检查清单](./docs/getting-started/first-day-checklist.md)

</td>
<td width="33%" valign="top">

### 运维与内容
- [Web 页面总览](./docs/operations/web-pages-overview.md)
- [资源包 / 模型链路](./docs/operations/resource-pack.md)
- [假人 / 红石运维](./docs/operations/fakeplayer-and-redstone.md)
- [诊断与备份](./docs/operations/diagnostics-and-backups.md)

</td>
<td width="33%" valign="top">

### 技术与架构
- [系统架构总览](./docs/architecture/system-overview.md)
- [模块地图](./docs/architecture/module-map.md)
- [配置参考](./docs/reference/configuration.md)
- [Web 资源同步机制](./docs/development/web-ui-pipeline.md)

</td>
</tr>
</table>

---

## 实测预览

<table>
<tr>
<td width="50%">

**51 人实时游戏测试**
![51人游戏测试](./docs/images/51人游戏测试.gif)

</td>
<td width="50%">

**Web 控制台面板**
![控制台预览](./docs/images/核心控制台.gif)

</td>
</tr>
</table>

> 以上截图来自 TreeCore 实际运行服务器，51 名玩家同时在线，TPS 稳定 20.0

### 使用统计

<div align="center">

[![bStats Servers](https://img.shields.io/bstats/servers/29949?style=flat-square&label=Servers&color=8B5CF6)](https://bstats.org/plugin/server-implementation/TreeCore)

<!-- BSTATS-STATS-START -->
| 指标 | 数值 |
|:---:|:---:|
| 服务器数量 | ![servers](https://img.shields.io/bstats/servers/29949?style=flat-square&label=&color=8B5CF6) |
| 操作系统 | - |
| CPU 核心数 | - |
| 服务器地区 | - |

![Servers using TreeCore](./docs/images/bstats-servers.png)

<table><tr>
<td><img src="./docs/images/bstats-os.png" width="400"></td>
<td><img src="./docs/images/bstats-cores.png" width="400"></td>
</tr></table>

**[查看完整统计图表 →](https://bstats.org/plugin/server-implementation/TreeCore)**

<sub>数据每 6 小时通过 bStats API 自动更新 · 最近更新: 2026-04-07 02:12 UTC</sub>
<!-- BSTATS-STATS-END -->

</div>

> TreeCore 通过 [bStats](https://bstats.org/) 收集匿名使用统计（服务器数量、在线玩家数、Minecraft 版本等），帮助我们了解使用情况。你可以在 `plugins/bStats/config.yml` 中关闭。

---

## 为什么选择 TreeCore

### 与主流服务端核心的完整对比

<table>
<tr>
<th align="left" width="200">能力维度</th>
<th align="center" width="110">Paper</th>
<th align="center" width="110">Purpur</th>
<th align="center" width="110">Pufferfish</th>
<th align="center" width="110"><a href="https://github.com/SucIXR/Kitin">Kitin</a></th>
<th align="center" width="160"><b>TreeCore</b> ✅</th>
</tr>
<tr><td colspan="6"><b>性能优化</b></td></tr>
<tr>
<td>动态视距调整</td>
<td align="center">❌ 手动改配置</td>
<td align="center">❌ 手动改配置</td>
<td align="center">❌ 手动改配置</td>
<td align="center">❌</td>
<td align="center"><b>✅ 自动 2~10 档</b></td>
</tr>
<tr>
<td>动态模拟距离</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ 自动 2~10 档</b></td>
</tr>
<tr>
<td>Paper 配置实时调参</td>
<td align="center">❌ 手动 + 重启</td>
<td align="center">❌ 手动 + 重启</td>
<td align="center">❌ 手动 + 重启</td>
<td align="center">❌</td>
<td align="center"><b>✅ 14 项参数热调</b></td>
</tr>
<tr>
<td>自动分层预设</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ 4 档自动切换</b></td>
</tr>
<tr>
<td>MSPT 响应式收紧</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ MSPT>45ms 触发</b></td>
</tr>
<tr>
<td>网络优化</td>
<td align="center">❌ 静态阈值</td>
<td align="center">❌ 静态阈值</td>
<td align="center">❌ 静态阈值</td>
<td align="center"><b>✅ 核心特色（ACK 区块发送 / 高频包抑制 / 粒子节流 / 全局发送限速 / 多端口监听）</b></td>
<td align="center"><b>✅ 动态压缩 + 包过滤</b></td>
</tr>
<tr>
<td>区块预生成</td>
<td align="center">❌ 需装 Chunky</td>
<td align="center">❌ 需装 Chunky</td>
<td align="center">❌ 需装 Chunky</td>
<td align="center">❌</td>
<td align="center"><b>✅ 方向预测 + 异步</b></td>
</tr>
<tr>
<td>自动低谷 GC</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ 智能触发时机</b></td>
</tr>
<tr>
<td>Tick 平滑 / 恢复</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ 自动检测恢复</b></td>
</tr>
<tr>
<td>fastutil 原始集合</td>
<td align="center">部分</td>
<td align="center">部分</td>
<td align="center">部分</td>
<td align="center">✅ AI 属性引用哈希</td>
<td align="center"><b>✅ 热路径全覆盖</b></td>
</tr>
<tr>
<td>对象池 (BlockPos/Vec3)</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ 池化复用</b></td>
</tr>
<tr>
<td>多核并行优化</td>
<td align="center">❌ 单线程</td>
<td align="center">❌ 单线程</td>
<td align="center">❌ 单线程</td>
<td align="center">✅ Folia 多线程</td>
<td align="center"><b>✅ 工作线程池 + 虚拟线程</b></td>
</tr>
<tr>
<td>碰撞检测节流</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">✅ 实体推挤简化</td>
<td align="center"><b>✅ MSPT 感知 O(n²) 优化</b></td>
</tr>
<tr>
<td>寻路缓存</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ MSPT 感知 + 异步寻路</b></td>
</tr>
<tr>
<td>实体智能降频</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">⚠️ DAB 修改 AI</td>
<td align="center">✅ 村民智能休眠</td>
<td align="center"><b>✅ 保持原版 AI 行为</b></td>
</tr>
<tr>
<td>Folia 特性修复</td>
<td align="center">—</td>
<td align="center">—</td>
<td align="center">—</td>
<td align="center"><b>✅ 珍珠加载 / 刷沙 / 记分板 / 计划命令 / 随机传送等 8 项</b></td>
<td align="center">—（基于 Paper）</td>
</tr>
<tr><td colspan="6"><b>管理工具</b></td></tr>
<tr>
<td>Web 管理面板</td>
<td align="center">❌ 需第三方面板</td>
<td align="center">❌ 需第三方面板</td>
<td align="center">❌ 需第三方面板</td>
<td align="center">❌</td>
<td align="center"><b>✅ 内置 12 页面板</b></td>
</tr>
<tr>
<td>TPS/MSPT BossBar</td>
<td align="center">❌ 需装 Spark</td>
<td align="center">❌ 需装 Spark</td>
<td align="center">❌ 需装 Spark</td>
<td align="center">❌</td>
<td align="center"><b>✅ /tc tpsbar</b></td>
</tr>
<tr>
<td>JVM 参数自动生成</td>
<td align="center">❌ 需人工查阅</td>
<td align="center">❌ 需人工查阅</td>
<td align="center">❌ 需人工查阅</td>
<td align="center">❌</td>
<td align="center"><b>✅ /tc jvmflags</b></td>
</tr>
<tr>
<td>启动脚本自动生成</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ /tc startscript</b></td>
</tr>
<tr>
<td>插件性能审计</td>
<td align="center">❌ 需装 Spark</td>
<td align="center">❌ 需装 Spark</td>
<td align="center">❌ 需装 Spark</td>
<td align="center">❌</td>
<td align="center"><b>✅ /tc audit</b></td>
</tr>
<tr>
<td>远程控制台 + 日志流</td>
<td align="center">❌ 需 RCON</td>
<td align="center">❌ 需 RCON</td>
<td align="center">❌ 需 RCON</td>
<td align="center">❌</td>
<td align="center"><b>✅ Web 实时</b></td>
</tr>
<tr>
<td>内存快照 / 线程 dump</td>
<td align="center">❌ 需 SSH</td>
<td align="center">❌ 需 SSH</td>
<td align="center">❌ 需 SSH</td>
<td align="center">❌</td>
<td align="center"><b>✅ Web 一键</b></td>
</tr>
<tr>
<td>备份管理</td>
<td align="center">❌ 需装插件</td>
<td align="center">❌ 需装插件</td>
<td align="center">❌ 需装插件</td>
<td align="center">❌</td>
<td align="center"><b>✅ 内置</b></td>
</tr>
<tr><td colspan="6"><b>游戏功能</b></td></tr>
<tr>
<td>假人系统 (Carpet 风格)</td>
<td align="center">❌ 需装 Carpet</td>
<td align="center">❌ 需装 Carpet</td>
<td align="center">❌ 需装 Carpet</td>
<td align="center">❌</td>
<td align="center"><b>✅ 内置完整系统</b></td>
</tr>
<tr>
<td>粒子特效编辑器</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ 拖拽式画布</b></td>
</tr>
<tr>
<td>3D 模型管理</td>
<td align="center">❌ 需装插件</td>
<td align="center">❌ 需装插件</td>
<td align="center">❌ 需装插件</td>
<td align="center">❌</td>
<td align="center"><b>✅ 内置 + 资源包</b></td>
</tr>
<tr>
<td>CraftEngine 桥接</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center">❌</td>
<td align="center"><b>✅ 一键同步</b></td>
</tr>
<tr><td colspan="6"><b>原版兼容性</b></td></tr>
<tr>
<td>红石机制</td>
<td align="center">✅ 原版</td>
<td align="center">⚠️ 可选修改</td>
<td align="center">⚠️ 可选修改</td>
<td align="center">✅ 原版</td>
<td align="center"><b>✅ 默认原版 / 可选热点保护</b></td>
</tr>
<tr>
<td>漏斗机制</td>
<td align="center">✅ 原版</td>
<td align="center">⚠️ 可选修改</td>
<td align="center">⚠️ 可选修改</td>
<td align="center">✅ 原版</td>
<td align="center"><b>⚠️ 压力下可动态节流</b></td>
</tr>
<tr>
<td>生物 AI 行为</td>
<td align="center">✅ 原版</td>
<td align="center">✅ 原版</td>
<td align="center">⚠️ DAB 会修改</td>
<td align="center">✅ 原版</td>
<td align="center"><b>✅ 保持原版 AI</b></td>
</tr>
<tr>
<td>碰撞 / 伤害</td>
<td align="center">✅ 原版</td>
<td align="center">✅ 原版</td>
<td align="center">✅ 原版</td>
<td align="center">✅ 原版</td>
<td align="center"><b>✅ 原版表现优先</b></td>
</tr>
<tr>
<td>Paper 插件兼容</td>
<td align="center">✅</td>
<td align="center">✅</td>
<td align="center">✅</td>
<td align="center">⚠️ Folia 限制</td>
<td align="center"><b>✅ 高兼容</b></td>
</tr>
</table>

> **[Kitin（蜻蜓）](https://github.com/SucIXR/Kitin)** 是一个轻量级 Folia 分支，核心特色是网络层深度优化（ACK 区块发送、高频实体包抑制、粒子节流打包、全局区块发送限速、多端口监听），同时修复了 Folia 破坏的 8 项特性（末影珍珠区块加载、安全沙子复制、记分板/计划/随机传送命令等），并提供村民智能休眠、实体推挤简化、投掷器传输优化、安全种子等实用能力。适合追求 Folia 多线程 + 极致网络优化的生存服场景。TreeCore 基于 Paper，提供更全面的运维工具链、Web 管理面板和内容管理能力，两者定位不同，各有所长。

### 核心差异总结

| | Paper / Purpur / Pufferfish | [Kitin](https://github.com/SucIXR/Kitin) | **TreeCore** |
|---|---|---|---|
| **基于** | CraftBukkit / Paper | Folia | Paper 1.21.x |
| **定位** | 通用基础核心 | 轻量网络优化 | 全功能运维平台 |
| **优化方式** | 提供静态配置项，腐竹手动调参 + 重启生效 | 网络层深度优化，极简改动 | **运行时自动调参，主要参数可热更新** |
| **CPU 利用** | 单线程 tick，多核 CPU 闲置 | Folia 原生多线程 | **多核工作线程池 + Java 21 虚拟线程** |
| **人数应对** | 配置写死，高低峰同一套参数 | Folia 区域化分线程 | **4 档自动分层：30/60/150+ 人自动切换** |
| **网络优化** | 无特殊优化 | **核心特色：ACK 区块发送、高频包抑制、粒子节流、全局限速、多端口** | 动态压缩 + Delta 包过滤 + 广播收缩 |
| **高密度实体** | 无特殊优化（Pufferfish DAB 修改 AI） | 实体推挤简化 + 村民智能休眠 | **碰撞节流 + 寻路缓存 + 智能降频，优先保持原版体验** |
| **管理工具** | 无，需第三方 | 无 | **内置 12 页 Web 面板 + BossBar + 审计** |
| **插件兼容** | 高 | ⚠️ 受 Folia 限制 | **高兼容（Paper 生态）** |
| **监控方式** | 需安装 Spark / Grafana 等外部工具 | 无内置监控 | **内置 Web 面板 + BossBar + `/tps` 一屏全览** |
| **学习门槛** | 需理解 Paper/Spigot 几十项配置含义 | 极简，保留 Folia 原始风味 | **开箱可用，主要性能优化默认启用** |
| **生电支持** | 需安装 Carpet mod 或第三方假人插件 | ✅ 安全沙子复制 + TNT 修复 | **内置假人系统 + 红石热点分析 + Web 管理** |
| **游戏影响** | Pufferfish DAB 会修改远处 AI 行为 | 保持原版，极简改动 + 安全种子 | **默认优先保持原版；保护项按需显式开启** |

---

## 核心功能

### Kitin 性能引擎 — 17 个底层 JVM 补丁

TreeCore 集成了来自 [Kitin](https://github.com/SucIXR/Kitin) 的 17 项底层 JVM 级性能补丁，直接作用于服务端热路径：

| # | 补丁名称 | 说明 |
|---|---|---|
| 1 | **实体推挤优化（SocialBubbleEngine）** | 简化高密度实体间的推挤计算，降低 O(n²) 开销 |
| 2 | **村民智能休眠（VillagerSmartHibernation）** | 远离玩家的村民自动进入低频 tick，保持原版 AI |
| 3 | **区块懒加载（ChunkLoadPolicy）** | 按需加载区块，减少不必要的 IO 和内存占用 |
| 4 | **玩家级区块限流（ChunkSendPolicy）** | 按玩家维度限制区块发送速率，防止单人刷爆带宽 |
| 5 | **高频实体包降频（EntitySyncPolicy）** | 抑制高频实体同步包，降低网络冗余 |
| 6 | **全局区块发送限速（全局令牌桶 QoS）** | 全局令牌桶控制区块发送总速率 |
| 7 | **粒子限流与打包（ParticleOptimizer）** | 合并粒子包并限流，防止特效插件刷爆带宽 |
| 8 | **ACK 区块发送** | 恢复原版确认机制，确保区块可靠送达 |
| 9 | **投掷器零拷贝传输** | 投掷器物品传输使用零拷贝优化，减少内存分配 |
| 10 | **AI 属性集合优化（fastutil 引用哈希）** | AI 属性使用 fastutil 引用哈希集合，减少装箱开销 |
| 11 | **TNT 修复与优化** | 修复 TNT 相关问题并优化爆炸计算 |
| 12 | **懒加载区块屏障** | 延迟加载区块屏障，减少启动和运行时开销 |
| 13 | **高空虚空清理** | 自动清除飞到超高 Y 轴的异常实体，减少无效 tick |
| 14 | **安全种子系统（加密随机数）** | 使用加密安全随机数生成种子，防止种子破解 |
| 15 | **水中物品修复** | 修复水中物品行为异常 |
| 16 | **Galaxy 调度器** | 高性能任务调度器，优化 tick 任务分发 |
| 17 | **元数据同步分散** | 分散元数据同步时机，避免集中发送造成尖刺 |

### TreeCore 性能优化引擎

TreeCore 的核心设计原则：**优先通过运行时调优和压力感知稳住 TPS；默认尽量不改玩法，对可能影响生电节奏的项目提供显式开关。**

<details>
<summary><b>动态视距 / 模拟距离</b></summary>

根据实时 TPS、MSPT 和玩家数量自动调整视距和模拟距离：
- 压力低时自动扩大到最大视距（默认 10），体验更好
- 压力高时逐步收紧到最小视距（默认 3），保护 TPS
- 带滞回机制，避免频繁波动
- 可配置最小/最大范围、调整步长、冷却时间

</details>

<details>
<summary><b>Paper 配置自动调优（14 项热调参数）</b></summary>

TreeCore 内置 `PaperConfigTuner`，根据当前负载实时调整 Paper/Spigot 配置，**无需重启**：

| 调优参数 | 说明 |
|---|---|
| `monster-spawn-range` | 怪物生成范围 |
| `entity-activation-range` (怪物/动物/杂项) | EAR 激活距离 |
| `mob-spawn-limits` (怪物/动物/水生/环境) | 各类生物生成上限 |
| `merge-radius.item` / `merge-radius.exp` | 物品/经验球合并半径 |
| `tick-inactive-villagers` | 非活跃村民 tick 频率 |
| `entity-tracking-range` | 实体追踪范围 |
| `max-auto-save-chunks-per-tick` | 自动存盘速率 |
| `network-compression-threshold` | 动态网络压缩阈值 |

所有参数通过 Paper/Spigot 原生 API 在运行时修改，无侵入、无副作用。

</details>

<details>
<summary><b>4 档自动分层预设</b></summary>

根据在线人数自动切换配置档位：

| 档位 | 触发条件 | EAR 怪物/动物 | 生成上限 | 物品合并 | 视距范围 |
|---|---|---|---|---|---|
| **SURVIVAL** | ≤30 人 | 32 / 32 | 70 / 10 | 2.5 格 | 最大 10 |
| **LONGRUN** | 30~60 人 | 28 / 24 | 50 / 8 | 3.5 格 | 最大 8 |
| **LOBBY** | 60~150 人 | 24 / 16 | 35 / 6 | 4.0 格 | 最大 7 |
| **EXTREME** | 150+ 人 | 20 / 10 | 20 / 4 | 5.0 格 | 最大 5 |

还支持 MSPT 自动升级：当 MSPT 持续超限时自动升档，即使人数未达阈值。

</details>

<details>
<summary><b>动态网络压缩</b></summary>

- 玩家 ≤ 30 人：压缩阈值 512（节省 CPU）
- 玩家 30~80 人：压缩阈值 256
- 玩家 80+ 人：压缩阈值 128（节省带宽）
- 通过 Paper API 运行时调整，无需重启

</details>

<details>
<summary><b>多核并行优化</b></summary>

TreeCore 充分利用多核 CPU，在保证线程安全的前提下将计算任务分散到多个核心：

- **工作线程池** — 自动按 CPU 核心数分配 2~4 个工作线程，处理排序、聚合、Component 构建等纯计算任务
- **Java 21 虚拟线程** — Web 操作、资源包构建、插件 IO 全部使用虚拟线程，不阻塞主线程
- **异步寻路** — 复杂寻路计算可选异步化，结果通过 O(1) 队列回传主线程
- **异步区块预载** — 检测玩家移动方向，异步预加载前方区块
- **并发安全审计** — 所有跨线程数据使用 `ConcurrentHashMap`、`AtomicInteger`、`volatile`、`ClassValue` 等正确的并发原语

</details>

<details>
<summary><b>实体高密度优化</b></summary>

针对实体数量巨大（1000+）时的性能瓶颈，TreeCore 提供多层优化：

- **碰撞检测节流** — 对密集实体群的 O(n²) 碰撞检测按 MSPT 压力智能降频，不影响 AI 和战斗
- **寻路缓存** — MSPT 感知的寻路结果缓存，失败寻路自动延长重试间隔
- **实体类型感知降频** — 按 `HOSTILE/PASSIVE/AMBIENT/ITEM/DECORATION/PROJECTILE` 六级优先级智能调频
- **漏斗 MSPT 感知节流** — 根据实时 MSPT 动态调整漏斗检查频率
- **所有优化保持原版 AI** — 与 Pufferfish DAB 不同，TreeCore 不修改任何 AI 行为

</details>

<details>
<summary><b>网络 / 传送链路优化</b></summary>

- **Delta-aware 实体包过滤** — 只跳过"位置与朝向都没变化"的同步包，降低网络冗余
- **TabList 批量刷新** — 合并高频列表更新，减少多人场景下的包风暴
- **广播范围收缩** — 对高密度场景的广播范围做压力感知优化，优先保留关键信息
- **登录风暴保护** — 大量玩家同时进入时限制并发处理，降低首波卡顿
- **粒子包限流** — 防止领地、特效类插件在高峰期刷爆带宽
- **远距离传送预加载** — 传送前异步预热目标区块，缓解超远距离传送尖刺
- **方向预测区块预载** — 根据步行 / 疾跑 / 鞘翅方向提前加载前方区块

</details>

<details>
<summary><b>更多优化特性</b></summary>

- **自动低谷 GC** — 仅在低在线且堆占用较高时主动触发，避免无意义 Full GC
- **Tick 平滑** — 检测超时 tick 并标记恢复状态，防止连锁卡顿
- **fastutil 原始集合** — 热路径使用 `Long2ObjectOpenHashMap` 等原始类型集合，减少装箱开销
- **对象池** — `BlockPos.MutableBlockPos` / `Vec3` 数组池化复用，降低 GC 压力
- **漏斗压力感知节流** — 在服务器高压时动态增加冷却，优先保住 MSPT

</details>

### 80+ 运行时配置参数

TreeCore 提供超过 80 个可在运行时调整的配置参数，覆盖性能调优的各个维度：

> 动态视距、模拟距离、实体切片、AI 剔除、异步寻路、协议裁剪、Zstd/LZ4 压缩、漏斗节流、虚拟线程等

所有参数均可通过 Web 面板可视化表单编辑，也支持 JSON 高级模式直接修改。大部分参数支持热更新，无需重启服务器。

<details>
<summary><b>Paper 配置自动调优（14 项热调参数）</b></summary>

TreeCore 内置 `PaperConfigTuner`，根据当前负载实时调整 Paper/Spigot 配置，**无需重启**：

| 调优参数 | 说明 |
|---|---|
| `monster-spawn-range` | 怪物生成范围 |
| `entity-activation-range` (怪物/动物/杂项) | EAR 激活距离 |
| `mob-spawn-limits` (怪物/动物/水生/环境) | 各类生物生成上限 |
| `merge-radius.item` / `merge-radius.exp` | 物品/经验球合并半径 |
| `tick-inactive-villagers` | 非活跃村民 tick 频率 |
| `entity-tracking-range` | 实体追踪范围 |
| `max-auto-save-chunks-per-tick` | 自动存盘速率 |
| `network-compression-threshold` | 动态网络压缩阈值 |

所有参数通过 Paper/Spigot 原生 API 在运行时修改，无侵入、无副作用。

</details>

<details>
<summary><b>4 档自动分层预设</b></summary>

根据在线人数自动切换配置档位：

| 档位 | 触发条件 | EAR 怪物/动物 | 生成上限 | 物品合并 | 视距范围 |
|---|---|---|---|---|---|
| **SURVIVAL** | ≤30 人 | 32 / 32 | 70 / 10 | 2.5 格 | 最大 10 |
| **LONGRUN** | 30~60 人 | 28 / 24 | 50 / 8 | 3.5 格 | 最大 8 |
| **LOBBY** | 60~150 人 | 24 / 16 | 35 / 6 | 4.0 格 | 最大 7 |
| **EXTREME** | 150+ 人 | 20 / 10 | 20 / 4 | 5.0 格 | 最大 5 |

还支持 MSPT 自动升级：当 MSPT 持续超限时自动升档，即使人数未达阈值。

</details>

<details>
<summary><b>动态网络压缩</b></summary>

- 玩家 ≤ 30 人：压缩阈值 512（节省 CPU）
- 玩家 30~80 人：压缩阈值 256
- 玩家 80+ 人：压缩阈值 128（节省带宽）
- 通过 Paper API 运行时调整，无需重启

</details>

<details>
<summary><b>多核并行优化</b></summary>

TreeCore 充分利用多核 CPU，在保证线程安全的前提下将计算任务分散到多个核心：

- **工作线程池** — 自动按 CPU 核心数分配 2~4 个工作线程，处理排序、聚合、Component 构建等纯计算任务
- **Java 21 虚拟线程** — Web 操作、资源包构建、插件 IO 全部使用虚拟线程，不阻塞主线程
- **异步寻路** — 复杂寻路计算可选异步化，结果通过 O(1) 队列回传主线程
- **异步区块预载** — 检测玩家移动方向，异步预加载前方区块
- **并发安全审计** — 所有跨线程数据使用 `ConcurrentHashMap`、`AtomicInteger`、`volatile`、`ClassValue` 等正确的并发原语

</details>

<details>
<summary><b>实体高密度优化</b></summary>

针对实体数量巨大（1000+）时的性能瓶颈，TreeCore 提供多层优化：

- **碰撞检测节流** — 对密集实体群的 O(n²) 碰撞检测按 MSPT 压力智能降频，不影响 AI 和战斗
- **寻路缓存** — MSPT 感知的寻路结果缓存，失败寻路自动延长重试间隔
- **实体类型感知降频** — 按 `HOSTILE/PASSIVE/AMBIENT/ITEM/DECORATION/PROJECTILE` 六级优先级智能调频
- **漏斗 MSPT 感知节流** — 根据实时 MSPT 动态调整漏斗检查频率
- **所有优化保持原版 AI** — 与 Pufferfish DAB 不同，TreeCore 不修改任何 AI 行为

</details>

<details>
<summary><b>网络 / 传送链路优化</b></summary>

- **Delta-aware 实体包过滤** — 只跳过“位置与朝向都没变化”的同步包，降低网络冗余
- **TabList 批量刷新** — 合并高频列表更新，减少多人场景下的包风暴
- **广播范围收缩** — 对高密度场景的广播范围做压力感知优化，优先保留关键信息
- **登录风暴保护** — 大量玩家同时进入时限制并发处理，降低首波卡顿
- **粒子包限流** — 防止领地、特效类插件在高峰期刷爆带宽
- **远距离传送预加载** — 传送前异步预热目标区块，缓解超远距离传送尖刺
- **方向预测区块预载** — 根据步行 / 疾跑 / 鞘翅方向提前加载前方区块

</details>

<details>
<summary><b>更多优化特性</b></summary>

- **自动低谷 GC** — 仅在低在线且堆占用较高时主动触发，避免无意义 Full GC
- **Tick 平滑** — 检测超时 tick 并标记恢复状态，防止连锁卡顿
- **高空异常实体清理** — 自动清除飞到超高 Y 轴的小火球等异常实体，减少无效带宽与 tick 消耗
- **fastutil 原始集合** — 热路径使用 `Long2ObjectOpenHashMap` 等原始类型集合，减少装箱开销
- **对象池** — `BlockPos.MutableBlockPos` / `Vec3` 数组池化复用，降低 GC 压力
- **漏斗压力感知节流** — 在服务器高压时动态增加冷却，优先保住 MSPT

</details>

### 原版特性保护

TreeCore 的默认策略是**尽量不改玩法**；但部分保护项会在你主动开启或服务器高压时介入：

| 游戏机制 | TreeCore 状态 | 说明 |
|---|---|---|
| 红石电路 | ✅ **默认原版** | 默认不启用热点限流；需要时可开启热点监控 / 回放 / 限流 |
| 漏斗传输 | ⚠️ **压力感知优化** | 正常负载下尽量不干预，高压时可动态加冷却保护 MSPT |
| 生物 AI | ✅ **保持原版 AI** | 不采用 DAB 这类远距 AI 改写 |
| 实体物理 | ✅ **原版优先** | 碰撞、伤害、速度等核心表现不做简化跳过 |
| TNT / 地毯复制 | ✅ **可选启用** | 内置 Carpet 风格开关 |

---

## Web 管理面板

TreeCore 内置了一个 **12 页签的 Web 管理面板**（当前资源版本 `v4.7`）。

> 默认仅监听本机：`http://127.0.0.1:8080`
>
> 如果需要局域网 / 公网访问，请在 `treecore.json` 中开启 `webAllowRemote`，并强烈建议同时启用 `webRequireAuth + webAdminToken`。

| 页面 | 功能 |
|---|---|
| **实时仪表盘** | TPS / MSPT / CPU / 网络四维图表，预算象限，红石热点帧回放，自动分层预设，JVM 内存条、CPU 负载条、峰值对比 |
| **远程控制台** | 实时日志流（2000 条虚拟滚动），INFO/WARN/ERROR 过滤 + 关键字过滤，远程命令执行，自动滚动 |
| **系统诊断** | JVM 内存快照、线程 Dump、主线程卡顿检测、GC 操作 |
| **核心配置编辑器** | 80+ 参数可视化表单，配置搜索过滤，分组折叠，JSON 高级模式 |
| **生电优化工具** | 红石热点限流 / 回放开关、假人系统管理、地毯 / TNT 复制开关 |
| **HUD 编辑器** | 拖拽编辑 HUD 元素，锚点 / 缩放 / 颜色 / 模板配置 |
| **粒子特效编辑器** | 8 种形状、关键帧动画、贝塞尔曲线、Canvas 实时预览，预设特效（blizzard / nova / helix / ring） |
| **3D 模型库** | .json / .obj / .bbmodel 上传管理，模型列表查看 / 删除，配合资源包流程使用 |
| **资源包分发** | 一键生成资源包、SHA-1 重载、在线推送玩家、本地托管 / 外部 URL 切换、CraftEngine 同步桥 |
| **外部集成** | CraftEngine / Multiverse / ItemsAdder 状态卡片，世界创建 / 加载 / 卸载，筛选与批量卸载 |
| **ItemsAdder 编辑器** | ItemsAdder 菜单编辑、槽位配置、菜单预览、已配置槽位列表 |
| **备份管理** | 一键创建 / 恢复世界备份，备份列表（名称 / 时间 / 大小） |

**面板特性：**
- 亮色 / 暗色主题一键切换（持久化）
- 移动端响应式布局（汉堡菜单）
- 键盘快捷键（1~9 切页、T 切主题、[ 折叠侧边栏、? 快捷键列表）
- 侧边栏可折叠（图标模式 + 悬浮提示）
- 数值变化动画（CountUp 缓动）
- Toast 通知系统（替代 `alert`）
- 按钮加载态 + 骨架屏
- Admin Token 鉴权（可选）

---

## 游戏内命令

所有命令前缀为 `/treecore`（别名 `/tc`），需权限 `treecore.admin`。

| 命令 | 功能 | 说明 |
|---|---|---|
| `/tps` | **TreeCore 状态面板** | TPS/MSPT/压力/多核线程/虚拟线程/异步任务/实体/区块/视距/寻路缓存/内存 一屏全览 |
| `/tc` | 显示帮助 | 列出所有可用子命令 |
| `/tc perf` | 性能报告 | 查看 TPS/MSPT/压力指数/视距/实体统计等完整运行状态 |
| `/tc perftest` | 性能压测 | 在随机区块生成大量混合实体，模拟百人服务器负载 |
| `/tc tpsbar` | TPS 监控条 | 在 BossBar 显示实时 TPS、MSPT、压力百分比、当前视距 |
| `/tc jvmflags` | JVM 参数建议 | 根据当前堆内存和最大玩家数生成优化 JVM 启动参数 |
| `/tc startscript` | 启动脚本生成 | 自动生成 `start.sh` + `start.bat`，含优化 JVM 参数 |
| `/tc tuner` | 调优器状态 | 查看 PaperConfigTuner 当前档位及各档位配置明细 |
| `/tc audit` | 插件审计 | 扫描所有插件的监听器数量、计划任务数，检测性能风险 |
| `/tc reload` | 重载配置 | 重载 treecore.json + 重新生成资源包 |
| `/tc spawn <模型>` | 生成模型 | 在当前位置生成已上传的 3D 模型实体 |
| `/tc effect <类型>` | 播放特效 | 播放内置粒子特效（blizzard / nova / helix） |
| `/tc bot create [名] [皮肤]` | 创建假人 | 在当前位置生成假人，可选指定名称和皮肤 |
| `/tc bot attack <名>` | 假人攻击 | 令假人攻击最近实体 |
| `/tc bot break <名>` | 假人挖掘 | 令假人破坏面前方块 |
| `/tc bot face <名> <yaw> <pitch>` | 假人转头 | 设置假人朝向 |
| `/tc bot clear [名/all]` | 移除假人 | 移除指定假人或全部假人 |
| `/tc bot list` | 假人列表 | 列出所有在线假人及位置 |

---

## 快速开始

### 1. 下载

从 [Releases](https://github.com/TreeMC-cloud/Tree/releases) 下载最新的 `treecore-paperclip.jar`。

### 2. 启动

```bash
# 基础启动（建议 8GB+ 内存）
java -Xms8G -Xmx8G -jar treecore-paperclip.jar --nogui
```

> **推荐做法：** 启动后在游戏内执行 `/tc startscript`，自动生成包含优化 JVM 参数的启动脚本，然后用生成的脚本重启。

### 3. 访问 Web 面板

默认在本机浏览器访问：`http://127.0.0.1:8080`

如果要让局域网或公网设备访问，请在 `treecore.json` 中至少确认这些字段：

```jsonc
{
  "webAllowRemote": true,
  "webBindAddress": "0.0.0.0",
  "webRequireAuth": true,
  "webAdminToken": "请改成你自己的强随机令牌"
}
```

端口可通过 `webServerPort` 修改。

### 4. 完成

主要性能优化默认启用；部分生电保护、远程访问与运维安全项按需开启即可。

---

## 配置文件

TreeCore 的配置文件为 `treecore.json`，首次启动自动生成。支持 Web 面板可视化编辑或直接修改文件。

<details>
<summary><b>查看主要配置项</b></summary>

```jsonc
{
  // ── Web ──
  "webServerPort": 8080,
  "webAllowRemote": false,
  "webBindAddress": "127.0.0.1",
  "webRequireAuth": false,
  "webAdminToken": "",

  // ── 性能优化总开关 ──
  "enableOptimization": true,
  "dynamicViewDistance": true,
  "dynamicSimulationDistance": true,
  "minViewDistance": 4,
  "maxViewDistance": 8,
  "minSimulationDistance": 4,
  "maxSimulationDistance": 6,
  "autoLayeredPresetEnabled": true,
  "msptTarget": 45,

  // ── 网络 / 传送 ──
  "deltaAwarePacketFilter": true,
  "tabListBatchEnabled": true,
  "teleportPreloadEnabled": true,
  "chunkPreloadEnabled": true,
  "loginStormProtectionEnabled": true,
  "broadcastScopeReductionEnabled": true,

  // ── 假人 / 生电 ──
  "fakePlayerEnabled": true,
  "fakePlayerMaxCount": 16,
  "fakePlayerDefaultLifetimeSeconds": 600,
  "carpetDuplicationEnabled": false,
  "tntDuplicationEnabled": false,
  "redstoneOptimizationEnabled": false,
  "redstoneHotspotThrottle": false,
  "redstoneHeatReplayEnabled": false,

  // ── 资源包 / 虚拟线程 ──
  "useLocalResourcePack": false,
  "localResourcePackName": "pack.zip",
  "enableVirtualThreads": true,
  "virtualThreadsForWebOps": true,
  "virtualThreadsForPackBuild": true
}
```

</details>

---

## 架构概览

```text
TreeCore
├─ Performance Optimizer               # 性能优化引擎
│   ├─ Dynamic View/Sim Distance       # 动态视距 & 模拟距离
│   ├─ PaperConfigTuner (14 params)    # Paper 配置自动调优
│   ├─ Auto Layered Presets            # 4 档自动分层预设
│   ├─ Dynamic Compression             # 动态网络压缩
│   ├─ Collision / Hopper Throttle     # 碰撞 / 漏斗压力感知优化
│   ├─ Pathfinding Cache + Async       # 寻路缓存 + 异步寻路
│   ├─ Teleport + Chunk Preload        # 传送预热 + 方向预测区块预载
│   ├─ Login / Broadcast Protection    # 登录风暴与广播范围保护
│   └─ Auto Low-Traffic GC             # 智能低谷 GC
│
├─ Multi-Core Engine                   # 多核并行引擎
│   ├─ Worker Thread Pool (2~4)        # 计算工作线程池
│   ├─ Virtual Threads (Java 21)       # Web / IO / 资源包虚拟线程化
│   ├─ Async Pathfinding Queue         # 异步寻路结果队列
│   └─ Concurrent Safety Guards        # 并发安全保护
│
├─ Web Panel (v4.7)                    # Web 管理面板（12 页）
│   ├─ Dashboard / Console             # 仪表盘 / 控制台
│   ├─ Diagnostics / Config            # 诊断 / 配置
│   ├─ Redstone / HUD Editor           # 生电 / HUD 编辑器
│   ├─ Models / Resource Pack          # 模型 / 资源包
│   ├─ Effects / Integrations          # 粒子特效 / 集成运维
│   ├─ IA Editor                       # IA 编辑器
│   └─ Backups                         # 备份管理
│
├─ Game Features                       # 游戏功能
│   ├─ FakePlayer Service              # 假人系统
│   ├─ Redstone Hotspot Replay         # 红石热点监控 / 回放
│   ├─ TpsBar BossBar                  # TPS 实时监控条
│   ├─ Effect Manager                  # 粒子特效管理
│   └─ Model Manager + Pack Pipeline   # 模型 / 纹理 / 资源包链路
│
├─ Integrations Bridge                 # 插件桥接
│   ├─ CraftEngine Sync / Reload       # CraftEngine 同步 / 重载
│   ├─ Multiverse World Ops            # 世界创建 / 加载 / 卸载
│   └─ ItemsAdder Menu Editor          # IA 菜单编辑与应用
│
├─ Admin Tools                         # 管理工具
│   ├─ Plugin Auditor                  # 插件性能审计
│   ├─ JVM Flags Generator             # JVM 参数生成
│   └─ Start Script Generator          # 启动脚本生成
│
└─ Mod Auth & Sync API                 # 模组鉴权、模型清单、资源包哈希
```

---

## 技术特性

| 特性 | 说明 |
|---|---|
| **基于 Paper 1.21.x** | 继承 Paper API 与生态兼容基础 |
| **多核并行引擎** | 2~4 工作线程池处理纯计算任务，充分利用多核 CPU |
| **Java 21 虚拟线程** | Web 操作、资源包构建、IO 密集型任务均使用虚拟线程 |
| **并发安全保护** | 跨线程共享数据使用 `ConcurrentHashMap`、`Atomic*`、`volatile` 等并发原语 |
| **主线程热路径控制** | 重点把 Web、资源包、IO 与部分计算任务移出主线程 |
| **自适应压力模型** | 综合 MSPT、TPS、玩家数、堆使用率、GC 频率计算压力指数 |
| **EWMA 平滑** | 指数加权移动平均消除瞬时波动，决策更稳定 |
| **滞回阈值** | 调整和恢复使用不同阈值，防止频繁切换抖动 |
| **文档与统计自动化** | 公开仓库使用 GitHub Actions 自动更新部分统计内容 |

---

## 兼容性

| 项目 | 状态 |
|---|---|
| **Paper 插件** | ✅ 高兼容（建议先在测试服验证） |
| **Spigot 插件** | ✅ 高兼容（建议先在测试服验证） |
| **Java 版本** | Java 21+ |
| **Minecraft 版本** | 1.21.x |
| **Velocity** | ✅ 可配合常见代理架构使用 |
| **BungeeCord** | ✅ 可配合常见代理架构使用 |
| **CraftEngine** | ✅ 内置桥接 |
| **Multiverse** | ✅ 内置桥接 |
| **ItemsAdder** | ✅ 内置桥接 |

---

## 常见问题

### 1. Web 面板为什么默认打不开远程地址？

因为当前默认配置是：

- `webAllowRemote = false`
- `webBindAddress = 127.0.0.1`

也就是 **默认只允许本机访问**。如果你要开放给局域网或公网，请手动开启远程访问，并同时配置 `webRequireAuth` 与 `webAdminToken`。

### 2. 资源包拖拽上传后，为什么玩家还没收到？

当前正确流程是：

1. 在资源包页拖拽或选择本地 `zip`
2. 点击 **重载资源包**，刷新 SHA-1
3. 点击 **远程下发在线玩家**

如果你只上传但没重载 / 没下发，在线玩家不会自动收到。

### 3. 红石和漏斗会不会被强行改节奏？

不会默认强改。

- 红石热点限流 / 回放属于显式功能，默认不开
- 漏斗相关优化以压力保护为主，正常负载下尽量不干预

### 4. 这个核心能直接替代现有 Paper 服吗？

大多数场景下可以直接作为基于 Paper 的服务端核心使用，但仍建议：

- 先在测试服验证重要插件
- 先确认代理、菜单、资源包、模型链路是否符合你的服现状
- 对高负载和生电玩法，优先从默认配置开始，再按需开启保护项

---

## 路线图

- [x] 动态视距 + 动态模拟距离
- [x] Paper 配置自动调优（14 项参数）
- [x] 4 档自动分层预设
- [x] MSPT 响应式收紧
- [x] 动态网络压缩
- [x] Web 管理面板（12 个页面，亮/暗双主题）
- [x] 拖拽式粒子特效编辑器
- [x] 假人系统（Carpet 风格）
- [x] 区块预生成（方向预测）
- [x] 自动低谷 GC
- [x] Tick 平滑 + 恢复
- [x] fastutil + 对象池
- [x] 插件性能审计 (`/tc audit`)
- [x] 自动启动脚本生成 (`/tc startscript`)
- [x] 键盘快捷键 + 侧边栏折叠
- [x] bStats 使用统计
- [x] 碰撞检测节流（O(n^2) 优化）
- [x] 寻路缓存 MSPT 感知
- [x] 性能压测指令 (`/tc perftest`)
- [x] 多核并行优化引擎（工作线程池 + 虚拟线程）
- [x] 异步寻路 + O(1) 结果队列
- [x] 实体类型感知智能降频（六级优先级）
- [x] `/tps` 增强（多核/区块/异步/内存 一屏全览）
- [x] 并发安全审计（两轮深度检查 + 修复）
- [ ] Prometheus / Grafana 指标导出
- [ ] 多节点集群状态聚合
- [ ] Web 面板权限分级

---

## 反馈与交流

欢迎通过 [Issues](https://github.com/TreeMC-cloud/Tree/issues) 与 [Discussions](https://github.com/TreeMC-cloud/Tree/discussions) 提交反馈、建议与共建想法。

**核心测试 QQ 群：910574536**

---

<div align="center">

<br>

**TreeCore** — 让每一个 tick 都更高效

<sub>Built for the Minecraft community</sub>

</div>
