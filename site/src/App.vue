<template>
  <div class="site-shell" :data-theme="theme">
    <SiteHeader :theme="theme" @toggle-theme="toggleTheme" />
    <main class="site-main">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const theme = ref('dark')

const applyTheme = (value) => {
  theme.value = value
  document.documentElement.dataset.theme = value
  localStorage.setItem('tree-site-theme', value)
}

const toggleTheme = () => {
  applyTheme(theme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  const saved = localStorage.getItem('tree-site-theme')
  if (saved === 'dark' || saved === 'light') {
    applyTheme(saved)
    return
  }

  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  applyTheme(systemDark ? 'dark' : 'light')
})

watch(theme, (value) => {
  document.documentElement.dataset.theme = value
})
</script>
