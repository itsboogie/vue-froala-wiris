import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueFroala from 'vue-froala-wysiwyg'

const app = createApp(App)

app.use(router)
app.use(VueFroala)

app.mount('#app')
