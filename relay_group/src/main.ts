import { createApp } from 'vue'
import router from './router/router'
import { createPinia } from 'pinia'

import { Quasar, Notify, Dialog, Loading } from 'quasar'
import quasarLang from 'quasar/lang/zh-TW'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import App from './App.vue'

import './index.css'

// 自訂樣式
import './style/animate.sass'
import './style/global.sass'


createApp(App)
  .use(Quasar, {
    plugins: {
      Notify, Dialog, Loading
    },
    lang: quasarLang,
  })
  .use(createPinia())
  .use(router)
  .mount('#app')

