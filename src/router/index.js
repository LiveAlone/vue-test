import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import yaoqijun from '@/components/yaoqijun'
import teacher from '@/components/teacher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/yaoqijun',
      name: 'yaoqijun',
      component: yaoqijun
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: teacher
    }
  ]
})
