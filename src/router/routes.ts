import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Home', path: '', component: () => import('pages/Home.vue') },
      { name: 'News', path: 'news', component: () => import('pages/News.vue') },
      {
        name: 'Check',
        path: 'check',
        component: () => import('pages/Check.vue'),
      },
      {
        name: 'Record',
        path: 'record',
        component: () => import('pages/Record.vue'),
      },
      {
        name: 'Contact',
        path: 'contact',
        component: () => import('pages/Contact.vue'),
      },
      {
        name: 'Station',
        path: 'station',
        component: () => import('pages/Station.vue'),
      },
      {
        name: 'Statis',
        path: 'statis',
        component: () => import('pages/Statis.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
];

export default routes;
