<template>
  <div class="page-shell container">
    <section class="page-hero">
      <span class="eyebrow">WIKI</span>
      <h1>技术文档 / GitBook 风格 Wiki</h1>
      <p>
        当前技术文档已经按 GitBook 风格拆成章节，适合后续直接接到独立 docs 子域名，或继续作为公开仓库的技术 Wiki 使用。
      </p>
      <div class="hero-actions">
        <a class="button primary" :href="docsHome" target="_blank" rel="noreferrer">打开文档首页</a>
        <a class="button secondary" :href="summaryUrl" target="_blank" rel="noreferrer">查看目录</a>
      </div>
    </section>

    <section class="stack-section" v-for="group in docGroups" :key="group.title">
      <div class="section-head left">
        <h2>{{ group.title }}</h2>
        <p>{{ group.description }}</p>
      </div>

      <div class="feature-grid three">
        <article class="feature-card compact" v-for="doc in group.items" :key="doc.title">
          <span class="card-label">{{ doc.tag }}</span>
          <h3>{{ doc.title }}</h3>
          <p>{{ doc.description }}</p>
          <a class="text-link" :href="doc.href" target="_blank" rel="noreferrer">阅读此页 →</a>
        </article>
      </div>
    </section>

    <section class="stack-section surface-card">
      <div class="section-head left">
        <h2>接独立文档域名时怎么用？</h2>
        <p>当前文档目录已经按可迁移结构组织，后续可以直接切到独立 docs 子域名。</p>
      </div>
      <ol class="ordered-list">
        <li>保留当前 `docs/README.md + docs/SUMMARY.md` 结构。</li>
        <li>后续可以用 GitBook、VitePress 或 Docusaurus 继续承载这套内容。</li>
        <li>官网继续作为产品展示站，技术文档单独使用 `docs.your-domain.com`。</li>
      </ol>
    </section>
  </div>
</template>

<script setup>
const docsBase = 'https://github.com/TreeMC-cloud/Tree/blob/main/docs'
const docsHome = `${docsBase}/README.md`
const summaryUrl = `${docsBase}/SUMMARY.md`

const docGroups = [
  {
    title: '入门',
    description: '适合第一次接触 TreeCore 的服主、维护者和部署人员。',
    items: [
      {
        title: '快速开始',
        description: '查看启动要求、基础运行方式和首次建议动作。',
        href: `${docsBase}/getting-started/quick-start.md`,
        tag: 'Getting Started'
      },
      {
        title: 'Web 面板访问',
        description: '了解默认监听地址、远程访问和鉴权配置。',
        href: `${docsBase}/getting-started/web-panel.md`,
        tag: 'Access'
      },
      {
        title: '首次上线检查清单',
        description: '把测试服 / 正式服第一次上线时要确认的动作列成清单。',
        href: `${docsBase}/getting-started/first-day-checklist.md`,
        tag: 'Checklist'
      }
    ]
  },
  {
    title: '运维',
    description: '适合处理控制台、资源包、世界、假人、备份与 Web 页面。',
    items: [
      {
        title: 'Web 页面总览',
        description: '11 个页签怎么分工、典型使用流转是什么。',
        href: `${docsBase}/operations/web-pages-overview.md`,
        tag: 'Operations'
      },
      {
        title: '资源包 / 模型链路',
        description: '模型、纹理、资源包 ZIP 与在线下发流程。',
        href: `${docsBase}/operations/resource-pack.md`,
        tag: 'Content Pipeline'
      },
      {
        title: '假人 / 红石运维',
        description: '假人命令、热点回放和生电保护的理解方式。',
        href: `${docsBase}/operations/fakeplayer-and-redstone.md`,
        tag: 'Redstone'
      }
    ]
  },
  {
    title: '参考与技术视角',
    description: '适合想继续深入配置、代码结构与 Web 资源同步的人。',
    items: [
      {
        title: '配置参考',
        description: '只整理当前最常用、最值得先理解的一批配置项。',
        href: `${docsBase}/reference/configuration.md`,
        tag: 'Reference'
      },
      {
        title: '命令速查表',
        description: '快速查命令，不展开概念说明。',
        href: `${docsBase}/reference/command-cheatsheet.md`,
        tag: 'Cheatsheet'
      },
      {
        title: '系统架构 / 模块地图',
        description: '从代码目录和模块职责视角看当前 TreeCore 结构。',
        href: `${docsBase}/architecture/system-overview.md`,
        tag: 'Architecture'
      }
    ]
  }
]
</script>
