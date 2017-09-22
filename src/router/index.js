import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Charts from '@/components/Charts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'charts',
      component: Charts
    }
  ]
})
