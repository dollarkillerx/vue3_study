import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import('../components/Dashboard.vue')
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/:pathMatch(.*)*',  // 此路由会匹配所有路径
      name: 'NotFound',
      component: NotFound
    }
  ]
})

// 路由拦截
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // 假设 token 存储在 localStorage 中

  if (!isAuthenticated && to.path !== '/login') {
    // 如果用户未认证并且目标路径不是登录页，重定向到登录页
    next('/login');
  } else {
    // 否则正常导航到目标页面
    if (to.path == "/") {
      next("/dashboard");
      return;
    }
    next();
  }
});

export default router
