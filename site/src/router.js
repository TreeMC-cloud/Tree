import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import FeaturesPage from './pages/FeaturesPage.vue'
import DownloadsPage from './pages/DownloadsPage.vue'
import DocsPage from './pages/DocsPage.vue'
import CommunityPage from './pages/CommunityPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: '首页',
      description: 'TreeCore 官方网站首页，集中展示性能优化、Web 管理、资源包与运维能力。'
    }
  },
  {
    path: '/features',
    component: FeaturesPage,
    meta: {
      title: '核心能力',
      description: '查看 TreeCore 当前对外可用的核心能力：性能优化、Web 面板、内容链路与运维工具。'
    }
  },
  {
    path: '/downloads',
    component: DownloadsPage,
    meta: {
      title: '下载',
      description: '查看 TreeCore 公开下载入口、构建发布与获取方式。'
    }
  },
  {
    path: '/docs',
    component: DocsPage,
    meta: {
      title: '技术文档',
      description: '查看 TreeCore GitBook 风格 Wiki 文档入口、部署、运维、配置与架构说明。'
    }
  },
  {
    path: '/community',
    component: CommunityPage,
    meta: {
      title: '社区与支持',
      description: '获取 TreeCore 的社区入口、反馈方式、贡献与安全说明。'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
