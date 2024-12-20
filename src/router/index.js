import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '../views/AuthPage.vue'; // Update the import

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: AuthPage, // Ensure this matches the updated component name
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, // Now `routes` is used here
});

export default router;
