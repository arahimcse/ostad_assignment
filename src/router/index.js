import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Simpleblog/Index.vue')
    },
    {
      path:'/লাইব্রেরি',
      name:'লাইব্রেরি',
      component: ()=> import('../components/Simpleblog/লাইব্রেরি.vue')
    },
    {
      path: '/ইতিহাস',
      name: 'ইতিহাস',
      component: ()=> import('../components/Simpleblog/ইতিহাস.vue')
    },
    {
      path: '/খেলাধুলা',
      name: 'খেলাধুলা',
      component: ()=> import('../components/Simpleblog/খেলাধুলা.vue')
    },
    {
      path: '/বাংলাদেশ',
      name: 'বাংলাদেশ',
      component: ()=> import('../components/Simpleblog/বাংলাদেশ.vue')
    },
    {
      path: '/বিশ্ব',
      name: 'বিশ্ব',
      component: ()=> import('../components/Simpleblog/বিশ্ব.vue')
    },
    {
      path: '/বইওসিনেমা',
      name: 'বইওসিনেমা',
      component: ()=> import('../components/Simpleblog/বইওসিনেমা.vue')
    },
    {
      path: '/বিজ্ঞান',
      name: 'বিজ্ঞান',
      component: ()=> import('../components/Simpleblog/বিজ্ঞান.vue')
    },
    {
      path: '/জীবনী',
      name: 'জীবনী',
      component: ()=> import('../components/Simpleblog/জীবনী.vue')
    },
    {
      path: '/লাইফস্টাইল',
      name: 'লাইফস্টাইল',
      component: ()=> import('../components/Simpleblog/লাইফস্টাইল.vue')
    },
    {
      path: '/উপকথা',
      name: 'উপকথা',
      component: ()=> import('../components/Simpleblog/উপকথা.vue')
    },
    {
      path:"/post-details/:id",
      name:"postDetails",
      component: ()=>import('../components/Simpleblog/PostDetail.vue')
    },
    // will match everything and put it under `$route.params.pathMatch`
    { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('../components/NotFound.vue') 
    },
  ]
})
export default router
