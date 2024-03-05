const routes = [
  {
    path: '/',
    name: 'apewear',
    meta: {
      guest: true,
      title: '',
      description: 'Welcome to ApeWear, we pimp out your nifties'
    },
    component: () => import('../views/HomePage.vue')
  },
  {
    path: '/apescapes',
    name: 'apescapes',
    meta: {
      guest: true,
      title: 'ApeScapes',
      description: 'Social banners for your Apes'
    },
    component: () => import('../views/ApeScapesPage.vue')
  }
];

export default routes;
