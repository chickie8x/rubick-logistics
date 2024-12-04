import { createRouter, createWebHistory } from 'vue-router'
import { permissions } from '@/mockdata'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/dashboard/index.vue'),
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: 'bookings',
          component: () => import('../components/functions/bookings/index.vue'),
          meta: {
            requiresAuth: true,
            minPermission: 0,
          },
          name: 'bookings',
        },
        {
          path: 'bookings/add',
          component: () => import('../components/functions/bookings/add/index.vue'),
          meta: {
            requiresAuth: true,
            minPermission: 1,
          },
          name: 'bookings-add',
        },
        {
          path: 'users',
          component: () => import('../components/functions/users/index.vue'),
          meta: {
            requiresAuth: true,
            minPermission: 2,
          },
          name: 'users',
        },
        {
          path: 'users/add',
          component: () => import('../components/functions/users/add/index.vue'),
          meta: {
            requiresAuth: true,
            minPermission: 2,
          },
          name: 'users-add',
        },
        {
          path: 'customers',
          component: () => import('../components/functions/custumers/index.vue'),
          meta: {
            requiresAuth: true,
            minPermission: 1,
          },
          name: 'customers',
        },
      ],
    },
    {
      path: '/auth',
      component: () => import('../views/auth/index.vue'),
      meta: {
        requiresAuth: false,
      },
      name: 'auth',
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('user')
  console.log(isAuthenticated)
  const permission = isAuthenticated
    ? permissions.find((permission) => permission.key === JSON.parse(isAuthenticated).role).value
    : 0
  const userDepartment = isAuthenticated ? JSON.parse(isAuthenticated).department : ''

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/auth')
  } else if (to.path === '/' && isAuthenticated) {
    next('/bookings')
  } else if (to.path === '/bookings/add' && isAuthenticated && userDepartment !== 'Sale') {
    alert('Bạn không có quyền truy cập vào trang này')
    next(from.fullPath)
  } else if (to.meta.minPermission && permission < to.meta.minPermission && isAuthenticated) {
    alert('Bạn không có quyền truy cập vào trang này')
    next(from.fullPath)
  } else {
    next()
  }
})

export default router
