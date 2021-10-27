import Vue from 'vue'
import Router from 'vue-router'
import RedisData from '@/components/redis/RedisData'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //路由路径
      path:'/redis/Temp',
      //自定义路由名称
      name:'RedisData',
      //路由跳转的组件
      component:RedisData
    },
  ]
})
