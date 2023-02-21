import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import FormSubmit from './components/FormSubmit.vue'
import SecondCom from './components/SecondCom.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {path: '/',  component: FormSubmit },
    {path: '/secondform', component: SecondCom}


]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
