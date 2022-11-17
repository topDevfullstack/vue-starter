import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import blog from '@/components/blog'
import services from '@/components/services'
import contact from '@/components/contact'
import category from '@/components/category'
import details from '@/components/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/categories/:Cid',
      name: 'category',
      component: category
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    }
  ]
})
