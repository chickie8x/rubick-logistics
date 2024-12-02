import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dashboard/index.vue'),
      children: [
        {
          path: 'bookings',
          component: () => import('../components/functions/bookings/index.vue'),
          name: 'bookings',
        },
        {
          path: 'bookings/add',
          component: () => import('../components/functions/bookings/add/index.vue'),
          name: 'bookings-add',
        },
        {
          path: 'users',
          component: () => import('../components/functions/users/index.vue'),
          name: 'users',
        },
      ],
    },
    {
      path: '/auth',
      component: () => import('../views/auth/index.vue'),
      name: 'auth',
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = true
  if (to.path !== '/auth' && !isAuthenticated) {
    next('/auth')
  } else if (to.path === '/' && !isAuthenticated) {
    next('/auth')
  } else if (to.path === '/auth' && isAuthenticated) {
    next('/bookings')
  } else if (to.path === '/' && isAuthenticated) {
    next('/bookings')
  } else {
    next()
  }
})

export default router
