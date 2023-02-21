import FormSubmit from './components/FormSubmit.vue'
import SecondCom from './components/Todo.vue'
import Counter from './components/Counter.vue'
import GetData from './components/GetData.vue'
import Home from './components/Home.vue'

const routes = [
    {path: '/',  component: Home },
    {path: '/secondform', component: SecondCom},
    {path: '/counter', component: Counter},
    {path: '/getdata', component: GetData},
    {path: '/form',  component: FormSubmit },


]

export default routes