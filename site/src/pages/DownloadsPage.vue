<template>
  <div class="page-shell container">
    <section class="page-hero">
      <span class="eyebrow">DOWNLOADS</span>
      <h1>下载与发布入口</h1>
      <p>
        当前页面优先读取公开仓库 Releases；如果你后续在公开仓库发布构建，这里会自动展示版本列表。
      </p>
      <div class="hero-actions">
        <a class="button primary" href="https://github.com/TreeMC-cloud/Tree/releases" target="_blank" rel="noreferrer">打开 Releases</a>
        <a class="button secondary" href="https://github.com/TreeMC-cloud/Tree" target="_blank" rel="noreferrer">查看仓库</a>
      </div>
    </section>

    <section class="stack-section">
      <div class="section-head left">
        <h2>公开构建</h2>
        <p>{{ statusText }}</p>
      </div>

      <div v-if="loading" class="empty-state">
        <strong>正在获取版本信息…</strong>
      </div>

      <div v-else-if="releases.length" class="release-grid">
        <article v-for="release in releases" :key="release.id || release.tag_name" class="release-card">
          <div class="release-head">
            <span class="release-badge" :class="{ alt: release.prerelease }">
              {{ release.prerelease ? '预发布' : '正式版' }}
            </span>
            <span class="release-date">{{ formatDate(release.published_at) }}</span>
          </div>
          <h3>{{ release.name || release.tag_name }}</h3>
          <p class="release-tag">{{ release.tag_name }}</p>
          <p class="release-body">{{ shortBody(release.body) }}</p>
          <div class="release-actions">
            <a class="button primary small" :href="release.html_url" target="_blank" rel="noreferrer">查看发布页</a>
            <a
              v-if="release.assets && release.assets.length"
              class="button secondary small"
              :href="release.assets[0].browser_download_url"
              target="_blank"
              rel="noreferrer"
            >
              下载 {{ release.assets[0].name }}
            </a>
          </div>
        </article>
      </div>

      <div v-else class="empty-state">
        <strong>当前公开仓库还没有可展示的 Release。</strong>
        <p>
          你可以先继续完善官网和文档，后续在公开仓库发布构建产物后，这个页面会自动展示版本信息。
        </p>
      </div>
    </section>

    <section class="stack-section surface-card">
      <div class="section-head left">
        <h2>建议的下载链路</h2>
      </div>
      <div class="feature-grid three">
        <article class="feature-card compact"><h3>公开仓库</h3><p>用于展示站点、文档和 Release 页面，对外只暴露用户需要看到的内容。</p></article>
        <article class="feature-card compact"><h3>官网下载页</h3><p>站点可以从 GitHub API 读取版本信息，或后续接入你自己的缓存 JSON。</p></article>
        <article class="feature-card compact"><h3>独立域名</h3><p>后续接入自定义域名时，用户只看到官网，不需要感知仓库结构。</p></article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const loading = ref(true)
const releases = ref([])
const source = ref('github')

const statusText = computed(() => {
  if (loading.value) return '正在从 GitHub Releases 获取公开构建列表。'
  if (releases.value.length) {
    return source.value === 'github'
      ? '当前数据来自 GitHub 官方 Releases。'
      : '当前数据来自本地回退文件。'
  }
  return '当前还没有公开版本列表，建议先在公开仓库建立 Release 流程。'
})

const shortBody = (body) => {
  if (!body) return '暂无发布说明。'
  const normalized = String(body).replace(/[#>*`]/g, ' ').replace(/\s+/g, ' ').trim()
  return normalized.length > 140 ? `${normalized.slice(0, 140)}…` : normalized
}

const formatDate = (value) => {
  if (!value) return '未知时间'
  return new Date(value).toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const fetchFallback = async () => {
  const response = await fetch(`${import.meta.env.BASE_URL}data/releases-fallback.json`)
  if (!response.ok) return []
  const data = await response.json()
  source.value = 'fallback'
  return Array.isArray(data) ? data : []
}

const fetchReleases = async () => {
  loading.value = true
  try {
    const response = await fetch('https://api.github.com/repos/TreeMC-cloud/Tree/releases?per_page=12', {
      headers: { Accept: 'application/vnd.github+json' }
    })

    if (response.ok) {
      const data = await response.json()
      releases.value = Array.isArray(data) ? data : []
      source.value = 'github'
    } else {
      releases.value = await fetchFallback()
    }
  } catch (_) {
    releases.value = await fetchFallback()
  } finally {
    loading.value = false
  }
}

onMounted(fetchReleases)
</script>
