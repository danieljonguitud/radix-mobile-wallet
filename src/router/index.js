import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'
import Start from '../views/Start.vue'
import Tab1 from '../views/Tab1.vue'
import Tab2 from '../views/Tab2.vue'
import Tab3 from '../views/Tab3.vue'
import CreateWallet from "../views/CreateWallet"
import AddWallet from "../views/AddWallet";

const routes = [
  {
    path: '/',
    component: Start
  },
  {
    path: '/create-wallet',
    component: CreateWallet
  },
  {
    path: '/add-wallet',
    component: AddWallet
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: Tab1
      },
      {
        path: 'tab2',
        component: Tab2
      },
      {
        path: 'tab3',
        component: Tab3
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
