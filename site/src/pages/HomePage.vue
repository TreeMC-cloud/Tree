<template>
  <div>
    <section class="hero-section">
      <div class="container hero-grid">
        <div>
          <span class="eyebrow">TREECORE · OFFICIAL WEBSITE</span>
          <h1 class="hero-title">让性能优化、运维与内容链路真正连成一体。</h1>
          <p class="hero-description">
            TreeCore 面向高并发、长时间运行与可视化运维场景，提供运行时性能调优、
            Web 管理面板、资源包与模型链路、假人与红石热点分析，以及更贴近实战的服务器工具集。
          </p>
          <div class="hero-actions">
            <router-link class="button primary" to="/features">查看能力</router-link>
            <router-link class="button secondary" to="/docs">阅读文档</router-link>
            <a class="button ghost" href="https://github.com/TreeMC-cloud/Tree/releases" target="_blank" rel="noreferrer">下载构建</a>
          </div>
          <div class="hero-badges">
            <span>Java 21+</span>
            <span>Minecraft 1.21.x</span>
            <span>11 个 Web 页面</span>
            <span>4 档自动分层</span>
          </div>
        </div>

        <div class="hero-card image-card">
          <img src="/images/console-preview.png" alt="TreeCore 控制台预览" />
          <div class="overlay-panel">
            <strong>Web 管理面板</strong>
            <p>控制台、诊断、资源包、模型、备份、集成运维统一入口。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container stats-grid">
        <article class="stat-card">
          <strong>11</strong>
          <span>当前 Web 页签</span>
        </article>
        <article class="stat-card">
          <strong>4 档</strong>
          <span>自动分层预设</span>
        </article>
        <article class="stat-card">
          <strong>ZIP</strong>
          <span>本地资源包拖拽上传</span>
        </article>
        <article class="stat-card">
          <strong>Docs</strong>
          <span>GitBook 风格技术 Wiki</span>
        </article>
      </div>
    </section>

    <section class="section-block surface-soft">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">WHY TREECORE</span>
          <h2>不是只会改配置，而是把服务器维护做成完整产品。</h2>
          <p>
            TreeCore 不只在运行时调优参数，还把控制台、诊断、资源包、模型、备份、假人、世界管理与文档体系串成统一入口。
          </p>
        </div>

        <div class="feature-grid three">
          <article class="feature-card">
            <h3>性能在运行时收敛</h3>
            <p>动态视距、动态模拟距离、Paper 配置热调、网络链路优化与自动分层共同工作，优先稳住 TPS 与 MSPT。</p>
          </article>
          <article class="feature-card">
            <h3>Web 运维真正可用</h3>
            <p>远程控制台、内存快照、线程转储、备份管理、世界操作、ItemsAdder 编辑器与集成状态都能可视化完成。</p>
          </article>
          <article class="feature-card">
            <h3>内容链路不再割裂</h3>
            <p>模型、纹理、资源包 ZIP、本地托管与在线玩家资源包下发形成闭环，适合内容服与综合服协同维护。</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="container media-grid">
        <article class="media-card">
          <div class="media-copy">
            <span class="eyebrow">REAL SCENARIO</span>
            <h3>高峰监控与问题排查放在同一块面板里。</h3>
            <p>
              先看仪表盘，再看控制台，再做线程转储与备份处理。TreeCore 的目标不是把工具堆进去，而是让它们在实际运维时能够连起来用。
            </p>
          </div>
          <img src="/images/console-live.gif" alt="TreeCore 控制台动图" />
        </article>

        <article class="media-card reverse">
          <div class="media-copy">
            <span class="eyebrow">STRESS TEST</span>
            <h3>面向综合服、长周目服与高峰玩家场景。</h3>
            <p>
              对于需要长期跑图、跨世界维护、模型资源更新、多人同时在线的服务器，TreeCore 更偏向把维护过程稳定地做完，而不是只追求单个 benchmark 数字。
            </p>
          </div>
          <img src="/images/stress-test.gif" alt="TreeCore 压测演示" />
        </article>
      </div>
    </section>

    <section class="section-block surface-soft">
      <div class="container">
        <div class="section-head">
          <span class="eyebrow">SCENARIOS</span>
          <h2>适合哪些服务器？</h2>
        </div>

        <div class="feature-grid three">
          <article class="feature-card compact">
            <h3>生存 / 长周目服</h3>
            <p>希望默认就有较稳的高峰表现，同时不想长期手工维护几十项 Paper 参数。</p>
          </article>
          <article class="feature-card compact">
            <h3>多世界 / 综合服</h3>
            <p>需要模型、资源包、ItemsAdder、CraftEngine 与世界管理协同工作的服务器。</p>
          </article>
          <article class="feature-card compact">
            <h3>运维要求高的团队服</h3>
            <p>希望把控制台、诊断、资源更新、备份恢复、文档与发布流程做得更清晰。</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-block final-cta">
      <div class="container cta-shell">
        <div>
          <span class="eyebrow">START HERE</span>
          <h2>先看官网，再进文档，最后接入你自己的域名。</h2>
          <p>当前站点已经按“官网 + Wiki + Releases”结构组织，后续可以直接挂到 GitHub Pages 或 Cloudflare Pages，并绑定独立域名。</p>
        </div>
        <div class="hero-actions">
          <router-link class="button primary" to="/docs">进入技术文档</router-link>
          <router-link class="button secondary" to="/downloads">查看下载入口</router-link>
        </div>
      </div>
    </section>
  </div>
</template>
