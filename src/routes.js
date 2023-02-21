import FormSubmit from './components/FormSubmit.vue'
import SecondCom from './components/Todo.vue'
import Counter from './components/Counter.vue'
import GetData from './components/GetData.vue'

const routes = [
    {path: '/',  component: FormSubmit },
    {path: '/secondform', component: SecondCom},
    {path: '/counter', component: Counter},
    {path: '/getdata', component: GetData}


]

export default routes