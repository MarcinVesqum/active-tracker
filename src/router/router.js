import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';


const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/create',
		name: 'Create',
		component: () => import('../views/Create.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
	},
    {
		path: '/register',
		name: 'Register',
		component: () => import('../views/Register.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.VITE_SUPABASE_URL),
	routes,
});

export default router;
