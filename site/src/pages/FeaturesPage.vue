<template>
  <div class="page-shell container">
    <section class="page-hero">
      <span class="eyebrow">FEATURES</span>
      <h1>围绕服务器全链路组织的核心能力</h1>
      <p>
        从运行时性能调优，到 Web 运维面板，再到资源包、模型、世界与备份管理，TreeCore 当前公开功能已经能覆盖一套完整的服务器维护流程。
      </p>
    </section>

    <section class="stack-section">
      <div class="section-head left">
        <h2>性能引擎</h2>
        <p>优先通过运行时调优和压力感知稳住 TPS，而不是把所有选择都丢给服主手调。</p>
      </div>
      <div class="feature-grid three">
        <article class="feature-card"><h3>动态视距 / 模拟距离</h3><p>根据当前负载自动收紧与恢复，减少高峰时不必要的世界开销。</p></article>
        <article class="feature-card"><h3>4 档自动分层预设</h3><p>按玩家数和压力自动切换档位，适配生存、长周目、综合服等不同规模阶段。</p></article>
        <article class="feature-card"><h3>Paper 配置热调</h3><p>通过运行时调整关键配置，降低“改配置 → 重启 → 再观察”的成本。</p></article>
        <article class="feature-card"><h3>网络与传送链路优化</h3><p>包含动态网络压缩、登录风暴保护、传送预热、方向预测区块预载等能力。</p></article>
        <article class="feature-card"><h3>路径与碰撞压力控制</h3><p>通过寻路缓存、碰撞与漏斗相关的压力感知处理，优先保护高峰期 MSPT。</p></article>
        <article class="feature-card"><h3>Java 21 虚拟线程</h3><p>Web、资源包与部分 IO 任务尽量从阻塞路径中拆出，减轻主线程负担。</p></article>
      </div>
    </section>

    <section class="stack-section">
      <div class="section-head left">
        <h2>Web 管理面板</h2>
        <p>当前为 11 页签结构，目标是把高频运维动作放进一个统一入口。</p>
      </div>
      <div class="feature-grid two">
        <article class="feature-card"><h3>控制台与诊断</h3><p>远程命令执行、实时日志流、内存快照、线程转储、卡顿检测与 GC 操作。</p></article>
        <article class="feature-card"><h3>配置与生电页</h3><p>可视化配置项、JSON 高级模式、假人系统、红石热点回放与复制项开关。</p></article>
        <article class="feature-card"><h3>模型与资源包</h3><p>模型 / 纹理上传、ZIP 资源包拖拽上传、重载 SHA-1、本地托管与在线下发。</p></article>
        <article class="feature-card"><h3>集成与世界管理</h3><p>CraftEngine、Multiverse、ItemsAdder 状态卡片，世界筛选、加载、卸载与批量操作。</p></article>
        <article class="feature-card"><h3>ItemsAdder 编辑器</h3><p>菜单标题、槽位、Lore、命令、预览与应用形成轻量维护入口。</p></article>
        <article class="feature-card"><h3>备份管理</h3><p>对世界做一键备份与恢复，适合在进行大规模内容调整前先保护数据。</p></article>
      </div>
    </section>

    <section class="stack-section">
      <div class="section-head left">
        <h2>内容生产与生态集成</h2>
        <p>当前公开能力更偏向“内容服可实用”，而不是仅做概念展示。</p>
      </div>
      <div class="feature-grid three">
        <article class="feature-card"><h3>模型与纹理链路</h3><p>上传模型、纹理、生成资源内容，并与资源包处理环节协同工作。</p></article>
        <article class="feature-card"><h3>资源包闭环</h3><p>本地 ZIP、外链 URL、哈希刷新、在线玩家推送组成完整分发流程。</p></article>
        <article class="feature-card"><h3>粒子特效编辑</h3><p>支持自定义特效编辑、保存、读取与预设加载，更适合内容服日常维护。</p></article>
        <article class="feature-card"><h3>CraftEngine 桥接</h3><p>用于资源与模型相关流程的同步协同，避免内容系统完全割裂。</p></article>
        <article class="feature-card"><h3>Multiverse 世界运维</h3><p>让多世界服务器能在同一面板里完成世界管理动作。</p></article>
        <article class="feature-card"><h3>ItemsAdder 菜单维护</h3><p>把常见菜单配置改动迁移到可视化入口，降低重复维护成本。</p></article>
      </div>
    </section>
  </div>
</template>
