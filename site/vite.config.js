import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const resolveBase = () => {
  const raw = process.env.TREE_SITE_BASE || '/'
  const value = String(raw).trim()

  if (!value || value === '/' || value.toLowerCase() === 'root') {
    return '/'
  }

  if (/^https?:\/\//i.test(value)) {
    return value.endsWith('/') ? value : `${value}/`
  }

  const normalized = value.replace(/^\/+|\/+$/g, '')
  return normalized ? `/${normalized}/` : '/'
}

export default defineConfig({
  plugins: [vue()],
  base: resolveBase()
})
