import MainLayout from 'layouts/MainLayout.vue'
import IndexPage from 'pages/IndexPage.vue'
import LoginPage from 'pages/LoginPage.vue'
import OrgsPage from 'pages/OrgsPage.vue'
import PostsPage from 'pages/PostsPage.vue'
import StatPage from 'pages/StatPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout, //() => import('layouts/MainLayout.vue'),
    meta: { requireAuth: true },
    children: [
      { path: '', component: IndexPage }, //() => import('pages/IndexPage.vue') },
      { path: '/orgs', component: OrgsPage },//() => import('pages/OrgsPage.vue')},
      { path: '/posts', component: PostsPage },//() => import('pages/PostsPage.vue')}
      { path: '/stat', component: StatPage },
    ]
  },
  {
    path: '/login',
    component: MainLayout, //() => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: LoginPage } //() => import('pages/LoginPage.vue') }
    ]
  },
  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
