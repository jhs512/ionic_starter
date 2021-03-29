import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import { useGlobalStateOnOutsideOfVue } from '@/stores';

const globalState = useGlobalStateOnOutsideOfVue();

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/main'
  },
  {
    path: '/home/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/home/main'
      },
      {
        path: 'main',
        component: () => import('@/views/home/Main.vue')
      },
    ]
  },
  {
    path: '/member/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/member/login'
      },
      {
        path: 'login',
        component: () => globalState.isLogined ? import('@/views/member/MyPage.vue') : import('@/views/member/Login.vue')
      },
      {
        path: 'join',
        component: () => import('@/views/member/Join.vue')
      },
      {
        path: 'myPage',
        component: () => import('@/views/member/MyPage.vue')
      },
    ]
  },
  {
    path: '/article/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/article/list'
      },
      {
        path: 'list',
        component: () => import('@/views/article/List.vue')
      },
      {
        path: 'detail',
        component: () => import('@/views/article/Detail.vue')
      },
      {
        path: 'write',
        component: () => import('@/views/article/Write.vue')
      },
      {
        path: 'modify',
        component: () => import('@/views/article/Modify.vue')
      },
    ]
  },
  {
    path: '/setting/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/setting/main'
      },
      {
        path: 'main',
        component: () => import('@/views/setting/Main.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
