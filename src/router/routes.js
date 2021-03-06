
const routes = [
  {
    path: '/home',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/WorkoutTracker.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/PageSettings.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
