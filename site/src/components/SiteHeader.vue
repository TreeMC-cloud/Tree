<template>
  <header class="site-header">
    <div class="container nav-shell">
      <router-link class="brand" to="/">
        <span class="brand-mark">T</span>
        <div>
          <strong>TreeCore</strong>
          <small>Official Site</small>
        </div>
      </router-link>

      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="切换导航">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <router-link to="/" @click="menuOpen = false">首页</router-link>
        <router-link to="/features" @click="menuOpen = false">核心能力</router-link>
        <router-link to="/downloads" @click="menuOpen = false">下载</router-link>
        <router-link to="/docs" @click="menuOpen = false">技术文档</router-link>
        <router-link to="/community" @click="menuOpen = false">社区</router-link>
        <button class="theme-toggle" @click="$emit('toggle-theme')">
          {{ theme === 'dark' ? '浅色' : '深色' }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  theme: {
    type: String,
    default: 'dark'
  }
})

defineEmits(['toggle-theme'])

const menuOpen = ref(false)
</script>
