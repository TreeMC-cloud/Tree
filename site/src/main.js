import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'

const app = createApp(App)

router.afterEach((to) => {
  const suffix = 'TreeCore 官方网站'
  document.title = to.meta?.title ? `${to.meta.title} | ${suffix}` : suffix

  const description = document.querySelector('meta[name="description"]')
  if (description && to.meta?.description) {
    description.setAttribute('content', to.meta.description)
  }

  window.scrollTo({ top: 0, behavior: 'smooth' })
})

app.use(router)
app.mount('#app')
