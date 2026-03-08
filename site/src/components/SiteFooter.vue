<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="brand footer-brand">
          <span class="brand-mark">T</span>
          <div>
            <strong>TreeCore</strong>
            <small>高性能 Minecraft 服务端核心</small>
          </div>
        </div>
        <p class="footer-copy">
          面向高并发、长时间运行与运维可视化的服务端核心。
        </p>
      </div>

      <div>
        <h4>站点</h4>
        <ul>
          <li><router-link to="/features">核心能力</router-link></li>
          <li><router-link to="/downloads">下载</router-link></li>
          <li><router-link to="/docs">技术文档</router-link></li>
        </ul>
      </div>

      <div>
        <h4>资源</h4>
        <ul>
          <li><a href="https://github.com/TreeMC-cloud/Tree" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://github.com/TreeMC-cloud/Tree/releases" target="_blank" rel="noreferrer">Releases</a></li>
          <li><a href="https://github.com/TreeMC-cloud/Tree/discussions" target="_blank" rel="noreferrer">Discussions</a></li>
        </ul>
      </div>

      <div>
        <h4>支持</h4>
        <ul>
          <li><a href="https://github.com/TreeMC-cloud/Tree/issues" target="_blank" rel="noreferrer">Issues</a></li>
          <li><a href="https://github.com/TreeMC-cloud/Tree/blob/main/SECURITY.md" target="_blank" rel="noreferrer">安全策略</a></li>
          <li><a href="https://github.com/TreeMC-cloud/Tree/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">贡献指南</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 TreeMC-cloud</span>
      <span>TreeCore / Tree</span>
    </div>
  </footer>
</template>
